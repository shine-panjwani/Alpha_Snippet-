import React, { useEffect, useState } from "react";
import PerformersLeaderBoard from "./PerformerLeaderBoard";
import { account, databases } from "../lib/appwrite";
import { Query } from "appwrite";
import { useNavigate } from "react-router-dom";
const Peform = () => {
  const navigate = useNavigate();
  const handleclickprofile = () => {
    navigate("/profile");
  };
  const [leaderboard, setLeaderboard] = useState([]);

  const getUser = async () => {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  const getUserData = async (userId) => {
    try {
      console.log("Fetching user data for userID:", userId); // Log userID
      const userData = await databases.getDocument(
        "surya-data",
        "users-collection",
        userId
      );
      console.log("User data:", userData); // Log user data
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const getScore = async () => {
    try {
      const leaderBoard = await databases.listDocuments(
        "surya-data",
        "leader-collection",
        [Query.orderDesc("score"), Query.limit(10)]
      );
      console.log("Raw Leaderboard Data:", leaderBoard); // Log raw leaderboard data

      const leaderboardData = await Promise.all(
        leaderBoard.documents.map(async (doc) => {
          console.log("Document:", doc); // Log each document to check for fields
          const userData = await getUserData(doc.userID);
          if (!userData) {
            console.warn(`User data not found for userID: ${doc.userID}`);
          }
          return {
            ...doc,
            name: doc.name, // Ensure name is included
            imgSrc: userData ? userData.avatarUrl : "default_image_url", // Ensure imgSrc is included
          };
        })
      );

      console.log("Processed Leaderboard Data:", leaderboardData); // Log the processed leaderboard data
      setLeaderboard(leaderboardData);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  useEffect(() => {
    getScore();
  }, []);

  const newScore = async (newScoreValue) => {
    try {
      await databases.updateDocument(
        "surya-data",
        "leader-collection",
        "leaderBoard-data",
        {
          score: newScoreValue.toString(),
        }
      );
      getScore();
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  const handleUpdateScore = () => {
    const newScoreValue = Math.floor(Math.random() * 1000);
    newScore(newScoreValue);
  };

  return (
    <div className="peform min-h-screen w-screen p-4">
      <div className="side_bar">
        <h1>Lesson Plans</h1>

        <div className="title">
          <img src="" alt="" />
        </div>

        <div className="title1">
          <div className="title_log">
            <img src="" alt="" />
            <h2 onClick={handleclickprofile}>My lessons</h2>
          </div>
          <div className="sidebar_uls">
            <section>
              <div className="subjects">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <h3>Subjects</h3>
              </div>
              <div className="prog_line">
                <div className="line"></div>
                <ul>
                  <li>Topics</li>
                  <li>Ouize</li>
                  <li>Assignments</li>
                  <li>discussions</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="title2">
          <div className="progress">
            <div className="img">
              <img src="" alt="" />
            </div>
            <h2>progress</h2>
          </div>
          <div className="prog_line">
            <div className="line"></div>
            <ul>
              <li>Analytics</li>
              <li>Feedback</li>
              <li>Reports</li>
              <li>discussions</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 ">
        <div className=" w-[100%] h-[5vh]">
          <div className="heading2 ">
            <h1> Top Performance</h1>
            <img src="" alt="" />
          </div>
        </div>
        <div className="ml-[20%] mt-5">
          <PerformersLeaderBoard leaderboard={leaderboard} />
        </div>
      </div>
    </div>
  );
};

export default Peform;
