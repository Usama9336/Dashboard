import React from 'react'
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
  return (
    <div className=' hidden xl:flex xl:flex-col xl:h-screen xl:bg-[white] xl:ml-[2rem] xl:rounded-[1rem] xl:px-[0.7rem]  xl:shadow-2xl'>

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
  )
}
