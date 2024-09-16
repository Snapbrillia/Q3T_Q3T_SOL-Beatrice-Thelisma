import React, { useState } from "react";
import Button from "../atom/Button";
import SectionHeader from "../atom/SectionHeader";
import Input from "../atom/Input";
import { getAllCampaigns, createCampaign } from "../../api/campaign";
import { Campaign } from "../../api/types";
import "./style.css";
import { FaCopy } from "react-icons/fa6";
import * as LottiePlayer from "@lottiefiles/lottie-player";

// how to create funraiser

// const handleCreateCampaign = async () => {
//   const newCampaign = {
//     title: 'New Campaign',
//     description: 'This is a new campaign',
//     targetAmount: 10000,

//     endDate: '2024-10-16',
//     tags: "",
//     whyCare: [],

//   };

//   try {
//     const createdCampaign = await createCampaign(newCampaign);
//     setCampaigns([...campaigns, createdCampaign]);
//   } catch (error) {
//     console.error('Error creating campaign:', error);
//   }
// };

const CreateCampaign = () => {
  const initialData = {
    campaignTitle: "",
    campaignDescription: "",
    targetAmount: "",
    whyCare: "",
    deadline: "",
    hashtags: "",
    uploadFile: "",
  };
  const [inputValue, setInputValue] = useState<any>(initialData);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [copiedPublicKey, setCopiedPublicKey] = useState<boolean>(false);
  const [copiedPrivateKey, setCopiedPrivateKey] = useState<boolean>(false);
  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whyCareArray = inputValue.whyCare.split("|");
    const hashTagsArray = inputValue.hashtags.split("#");

    setInputValue((inputValue.whyCare = whyCareArray));
    setInputValue((inputValue.hashtags = hashTagsArray.slice(1)));

    console.log(inputValue);
  };

  return (
    //  <main className=" items-center justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
    <main className="bg-graidnt_bg items-center w-[90vw] justify-center overflow-y-auto lg:flex lg:overflow-y-clip">
      <div className="h-auto  sself-start w-full   bg-[#FBECF] sticky lg:flex flex-col itfems-center  dlg:h-screen  md:px-[31px] lg:text-left lg:px-[3%] lg:w-[45%] ">
        {/* <div className="h-auto  self-start w-full   bg-[#FBECF] sticky lg:flex lg:h-screen lg:items-center lg:w-[45%] "> */}
        <SectionHeader
          // className="text-center md:px-[31px] lg:text-left lg:px-[10%]"
          headingChildren={"Create your campaign"}
          headingClassName="font-bold text-[2rem]"
          pChildren="Guidance, expertise, and personalized setup - all a conversation away."
          pClassName="  text-[#808080] my-[8px]"
        />
      </div>
      <section className="w-[100%] my-[10%] px-[16px]  h-screen no-scrollbar overflow-y-scroll md:w-[80%] lg:my-0 lg:px-[5%] lg:py-[4%]  lg:w-[55%]">
        <form
          className="shadow-form_shadow no-scrollbar overflow-y-scroll rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[5%] "
          // className="shadow-form_shadow rounded-[10px] md:w-[100%] md:px-[31px] lg:py-[5%] lg:px-[5%] "
          // action={signUpNewUsers}
          onSubmit={handleSubmit}
        >
          <Input
            id="campaignTitle"
            name="campaignTitle"
            type="text"
            className="mt-4"
            htmlFor="campaignTitle"
            label={
              <>
                Campaign Title<span className="font-bold text-red-500">*</span>
              </>
            }
            value={inputValue.campaignTitle}
            onChange={handleChanges}
          />

          <div className="my-[16px]">
            <label
              className="block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]"
              htmlFor="campaignDescription"
            >
              Campaign description
              <span className="font-bold text-red-500">*</span>
            </label>

            <textarea
              rows={2}
              required
              className="w-full border-b-[3px] bg-transparent border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 "
              value={inputValue.campaignDescription}
              onChange={handleChanges}
              name="campaignDescription"
              id="campaignDescription"
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
              <i>Separate each reason with '|'</i>
            </label>
            <textarea
              rows={2}
              required
              className="w-full border-b-[3px] bg-transparent border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 "
              value={inputValue.whyCare}
              onChange={handleChanges}
              name="whyCare"
              id="whyCare"
            ></textarea>
          </div>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            className="mt-4"
            htmlFor="deadline"
            label={
              <>
                How long should your campaign last
                <span className="font-bold text-red-500">*</span>
              </>
            }
            value={inputValue.deadline}
            onChange={handleChanges}
          />
          <Input
            id="hashtags"
            name="hashtags"
            type="text"
            className="mt-4"
            htmlFor="hashtags"
            label={
              <>
                <div className="">
                  Hashtags<span className="font-bold text-red-500">*</span>
                </div>
                <i>Add as many tags as you want</i>
              </>
            }
            value={inputValue.hashtags}
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
          {/* <Input id='organizationWebsite' name='organizationWebsite' type='text' className='mt-4' htmlFor='organizationWebsite' label={<>Organization Website<span className='font-bold text-red-500'>*</span></>} value={inputValue.organizationWebsite} onChange={handleChanges} /> */}
          {/* <Input id='walletAddress' name='walletAddress' type='text' className='mt-4' htmlFor='walletAddress' label={<>Wallet Address<span className='font-bold text-red-500'>*</span></>} value={inputValue.walletAddress} onChange={handleChanges} />
          <div className="">
            <label className='block  text-[#3E3E3E] text-[1rem]  md:[1.3rem]' htmlFor="organizationMission">Organization mission<span className='font-bold text-red-500'>*</span></label>
            <textarea rows={5}  className='w-full border-b-[3px]  border-[#808080] py-4 rounded-[4px] pl-[10px] pr-[5px]  mt-[12px]  text-[1.1rem] outline-0 ' value={inputValue.organizationMission} onChange={handleChanges} name="organizationMission" id="organizationMission"></textarea>
          </div> */}
          <Button className="bg-primary_color text-white py-4 text-[1.2rem] mt-3 ">
            Create campaign
          </Button>
        </form>
      </section>
      {showDetails && (
        <section className="fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-blk_graet_bg z-50">
          <lottie-player
            autoplay
            controls
            loop
            mode="normal"
            src="https://lottie.host/bb7d8892-14db-4c71-8fbf-ba38cb3bb906/TD3JJKhgdu.json"
            style={{ width: "320px" }}
          ></lottie-player>
          <ul className="bg-white flex flex-col text-[1.2rem] rounded-lg px-[2%] py-[2%]">
            <li className="mb-3">
              <h4 className="text-[1.8rem] font-bold"> Good of the Earth</h4>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae optio pariatur sequi!
              </p>
            </li>
            <li className="flex items-center my-2">
              <h4 className="font-bold"> Public key: </h4>
              <div className="flex gap-3 justify-between items-center">
                <input
                  className="mx-2  w-[400px]"
                  readOnly
                  value={"hbsd78wdcbwe8g23jd9vadjcv9dvjb2ei8dvh"}
                />
                <FaCopy
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard
                      .writeText("hbsd78wdcbwe8g23jd9vadjcv9dvjb2ei8dvh")
                      .then(() => {
                        setCopiedPublicKey(true);
                        setTimeout(() => setCopiedPublicKey(false), 2000);
                      })
                      .catch((err) => {
                        console.error("Failed to copy text: ", err);
                      });
                  }}
                />
                {copiedPublicKey && <p className="ml-2">Copied!</p>}
              </div>
            </li>
            <li className="flex items-center my-2">
              <h4 className="font-bold"> Private key: </h4>
              <div className="flex gap-3 justify-between items-center">
                <input
                  className="mx-2  w-[400px]"
                  readOnly
                  value={"asjhdvcjhbaksdcjasdcbvajhc vasd vhasd cvsdjcvajsdb"}
                />
                <FaCopy
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(
                        "asjhdvcjhbaksdcjasdcbvajhc vasd vhasd cvsdjcvajsdb"
                      )
                      .then(() => {
                        setCopiedPrivateKey(true);
                        setTimeout(() => setCopiedPrivateKey(false), 2000);
                      })
                      .catch((err) => {
                        console.error("Failed to copy text: ", err);
                      });
                    // Optionally, you can add a toast or alert to notify the user that the text has been copiedPrsetCopiedPrivateKey
                  }}
                />
                {copiedPrivateKey && <p className="ml-2">Copied!</p>}
              </div>
            </li>
            <Button
              className="self-end border-[1px] border-solid border-gray-400 w-[40%] py-2 mt-7 text-[1rem]  hover:bg-[#1a1f2e] hover:text-white"
              onClick={() => {
                setShowDetails(false);
              }}
            >
              Close
            </Button>
          </ul>
        </section>
      )}
    </main>
  );
};

export default CreateCampaign;
