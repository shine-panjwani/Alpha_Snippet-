import InnLearningComponent from "./InnLearning-component";
export default function InnovativeLearning() {
  const data = [
    {
      imgSrc:
        "https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-camera-icon-vector-illustration-in-line-style-for-any-purpose-png-image_989668.jpg",
      heading: "Leaderboard Traking",
      paragraph:
        "Stay motivated with our leaderboard that showcases top performers based on quiz scores and achievements.",
    },
    {
      imgSrc:
        "https://www.shutterstock.com/image-vector/video-camera-icon-vector-symbol-260nw-1935765994.jpg",
      heading: "Diverse Course Offerings",
      paragraph:
        "Explore a wide range of subjects, from Science to Arts, designed to cater to every learner's interests.",
    },
    {
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      heading: "Personalized Student Profiles",
      paragraph:
        "Manage your learning journey with personalized profiles that track your progress and achievements.",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJd6-JiWN4g9OuLXKnQODkMXI3cJ_WEqwDYA&s",
      heading: "Interactive Quizzes",
      paragraph:
        "Challenge yourself with quizzes that make learning fun and engaging across various subjects.",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMKDuE-vQ-_eMJCHWDfCKIk1gMNHBSobPpg&s",
      heading: "Privacy and Control",
      paragraph:
        "Choose your course access settings, ensuring your learning experience is tailored to your preferences.",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlY7OLi5YLl5ZsnPz3JB8VpCcvPXmCkplmgA&s",
      heading: "Gamified Learning Experience",
      paragraph:
        "Experience education like never before with gamification that makes learning enjoyable and rewarding.",
    },
  ];
  return (
     <div className="bg-[#09141B] w-full min-h-[100vh] p-6 md:p-[5vh]">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <p className="text-[2.5vh] md:text-[3vh] font-light text-white">Platform Features</p>
        <h1 className="text-[4vh] md:text-[7vh] font-bold text-white">
          Innovative Learning Experience
        </h1>
        <p className="text-[2vh] md:text-[3vh] font-light text-white mt-2">
          Our platform offers a unique blend of interactive learning and personalized course options.
        </p>
        <p className="text-[2vh] md:text-[3vh] font-light text-white">
          Engage with quizzes and track your progress effortlessly.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {data.map((item, index) => (
          <InnLearningComponent
            key={index}
            imgSrc={item.imgSrc}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </div>

  );
}
