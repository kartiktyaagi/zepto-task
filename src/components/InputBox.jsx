import React, { useContext } from "react";
import { InputContext } from "../InputContext";
import { VscChromeClose } from "react-icons/vsc";
import ListItem from "./ListItem";

const InputBox = () => {
    const {
        isListVisible,
        setisListVisible,
        nameList,
        chipList,
        inputValue,
        setInputValue,
        setNameList,
        setChipList,
    } = useContext(InputContext);

    const handleClick = (name) => {
        setChipList(chipList.filter((item) => item !== name));
        setNameList([...nameList, name]);
    };

    return (
        <div className="border-b-[3px] border-blue-400 py-2 flex items-center overflow-auto w-full">
            <div className="flex">
                {chipList.map((name) => (
                    <div
                        key={name}
                        className="flex items-center bg-neutral-200 mx-1 p-1 rounded-full gap-1 w-30 h-10"
                    >
                        <img className="h-5" alt="profile-img" src="https://avatar.iran.liara.run/public" />
                        <p className="text-sm">{name}</p>
                        <VscChromeClose className="cursor-pointer" onClick={() => handleClick(name)} />
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onClick={() => setisListVisible(!isListVisible)}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    placeholder={!!nameList.length && "Add user"}
                    className={"bg-neutral-100 w-full focus:outline-none"}
                />
                <div className={isListVisible ? "absolute my-2 block" : "absolute my-2 hidden"}>
                    <div className="shadow-neutral-300 shadow-lg border-[3px] border-neutral-300 max-h-56 overflow-y-scroll no-scrollbar bg-neutral-50">
                        {nameList
                            .filter((items) => items.toLowerCase().includes(inputValue.toLowerCase()))
                            .map((name) => (
                                <ListItem
                                    key={name}
                                    name={name}
                                    mailID={
                                        name[0].toLowerCase() +
                                        "." +
                                        name.toLowerCase().split(" ").pop() +
                                        "@example.com"
                                    }
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputBox;
