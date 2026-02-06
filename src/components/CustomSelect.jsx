import { useState, useRef, useEffect } from "react";
import iconArrow from "../assets/icons/icon-arrow.svg";
import iconCheck from "../assets/icons/icon-check.svg";

export default function CustomSelect({
  value,
  onChange,
  options,
  name,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 transition-colors flex items-center justify-between gap-2"
      >
        <span className="text-gray-900">{value}</span>
        <img
          src={iconArrow}
          alt=""
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-[clamp(0.25rem,2vw,1rem)] transition-colors"
            >
              <div className="w-4 h-4">
                {value === option && (
                  <img src={iconCheck} alt="" className="w-4 h-4" />
                )}
              </div>
              <span className="text-gray-900">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
