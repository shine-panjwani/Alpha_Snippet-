import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account, databases } from "../lib/appwrite";
import { ID } from "appwrite";
import { Link } from "react-router-dom";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const avatar = createAvatar(lorelei, {
    seed: formData.email,
  });

  const avatarUrl = avatar.toDataUri(); // Generate avatar URL
  console.log("Avatar URL:", avatarUrl);
  const json = avatar.toJson();
  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        if (session) {
          navigate("/courses"); // Redirect to courses page if already logged in
        }
      } catch (error) {
        if (error.code === 401) {
          console.log("No active session, proceed with signup");
        } else {
          console.error("Error checking session:", error);
        }
      }
    };
    checkSession();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addUserToLeaderboard = async (userID, userName, score = 0) => {
    try {
      // Create a new document in the leaderboard collection
      await databases.createDocument(
        "surya-data", // Database ID
        "leader-collection", // Collection ID
        userID, // User ID as document ID
        {
          userID: userID, // User ID from Auth system
          score: score,
          name: userName,
        }
      );
      console.log("User added to leaderboard:", userID);
    } catch (error) {
      console.error("Error adding user to leaderboard:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user in the Appwrite authentication system
      const user = await account.create(
        ID.unique(),
        formData.email,
        formData.password,
        formData.name
      );
      console.log("User created:", user);

      // Add user to the database (leaderboard) after successful signup
      await addUserToLeaderboard(user.$id, user.name);

      await databases.createDocument(
        "surya-data", // Database ID
        "users-collection", // Collection ID
        user.$id, //Document ID
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          avatarUrl: avatarUrl.toString(), // Ensure avatar URL is within the allowed length
        }
      );

      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <div className="background1 flex flex-col md:flex-row items-center justify-center w-screen h-screen  bg-[#09141b] ">
  
      <div className="flex flex-col items-center md:w-[40%] width3 w-full md:bg-gray-500 bg-gray-500 text-[#09141b] md:text-gray-500 rounded-[3vh] text-center p-6 md:p-[4vh] font-sans shadow-lg mb-6 md:mb-0 ">
        <h1 className="font-normal text-black text-[3.5vh] md:text-[4vh] ">Discover a new way to learn</h1>
        <h3 className="mt-4 text-black  text-[2vh]">Engage students with personalized gamified lessons</h3>
        <img
          className="rounded-[20px] my-4 w-fit md:w-[80%]"
          src="https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Learning Illustration"
        />
        <p className="mt-6 text-black ">Level up with your teaching experience!</p>
      </div>

    
      <div className="flex flex-col items-center w-full width3  md:w-[40%]  bg-[#1c1c1c] text-white rounded-[3vh] text-center p-6 md:p-[4vh] shadow-lg m-4">
        <h1 className="font-normal text-[3vh] md:text-[3.6vh]">Sign Up now for exclusive access</h1>
        <h4 className="mt-2 text-[1.8vh] md:text-[2vh]">Unlock interactive lessons and resources today.</h4>
        <form
          className="w-full flex flex-col items-center gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full h-[6vh] md:h-[8vh] bg-[#383838] text-white rounded-[3vh] px-4 focus:outline-none"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full h-[6vh] md:h-[8vh] bg-[#383838] text-white rounded-[3vh] px-4 focus:outline-none"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full h-[6vh] md:h-[8vh] bg-[#383838] text-white rounded-[3vh] px-4 focus:outline-none"
            name="password"
            type="password"
            placeholder="Choose a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            className="w-full h-[6vh] md:h-[8vh] bg-[#383838] text-white rounded-[3vh] px-4 focus:outline-none"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full h-[6vh] md:h-[8vh] bg-[#D21F1F] hover:bg-[#de4b4b] rounded-[3vh] text-white font-medium text-lg transform hover:scale-105 transition"
          >
            Get Started
          </button>
        </form>
        <h1 className="flex gap-2 mt-4 text-sm md:text-base">
          Already a user?
          <Link className="text-red-600 underline hover:text-red-400" to={"/login"}>
            Log In
          </Link>
        </h1>
      </div>
    </div>
  );
}
