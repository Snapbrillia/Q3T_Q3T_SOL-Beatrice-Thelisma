import React from 'react'
import Image from '../atom/Image'
import Card from '../molecule/Card'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { FaRegHandshake } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import Button from '../atom/Button';


const Dashboard = () => {
  return (
    <main className="">
        <section className="relative h-[50vh] rounded-b-md">
            {/* <Image className='h-full' imgClassName='object-cover' src='/images/forest.jpg' /> */}
            <div className="blk_graet_bg bg-color_gradient bg-center w-full absolute top-0 h-full rounded-b-[3rem] "></div>
            <div className="flex items-end justify-between absolute bottom-[20px] text-white  px-8 w-full">
              <div className="w-[50%]">

                <h3 className=" text-[2.5rem] font-bold">Good of the Earth</h3>
                <p className="text-[1rem]">Good of the Earth is a non-profit organization dedicated to environmental conservation. We focus on reforestation projects, aiming to plant trees in deforested areas across the globe. </p>
              </div>
              <div className="">
               <div className='font-bold'>
                 <span className="text-[2rem]">$400 </span>
                 <span className=''>/$1000 raised</span>
                </div>
                <span className="block bg-progress_bar border-[1px] border-[white] mt-1 h-[8px] w-full"></span>
                <Button disabled={false} className='bg-[#512da8]  hover:bg-[#1a1f2e] mt-5 py-3 text-[1.1rem] disabled:bg-[#512da8] disabled:cursor-default disabled:opacity-80'>Withdraw</Button>
              </div>
            </div>
        </section>
        <section className="flex flex-wrap justify-center items-center mt-7 w-full">
            <div className=" w-[100%]  flex flex-wrap items-center justify-around gap-[10px]">
          <Card icon={<GiCash className='text-[1.6rem]' />} title='Total Amount Raised' result="$10237" active={true} subText="more than the previous week" />
          <Card icon={<MdSupervisedUserCircle className='text-[1.6rem]' />} title='Number of Contributors' result="137" active={false} />
          <Card icon={<LuCalendarDays className='text-[1.6rem]' />} title='Number of days left' result="25" />
          {/* <Card title='' result="$10237" /> */}
        </div>
        </section>
    </main>
  )
}

export default Dashboard