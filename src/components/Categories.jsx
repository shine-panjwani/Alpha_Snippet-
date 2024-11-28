import React from "react";

const Categories = () => {
  const categories = [
    { name: "Mathematics", icon: <i class="ri-funds-line"></i> },
    { name: "Language", icon: <i class="ri-group-3-fill"></i> },
    { name: "Biology", icon: <i class="ri-heart-pulse-line"></i> },
    { name: "Science", icon: <i class="ri-table-line"></i> },
    { name: "Technology", icon: <i class="ri-slideshow-line"></i> },
    { name: "Bussiness", icon: <i class="ri-lightbulb-flash-fill"></i> },
    { name: "Social Study", icon: <i class="ri-sparkling-line"></i> },
  ];
  return (
    <div className="my-8">
      <div>
        <h1 className="text-white text-3xl">Categories</h1>
        <div className="text-white flex p-6 justify-evenly ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="h-[14vh] bg-[#323232] hover:scale-[1.1] duration-300 shadow-xl drop-shadow-xl border rounded-md  flex gap-2 flex-col  justify-center  items-center w-[10vw]"
            >
                
              {category.icon}
              <h5 className="text-white">{category.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
