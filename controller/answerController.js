const dbcon = require("../db/db-config");

// Create a new answer
async function createAnswer(req, res) {
  const { answerDetail, userId, questionId } = req.body;

  await dbcon.query(
    "INSERT INTO answer (user_id, question_id,answer) VALUES (?, ?, ?)",
    [userId, questionId, answerDetail]
  );

  res.status(201).json({ msg: "Answer created successfully" });
}

// Get all answers
async function getAnswers(req, res) {
  const [answers] = await dbcon.query("SELECT * FROM answers");

  res.status(200).json(answers);
}

// Get answers for a specific question
async function getQuestionAnswers(req, res) {
  const { questionId } = req.params;

  const [answers] = await dbcon.query(
    "SELECT * FROM answer WHERE question_id = ?",
    [questionId]
  );

  res.status(200).json(answers);
}

module.exports = {
  createAnswer,
  getAnswers,
  getQuestionAnswers,
};
