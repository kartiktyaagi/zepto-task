import React, { useContext } from "react";
import { InputContext } from "../InputContext";

const ListItem = ({ name, mailID }) => {
    const { setNameList, setChipList, setInputValue } = useContext(InputContext);

    const clickHandler = (item) => {
        setChipList((prevChipList) => [...prevChipList, item]);
        setNameList((prevNameList) => prevNameList.filter((i) => item !== i));
        setInputValue("");
    };

    return (
        <div
            onClick={() => clickHandler(name)}
            className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-neutral-200"
        >
            <img className="h-8" alt="profile-img" src="https://avatar.iran.liara.run/public" />
            <p className="w-5/12 font-semibold text-xs text-neutral-800">{name}</p>
            <p className="w-7/12 font-semibold text-xs text-neutral-400">{mailID}</p>
        </div>
    );
};

export default ListItem;
