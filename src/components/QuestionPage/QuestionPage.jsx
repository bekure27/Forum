
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import { useSelector } from "react-redux";

function QuestionPage() {
 const [questions, setQuestions] = useState([]);
 const [users, setUsers] = useState({});
 const userName = useSelector((state) => state.auth.user?.username);

 useEffect(() => {
   const fetchQuestions = async () => {
     try {
       const response = await axios.get("/question/getUsernames");
       const questionsData = response.data;
       setQuestions(questionsData);

       const usersData = {};
       questionsData.forEach((question) => {
         usersData[question.user_id] = question.username;
       });
       setUsers(usersData);
     } catch (error) {
       console.error("Error fetching questions:", error);
     }
   };

   fetchQuestions();
 }, []);

 

// console.log(questions)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  items-center py-6">
      <div className="max-w-4xl w-full">
        <div className="px-4 sm:px-0 flex  justify-between">
          <Link to="/ask">
            <button className=" mx-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-1  px-4 rounded ">
              Ask a Question
            </button>
          </Link>
          <h3 className="text-2xl font-bold leading-tight  text-gray-900 mb-6">
            Welcome: {userName}
          </h3>
        </div>
        <div className="px-4 py-6 sm:px-0 w-full">
          <div className="mt-4">
            <h5 className="text-xl font-bold leading-tight text-gray-900 ">
              Recent Questions
            </h5>
            {questions.map((question, index) => (
              <Link to={`/questions/${question.question_id}`} key={question.id}>
                <div className="bg-white overflow-hidden shadow rounded-lg mt-4">
                  <div className="px-4 py-5 sm:p-6 flex items-center">
                    <img
                      src={question.profilePhoto}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="text-xl font-bold text-gray-900">
                        {question.title}
                      </div>
                      <div className="text-gray-600">
                        Asked by: {users[question.user_id]}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
