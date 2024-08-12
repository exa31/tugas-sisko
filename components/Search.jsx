"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
    function handleClick() {
        props.handleOpenSearch()
    }
    function handleInputClick(e) {
        e.stopPropagation()
    }


    return (
        <>
            <div onClick={handleClick} className="fixed w-full h-screen bg-black bg-opacity-55">
                <div className="absolute bg-info right-5 top-5 hover:cursor-pointer">
                    <FontAwesomeIcon onClick={handleClick} className='w-5 h-5 p-4 text-white ' icon={faX} />
                </div>
                <div className="z-50 flex flex-col items-center justify-center w-full h-full px-10">
                    <input onClick={handleInputClick} type="text" placeholder="Type here" className="w-full pb-4 text-4xl text-center text-white bg-transparent border-b focus:outline-none placeholder-shown:placeholder:text-white" />
                </div>
                <div className="absolute flex items-center w-full px-10 mt-20 top-1/2">
                    <button onClick={handleClick} className="mx-auto text-white border-none btn-info hover:text-white btn">Search</button>
                </div>
            </div>
        </>
    )
}