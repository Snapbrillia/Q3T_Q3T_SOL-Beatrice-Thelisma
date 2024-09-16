import React, { useState } from 'react'
import Image from '../atom/Image'
import Card from '../molecule/Card'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { GiCash } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import Button from '../atom/Button';
import { useNavigate, useParams } from 'react-router';
import "./style.css"
import { FaCopy } from 'react-icons/fa6';


const ViewCampaign= () => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [copiedPublicKey, setCopiedPublicKey] = useState<boolean>(false);
  const [copiedPrivateKey, setCopiedPrivateKey] = useState<boolean>(false);
  const {campaignID}=useParams()
  const navigate = useNavigate();

  
  return (

    <main className="w-[80vw]  py-[5%]">
      <div onClick={() => navigate(-1)} className=" absolute top-5 left-5 hidden lg:flex items-center text-black  text-[20px] cursor-pointer">
          <IoIosArrowBack className="text-[1.7rem]" /> <p className="">Back</p>
        </div>
        <section className="relative h-[42vh] lg:h-[50vh] dmt-52 lg:mt-0 ]  ">
            <Image className='h-full rounded-[12px]' imgClassName=' rounded-[12px] object-cover' src='https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86d24240ca6b1df611e98ed6bd7a1efc&auto=format&fit=crop&w=1400&q=80' />
            <div className="blk_graet_bg bg-color_gradient bg-center w-full absolute top-0 h-full rounded-[12px] "></div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between absolute bottom-[20px] text-white  px-8 w-full">
              <div className="w-full lg:w-[50%]">

                <h3 className=" text-[1.8rem] md:text-[2.5rem] font-bold">Good of the Earth {campaignID}</h3>
                <p className="hidde text-[.8rem] md:text-[1rem]">Good of the Earth is a non-profit organization dedicated to environmental conservation. </p>
            
                <p onClick={()=>{setShowDetails(true)}} className="underline cursor-pointer mt-2">View campaign details</p>
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
        <section className="flex flex-wrap justify-center items-center mt-7 w-full ">
            <div className=" w-[100%]  flex flex-wrap items-center justify-around gap-[10px]">
              <Card icon={<GiCash className='text-[1.6rem]' />} title='Total Amount Raised' result="$400" active={true} subText="more than the previous week" />
              <Card icon={<MdSupervisedUserCircle className='text-[1.6rem]' />} title='Number of Contributors' result="137" active={false} />
              <Card icon={<LuCalendarDays className='text-[1.6rem]' />} title='Number of days left' result="25/50" />
              {/* <Card title='' result="$10237" /> */}
            </div>
        </section>
        {showDetails&&(<section className="fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-blk_graet_bg z-50">
          <ul className="bg-white flex flex-col text-[1.2rem] rounded-lg px-[2%] py-[2%]"> 
            <li className='mb-3'>
                <h4 className="text-[1.8rem] font-bold"> Good of the Earth</h4>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae optio pariatur sequi!</p>
            </li>
            <li className='flex items-center my-2'>
              <h4 className="font-bold"> Public key:{" "} </h4>
              <div className="flex gap-3 justify-between items-center">
                <input  className="mx-2  w-[400px]" readOnly value={"hbsd78wdcbwe8g23jd9vadjcv9dvjb2ei8dvh"} />
                <FaCopy
                  className="cursor-pointer" 
                  onClick={() => {
                    navigator.clipboard.writeText("hbsd78wdcbwe8g23jd9vadjcv9dvjb2ei8dvh").then(() => {
                      setCopiedPublicKey(true);
                      setTimeout(() => setCopiedPublicKey(false), 2000);
                    }).catch((err) => {
                      console.error('Failed to copy text: ', err);
                    });
                    // Optionally, you can add a toast or alert to notify the user that the text has been copiedPsetCopiedPublicKey
                  }}
                />{copiedPublicKey&&<p className="ml-2">Copied!</p>} 
              </div>
            </li>
            <li className='flex items-center my-2'>
              <h4 className="font-bold"> Private key:{" "} </h4>
              <div className="flex gap-3 justify-between items-center">
                <input  className="mx-2  w-[400px]" readOnly value={"asjhdvcjhbaksdcjasdcbvajhc vasd vhasd cvsdjcvajsdb"} />
                <FaCopy
                  className="cursor-pointer" 
                  onClick={() => {
                    navigator.clipboard.writeText("asjhdvcjhbaksdcjasdcbvajhc vasd vhasd cvsdjcvajsdb").then(() => {
                      setCopiedPrivateKey(true);
                      setTimeout(() => setCopiedPrivateKey(false), 2000);
                    }).catch((err) => {
                      console.error('Failed to copy text: ', err);
                    });
                    // Optionally, you can add a toast or alert to notify the user that the text has been copiedPrsetCopiedPrivateKey
                  }}
                />{copiedPrivateKey&&<p className="ml-2">Copied!</p>} 
              </div>
            </li>
          <Button className='self-end border-[1px] border-solid border-gray-400 w-[40%] py-2 mt-7 text-[1rem]  hover:bg-[#1a1f2e] hover:text-white'
            onClick={()=>{setShowDetails(false)}} >
              Close
          </Button>
          </ul>
        </section>)}
    </main>
  )
}

export default ViewCampaign