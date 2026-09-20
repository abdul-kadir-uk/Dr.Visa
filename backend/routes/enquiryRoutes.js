// routes/enquiryRoutes.js

import express from "express";
import { submitEnquiry } from "../controllers/enquiryController.js";

const router = express.Router();

// POST /api/enquiries
router.post("/", submitEnquiry);

export default router;
