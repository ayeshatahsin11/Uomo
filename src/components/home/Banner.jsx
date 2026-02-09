"use client"; // Client component ensure korun
import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
// Slick er CSS import na thakle kaj korbe na, egulo ensure korun
import "slick-carousel/slick/slick.css";
import { bannerData } from "@/app/data/banner.data";

const Banner = () => {
  // Active slide track korar jonno state nibo (design active color er jonno)
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 👈 Step 1: Prev/Next button remove korar jonno

    // 👈 Step 2: Active dot track kora
    beforeChange: (prev, next) => {
      setDotActive(next);
    },

    // 👈 Step 3: Dots gulor position thik kora
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Slider er niche kotoটুকু upore thakbe
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", gap: "10px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),

    // 👈 Step 4: Number gulo design kora
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                color: "white",
                background: "maroon", // Active color (Red)
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "1px solid #ff0000",
              }
            : {
                width: "30px",
                height: "30px",
                color: "black",
                background: "white", // Inactive color
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "1px solid white",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <section className="relative">
      {" "}
      {/* Relative position important */}
      <Slider {...settings}>
        {bannerData?.map((item) => (
          <Link href={item.url} key={item.id}>
            <img
              src={item.image.src} // ekhane image object er vitorer src er moddhe stored
              className="h-auto w-full"
              alt="banner images"
            />
          </Link>
        ))}
        {/* Apnar map kora data ekhane thakbe */}
      </Slider>
    </section>
  );
};

export default Banner;
