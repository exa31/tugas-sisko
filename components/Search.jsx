"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
    function handleClick() {
        props.handleOpenSearch()
    }
    return (
        <>
            <div className="fixed w-full h-screen bg-black bg-opacity-55">
                <div className="absolute bg-blue-400 right-5 top-5">
                    <FontAwesomeIcon onClick={handleClick} className='w-5 h-5 p-4 text-white ' icon={faX} />
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full px-10">
                    <input type="text" placeholder="Type here" className="w-full h-10 text-center text-white bg-transparent border-b focus:outline-none placeholder-shown:placeholder:text-white" />
                </div>
            </div>
        </>
    )
}