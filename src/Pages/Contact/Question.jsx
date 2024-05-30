import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="my-5 w-full p-4 bg-gray-200 rounded-md">
      <header>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="flex w-full focus:outline-none justify-between items-center"
        >
          <span>{title}</span>
          {showInfo ? (
            <HiChevronDown className="text-lg" />
          ) : (
            <HiChevronUp className="text-lg" />
          )}
        </button>
      </header>

      {showInfo && <p className="mt-5">{info}</p>}
    </article>
  );
};

export default Question;