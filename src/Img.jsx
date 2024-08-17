import React from "react";
import Cat from "./assets/Stong-cat-meme-10.jpg";

const Img = () => {
  return (
    <div className="col-span-3 grid justify-items-center">
      <img src={Cat} alt="" className="rounded-lg mt-4"/>
    </div>
  );
};

export default Img;
