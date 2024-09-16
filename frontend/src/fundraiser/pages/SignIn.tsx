import React, { useState } from 'react'
import SectionHeader from '../atom/SectionHeader'
import Input from '../atom/Input'
import Button from '../atom/Button'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./style.css"


const SignIn = () => {
 const initialData = {
    email: "",
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

  return (
     <main className="sbg-gsraidnt_bg items-center w-[80vw] justify-between overflow-y-auto lg:flex flex-col lg:overflow-y-clip">
      <div className="h-auto  sself-start w-full   bg-[#FBECF] sticky lg:flex flex-col itfems-center  dlg:h-screen  md:px-[31px] lg:text-left lg:px-[3%] lg:w-[45%] ">
        <SectionHeader
        //   className="text-center md:px-[31px] lg:text-left "
          headingChildren={"Welcome back"}
          headingClassName="font-bold "
          pChildren={"Create, update and manage your fundraising "}
          pClassName="  text-[#808080] my-[8px]"
        /> 
      </div>

          <form
          className="shadow-form_shadow rounded-[10px] md:w-[60%] md:px-[31px] lg:py-[5%] lg:px-[5%] z-40 "
          onSubmit={handleSubmit}
        >
          <Input required id='email' name='email' type='email' className='mt-4' htmlFor='email' label={<>Email<span className='font-bold text-red-500'>*</span></> } value={inputValue.email} onChange={handleChanges} />
            <div className="mt-4">
            <label htmlFor="password">
              Password<span className='font-bold text-red-500'>*</span>
            </label>
            <div className="flex items-center border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px] w-full mt-[12px] h-[28px] text-[1.1rem] ">
              <input id='password' name='password' onChange={handleChanges} value={inputValue.password} type={showPW?"text":"password"} className=' bg-transparent outline-0 flex-1 w]' required />
              <div onClick={()=>setShowPW(!showPW)} className="text-[1.3rem]">
                {showPW?<FaRegEye />:<FaRegEyeSlash />}
              </div>
            </div>
          </div>
          <Button className='bg-primary_color text-white py-4 text-[1.2rem] mt-9 border-[1.5px] border-solid hover:text-primary_color hover:bg-transparent hover:border-primary_color '  >Create acount</Button> 
        <p className='mt-3'>Don't have an account, <Link className='text-primary_color' to={"/auth/sign-up"}>Sign up</Link> </p>
        </form>

      </main>
  )
}

export default SignIn