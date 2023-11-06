import { useState } from "react";
import axios from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";


const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("")
  const navigate =useNavigate();
  const dispatch = useDispatch();


  
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Registration logic
     const userData = {
       username: username,
       firstname: firstName,
       lastname: lastName,
       email: email,
       password: password,
     };

     try {
       const response = await axios.post("users/register", userData);
       setError(""); 
      //  dispatch(login({ username: response.data.username }));
       navigate("/");
     } catch (error) {
      console.error("Error:", error.response.data.msg);
      // Display the error to the user
      setError(error.response.data.msg);
    }
    
    } else {
      // Login logic
      const userData = {
        email: email,
        password: password,
      };

       try {
         const response = await axios.post("users/login", userData);
        //  console.log("Response data:", response.data);
         const { username, userid } = response.data;
          dispatch(login({ username, userId: userid }));
         setError("")
         navigate("/questions");
       } catch (error) {
         console.error("Error:", error.response.data.msg);
         setError(error.response.data.msg);
       }
    
    }
  };

  return (
    <div className="container mx-auto px-10 py-12 bg-white z-40 shadow-xl rounded">
      <h1 className="text-2xl  text-center font-medium  mb-4">
        {isRegistering ? "Join the network" : "Login to your account"}
      </h1>
      {error ? <h3 className="text-center text-xl text-red-600 font-semibold">{error}</h3> : null}
      <h2 className="text-[16px] mb-4">
        {isRegistering ? "Already have an account?" : "Don’t have an account?"}
        <button
          className="text-[#FE8402] hover:underline ml-1"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Sign in" : "Create a new Account"}
        </button>
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <input
            className="w-full p-2 rounded border border-b focus:border-b-[#FE8402] focus:outline-none "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        {isRegistering && (
          <>
            <div className="flex justify-between">
              <div className="mb-4">
                <input
                  className="w-full p-2 border rounded border-b focus:border-b-[#FE8402] focus:outline-none"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-2 border rounded border-b focus:border-b-[#FE8402] focus:outline-none"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                className="w-full p-2 border rounded border-b focus:border-b-[#FE8402] focus:outline-none"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </div>
          </>
        )}
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded border-b focus:border-b-[#FE8402] focus:outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <button
            className="bg-blue-500 w-full text-white p-2 rounded hover:bg-[#FE8402]"
            type="submit"
          >
            {isRegistering ? "Agree and Join" : "Login"}
          </button>
        </div>
      </form>

      <div>
        {/* {isRegistering
          ? "I agree to the privacy policy and terms of service."
          : null} */}
        <button
          className="text-[#FE8402] hover:underline  w-full"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Already have account? " : "Create an account?"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
