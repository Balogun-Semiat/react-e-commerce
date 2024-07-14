
import React from "react";
import Button from "./button";
import { FaBars, FaCartPlus } from "react-icons/fa6";
// import { Link } from "react-router-dom";






// const Effect =()=>{
//   useEffect(() => {
//    function loadData() {
//     console.log('Loading data')
//    }
//    loadData()
//   }, [])
  
// }

const Navbar = () => {
  return (
        <nav className="w-full sticky top-0 z-50 bg-white flex justify-between content-center text-center shadow-md   items-center  text-cyan-950 h-[90px]" style={{fontFamily: 'Courier New'}}>
          <div className="w-3/12  items-center flex justify-center gap-2 text-orange-500">
          <FaBars className="text-2xl font-bold" />
          <span className="text-4xl font-bold">Ashion</span>
          </div>

        <div className="w-6/12 gap-3">
            <input className="w-[500px] p-2 border border-orange-500" type="text" />  
            <button className="bg-orange-500 p-2">SEARCH</button>      
        </div>

        <div className="w-3/12 flex justify-center items-center gap-2  group">
          <button className=" -2 border-blue-500 rounded-lg p-2 ">Log In</button>
          <button className="bg-">Sign up</button>
          <div className="relative">
          <FaCartPlus className="text-5xl text-orange-500 " />
          <span className="absolute -top-3 font-bold text-2xl -right-3 text-xl text-orange-500">0</span>
          </div>
        </div>
        </nav>

  )
}

export default Navbar