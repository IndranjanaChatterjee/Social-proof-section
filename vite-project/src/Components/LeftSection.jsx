import React from "react";

export default function LeftSection() {
  return (
    <div className="w-[36rem] h-full flex flex-col gap-7 justify-center sm:items-left items-left   mb-3 md:mb-0 md:ml-7">
      <h1 className="text-[#511f50] text-4xl md:text-5xl text-center md:text-left w-[100%] md:w-[55%] font-bold overflow-y-hidden">10,000+ of our users love our products.</h1>
      <p className="text-gray-400 text-center md:text-left w-[100%] md:w-[57%] text-[1rem] font-semibold">
        {" "}
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </div>
  );
}
