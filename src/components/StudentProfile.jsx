import ProfilePart1 from "./ProfilePart1";
import ProfilePart2 from "./ProfilePart2";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { account, databases } from "../lib/appwrite";
import Quiz from "./Quiz";

const StudentProfile = () => {
  const [userName, setUserName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await account.get();
        const userData = await databases.getDocument(
          "surya-data",
          "users-collection",
          user.$id
        );
        setUserName(userData.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (location.state && location.state.userName) {
      setUserName(location.state.userName);
    } else {
      fetchUserData();
    }
  }, [location.state]);
  return (
    <div className="bg-[#09141B]  w-screen min-h-screen">
      <ProfilePart1 userName={userName} />
      <ProfilePart2 />
    </div>
  );
};

export default StudentProfile;
