const express = require("express");
const router = express.Router();
const {
  createAnswer,
  getAnswers,
  getQuestionAnswers,
} = require("../controller/answerController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new answer
router.post("/create", createAnswer);

// Get all answers
router.get("/get", getAnswers);

// Get answers for a specific question
router.get("/get/:questionId", getQuestionAnswers);

module.exports = router;
