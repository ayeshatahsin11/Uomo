import { productCategoryData } from "@/app/data/productCategory.data";
import Ttile from "@/components/layouts/common/Ttile";
import Container from "@/components/layouts/container/Container";
import React from "react";
import ProductCart from "./ProductCart";
// use lucide for icons at nexyJS projects
const Products = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <Ttile title1={"OUR TRENDY"} title2={"PRODUCTS"} />
          <div className="font-jost text-secondary mt-7.75 flex justify-center gap-15 text-[16px] font-medium">
            {productCategoryData?.map((item) => (
              <button className="after:bg-primary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-15 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
                {item?.name}
              </button>
            ))}
          </div>
<ProductCart/>

        </Container>
      </section>
    </>
  );
};

export default Products;
