import React from 'react'
import solar from "./assets/header-legally.jpg"
import Nav from "./Nav"
import Sidebar from './Sidebar'
import arrow from "./assets/arrow.png"
import notify from "./assets/notify.jpeg"
import setting from "./assets/setting.png"
import home from "./assets/home.png"
import profile1 from "./assets/profile1.png"
import navi from "./assets/navi.png"
import coin1 from "./assets/coin1.jpeg"
import client from "./assets/client.png"
import earth from "./assets/earth.png"
import shop from "./assets/shop.png"
import double from "./assets/double.png"
import search from "./assets/search.png"
import bulb from "./assets/bulb.png"
//import {Charts} from "./Charts"
import { Chart, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export default function Navbar() {

    const data = {
        labels: ['April', 'May', 'June', 'July', 'August', 'September','October','November','December'],
        datasets: [
          {
            label: 'Curve Graph',
            data: [50,30, 300,210,500,250,400,230,500],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor:"transparent",
            tension: 0.4, // Set the tension for the curve   
        },
        ],
      };


    return (
    <div className='gap-[1rem] h-[41rem] flex bg-[#87CEFA] md:gap-[1rem] md:h-[21rem] md:flex md:bg-[#87CEFA]'>
          <Sidebar/>
          <div className='w-full md:w-[92%] xl:w-[78%]'>
          <div className='w-[80%] md:w-[100%] flex justify-between sm:w-full sm:flex sm:justify-between'>
            <div className='w-[28%] mt-[1rem] mx-auto sm:ml-[2.5rem] sm:mt-[1rem] sm:w-[30%]'> 
           <div className='hidden sm:flex sm:gap-[5px]'>
            <img src={home} alt="" className='w-[16px] h-[16px] mt-[3px] rounded-[1rem]' />
                <p className='text-[#eeeade] text-[13px]'> /  Dashboard </p>
                <img src={navi} alt="" className='w-[25px] h-[20px] mt-[3px] ml-[0.8rem] rounded-[1rem]' />  
                </div>
         <p className='font-semibold text-[20px] text-[white] sm:text-[14px] '>Dashboard</p> 
          </div>
          <div className='hidden sm:relative sm:flex sm:mx-auto sm:mt-[1.3rem] sm:gap-[1rem]'>
  <input type="text" placeholder='Type here...' className='text-center h-[2.2rem]  rounded-[0.5rem] shadow-xl px-[4px]'/>
          <div className='flex gap-[1rem] mt-[5px]'>
          <div className="absolute top-0 left-0 w-full h-full pt-[2rem]">
   <img src={search} alt="" className='w-[30px] h-[30px] mt-[-1.8rem] ml-[0.5rem]'/>
  </div>
          <img src={profile1} alt="" className='w-[25px] h-[25px] rounded-[1rem]' />
<p className='items-center ml-[-4px]'>Sign In</p>
<img src={setting} alt="" className='w-[25px] h-[25px] rounded-[1rem]' />
<img src={notify} alt="" className='w-[25px] h-[25px] rounded-[1rem]' />
          </div>
          </div>
          </div>
<div className='w-[97%] mx-auto sm:w-[50%] space-y-[0.3rem] 
pt-[2rem] sm:pt-[4rem] md:w-[100%] h-[12rem] md:gap-[0.5rem] md:flex md:justify-between  lg:w-full lg:flex lg:justify-between lg:px-[1rem] '>
    <div className='flex justify-between pt-[0.2rem] h-[7.6rem] my-auto bg-[white] w-[15.5rem]  rounded-[1rem] hover:bg-[#87CEFA] duration-700 shadow-xl lg:flex lg:justify-between lg:mt-[2.8rem] lg:bg-[white] lg:w-[15.5rem] lg:rounded-[1rem] lg:hover:bg-[#87CEFA]'>
<div className='p-[1rem] hover:scale-110 duration-700'>
<p className='text-[grey] font-semibold text-[14px]'>TODAY'S MONEY</p>
<p className='font-bold'>$53,000</p>
<div className='flex gap-[4px] mt-[0.8rem]'>
<p className='text-[green] font-bold'>+55%</p> <p>since yesterday</p>
</div>
</div>
<img src={coin1} alt="" className='w-[45px] rounded-[14px] h-[45px] mt-[15px] ml-[-1rem]' />
    </div>
    <div className='flex mt-[1rem] justify-between shadow-xl bg-[white] w-[15.5rem] rounded-[1rem] hover:bg-[#87CEFA] duration-700'>
<div className='p-[1rem] hover:scale-110 duration-700'>
<p className='font-semibold text-[grey] text-[14px]'>TODAY'S USERS</p>
<p className='font-bold'>2,300</p>
<div className='flex gap-[5px] mt-[0.8rem]'>
<p className='text-[green] font-bold'>+3%</p> <p> since last week</p>
</div>
</div>
<img src={earth} alt="" className='w-[45px] rounded-[14px] h-[45px] mt-[15px] mx-[7px]' />
    </div>
    <div className='flex justify-between mt-[2.8rem] shadow-xl bg-[white] w-[15.5rem] rounded-[1rem] hover:bg-[#87CEFA] duration-700'>
<div className='p-[1rem] hover:scale-110 duration-700'>
<p className='font-semibold text-[grey] text-[14px]'>NEW CLIENTS</p>
<p className='font-bold'>+3,462</p>
<div className='flex gap-[5px] mt-[0.8rem]'>
<p className='text-[red] font-bold'>-2% </p> <p>since last quarter</p>
</div>
</div>
<img src={client} alt="" className='w-[45px] rounded-[14px] h-[45px] mt-[15px] mx-[7px]' />
    </div>
    <div className=' flex justify-between mt-[2.8rem] bg-[white] shadow-xl w-[15.5rem] rounded-[1rem] hover:bg-[#87CEFA] duration-700'>
<div className='p-[1rem] hover:scale-110 duration-700'>
<p className='font-semibold text-[grey] text-[14px]'>SALES</p>
<p className='font-bold'>$103,430</p>
<div className='flex gap-[5px] mt-[0.8rem]'>
<p className='text-[green] font-bold'>+5%</p> <p> than last month</p>
</div>
</div>
<img src={shop} alt="" className='w-[45px] rounded-[14px] h-[45px] mt-[15px] mx-[7px]' />
    </div>
</div>
<div className='pt-[105%] sm:pt-[60%] md:pt-[2%] lg:pt-[1%] xl:pl-[0.5rem]  w-[95%] ml-[-1rem] md:w-[100%] flex flex-col lg:flex lg:flex-row lg:gap-[1rem] '>
<div className='lg:w-[56%] mt-[2rem] lg:mt-[2rem] lg:shadow-xl  shadow-xl lg:rounded-[2rem] rounded-[2rem] lg:h-[26rem] h-[20rem] sm:h-[26rem] lg:bg-[white] bg-[white] lg:hover:bg-[#87CEFA] w-[100%] hover:bg-[#87CEFA] duration-700 lg:duration-700'>
<div className='ml-[1rem] hover:scale-105 duration-700'>
<p className='mt-[1rem] font-semibold text-[grey]'>Sales Overview</p>
<div className='flex gap-[8px]'>
<img src={arrow} alt="" className='w-[15px] h-[15px] mt-[4px] ' />
<p className='font-semibold text-[grey]'>4% more in 2022</p>
</div>
<div className=' mt-[2rem] h-[18rem]'>
<Line data={data}></Line>
</div>
</div>
</div>
<div className=' relative lg:relative bg-[white] lg:bg-[white] my-[1rem] lg:mt-[2rem] rounded-[2rem]  lg:rounded-[2rem] shadow-xl  h-[24rem] sm:h-[26rem] w-[18rem]  sm:w-full lg:shadow-xl lg:w-[42%]'>
<img src={solar} alt="" className='h-full w-full rounded-[2rem]' />
<div className="absolute top-0 left-0 w-full h-full flex items-center pt-[-0.2rem] sm:pt-[2rem]">
    
    <div className='mt-[14rem] mx-auto w-[80%]'>
        <img src={bulb} alt="" className='w-[30px] h-[30px] rounded-[0.5rem]' />
    <p className="text-[20px] text-white font-semibold ">Faster way to Create Web pages</p>
    <p className='text-[white]'>That's my skill . I am not really specifically talented at anything except for th Ability to learn</p>
  </div>
  <img src={setting} alt="" className='w-[36px] h-[36px] mt-[22rem] mr-[1rem] rounded-[1rem]' />
  </div>
</div>
</div>
          </div>  
        </div>
  )
}