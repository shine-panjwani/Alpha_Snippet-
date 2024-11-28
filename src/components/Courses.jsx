import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import { Link, useNavigate } from "react-router-dom";
import { databases, account } from "../lib/appwrite"; // Import account from appwrite
import Quiz from "./Quiz";
import "remixicon/fonts/remixicon.css";
// import { useNavigate } from "react-router-dom";
const Courses = () => {
  const [coursedata, setCoursedata] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleQuiz = () =>{
    navigate("/quiz");
  }
  const checkAuthentication = async () => {
    try {
      const user = await account.get();
      setIsAuthenticated(true);
      fetchEnrolledCourses(user.$id); // Fetch enrolled courses after authentication
    } catch (error) {
      console.error("User not authenticated:", error);
      window.location.href = "/login"; // Redirect to login page if not authenticated
    }
  };

  const fetchEnrolledCourses = async (userId) => {
    try {
      const userDoc = await databases.getDocument(
        "surya-data",
        "users-collection",
        userId
      );
      const enrolledCourses = userDoc.EnrolledCourses || [];
      setCoursedata((prevData) =>
        prevData.map((course) =>
          enrolledCourses.includes(course.title)
            ? { ...course, enrolled: true }
            : course
        )
      );
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      alert("You have been logged out.");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleEnroll = (index, courseTitle) => {
    if (!isAuthenticated) {
      alert("You need to be logged in to enroll in a course.");
      navigate("/login");
      return;
    }
      if (coursedata[index].enrolled ) {
        alert(`You have already been enrolled in this course: ${courseTitle}`);
        return;
      }
    alert(`You are enrolled in the course: ${courseTitle}`);
    setCoursedata((prevData) =>
      prevData.map((course, i) =>
        i === index ? { ...course, enrolled: true } : course
      )
    );
    handleEnrollLocal(courseTitle);
  };

  const handleEnrollLocal = async (courseName) => {
    try {
      const user = await account.get(); // Get the current logged-in user
      const userId = user.$id;

      // Fetch the user document to get existing EnrolledCourses
      const userDoc = await databases.getDocument(
        "surya-data",
        "users-collection",
        userId
      );
      const enrolledCourses = userDoc.EnrolledCourses || []; // Existing courses or an empty array

      // Add the new course to EnrolledCourses array
      const updatedCourses = [...enrolledCourses, courseName];

      // Update the user's document with the new list of enrolled courses
      await databases.updateDocument("surya-data", "users-collection", userId, {
        EnrolledCourses: updatedCourses,
      });

      console.log("Course enrolled successfully:", courseName);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  const Data = async () => {
    // Your async code here
    try {
      const response = await databases.listDocuments(
        "surya-data",
        "course-data"
      );

      const courseData = response.documents.map((doc) => ({
        title: doc.title,
        duration: doc.duration,
        rating: doc.rating || "N/A",
        img: doc.img,
      }));

      setCoursedata(courseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    checkAuthentication();
    Data();
  }, []);

  return (
    <div className="flex w-screen min-h-screen ">
      <nav className="w-[10%] min-h-screen text-white bg-[#383838]">
        <ul className="flex gap-16 p-4 mt-7 flex-col justify-center items-center ">
          <Link
            to={"/performance"}
            className="  gap-2 rounded-[10px]  hover:scale-[1.1] duration-300 h-[4vh] w-[5vw] text-wrap flex flex-row"
          >
            {" "}
            <i class="ri-bubble-chart-fill"></i>
            progress{" "}
          </Link>

          <Link
            to={"/profile"}
            className="  gap-2  rounded-[10px]  hover:scale-[1.1] duration-300 h-[4vh] w-[5vw] flex flex-row "
          >
            {" "}
            <i class="ri-user-3-fill"></i>
            Profile{" "}
          </Link>
          <Link className="  gap-2  rounded-[10px]  hover:scale-[1.1] duration-300  h-[4vh] w-[5vw] flex flex-row">
            {" "}
            <i class="ri-bubble-chart-fill"></i>
            Lessons{" "}
          </Link>

          <Link
            to={"/quiz"}
            className=" gap-2  rounded-[10px]  hover:scale-[1.1] duration-300  h-[4vh] w-[5vw] flex flex-row"
          >
            <i class="ri-question-answer-fill"></i>
            Quiz
          </Link>

          <button
            onClick={handleLogout}
            className=" bg-red-600  rounded-[20px] hover:scale-[1.1] duration-300  mt-[150%] h-[4vh] w-[5vw] text-center align-middle "
          >
            Log out
          </button>
        </ul>
      </nav>
      <div className="min-h-screen w-[90%] p-5  bg-[#09141B] ">
        <div>
          <h1 className=" text-white text-3xl">Featured Courses</h1>
          <div className="flex gap-8 p-4 text-white">
            {coursedata.map((course, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#060e13] hover:scale-[1.1] duration-300 drop-shadow-xl shadow-xl border border-white relative text-white min-h-[40vh] overflow-hidden w-[20vw]"
              >
                <img className="w-full h-[65%] " src={course.img} alt="" />
                <div className="rounded-[50%] absolute right-[8%] top-[5%] bg-[url('./assets/bookmark.svg')]  h-[4vh] w-[2vw]"></div>
                <div className="rounded-[50%] absolute left-[20%] top-[38%] bg-white h-[4vh] w-[2vw]"></div>
                <div className="flex flex-col p-2 ">
                  <h3 className="text-sm m-4">{course.title}</h3>
                  <div className="flex ml-4 justify-evenly gap-4">
                    <i className="ri-time-line"></i>
                    <h4 className="text-sm">{course.duration}</h4>
                    <i className="ri-star-fill"></i>
                    <h4 className="text-sm">{course.rating}</h4>
                    <button
                      className="h-[4vh] w-[4vw] hover:scale-[1.2] duration-300 text-sm rounded-full bg-red-200 "
                      onClick={() => handleEnroll(index, course.title)}
                    >
                      {course.enrolled ? "Enrolled" : "Enroll"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Categories />
        <div className="leBeat">
          <h1 className="text-white text-5xl mt-[10%] text-center animate-linear animate-leBeat">
            LET'S TAKE A QUIZ...
          </h1>
        </div>
        <button
          onClick={handleQuiz}
          className="w-fit h-fit px-4 py-2 rounded-full translate-x-[40vw] text-white my-5 bg-red-600"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
}
export default Courses;
