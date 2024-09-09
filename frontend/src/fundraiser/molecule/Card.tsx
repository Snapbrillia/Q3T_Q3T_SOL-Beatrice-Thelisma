
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ active,title }:{active?:boolean,title:string}) => {
  return (
    <div className="flex gap-[10px] bg-white rounded-[20px] p-[20px] py-[30px] cursor-pointer border-l-[1px] border-r-[1px] border-solid border-primary_color shadow-light_shadow  hovher:bg-[black] ">
      
      <div className="flex flex-col pt-0 mt-0 gap-[10px] ">
        <div className="flex items-center gap-3"><MdSupervisedUserCircle />
        <span>{title}</span>
        </div>
        <span className="font-bold text-[2.4rem]">10.237</span>
        <span className="text-[16px]">
          <span className={active ? "text-[green]" : "text-[red]"}>12%</span>{" "}
          more than the previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
