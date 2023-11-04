import { useState } from "react";
import axios from "../../utils/axiosInstance";
import { useSelector } from "react-redux";

const AskQuestion = () => {
  const {  userId } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  // console.log(userId)


    const handlePostQuestion = async (newQuestion) => {
      try {
        const response = await axios.post(
          "question/create",
          newQuestion
        );
        console.log("Question created successfully:", response.data);
        
      } catch (error) {
        console.error("Error creating question:", error);
      }
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      title: title,
      description: description,
      userId : userId
    };
    handlePostQuestion(newQuestion);
    // Reset the form after submission
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center text-gray-700 text-sm mb-4">
          <p className="font-semibold text-xl mb-2">
            Steps to write a good question:
          </p>
          <ul className="list-disc list-inside pl-6">
            <li className="text-left">
              Summarize your problem in a one-line title.
            </li>
            <li className="text-left">Describe your problem in more detail.</li>
            <li className="text-left">
              Describe what you tried and what you expected to happen.
            </li>
            <li className="text-left">
              Review your question and post it to the site.
            </li>
          </ul>
        </div>
        <div className=" bg-[#f9f9f4] shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center text-gray-700 text-sm mt-16 mb-4">
          <h1 className="font-semibold text-xl">Ask a public question</h1>
          <a className="">Go to Question page</a>
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Title"
                />
              </div>
              <div className="mb-2">
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  rows={8}
                  placeholder="Question description..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Post Your Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
