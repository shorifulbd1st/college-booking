import React, { useEffect, useState } from "react";

import { IoSearchCircleOutline, IoSearchOutline } from "react-icons/io5";
const SearchOption = ({ colleges }) => {
  const [college, setCollege] = useState(colleges);
  const [inputValue, setInputValue] = useState("");
  console.log(college[0].name);
  useEffect(() => {
    const searchResult = [...college].filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (searchResult.length) {
      setCollege(searchResult);
    } else {
      setCollege(colleges);
    }
    if (!inputValue) {
      setCollege(colleges);
    }
  }, [inputValue]);
  return (
    <div className="text-center ">
      <div className="flex justify-center items-center">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="input input-bordered input-error w-full max-w-xs"
          placeholder="Enter College name"
        />
        <div className="text-3xl -ml-8">
          <IoSearchCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default SearchOption;
