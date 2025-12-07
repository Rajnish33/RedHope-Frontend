import React from 'react';
import { Link } from "react-router-dom";

const DropDown = (props) => {
    const s1 = "block px-5 py-2 text-sm font-semibold text-slate-800";
    const s2 =
        "flex items-center gap-2 px-5 py-2 font-semibold text-base rounded-full text-slate-800 bg-gradient-to-r from-[#ffe4e6] to-[#fff9d6] shadow-lg transition transform hover:scale-105";

    return (
    <div  className="group inline-block relative">
        <button
            className="font-semibold mx-4 rounded inline-flex"
    >
      <span className={s2}>
        
        {props.title} &nbsp;
        <svg
            className="fill-current inline h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
        </svg>

    </span>
      
    </button>
    <ul className="ml-6 px-2 py-2 absolute hidden text-slate-800 pt-1 z-10 group-hover:block w-max bg-gradient-to-br from-[#ffe4e6] to-[#fff9d6] rounded-2xl shadow-2xl border border-[#f8cdd2]">
        {
            props.children.map((e,i)=>{
                return (
                    <li className="transition transform hover:scale-105 hover:-translate-y-1">
                        <Link to={props.links[i]} className={`${s1} rounded-xl hover:bg-white/60 hover:shadow-lg transition`}>{e}</Link>
                    </li>
                )
            })
        }
    </ul>
</div>  )
}

export default DropDown