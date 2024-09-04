import React, { useState } from 'react'
import Button from '../atom/Button'
import SectionHeader from '../atom/SectionHeader';
import Input from '../atom/Input';


const SignUp = () => {
   const initialData = {
    email: "",
    password: "",
  };
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>(
    initialData
  );
   const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return(
 <main className=" items-center justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
      <div className="h-auto  self-start w-full   bg-[#FBECF] sticky lg:flex lg:h-screen lg:items-center lg:w-[45%] ">
        <SectionHeader
          className="text-center md:px-[31px] lg:text-left lg:px-[10%]"
          headingChildren={"Transform your fundraising today"}
          headingClassName="font-bold "
          pChildren="Guidance, expertise, and personalized setup - all a conversation away."
          pClassName="  text-[#808080] my-[8px]"
        /> 
      </div>
      <section className="w-[100%] my-[10%] px-[16px]  h-screen no-scrollbar overflow-y-scroll md:w-[80%] lg:my-0 lg:px-0 lg:py-[4%]  lg:w-[55%]">
       
        <form
          className="shadow-form_shadow rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[10%] "
          // action={signUpNewUsers}
          // onSubmit={handleSubmit}
        >
          <Input id='organization_name' name='organization_name' type='text' className='mt-4' htmlFor='' label='Name of your organization or campaign' value='' onChange={handleChanges} />
          <Input id='email' name='email' type='email' className='mt-4' htmlFor='email' label='Email' value='' onChange={handleChanges} />
          <Input id='telNum' name='telNum' type='text' className='mt-4' htmlFor='telNum' label='Name of your organization or campaign' value='' onChange={handleChanges} />
          <div className="">
            <label htmlFor="">Organization mission</label>
            <textarea name="organization_mission" id="organization_mission"></textarea>
            </div>
          <Input id='organization_name' name='organization_name' type='text' className='mt-4' htmlFor='' label='Name of your organization or campaign' value='' onChange={handleChanges} />
        </form>
        
      </section>
    </main>
  );
}

export default SignUp