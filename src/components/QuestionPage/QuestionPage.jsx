


function QuestionPage({ userName, questions, handleAskQuestion }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  items-center py-6">
      <div className="max-w-4xl w-full">
        <div className="px-4 sm:px-0 flex  justify-between">
          <button
            onClick={handleAskQuestion}
            className=" mx-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-1  px-4 rounded "
          >
            Ask a Question
          </button>
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
              <>
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg mt-4"
                >
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
                        Asked by: {question.username}
                      </div>
                    </div>
                  </div>
                  {/* {index !== questions.length - 1 && <hr className="my-4" />} */}
                </div>
                <hr className="my-4" />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
