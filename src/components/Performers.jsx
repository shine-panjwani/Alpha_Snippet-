export default function Performers({ position, imgSrc, name, points }) {
  return (
    <div className="box  flex items-center justify-between border-2 h-[8vh] w-[50vw] border-black m-4 bg-gray-200 bg-opacity-70 p-2 rounded-full font-sans">
      <div className="box-div1 flex items-center justify-center gap-6">
        <p className="position ml-2">{position}</p>
        <img src={imgSrc} alt="image" className="w-10 h-10 rounded-full" />
        <p>{name}</p>
      </div>
      <div>
        <p className="points mr-2">{points}</p>
      </div>
       
    </div>
  );
}
