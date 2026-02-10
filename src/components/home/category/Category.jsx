import { categoryData } from "@/app/data/category.data";
import React from "react";
import Items from "./Items";
import Container from "@/components/layouts/container/Container";

const Category = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="grid h-150 grid-cols-4 grid-rows-2 gap-7.5">
            {categoryData?.map((item) => (
              <Items
                key={item.id}
                item={item}
                isFirst={item.id == 1}
                isSecond={item.id == 2}
                isFourth = {item.id == 4}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Category;
