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
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
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
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
