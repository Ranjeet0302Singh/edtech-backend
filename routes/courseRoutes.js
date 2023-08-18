import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
// Get All courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Add lecture, Delete Course, Get Course Details
router
  .route("/course/:id")
  .get(  getCourseLectures)
  .post( isAuthenticated,authorizeAdmin, singleUpload, addLecture).delete(isAuthenticated,authorizeAdmin,deleteCourse)

  router.route("/lecture").delete(isAuthenticated,authorizeAdmin,deleteLecture)

export default router;
