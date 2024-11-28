import React, { useState, useEffect } from "react";
import Community from "./community";
import InnovativeLearning from "./InnovativeLearning";
import Footer from "./Footer2";
import Purpose from "./Purpose";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleclicklogin = () => {
    navigate("/login");
  };
  const handleclicksignup = () => {
    navigate("/signup");
  };

  // State for toggling the menu visibility on small screens
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle screen resizing
  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // Set up event listener for window resizing
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="h-full w-full bg-[#09141B] overflow-hidden relative">
      {/* Navigation Bar */}
      <div className="bg-[#09141B] w-full h-[10vh] flex items-center justify-between px-4 sm:px-6 lg:px-8 relative z-20">
        <h1 className="ml-[3vw] text-white text-lg sm:text-2xl">EduGameHub</h1>

        {/* Toggle Menu Button for Small Screens */}
        {isSmallScreen && (
          <button
            onClick={toggleMenu}
            className="text-white m-[2vh] text-sm sm:text-lg absolute right-4 top-1/2 transform -translate-y-1/2 z-30"
          >
            {/* Hamburger Icon (3 Lines) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        )}

        {/* Desktop Menu */}
        <div className="mr-[2vw] hidden sm:flex z-20">
          <button className="text-white m-[2vh] text-sm sm:text-lg">Our Team</button>
          <button
            onClick={handleclicklogin}
            id="second"
            className="border-2 border-white mx-4 bg-transparent py-[0.5vh] px-[1vw] rounded-[2vh] text-sm sm:text-lg text-white"
          >
            Log In
          </button>
          <button
            onClick={handleclicksignup}
            id="third"
            className="border-2 border-[#D21F1F] bg-[#D21F1F] py-[0.5vh] px-[1vw] rounded-[2vh] text-sm sm:text-lg text-white"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only visible if isMenuVisible is true */}
      {isSmallScreen && isMenuVisible && (
        <div className="absolute top-[10vh] right-0 bg-[#09141B] text-white flex flex-col items-center py-6 shadow-lg z-10 w-[250px] rounded-lg">
          <div className="w-full text-right px-4 mb-4">
            <button
              onClick={toggleMenu}
              className="text-white text-xl font-bold"
            >
              X
            </button>
          </div>
          <button
            onClick={handleclicklogin}
            className="block w-full py-3 mb-3 text-center text-white bg-transparent border-2 border-white rounded-lg hover:bg-[#D21F1F] hover:text-white transition-all"
          >
            Log In
          </button>
          <button
            onClick={handleclicksignup}
            className="block w-full py-3 mb-3 text-center text-white bg-transparent border-2 border-[#D21F1F] rounded-lg hover:bg-[#de4b4b] hover:text-white transition-all"
          >
            Join Now
          </button>
          <button
            className="block w-full py-3 mb-3 text-center text-white bg-transparent border-2 border-white rounded-lg hover:bg-[#D21F1F] hover:text-white transition-all"
          >
            Our Team
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat relative h-[80vh] w-full"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/f896/b652/372b609d38d6fb35b77830ec04155c9b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hms4Xj6dWFg-zEqAooQia9T~WBLWISe76XJPuqai7-AAT6M5vJS6EbftKoFUfJEvkSCyUwsQu~9AQhjWyVrF9EqdXJz9-4W15ErVAVlqu9Ns4fRvlKs~nzW0xs8snYGIRzIsZ4Wx7V0SwgFsEe2oMzyLXBdcdM99K9eoQCdBpU7RPKHRVo1dFZ5jiNmw09MsyYqw3RXAlwmv3H8za~ly83vP9vBc8W1lfkTx0glmj-V3Y5krqlSQkbKCLPBDdgFweTchjBrn-GiMwnuq3vNH6mFWvtfjaFh52mCrAH4WSUmMJaC5ywTZTThgT~qKquNPBREPgKCOHz8WD3mbYXuXkA__')",
        }}
      >
        <div className="absolute bg-black bg-opacity-30 text-white flex flex-col items-center justify-center h-[80vh] w-full px-6">
          <h1 className="text-[5vh] sm:text-[7vh] font-bold text-center sm:mb-4">
            Exploring our interactive learning platform!
          </h1>
          <p className="text-[2vh] sm:text-[3vh] font-light text-center mb-2">
            Join a community of learners and educators.
          </p>
          <p className="text-[2vh] sm:text-[3vh] font-light text-center mb-4">
            Experience personalized education like never before.
          </p>
          <button
            onClick={handleclicksignup}
            className="bg-[#D21F1F] h-[6vh] w-[18vw] ssm:w-[14vw]  mt-[3vh] rounded-[3vh] py-[1.7vh] flex items-center justify-center transform hover:scale-105 duration-300 hover:bg-[#de4b4b] text-sm ssm:text-sm  font-semibold text-wrap"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Sections */}
      <InnovativeLearning />
      <Community />
      <Purpose />
      <Footer />
    </div>
  );
}
