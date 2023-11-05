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
// async function getQuestionAnswers(req, res) {
//   const { questionId } = req.params;

//   const [answers] = await dbcon.query(
//     "SELECT * FROM answer WHERE question_id = ?",
//     [questionId]
//   );

//   // here
//   const userIds = answers.map((answer) => answer.user_id);
// const [users] = await dbcon.query(
//   "SELECT user_id, user_name FROM users WHERE user_id IN (?)",
//   [userIds]
// );

//   const userMap = {};
//   users.forEach((user) => {
//     userMap[user.user_id] = user.user_name;
//   });

//    const answerWithUsernames = answers.map((answer) => {
//      return {
//        ...answer,
//        username: userMap[answer.user_id],
//      };
//    });
//   res.status(200).json(answerWithUsernames);
// }



async function getQuestionAnswers(req, res) {
  const { questionId } = req.params;

  const [answers] = await dbcon.query(
    "SELECT * FROM answer WHERE question_id = ?",
    [questionId]
  );

  let answerWithUsernames = [];

  if (answers.length > 0) {
    const userIds = answers.map((answer) => answer.user_id);
    const [users] = await dbcon.query(
      `SELECT user_id, user_name FROM users WHERE user_id IN (${userIds
        .map(() => "?")
        .join(",")})`,
      userIds
    );

    const userMap = {};
    users.forEach((user) => {
      userMap[user.user_id] = user.user_name;
    });

    answerWithUsernames = answers.map((answer) => {
      return {
        ...answer,
        username: userMap[answer.user_id],
      };
    });
  }

  res.status(200).json(answerWithUsernames);
}



module.exports = {
  createAnswer,
  getAnswers,
  getQuestionAnswers,
};
