import { Router } from "express";
import { handleEnquiry } from "../controllers/enquiry.controller.js";

const router = Router();

router.post("/", handleEnquiry);

export default router;
