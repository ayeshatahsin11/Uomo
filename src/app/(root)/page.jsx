import Banner from "@/components/home/Banner";
import Category from "@/components/home/category/Category";
import Products from "@/components/home/products/Products";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Category/>
      <Products/>
    </>
  );
};

export default page;


