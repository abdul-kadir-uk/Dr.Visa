// controllers/enquiryController.js

import { Resend } from "resend";
import Enquiry from "../models/Enquiry.js";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

export const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, country, visaType, message } = req.body;

    // Required field validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !country?.trim() ||
      !visaType?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Validate lengths
    if (
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      phone.trim().length > 20 ||
      country.trim().length > 100 ||
      visaType.trim().length > 100 ||
      (message && message.length > 3000)
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // 1. Save enquiry in MongoDB
    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      country: country.trim(),
      visaType: visaType.trim(),
      message: message?.trim() || "",
    });

    // 2. Send email notification
    try {
      if (
        !process.env.RESEND_API_KEY ||
        !process.env.RESEND_FROM_EMAIL ||
        !process.env.ENQUIRY_RECEIVER_EMAIL
      ) {
        throw new Error("Resend environment variables are missing.");
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.ENQUIRY_RECEIVER_EMAIL],
        replyTo: enquiry.email,
        subject: `New Visa Enquiry - ${enquiry.name}`,

        html: `
          <h2>New Visa Enquiry</h2>

          <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
          <p><strong>Interested Country:</strong> ${escapeHtml(enquiry.country)}</p>
          <p><strong>Visa Type:</strong> ${escapeHtml(enquiry.visaType)}</p>

          <p><strong>Message:</strong></p>
          <p>${escapeHtml(enquiry.message || "No message provided.").replace(
            /\n/g,
            "<br>",
          )}</p>

          <p><strong>Enquiry ID:</strong> ${enquiry._id}</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (emailError) {
      console.error("Enquiry email notification failed:", emailError);

      // Enquiry is already saved
      return res.status(201).json({
        success: true,
        emailSent: false,
        message:
          "Your enquiry has been saved, but the email notification failed.",
      });
    }

    return res.status(201).json({
      success: true,
      emailSent: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit enquiry. Please try again later.",
    });
  }
};
