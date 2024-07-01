import LowerMid from "./lowermid";
import './app.css'
// import DropDownButton from "devextreme-react/drop-down-button";
function Mid() {
  return (
    <div className=" custom-width">
      <div className="flex gap-6 items-center text-slate-400 font-semibold">
        <button className=" flex gap-1 items-center justify-center bg-slate-200  rounded-lg p-1 pr-3 text-xs">
          <span class="material-symbols-outlined"><img src="/arrow.png " alt="arrow" className="h-[10px] w-[10px]"/></span>
          <p>Back</p>
        </button>
        <p className="text-sm">Templates/Sales Effectiveness/BANT</p>
      </div>
      <div className="p-5 flex flex-col text-slate-500">
        <h1 className="text-xl font-bold pb-5">
          Analyse the calls for Soft Skills Coaching
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center ">
            <span class="material-symbols-outlined"><img src="/down.png " alt="down" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm">How does it work?</p>
          </div>
          <div className="flex gap-1 items-center ">
            <span class="material-symbols-outlined"><img src="/down.png " alt="down" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm">When should you use this?</p>
          </div>
        </div>
      </div>
      <div></div>
      <LowerMid />
    </div>
  );
}

export default Mid;
