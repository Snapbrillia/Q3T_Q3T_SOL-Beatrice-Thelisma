import React, { useState } from 'react'
import Button from '../atom/Button'
import SectionHeader from '../atom/SectionHeader';
import Input from '../atom/Input';


const CreateCampaign = () => {
   const initialData = {
    campaignTitle: "",
    targetAmount: "",
    deadline: "",
    organizationRegNum: "",
    organizationWebsite:"",
    walletAddress:"",
    organizationMission:"",
  };
  const [inputValue, setInputValue] = useState<{ [key: string]: string }>(
    initialData
  );
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
 <main className=" items-center justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
      <div className="h-auto  self-start w-full   bg-[#FBECF] sticky lg:flex lg:h-screen lg:items-center lg:w-[45%] ">
        <SectionHeader
          className="text-center md:px-[31px] lg:text-left lg:px-[10%]"
          headingChildren={"Create your campaign"}
          headingClassName="font-bold "
          pChildren="Guidance, expertise, and personalized setup - all a conversation away."
          pClassName="  text-[#808080] my-[8px]"
        /> 
      </div>
      <section className="w-[100%] my-[10%] px-[16px]  h-screen no-scrollbar overflow-y-scroll md:w-[80%] lg:my-0 lg:px-[5%] lg:py-[4%]  lg:w-[55%]">
       
        <form
          className="shadow-form_shadow rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[5%] "
          // action={signUpNewUsers}
          onSubmit={handleSubmit}
        >
          <Input id='campaignTitle' name='campaignTitle' type='text' className='mt-4' htmlFor='campaignTitle' label={<>Campaign Title<span className='font-bold text-red-500'>*</span></> } value={inputValue.organizationName} onChange={handleChanges} />
          <Input id='targetAmount' name='targetAmount' type='number' className='mt-4' htmlFor='targetAmount' label={<><div>Target amount<span className='font-bold text-red-500'>*</span></div><i>Write down the amount you intend raising for this campaign</i> </>} value={inputValue.email} onChange={handleChanges} />
          <Input id='deadline' name='deadline' type='date' className='mt-4' htmlFor='deadline' label={<>How long should your campaign last<span className='font-bold text-red-500'>*</span></> } value={inputValue.telNum} onChange={handleChanges} />
          <Input id='uploadFile' name='uploadFile' type="file" className='mt-4 ' inputClassName="border-b-0" htmlFor='uploadFile' label={<>Upload a cover photo<span className='font-bold text-red-500'>*</span></>} value={inputValue.organizationRegNum} onChange={handleChanges} />
          {/* <Input id='organizationWebsite' name='organizationWebsite' type='text' className='mt-4' htmlFor='organizationWebsite' label={<>Organization Website<span className='font-bold text-red-500'>*</span></>} value={inputValue.organizationWebsite} onChange={handleChanges} /> */}
          {/* <Input id='walletAddress' name='walletAddress' type='text' className='mt-4' htmlFor='walletAddress' label={<>Wallet Address<span className='font-bold text-red-500'>*</span></>} value={inputValue.walletAddress} onChange={handleChanges} />
          <div className="">
            <label className='block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]' htmlFor="organizationMission">Organization mission<span className='font-bold text-red-500'>*</span></label>
            <textarea rows={5}  className='w-full border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 ' value={inputValue.organizationMission} onChange={handleChanges} name="organizationMission" id="organizationMission"></textarea>
          </div> */}
          <Button className='bg-primary_color text-white py-4 text-[1.2rem] mt-3 ' children={"Create acount"} /> 

        </form>
        
      </section>
    </main>
  );
}

export default CreateCampaign