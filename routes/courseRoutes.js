import express from "express";
import { createCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

router.route("/course").get(getAllCourses);
router.route("/createcourse").post(createCourse);



export default router;
