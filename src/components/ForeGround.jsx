import React, { useRef } from "react";
import Cards from "./Cards";

function ForeGround() {
  const ref = useRef(null);
  const data = JSON.parse(localStorage.getItem("docs-data")) ?? [];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Cards data={item} key={index} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default ForeGround;
