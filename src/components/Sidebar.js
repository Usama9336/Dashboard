import React, { useState } from 'react'
import dash from "./assets/dash.jpeg"
import globe from "./assets/globe.png"
import pc from "./assets/pc.jpg"
import schedule from "./assets/schedule.png"
import bill from "./assets/bill.jpeg"
import profile from "./assets/profile.png"
import vr from "./assets/vr.jpeg"
import book from "./assets/book.jpeg"
import file from "./assets/file.png"
import multiple from "./assets/multiple.jpeg"
export default function Sidebar() {
  
const [open, setopen] = useState(true) 
const menu=document.querySelector(".mobile-menu")
console.log(menu);
const btn=document.querySelector("button.mobile-button")
  const openfunc=()=>{
      console.log(open)
      menu?.classList.toggle("hidden");
      setopen(false)
}
  return (
<div className='relative'>
<button onClick={openfunc} data-collapse-toggle="navbar-default" type="button" className="mobile-button inline-flex items-center p-[3px] ml-[8px] text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 mt-[0.5rem] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
</button>
<div className='absolute top-0 left-0 hidden mobile-menu flex flex-col h-screen bg-[white] mt-[2rem] ml-[2rem] rounded-[1rem] px-[0.7rem] shadow-2xl xl:mt-[0.5rem] xl:relative xl:bg-[white] xl:rounded-[1rem] xl:px-[0.7rem] xl:shadow-2xl xl:ml-[1rem] xl:flex xl:flex-col' id="navbar-default">

<div className='mt-[2rem]'>
    <div className='flex gap-[8px] '>
    <img src={dash} alt="" className='w-[25px] h-[25px] ' />
<p className='text-[13px] font-bold text-[grey]'>Argon Dashboard 2 PRO</p>
</div>
<hr className='mt-[1.9rem] w-[70%] mx-auto'/>
</div>
<div className='mt-[1rem] space-y-[1.7rem]'>
    <div className='rounded-[8px] bg-[#87CEFA] px-[4.5rem] py-[1rem] flex gap-[5px] hover:scale-110 duration-700 items-center  '>
    <img src={pc} alt="" className='w-[25px] h-[25px]  rounded-[1rem]' />
<p className='text-[black] font-semibold text-[14px]'>Dashboard</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={schedule} alt="" className='w-[25px] h-[25px] ' />
<p className='text-[grey] text-[14px]'>Tables</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={bill} alt="" className='w-[25px] h-[25px] ' />
<p className='text-[grey] text-[14px]'>Billing</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={vr} alt="" className='w-[25px] h-[25px] rounded-[1rem]' />
<p className='text-[grey] text-[14px]'>Virtual Reality</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={globe} alt="" className='w-[22px] h-[22px] ' />
<p className='text-[grey] text-[14px]'>RTL</p>
</div>
<p className='text-[11.8px] font-bold text-[grey]'>ACCOUNT PAGES</p>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={profile} alt="" className='w-[25px] h-[25px] rounded-[1rem]' />
<p className='text-[grey] text-[14px]'>Profile</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={book} alt="" className='w-[28px] rounded-[1rem] h-[22px]'/>
<p className='text-[grey] text-[14px]'>Sign In</p>
</div>
<div className='flex gap-[5px] hover:scale-110 duration-700 '>
<img src={file} alt="" className='w-[25px] h-[25px] rounded-[1rem]'/>
<p className='text-[grey] text-[14px]'>Sign Up</p>
</div>
</div>
<div className='mt-[0.5rem] mx-auto hover:scale-110 duration-700 '>
<img src={multiple} alt="" className='w-[120px] h-[110px] ' />
</div>
</div>
    </div>
 
  )
}