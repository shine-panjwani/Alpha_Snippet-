import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account, databases } from "../lib/appwrite";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Log in the user with email and password
      await account.createEmailPasswordSession(
        formData.email,
        formData.password
      );

      const userSession = await account.getSession("current");
      const user = await account.get(); // Fetch the user details
      console.log("Fetched user ID:", user.$id);

      if (user.$id && /^[a-zA-Z0-9._-]{1,36}$/.test(user.$id)) {
        try {
          await databases.getDocument(
            "surya-data",
            "users-collection",
            user.$id
          );
        } catch (error) {
          if (error.code === 404) {
            // Create a new document if the user does not exist
            await databases.createDocument(
              "surya-data",
              "users-collection",
              user.$id,
              { userID: user.$id, name: user.name, score: 0 }
            );
          } else {
            throw error;
          }
        }

        alert("Logged in successfully");
        navigate("/courses");
      } else {
        throw new Error("User ID format is invalid or exceeds 36 characters.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in: " + (error.response?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        if (session) {
          navigate("/courses"); // Redirect to main page if already logged in
        }
      } catch (error) {
        if (error.code === 401) {
          console.log("No active session, proceed with login");
        } else {
          console.error("Error checking session:", error);
        }
      }
    };
    checkSession();
  }, []);

  return (
    <>
      <div class="box bg-[#09141B] w-screen h-screen flex flex-col items-center justify-center text-center text-white font-sans">
        <div class="box-inside w-[90vw] sm:w-[70vw] md:w-[50vw] h-[80vh] border border-opacity-10 border-black rounded-[3vw] bg-black bg-opacity-30 flex flex-col justify-around items-center">
          <div class="first flex flex-col items-center gap-[2vh]">
            <h3 class="text-[3vh] sm:text-[4vh]">Welcome back to</h3>
            <h1 class="italic text-[#D21F1F] text-[4vh] sm:text-[5vh]">MindSpring</h1>
            <div class="flex items-center justify-center gap-[1vh] text-[2vh] font-normal bg-black bg-opacity-50 p-[1vh] rounded-[1vw]">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="LgbsSe-Bz112c h-[2vh]"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <a>Sign in with Google</a>
            </div>
            <p class="text-[#464155] text-[2.5vh] sm:text-[3vh]">Or, sign in with your email</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div class="input flex flex-col items-center w-full">
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
                class="bg-transparent border hover:w-[90%] duration-300 border-[#334155] rounded-[3vw] p-[2vh] m-[2vh] w-[80%]"
              />
              <input
                name="password"
                type="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
                class="bg-transparent border hover:w-[90%] duration-300 border-[#334155] rounded-[3vw] p-[2vh] m-[2vh] w-[80%]"
              />
            </div>
            <div class="login-btn w-full flex flex-col items-center">
              <button
                type="submit"
                disabled={loading}
                class="bg-[#D21F1F] hover:bg-[#de5b5b] hover:scale-[1.1] duration-300 text-white text-[3vh] border-none border-[#334155] rounded-[3vw] p-[2vh] w-[80%]"
              >
                {loading ? "Logging In..." : "Log In"}
              </button>
              <p class="text-[#464155] text-[2.5vh] sm:text-[3vh] mt-[2vh]">
                Don't you have an account?{" "}
                <Link to={"/signup"} className="text-[#D21F1F] font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
          
    </>
  );
}
