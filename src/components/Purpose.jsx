import React from "react";
import imagepou from "../assets/imagepou.svg";

const Purpose = () => {
  return (
    <>
      <div className="text-[#D1FAE5] w-full min-h-screen p-6 md:p-[5vh] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 mb-[3vh] 🎖️ bg-[#09141B]">
        {/* Left Section (Image) */}
        <div className="w-full max-w-[600px] flex justify-center">
          <dxl className="flex justify-center items-center p-6 w-full h-auto rounded-md overflow-hidden bg-cover hover:scale-[1.1] duration-300">
            <img src={imagepou} alt="Purpose Image" className="w-full h-auto object-cover" />
          </dxl>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full max-w-[600px] flex flex-col text-[20px] md:text-[24px] text-[#D1FAE5] items-center justify-center">
          <h2 className="font-bold text-center text-[24px] md:text-[36px]">Our Purpose :</h2>
          <p className="mt-3 text-center text-[16px] md:text-[24px] px-6 md:px-12">
            We aim to provide accessible and engaging education for everyone, fostering a love for learning.
          </p>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="w-full bg-zinc-100 min-h-[1px]" />
    </>
  );
};

export default Purpose;

// import React from "react";
// import imagepou  from "../assets/imagepou.svg";

// const Purpose = () => {
//   return (
//     <>
//       <div className="text-[#D1FAE5] w-full h-screen p-[5vh] flex flex-col md:flex-row justify-center items-center gap-[48px] mb-[3vh] bg-[#09141B md:mt-70">
//         <div className="flex">

//           <div className=" hell flex flex-row justify-center items-center p-[48px_0] gap-[74px]   w-[600px]  h-[619px] rounded-md overflow-hidden bg-cover hover:scale-[1.1] duration-300 ">
//             <img src={imagepou} alt="" />
//           </div>
          
          
//           <div className="w-full max-w-[600px] h-auto flex flex-col text-[36px] text-[#D1FAE5] items-center justify-center">
//             <h2 className="font-bold text-center">Our Purpose :</h2>
//             <p className="mt-3 ml-[10%]  text-center md:ml-[10%] text-[18px] md:text-[24px]">
//               We aim to provide accessible and engaging education for everyone,
//               fostering a love for learning.
//             </p>
//           </div>

//         </div>

//         </div>
//       <hr className="w-full bg-zinc-100 min-h-[1px]" />
//     </>
//   );
// };
// export default Purpose;