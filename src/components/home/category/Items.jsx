import React from "react";

const Items = ({ item, isFirst, isSecond }) => {
  return (
    <>
      <div
        className={`bg-pink-300 ${isFirst ? "col-span-2 row-span-2" : ""} ${isSecond ? "col-span-2" : "bg-red-500"} `}
      >
        {item.id}

        {/* <h4>{item.title}</h4>
          <h2>{item.name}</h2> */}
      </div>
    </>
  );
};

export default Items;
