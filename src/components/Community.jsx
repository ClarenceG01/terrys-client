import React from "react";

const Community = () => {
  return (
    <section
      className="bg-[#e5c643] h-96 font-poppins text-white text-center p-2"
      id="promo"
    >
      <div className="h-full  flex flex-col items-center justify-evenly">
        <span className="text-2xl sm:text-3xl md:text-4xl">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </span>
        <span className="text-sm sm:text-base md:text-xl">
          Type your email down below to subscribe to our newsletter and get a
          chance to win promos
        </span>
        <div className="flex md:w-1/4">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter email here"
            className="py-2 px-4 rounded-l-lg text-slate-700 "
          />
          <button className="bg-black text-white hover:bg-primary rounded-r-lg px-4 py-2 ">
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
