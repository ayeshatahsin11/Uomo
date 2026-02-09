import { categoryData } from "@/app/data/category.data";
import React from "react";
import Items from "./Items";
import Container from "@/components/layouts/container/Container";

const Category = () => {
  return (
    <>
      <section>
        <Container>
          <div className="grid grid-cols-2 grid-rows-2">
            {categoryData?.map((item) => (
              <Items key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Category;
