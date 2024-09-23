
const express = require("express");
const router = express.Router();

const {
  createQuestion,
  getQuestions,
  getQuestion,
  getUsernamesForQuestions
} = require("../controller/questionController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new question
router.post("/create", createQuestion);

// Get all questions
router.get("/get", getQuestions);

// Get a specific question
router.get("/get/:questionId", getQuestion);

router.get("/getUsernames", getUsernamesForQuestions);

module.exports = router;
