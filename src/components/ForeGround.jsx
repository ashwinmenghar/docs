import React, { useRef } from "react";
import Cards from "./Cards";

function ForeGround() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is my first box",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is my second box",
      fileSize: ".3mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "indigo",
      },
    },
    {
      desc: "This is my third box",
      fileSize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];
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
