import React, { useState } from 'react'
import Button from '../atom/Button'
import SectionHeader from '../atom/SectionHeader';
import Input from '../atom/Input';
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa6";


const SignUp = () => {
   const initialData = {
    organizationName: "",
    email: "",
    telNum: "",
    organizationRegNum: "",
    organizationWebsite:"",
    walletAddress:"",
    organizationMission:"",    
    password:"",
    
  };
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>(
    initialData
  );
  const [showPW, setShowPW] = useState(false)
   const handleChanges = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit=(e:any)=>{
    e.preventDefault()

    console.log(inputValue);
    
  }

  return(
 <main className="bg-graidnt_bg items-center justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
      <div className="h-auto  self-start w-full   bg-[#FBECF] sticky lg:flex lg:h-screen lg:items-center lg:w-[45%] ">
        <SectionHeader
          className="text-center md:px-[31px] lg:text-left lg:px-[10%]"
          headingChildren={"Transform your fundraising today"}
          headingClassName="font-bold "
          pChildren="Guidance, expertise, and personalized setup - all a conversation away."
          pClassName="  text-[#808080] my-[8px]"
        /> 
      </div>
      <section className="w-[100%] my-[10%] px-[16px]  h-screen no-scrollbar overflow-y-scroll md:w-[75%] lg:my-0 lg:px-[5%] lg:py-[4%]  lg:w-[65%]">
       
        <form
          className="shadow-form_shadow rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[5%] "
          // action={signUpNewUsers}
          onSubmit={handleSubmit}
        >
          <Input required id='organizationName' name='organizationName' type='text' className='mt-4' htmlFor='organizationName' label={<>Name of your organization of campaign<span className='font-bold text-red-500'>*</span></> } value={inputValue.organizationName} onChange={handleChanges} />
          <Input required id='email' name='email' type='email' className='mt-4' htmlFor='email' label={<>Email<span className='font-bold text-red-500'>*</span></> } value={inputValue.email} onChange={handleChanges} />
          <Input required id='telNum' name='telNum' type='tel' className='mt-4' htmlFor='telNum' label={<>Phone Number<span className='font-bold text-red-500'>*</span></> } value={inputValue.telNum} onChange={handleChanges} />
          <Input required id='organizationRegNum' name='organizationRegNum' type='text' className='mt-4' htmlFor='organizationRegNum' label={<>Organization Registration Number<span className='font-bold text-red-500'>*</span></>} value={inputValue.organizationRegNum} onChange={handleChanges} />
          <Input required id='organizationWebsite' name='organizationWebsite' type='url' className='mt-4' htmlFor='organizationWebsite' label={<>Organization Website<span className='font-bold text-red-500'>*</span></>} value={inputValue.organizationWebsite} onChange={handleChanges} />
          <Input required id='walletAddress' name='walletAddress' type='text' className='mt-4' htmlFor='walletAddress' label={<>Wallet Address<span className='font-bold text-red-500'>*</span></>} value={inputValue.walletAddress} onChange={handleChanges} />
          <div className="my-[16px]">
            <label className='block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]' htmlFor="organizationMission">Organization mission<span className='font-bold text-red-500'>*</span></label>
            <textarea rows={4} required  className='w-full border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 ' value={inputValue.organizationMission} onChange={handleChanges} name="organizationMission" id="organizationMission"></textarea>
          </div>
          {/* <Input id='password' name='password' type='password' className='mt-4' htmlFor='password' label={<>Password<span className='font-bold text-red-500'>*</span></>} value={inputValue.password} onChange={handleChanges} /> */}
          <div className="mt-4">
            <label htmlFor="password">
              Password<span className='font-bold text-red-500'>*</span>
            </label>
            <div className="flex items-center border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px] w-full mt-[12px] h-[28px] text-[1.1rem] ">
              <input id='password' name='password' type={showPW?"text":"password"} className=' outline-0 flex-1 w]' required />
              <div onClick={()=>setShowPW(!showPW)} className="text-[1.3rem]">
                {showPW?<FaRegEye />:<FaRegEyeSlash />}
              </div>
            </div>
          </div>
          <Button className='bg-primary_color text-white py-4 text-[1.2rem] mt-9  '  >Create acount</Button> 
        </form>
        
      </section>
    </main>
  );
}

export default SignUp