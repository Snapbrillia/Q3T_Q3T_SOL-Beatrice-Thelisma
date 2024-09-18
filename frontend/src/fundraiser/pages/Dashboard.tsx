import React, { useEffect, useState } from "react";
import Image from "../atom/Image";
import Card from "../molecule/Card";
import { IoFileTrayOutline } from "react-icons/io5";
import Button from "../atom/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useCreateCampaignStore } from "../util/store";
import { FaCopy } from "react-icons/fa6";
import CampaignSuccessModal from "../molecule/CampaignSuccessModal";
import WalletConnectButton from "../../contributor/connectWalletButton";
import { logout } from "../../api/auth";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
  const [hasCampagin, setHasCampagin] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [copiedPublicKey, setCopiedPublicKey] = useState<boolean>(false);
  const [copiedPrivateKey, setCopiedPrivateKey] = useState<boolean>(false);
  const navigate = useNavigate();
  const { campaignDetails } = useCreateCampaignStore();
  const wallet = useAnchorWallet();

  // useEffect(() => {
  //  if (localStorage.getItem("accessToken")===null||localStorage.getItem("accessToken")===undefined) {
  //   navigate("/auth/sign-in")
  //  }
  // }, [])

  const checkWalletStatus = () => {
    if (!wallet) {
      toast.error("Plase connect wallet to continue", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    return navigate("/dashboard/create-campaign");
  };

  useEffect(() => {
    if (campaignDetails && Object.keys(campaignDetails).length > 0) {
      setShowDetails(true);
    }
  }, []);

  const campaginList = [
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86d24240ca6b1df611e98ed6bd7a1efc&auto=format&fit=crop&w=1400&q=80",
      mainTitle: "Help Us!",
      description: "You know what to do. We know you know.",
      amountRaised: "40",
      totalAmount: "100",
      daysLeft: "25",
    },
    {
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1681140560925-a50f402b8525?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainTitle: "Good of the Earth",
      description:
        "Good of the Earth is a non-profit organization dedicated to environmental conservation.",
      amountRaised: "70",
      totalAmount: "100",
      daysLeft: "5",
    },
  ];
  return (
    <main className="w-[80vw] overflow-clip  py-[5%]">
      <ToastContainer />
      <section className="relative h-[40vh] lg:h-[50vh]  rounded-md">
        <Image
          className="h-full rounded-[12px]"
          imgClassName="object-cover rounded-[12px]"
          src="https://images.unsplash.com/photo-1726266852936-bb4cfcdffaf0?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="blk_graet_bg bg-color_gradient bg-center w-full absolute top-0 h-full rounded-[12px] "></div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between absolute bottom-[20px] text-white  px-8 w-full">
          <div className="w-full md:w-[50%]">
            <h3 className=" text-[2rem] md:text-[2.5rem] font-bold">
              Good of the Earth
            </h3>
            <p className="text-[.8rem] md:text-[1rem]">
              Good of the Earth is a non-profit organization dedicated to
              environmental conservation.{" "}
            </p>
            <div className="flex items-end justify-between">
              <Link to={""}>
                <Button
                  onClick={checkWalletStatus}
                  disabled={false}
                  className="bg-[#512da8] text-white hover:bg-[#1a1f2e] mt-5 py-3 text-[1.1rem] disabled:bg-[#512da8] disabled:cursor-default disabled:opacity-80"
                >
                  Create campagin
                </Button>
              </Link>
              <p
                onClick={() => logout}
                className="underline cursor-pointer mt-2"
              >
                Logout
              </p>
            </div>
          </div>
          <div className="mt-5 py-3 text-[1.1rem] disabled:bg-[#512da8] disabled:cursor-default disabled:opacity-80">
            <WalletConnectButton />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-center mt-7 w-full px-5">
        <div className=" w-[100%]  flex flex-col md:flex-row items-center justify-around gap-[10px] rounded-[12px]">
          {/* Individual cards */}
          {hasCampagin ? (
            campaginList.map((item, index) => (
              <Link
                to={`/dashboard/${index}`}
                key={index}
                className="flex-1 cursor-pointer w-full md:w-[30%] px-2 py-3 rounded-[5px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(200, 70, 87, 0.3), rgba(133, 54, 95, 0.8)), url(${item.backgroundImage})`,
                }}
              >
                <h3 className=" text-white text-[2rem] font-bold ">
                  {item.mainTitle}
                </h3>
                <div className="flex items-center justify-between z-[3] gap-5 px-3 relative mt-5">
                  <div className="">
                    <div className="font-bold text-white">
                      <span className="lg:text-[2rem]">
                        ${item.amountRaised}{" "}
                      </span>
                      <span className="">/${item.totalAmount} raised</span>
                    </div>
                    <span
                      className="block sbg-progress_bar border-[1px] border-[white] mt-1 h-[8px] w-full"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff ${item.amountRaised}%, transparent ${item.amountRaised}%)`,
                      }}
                    ></span>
                  </div>
                  <span className="text-[1.4rem] lg:text-[2rem]  text-white">
                    {item.daysLeft}{" "}
                    <span className="text-[1.1rem]">days left</span>{" "}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <section className="flex flex-col justify-center items-center  bg-slate-400 w-[70%] py-6 rounded-[3px] ">
              <h2 className="text-[1.2rem] font-bold flex items-center">
                {" "}
                <IoFileTrayOutline className="text-[2rem]" /> No campagin found
              </h2>

              <Link to={"/create-campagin"}>
                <Button
                  disabled={false}
                  className="bg-[#512da8] text-white hover:bg-[#1a1f2e] mt-5 py-3 text-[1.1rem] disabled:bg-[#512da8] disabled:cursor-default disabled:opacity-80"
                >
                  Create campagin
                </Button>
              </Link>
            </section>
          )}
        </div>
        {showDetails && (
          <CampaignSuccessModal
            campaignDetails={campaignDetails}
            setShowDetails={setShowDetails}
          />
        )}
      </section>
    </main>
  );
};

export default Dashboard;
