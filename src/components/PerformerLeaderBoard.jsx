import Performers from "./Performers";
// import "./App.css";

function PerformersLeaderBoard({ leaderboard = [] }) {
  return (
    <>
      {leaderboard.map((item, index) => (
        <Performers
          key={item.$id} // Use unique identifier
          position={`${index + 1}${
            index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"
          }`}
          imgSrc={item.imgSrc || "default_image_url"} // Ensure imgSrc is passed
          name={item.name || "Unknown"}
          points={`${item.score} points`}
        />
      ))}
    </>
  );
}

export default PerformersLeaderBoard;
