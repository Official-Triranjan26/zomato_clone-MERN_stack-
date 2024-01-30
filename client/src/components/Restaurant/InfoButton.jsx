import React from "react";
import classnames from "classnames";

const InfoButton = ({ children, ...props }) => {
  return (
    <button
      className={classnames(
        "flex items-center gap-3 border px-4 py-2 border-gray-500 rounded-lg",
        {
          "bg-zomato-300 text-white border-none": props.isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

export default InfoButton;