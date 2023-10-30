const QuestionDetail = ({ question, answers, handlePostAnswer }) => {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-2">
      <div className="max-w-4xl w-full">
        <div className="px-4 py-6 sm:px-0 w-full">
          <h3 className="text-xl font-bold leading-tight text-gray-900 mb-4">
            Question
          </h3>
          <hr className="my-2" />
          <h2 className="text-xl font-bold leading-tight text-gray-900 mb-6">
            {question.title}
          </h2>
          <p className="text-[16px] text-gray-800 mb-6">
            {question.description}
          </p>
          <hr className="my-2" />
          <h3 className="text-xl font-bold leading-tight text-gray-900 mb-4">
            Answers from the community
          </h3>
          <hr className="my-2" />
          {answers.map((answer, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow rounded-lg mt-4 flex items-center"
            >
              <img
                src={answer.profilePicture}
                alt="Profile"
                className="w-11 h-11 rounded-full mr-4 ml-2"
              />
              <div>
                <div className="text-[16px] font-semibold text-gray-900">
                  {answer.username}
                </div>
                <p className="text-gray-600 mb-2">{answer.body}</p>
              </div>
            </div>
          ))}
          <div className="mt-6 w-full">
            <textarea
              placeholder="Your answer..."
              className="w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 leading-tight resize-none"
              rows={6}
            ></textarea>
            <button
              onClick={handlePostAnswer}
              className="mt-4  bg-blue-500 hover:bg-blue-700 text-white font-normal  py-2 px-4 rounded"
            >
              Post Your Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
