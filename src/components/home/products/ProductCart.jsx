import { productCarts } from "@/app/data/productCartData";
import React from "react";
import { Heart } from "lucide-react"; // lucide icons
const ProductCart = () => {
  return (
    <>
      <section className="mt-10">
        <div className="font-jost grid grid-cols-4 gap-8">
          {productCarts?.map((item) => (
            <div key={item?.id}>
              <img
                src={item?.image?.src}
                alt="Product's image"
                className="cursor-pointer"
              />
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h4 className="text-secondary mt-3.5 text-sm leading-6 font-medium">
                    {item?.category}
                  </h4>
                  <h2 className="text-primary text-[16px]">{item?.name}</h2>
                  <h4 className="text-primary text-[16px]">${item?.price}</h4>
                </div>
                <Heart className="text-secondary cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCart;
