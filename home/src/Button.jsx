import React from "react";

export default function Button({ onClick, children }) {
  return (
    <div className="m-5 rounded-lg bg-blue-500 max-w-fit ml-5">
      <button className="p-5 text-white" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
