
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axiosInstance";
import { useSelector } from "react-redux";
import profilePhoto from "/public/profile.jpeg";


function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState({});
  const [showAllQuestions, setShowAllQuestions] = useState(false);
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



  const handleToggleQuestions = () => {
    setShowAllQuestions((prev) => !prev);
  };
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
            {questions
              .slice(showAllQuestions ? 0 : -3)
              .map((question, index) => (
                <Link
                  to={`/questions/${question.question_id}`}
                  key={question.id}
                >
                  <div className="bg-white overflow-hidden shadow rounded-lg mt-4">
                    <div className="px-4 py-5 sm:p-6 flex items-center">
                      <img
                        src={profilePhoto}
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
            {questions.length > 3 && (
              <button
                onClick={handleToggleQuestions}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-4"
              >
                {showAllQuestions ? "Show Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
