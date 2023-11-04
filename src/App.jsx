
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import EditProfile from "./components/profile/EditProfile";

const dummyQuestions = [
  {
    id: 1,
    title: 'How to use Tailwind CSS with React?',
    username: 'Abebe',
    profilePhoto: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'What is the best way to handle state in React?',
    username: 'kebede',
    profilePhoto: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'How to implement authentication in a Node.js app?',
    username: 'Ali',
    profilePhoto: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'What are the advantages of using MySQL over MongoDB?',
    username: 'babi',
    profilePhoto: 'https://via.placeholder.com/150',
  },

];

const dummyAnswers = [
  {
    id: 1,
    username: "Abebe",
    body: "You can use the useEffect hook in React to fetch data.",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    username: "Kebede",
    body: "Another approach is to use Axios for making API calls.",
    profilePicture: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    username: "Ali",
    body: "Make sure to handle errors properly when fetching data.",
    profilePicture: "https://via.placeholder.com/150",
  },
  // Add more dummy data as needed
]



const dummyQuestion = {
  id: 1,
  title: 'How to use Tailwind CSS with React?',
  description:
    'I want to integrate Tailwind CSS into my React project. Can anyone provide a step-by-step guide on how to set it up and use it effectively?',
  username: 'JohnDoe',
  profilePhoto: 'https://via.placeholder.com/150',
};


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/questions"
            element={
              <PrivateRoute>
                <QuestionPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/questions/:id"
            element={<QuestionDetail answers={dummyAnswers} />}
          />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/profile" element={<EditProfile/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
