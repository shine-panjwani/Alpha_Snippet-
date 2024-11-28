import React, { useEffect, useState } from "react";
import { account, databases } from "../lib/appwrite"; // Import account and databases from appwrite

const ProfilePart1 = ({ userName }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user = await account.get();
        setUserId(user.$id);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchUserAvatar = async () => {
        try {
          const userDocument = await databases.getDocument(
            "surya-data", // Database ID
            "users-collection", // Collection ID
            userId // Document ID
          );
          setAvatarUrl(userDocument.avatarUrl);
        } catch (error) {
          console.error("Error fetching user avatar:", error);
        }
      };

      fetchUserAvatar();
    }
  }, [userId]);

  return (
    <>
      <div className="p-4  relative">
        <div className="min-h-[40vh] w-full">
          <div className="h-[25vh] bg-cover bg-center overflow-hidden  bg-no-repeat bg-[url('https://imgs.search.brave.com/xDmjbo4KvIOhzXo-pwClQ_FIgTWCYOK8oUi726jGPXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvMXppSnpP/d296b3Q1Q1dDMFJn/VjVWYi82YjI5ZjIw/ODlkY2YxZDI0ZDU1/YzJmMzBkZjMzNWY2/OS9TdXJyZWFsLVdv/cmxkLVRodW1ibmFp/bC5qcGc')] rounded-2xl w-full bg-white"></div>
          <div>
            <span className="avtar-img absolute rounded-2xl inline-block h-[16vh] w-[8vw] bottom-16 left-10 ">
              <img src={avatarUrl} alt="User Avatar" />
            </span>
            <div className="flex justify-between p-2 items-center">
              <div className="text-white flex flex-col items-center justify-center font-semibold ml-36">
                <h1 className="text-xl">{userName}</h1>
                <h3 className="text-xs">Interactive Learning</h3>
              </div>
              <div className="text-white flex  gap-4">
                <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-6 py-2 text-sm font-semibold">
                  Customise
                </button>
                <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-8 py-2 text-sm font-semibold">
                  Chat
                </button>
              </div>
            </div>
            <div className="flex justify-evenly items-center w-[40%] mt-8">
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Lessons
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Info
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Gallery
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Clips
              </button>
              <button className="bg-[#D11E1E] hover:bg-[#ea4d4d] rounded-full px-4 text-white py-1 text-xs font-semibold">
                Classmates
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePart1;
