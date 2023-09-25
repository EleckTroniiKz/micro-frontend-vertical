import React from "react";

export default function Button({ onClick, children }) {
  return (
    <div className="m-5 rounded-lg bg-yellow-600 max-w-fit ">
      <button className="p-5 text-black" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
