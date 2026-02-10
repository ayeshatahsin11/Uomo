import React from "react";

const Items = ({ item, isFirst, isSecond }) => {
  return (
    <>
      <div
        className={`font-jost mb-5 w-full bg-cover! bg-center! bg-no-repeat! p-10 ${isFirst && "col-span-2 row-span-2"} ${isSecond && "col-span-2"} `}
        style={{ background: `url(${item?.image?.src})` }}
      >
        <div className="flex h-full flex-col justify-end">
          <h4 className="text-primary text-[14px] leading-6 font-normal">
            {item.title}
          </h4>
          <h2 className="text-[26px] font-medium">{item.name}</h2>
        </div>
      </div>
    </>
  );
};

export default Items;
