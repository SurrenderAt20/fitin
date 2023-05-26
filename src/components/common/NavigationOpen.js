import React from "react";
import { useEffect } from "react";
import { items } from "./NavItems";
import { AiOutlineClose } from "react-icons/ai";
import "./NavigationOpen.css";

function NavigationOpen({ isOpen, onChange }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavigationOpen;
