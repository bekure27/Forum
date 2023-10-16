import { useState } from "react";

const LoginRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Registration logic
      console.log(
        "Registering with email:",
        email,
        "first name:",
        firstName,
        "last name:",
        lastName,
        "username:",
        username,
        "and password:",
        password
      );
    } else {
      // Login logic
      console.log("Logging in with email:", email, "and password:", password);
    }
  };

  return (
    <div className="container mx-auto px-10 py-12 bg-white z-40 shadow-xl rounded">
      <h1 className="text-2xl  text-center font-medium  mb-4">
        {isRegistering ? "Join the network" : "Login to your account"}
      </h1>
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
