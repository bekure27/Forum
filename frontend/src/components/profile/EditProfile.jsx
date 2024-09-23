import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";
import { useSelector } from "react-redux";


const EditProfile = () => {
 const { userId } = useSelector((state) => state.auth);

 console.log(userId)
  const [user, setUser] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_picture_path: "",
  });

  useEffect(() => {
    // Fetch the user data from the server
    const fetchUser = async () => {
      try {
        const response = await axios.get(`users/${userId}`); 
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser((prev) => ({ ...prev, profile_picture_path: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the updated user data to the server
      const formData = new FormData();
      formData.append("user_name", user.user_name);
      formData.append("first_name", user.first_name);
      formData.append("last_name", user.last_name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("profile_picture", user.profile_picture_path);

      await axios.put(`users/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }); // Replace with your actual API endpoint
      // Handle success or perform any necessary actions
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-bold mb-2">Project Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-sm text-gray-700">
              Technologies Used:
            </label>
            <p className="text-sm text-gray-900">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                React
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Redux Toolkit
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Tailwind css
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Node.js(express)
              </span>
            </p>
          </div>
          <div>
            <label className="block font-medium text-sm text-gray-700">
              Project Deployed at:
            </label>
            <p className="text-sm text-gray-900">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Cyclic (Backend)
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Vercel (Frontend)
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v3.586l1.707-1.707a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 7.586V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 9.586V6a1 1 0 00-1-1 1 1 0 00-1 1v3.586l-2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Free SQL Database
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">
            Edit Profile
            <span className="text-[14px] font-bold mb-4 text-red-600">
              (This feature is under development)
            </span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="user_name"
            value={user.user_name}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block font-medium text-sm text-gray-700">
            Upload profile picture
          </label>

          <input
            type="file"
            accept="image/*"
            name="profile_picture_path"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
