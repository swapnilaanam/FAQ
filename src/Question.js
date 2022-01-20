import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="question bg-white mb-4 rounded px-4 py-3 shadow border border-2">
      <header className="d-flex align-items-center justify-content-between">
        <h4 className="m-0 fw-bold me-1">{title}</h4>
        <div
          id="exCollContainer"
          className="text-danger p-2 rounded-circle d-flex justify-content-center align-items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </header>
      {isExpanded ? <p className="text-dark mt-3">{info}</p> : ""}
    </article>
  );
};

export default Question;
