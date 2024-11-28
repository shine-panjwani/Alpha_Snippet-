import React, { useState, useEffect } from "react";
import { databases, account } from "../lib/appwrite"; // Import account and databases from appwrite
import { useNavigate } from "react-router-dom";
export default function ProfilePart2() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const navigate = useNavigate();

  const handlecourses = () => {
    navigate("/courses");
  };

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const user = await account.get();
        const userDoc = await databases.getDocument(
          "surya-data",
          "users-collection",
          user.$id
        );
        setEnrolledCourses(userDoc.EnrolledCourses || []);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="mr-8">
        {/* First Section - Personal Details */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] w-[32vw] h-[19vh] p-[1vh] rounded-[2vh] m-[2vh]">
          <h1 className="text-white font-medium ml-[1vh]">Personal Details</h1>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Add interests
          </button>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Update profile
          </button>
          <button className="w-[90%] bg-white rounded-[2vw] m-[0.5vh] flex items-center justify-center text-gray-400 text-[2vh] h-[22%]">
            Add preferences
          </button>
        </div>

        {/* Second Section - Gallery */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] w-[32vw] min-h-[38vh] m-[2vh] p-[1.5vh] rounded-[2vh]">
          <h1 className="text-white font-medium">Gallery</h1>
          <div className="grid grid-cols-2 gap-x-[1vh] gap-y-[1vw]">
            <div className="h-fit w-full overflow-hidden rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjr_BiBsWWhpaZTeckyrCf6AVXFFq0K6Y-WA&s"
                alt="img"
              />
            </div>
            <div className="h-fit w-full bg-white overflow-hidden rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMxcVpm4akSMSFq3J4oxg6PkmpIihXWy6ad1EYztIxRSnLrvGfATxYpTjPqo2roR__7U&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="h-fit w-full bg-white overflow-hidden rounded-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNbpmmIMnTfNL4wUTQ5CPepagGANjAzjYiiDi6Mv9wfkU8KL4lSH86aK7NgWHlRWYaU8&usqp=CAU"
                alt="img"
              />
            </div>
            <div className="h-fit overflow-hidden rounded-md w-full bg-white ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxZgFmaAf8cXCaqlTCt1Dz4QCLpuhpCGFSQ&s"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mr-[8vw]">
        {/* Enrolled Section */}
        <div className="enrolled-courses flex items-center justify-start bg-antiquewhite bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] h-[19vh] p-[1vh] rounded-[3vh] m-[2vh] w-[60vw]">
          {enrolledCourses.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center text-white font-medium text-lg">
              <p>
                You are not enrolled in any courses. Click the button to check
                out courses.
              </p>
            </div>
          ) : (
            enrolledCourses.map((course, index) => (
              <div
                key={index}
                className="w-[15vw] h-[13vh] rounded-[3vh] bg-[rgba(254,254,254,0.6)] flex items-end justify-center text-black font-medium text-lg m-[2vh]"
              >
                <p>{course}</p>
              </div>
            ))
          )}
          <button
            onClick={handlecourses}
            className="bg-[#D11E1E] rounded-full px-6 py-2 text-sm font-semibold text-white border-none cursor-pointer"
          >
            {enrolledCourses.length === 0 ? "Check Courses" : "More"}
          </button>
        </div>

        {/* Activity Box */}
        <div className="bg-gradient-to-r from-[#24C8E0] via-[#B41C84] to-[#144389] h-[38vh] rounded-[3vh] m-[2vh] w-[60vw] text-white">
          <div className="p-[1.5vh]">
            <div className="flex flex-row gap-[2vh] items-center">
              <div className=" h-[7vh] w-[7vh] rounded-full bg-contain bg-[url('https://imgs.search.brave.com/_5i8rsPM24msre0jZ6yB9i2w8Q4xdb6OoQHmF3kutbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ4LzEyLzI2/LzM2MF9GXzg0ODEy/MjY1NF9PWEgxdUJo/YmduN1c0WHk3YVVV/ZXBxOXV4RDF0YkJw/Zi5qcGc')]"> </div>
              <div>
                <h3>Excited about learning</h3>
                <p>Just now</p>
              </div>
            </div>
            <p className="pl-[2vh] mt-2">
              Explore the world of gamified education. Join me in the quest for
              knowledge and fun! Let's level up together!
            </p>
          </div>
          <div className="flex items-center justify-between px-[2vh]">
            <div className="h-fit overflow-hidden rounded-md w-[28%] bg-white">
              <img
                src="https://c1.staticflickr.com/9/8181/28777163450_220686de1e_b.jpg"
                alt="img"
              />
            </div>
            <div className="h-fit w-[28%] rounded-md overflow-hidden bg-white">
              <img
                src="https://miro.medium.com/v2/resize:fit:1000/1*ACdUzy7tork2Eky4bI-jJQ.jpeg"
                alt="img"
              />
            </div>
            <div className="h-fit w-[28%] overflow-hidden rounded-md bg-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oHiaMke3dqkr7znQ9ftaBCzIq0XQWuuL2g&s"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
