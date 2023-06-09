import avatar from "/avatar.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../util/useMediaQuery";

const Nav = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:1280px")
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:32">
      {!matches && <svg
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>}
      <div>
        <img src={avatar} alt="" />
        {/* title */}
      </div>
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>
      {matches &&
      <div className="gap-12 flex">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contect">Contect</a>
      </div>}
      {!matches && 
      <div className="space-y-1.5 cursor-pointer z-50" onClick={()=> setToggled((prevToggle) => !prevToggle)} >
        <motion.span animate={{rotateZ: toggled ?45 : 0 , y:toggled?8:0}} className="block h-0.5 w-8 bg-black"></motion.span>
        <motion.span animate={{opacity:toggled? 0 : 1}}className="block h-0.5 w-6 bg-black"></motion.span>
        <motion.span animate={{rotateZ: toggled ?-45 : 0 , y:toggled?-8:0, width: toggled ? 32:16}}className="block h-0.5 w-4 bg-black"></motion.span>
      </div>
}
{toggled && !matches &&(
<motion.div
    animate = {{opacity :1, x:0}}
    initial={{opacity:0,x:25}}
    className="fixed bg-white  flex bottom-0 left-0 w-full h-screen items-center justify-center">
    <div className="flex flex-col gap-24 text-lg">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contect">Contect</a>
      </div>
</motion.div>
)}
    </nav>
  );
};
export default Nav;
