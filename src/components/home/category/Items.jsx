import React from "react";

const Items = ({ item, isFirst, isSecond }) => {
  return (
    <>
      <div
        className={`mb-5 w-full bg-cover! bg-center! bg-no-repeat! ${isFirst && "col-span-2 row-span-2"} ${isSecond && "col-span-2"} `}
        style={{ background: `url(${item.image.src})` }}
      >
        <h4>{item.title}</h4>
        <h2>{item.name}</h2>
      </div>
    </>
  );
};

export default Items;
