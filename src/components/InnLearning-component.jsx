// export default function InnLearningComponent({ imgSrc, heading, paragraph }) {
//   return (
//     <div className=" flex">
//       <div className="text-white hover:scale-[1.1] duration-300 h-fit flex flex-col p-4">
//         <div className="flex flex-col gap-4">
//           <div className="">
//             <img src={imgSrc} alt="img" class="w-[4vw] rounded-md" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold mb-2">{heading}</h1>
//             <p className="text-gray-700">{paragraph}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function InnLearningComponent({ imgSrc, heading, paragraph }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-white hover:scale-[1.2] duration-300 h-fit flex flex-col p-4 bg-transparent rounded-lg">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <img
              src={imgSrc}
              alt="img"
              className="w-[20vw] sm:w-[20vw] md:w-[15vw] lg:w-[6vw] rounded-md transition-all"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">{heading}</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
