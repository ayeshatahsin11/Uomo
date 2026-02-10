import React from "react";

const Items = ({ item, isFirst, isSecond, isFourth }) => {
  return (
    <>
      <div
        className={`font-jost w-full bg-cover! bg-center! bg-no-repeat! p-10 ${isFirst && "col-span-2 row-span-2"} ${isSecond && "col-span-2"} `}
        style={{ background: `url(${item?.image?.src})` }}
      >
        <div className="flex h-full max-w-68.5 flex-col items-start justify-end">
          <h4
            className={`${isFourth ? "text-[26px] font-bold" : "text-primary text-[14px] leading-6 font-normal"}`}
          >
            {isFourth ? (
              <>
                {item.title.split(" ")[0]}{" "}
                <span className="font-medium">{item.title.split(" ")[1]}</span>
              </>
            ) : (
              item.title
            )}
          </h4>
          <h2
            className={`${isFourth ? "mt-2 max-w-55 text-[14px] leading-6" : "text-[26px] font-bold"}`}
          >
            {isFirst ? (
              <>
                {item.name.split(" ")[0]}{" "}
                <span className="font-medium">{item.name.split(" ")[1]}</span>
              </>
            ) : (
              item.name
            )}
          </h2>

          <button className="after:bg-primary relative mt-2 text-[14px] leading-6 font-medium after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-15 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
            {item.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
