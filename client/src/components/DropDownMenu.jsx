import React from "react";
import { useEffect, useState, useRef, useImperativeHandle } from "react";
import { BiChevronDown } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { CgOptions } from "react-icons/cg";
import { BsCalendarEventFill } from "react-icons/bs";

const DropDownMenu = React.forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const clickOutside = useRef(null);
  const inputClear = useRef();

  const clearInp = () => {
    inputClear.current.value = "";
    setInputValue("");
    setSelected("");
  };

  useImperativeHandle(ref, () => {
    return {
      clearInput: clearInp,
    };
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!clickOutside.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [clickOutside]);

  const iconProps={
    size:18,
    className:"text-gray"
  }
  
  const iconName = props.label.toLowerCase();
  const icon = iconName.includes("subject") ? (
    <ImBooks {...iconProps}/>
  ) : iconName.includes("type") ? (
    <CgOptions {...iconProps}/>
  ) : (
    <BsCalendarEventFill {...iconProps}/>
  );

  return (
    <div ref={clickOutside} className="w-72 font-medium h-max">
      <div
        className={`border-2 select-none cursor-pointer border-gray-400 w-full text-white flex justify-around items-center rounded-lg ${
          !selected && "text-gray-100 "
        }`}
      >
        <div className="flex justify-between items-center sticky top-0 bg-transparent">
          {icon}
          <input
            ref={inputClear}
            onClick={(e) => {
              setOpen(true);
            }}
            onChange={(e) => {
              setInputValue(e.target.value.toLowerCase());
              props.handleChange(inputValue);
            }}
            value={inputValue}
            type="text"
            placeholder={selected ? selected : props.label}
            className="placeholder:text-gray-400 py-2 pl-3 w-48 outline-none bg-transparent "
          />
        </div>
        <BiChevronDown
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
          className={`${
            open
              ? "rotate-180 transition ease-in-out delay-50 text-gray-200"
              : "rotate-0 transition ease-in-out delay-50 text-gray-200"
          }`}
          size={20}
        />
      </div>
      <ul
        className={`z-10 absolute px-2 my-2 w-72 bg-white mt-2 rounded-md ${
          open ? "max-h-60" : "max-h-0"
        } overflow-y-auto`}
      >
        {props.options?.map((val, index) => {
          return (
            <li
              tabIndex={index + 1}
              key={val}
              className={`p-2 my-2 text-sm hover:bg-blue-gray-200 border-b-2 rounded-lg border-gray-100 hover:text-white ${
                val?.toLowerCase() === selected?.toLowerCase() &&
                "bg-blue-gray-400 text-white"
              } ${
                val?.toLowerCase().includes(inputValue) ? "block" : "hidden"
              }`}
              onClick={() => {
                if (val?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(val);
                  props.handleChange(val);
                }
                setOpen(false);
                setInputValue("");
              }}
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default DropDownMenu;
