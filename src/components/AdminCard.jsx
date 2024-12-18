import React from "react";
import Card from "../UI/Card";
import { FaChevronUp } from "react-icons/fa";

const AdminCard = () => {
  return (
    <Card className="w-full h-24 py-5 px-3 flex flex-row items-center justify-between">
      <div>
        <p>$14.44</p>
        <p>Total Revenue</p>
        <div className="flex flex-row items-center">
          24.4%
          <FaChevronUp />
        </div>
      </div>
      <div className="w-7 h-7 rounded-full bg-[#ECF2FF] flex items-center justify-center">
        <FaChevronUp className="text-[#1E5EFF]" />
      </div>
    </Card>
  );
};

export default AdminCard;
