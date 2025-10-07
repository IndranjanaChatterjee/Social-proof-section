import React from "react";

export default function LeftSection() {
  return (
    <div className="w-[30rem] h-full flex flex-col gap-7 justify-center items-left  bg-pink-500">
      <h1 className="text-[#511f50] text-5xl text-left w-[55%] font-bold">10,000+ of our users love our products.</h1>
      <p className="text-[#bfb6bd] text-left w-[57%] text-[0.9rem]">
        {" "}
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </div>
  );
}
