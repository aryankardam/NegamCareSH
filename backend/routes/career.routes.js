import { Router } from "express";
import { uploadResume } from "../middlewares/upload.middleware.js";
import { handleCareer } from "../controllers/career.controller.js";

const router = Router();

router.post("/", uploadResume.single("resume"), handleCareer);

export default router;
