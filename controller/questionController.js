const { v4: uuidv4 } = require("uuid");
const dbcon = require("../db/db-config");

// Create a new question
async function createQuestion(req, res) {
  const { title, description, userId } = req.body;
  const questionId = uuidv4(); // Generate a unique question ID

  await dbcon.query(
    "INSERT INTO questions (question_id,user_id,title, description) VALUES (?, ?, ?,?)",
    [questionId, userId,title, description]
  );

  res.status(201).json({ msg: "Question created successfully" });
}

// Get all questions
async function getQuestions(req, res) {
  const [questions] = await dbcon.query("SELECT * FROM questions");

  res.status(200).json(questions);
}

// Get a specific question
async function getQuestion(req, res) {
  const { questionId } = req.params;

  // specific question based on the questionId
  const [question] = await dbcon.query(
    "SELECT * FROM questions WHERE question_id = ?",
    [questionId]
  );

  if (question.length === 0) {
    return res.status(404).json({ msg: "Question not found" });
  }

  res.status(200).json(question);
}



// async function getUsernamesForQuestions(req, res) {
//   try {
//     const [questions] = await dbcon.query("SELECT * FROM questions");

//     if (questions.length === 0) {
//       return res.status(404).json({ msg: "No questions found" });
//     }

//     const userIds = questions.map((question) => question.user_id);
//     const [users] = await dbcon.query(
//       "SELECT user_id, user_name FROM users WHERE user_id IN (?)",
//       [userIds]
//     );

//     const userMap = {};
//     users.forEach((user) => {
//       userMap[user.user_id] = user.user_name;
//     });

//     const questionsWithUsernames = questions.map((question) => {
//       return {
//         ...question,
//         username: userMap[question.user_id],
//       };
//     });

//     return res.status(200).json(questionsWithUsernames);
//   } catch (error) {
//     console.log(error.message);
//     return res
//       .status(500)
//       .json({ msg: "Something went wrong, try again later" });
//   }
// }

async function getUsernamesForQuestions(req, res) {
  try {
    const [questions] = await dbcon.query("SELECT * FROM questions");

    if (questions.length === 0) {
      return res.status(404).json({ msg: "No questions found" });
    }

    questions.sort((a, b) => (a.question_id > b.question_id ? -1 : 1)); // Sort questions based on the pseudo-creation time

    const userIds = questions.map((question) => question.user_id);
    const [users] = await dbcon.query(
      "SELECT user_id, user_name FROM users WHERE user_id IN (?)",
      [userIds]
    );

    const userMap = {};
    users.forEach((user) => {
      userMap[user.user_id] = user.user_name;
    });

    const questionsWithUsernames = questions.map((question) => {
      return {
        ...question,
        username: userMap[question.user_id],
      };
    });

    const latestThreeQuestions = questionsWithUsernames.slice(0, 3); // Display only the latest three questions

    return res.status(200).json(latestThreeQuestions);
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ msg: "Something went wrong, try again later" });
  }
}






module.exports = {
  createQuestion,
  getQuestions,
  getQuestion,
  getUsernamesForQuestions
};
