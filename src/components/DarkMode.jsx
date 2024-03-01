import React from 'react'
import { PiUserSwitchLight } from "react-icons/pi";
import { PiUserSwitchFill } from "react-icons/pi";


const DarkMode = () => {
    const [theme,setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const element = document.documentElement
React.useEffect(()=> {
    if(theme==="dark"){
        element.classList.add("dark")
        localStorage.setItem("theme","dark")
    }else{
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
    }
},[theme])
  return (
    <div>
        <PiUserSwitchLight onClick={()=> setTheme(theme==="light" ? "dark" : "light")}
 className='w-[250px] h-[35px] -mx-10 -my-1 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10 bottom-2 '/>
 <PiUserSwitchFill onClick={()=> setTheme(theme==="light" ? "dark" : "light")} className='w-[250px] h-[35px] -mx-10 -my-1 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10 bottom-2'/>

    </div>

)
}
// ${theme=== "dark" ? "opacity-0" : "opacity-100"} if you find better button for switch the light
export default DarkMode