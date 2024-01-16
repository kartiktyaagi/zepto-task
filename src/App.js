import React, { useState } from "react";
import { InputContext } from "./InputContext";
import { names } from "./constants";
import InputBox from "./components/InputBox";

function App() {
  const [isListVisible, setisListVisible] = useState(false);
  const [nameList, setNameList] = useState(names);
  const [chipList, setChipList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const contextValue = {
    isListVisible,
    setisListVisible,
    nameList,
    setNameList,
    chipList,
    setChipList,
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={contextValue}>
      <div className="flex flex-col items-center my-[10%]">
        <div className="h-96 w-4/6 bg-neutral-100 p-4 border-b-[3px] border-neutral-300 relative">
          <InputBox />
          <div className="absolute bottom-0 text-lg text-neutral-500 font-semibold w-full flex justify-between pr-8 p-2"></div>
        </div>
      </div>
    </InputContext.Provider>
  );
}

export default App;
