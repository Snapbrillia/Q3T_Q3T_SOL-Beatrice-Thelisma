import React, { useState } from "react";
import Button from "../atom/Button";
import SectionHeader from "../atom/SectionHeader";
import Input from "../atom/Input";
import { getAllCampaigns, createCampaign } from "../../api/campaign";
import { Campaign } from "../../api/types";
import "./style.css";
import { FaCopy } from "react-icons/fa6";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { useNavigate } from "react-router";
import { useCreateCampaignStore } from "../util/store";
import { IoIosArrowBack } from "react-icons/io";


// how to create funraiser



const CreateCampaign = () => {
  const initialData = {
    title: "",
    description: "",
    targetAmount: "",
    whyCare: "",
    endDate: "",
    tag: "",
    // uploadFile: "",
  };
  const [inputValue, setInputValue] = useState<any>(initialData);
 const navigate = useNavigate()
 const {updateCampaginDetails} =useCreateCampaignStore()

  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue((prev:{ [key: string]: string }) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      ...inputValue,
      whyCare: inputValue.whyCare.split('|'),
      // tag: inputValue.tag.split('#').filter(Boolean),
    };

      try {
    const createdCampaign = await createCampaign(formData);
    if (createdCampaign) {
      updateCampaginDetails(createdCampaign)
      navigate("/dashboard")
    }
    
    console.log(createdCampaign);

    
  } catch (error) {
    console.error('Error creating campaign:', error);
  }
  };

  return (
    <main className="bg-graidnt_bg items-center w-[90vw] justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
       <div onClick={() => navigate(-1)} className=" absolute top-5 left-5 hidden lg:flex items-center text-black  text-[20px] cursor-pointer">
          <IoIosArrowBack className="text-[1.7rem]" /> <p className="">Back</p>
        </div>
      <div className="h-auto  sself-start w-full   bg-[#FBECF] sticky lg:flex flex-col itfems-center  dlg:h-screen  md:px-[31px] lg:text-left lg:px-[3%] lg:w-[45%] ">
        <SectionHeader
          headingChildren={"Create your campaign"}
          headingClassName="font-bold text-[2rem]"
          pChildren="Guidance, expertise, and personalized setup - all a conversation away."
          pClassName="  text-[#808080] my-[8px]"
        />
      </div>
      <section className="w-[100%] my-[10%] px-[16px]  h-screen no-scrollbar overflow-y-scroll md:w-[80%] lg:my-0 lg:px-[5%] lg:py-[4%]  lg:w-[55%]">
        <form
          className="shadow-form_shadow no-scrollbar overflow-y-scroll rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[5%] "
          onSubmit={handleSubmit}
        >
          <Input
            id="title"
            name="title"
            type="text"
            className="mt-4"
            htmlFor="title"
            label={
              <>
                Campaign Title<span className="font-bold text-red-500">*</span>
              </>
            }
            value={inputValue.title}
            required
            onChange={handleChanges}
          />

          <div className="my-[16px]">
            <label
              className="block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]"
              htmlFor="description"
            >
              Campaign description
              <span className="font-bold text-red-500">*</span>
            </label>

            <textarea
              rows={2}
              required
              className="w-full border-b-[3px] bg-transparent border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 "
              value={inputValue.description}
              onChange={handleChanges}
              name="description"
              id="description"
            ></textarea>
          </div>
          <Input
            id="targetAmount"
            name="targetAmount"
            type="number"
            min={"0"}
            className="mt-4"
            htmlFor="targetAmount"
            label={
              <>
                <div>
                  Target amount<span className="font-bold text-red-500">*</span>
                </div>
                <i>
                  Write down the amount you intend raising for this campaign
                </i>{" "}
              </>
            }
            value={inputValue.targetAmount}
            required
            onChange={handleChanges}
          />
          <div className="my-[16px]">
            <label
              className="block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]"
              htmlFor="whyCare"
            >
              <div className="">
                Why should do you need to fundraise
                <span className="font-bold text-red-500">*</span>
              </div>
              <i>Separate each reason with </i><b>'|'</b>
            </label>
            <textarea
              rows={2}
              required  
              placeholder="Example: To get | test"
              className="w-full border-b-[3px] bg-transparent border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 "
              value={inputValue.whyCare}
              onChange={handleChanges}
              name="whyCare"
              id="whyCare"
            ></textarea>
          </div>
          <Input
            id="endDate"
            name="endDate"
            type="date"
            className="mt-4"
            htmlFor="endDate"
            label={
              <>
                How long should your campaign last
                <span className="font-bold text-red-500">*</span>
              </>
            }
            value={inputValue.endDate}
            onChange={handleChanges}
            required
          />
          <Input
            id="tag"
            name="tag"
            type="text"
            className="mt-4"
            htmlFor="hashtags"
            label={
              <>
                <div className="">
                  Hashtags
                </div>
                <i>Add as many tags as you want</i>
              </>
            }
            value={inputValue.tag}
            onChange={handleChanges}
          />
          <Input
            id="uploadFile"
            name="uploadFile"
            type="file"
            className="mt-4 "
            inputClassName="border-b-0"
            htmlFor="uploadFile"
            label={
              <>
                Upload a cover photo
                <span className="font-bold text-red-500">*</span>
              </>
            }
            value={inputValue.uploadFile}
            onChange={handleChanges}
            
          />
          <Button className="bg-primary_color text-white py-4 text-[1.2rem] mt-3 ">
            Create campaign
          </Button>
        </form>
      </section>

    </main>
  );
};

export default CreateCampaign;
