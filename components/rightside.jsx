// import { FaSearch } from "react-icons/fa";

function Rightside() {
  return (
    <div className="flex flex-col gap-10 w-[300px] h-[100%]">
      <Search />
      <Upload />
      <Button />
    </div>
  );
}
function Button() {
  return (
    <button className="bg-blue-700 text-white text-sm p-4 px-8 rounded-md">
      Generate Report{" "}
    </button>
  );
}

function Upload() {
  return (
    <div className="shadow-md py-4 p-6 rounded-md flex flex-col gap-4 h-[400px] mt-10">
      <h2 className="text-lg font-bold">Upload Videos,Audio or Transcripts</h2>
      <div className=" flex items-center gap-[10px]  bg-slate-100 p-3 rounded-md text-sm">
      <img src="/drive.png " alt="googleDrive" className="h-[15px] w-[15px]"/>
        <p>Upload files from Drive</p>
      </div>
      <div className="flex items-center gap-[10px] bg-slate-100 p-3 rounded-md text-sm">
      <img src="/cloud.png " alt="upload" className="h-[15px] w-[15px]"/>
        <p>Upload files from this computer</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Data Integrations</h3>
        <div>
          <div className="flex justify-between items-center mt-4 ">
            <div className="flex items-center gap-[10px]">
            <img src="/hubspot.png " alt="hubspot" className="h-[25px] w-[25px]"/>
              <h3 className="text-xl font-bold">HubSpot</h3>
            </div>
            <div className="text-slate-400 text-xs font-semibold bg-slate-200 rounded-md p-1 px-2 ">
              CRM
            </div>
          </div>
          <div className="flex items-center gap-2 text-md px-4 text-xs  mt-4">
            <input type="checkbox" className="w-4 aspect-square " />
            <p>Some data integration i have to ask about</p>
          </div>
          <div className="flex items-center gap-2 text-md px-4 text-xs">
            <input type="checkbox" className="w-4 aspect-square " />    
            <p>Some data integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Search() {
  return (
    <div className="flex gap-3 items-center rounded-full w-[100%] shadow-lg p-2">
        <input
        placeholder="Search"
        type="text"
        className=" w-[50%] bg-slate-100 focus:outline-none    rounded-full px-3 py-1"
      />
      <span class="material-symbols-outlined"><img src="/bell.png " alt="bell" className="h-[15px] w-[15px]"/></span>
      <span class="material-symbols-outlined"><img src="/moon.png " alt="darkmode" className="h-[15px] w-[15px]"/></span>
      <span class="material-symbols-outlined"><img src="/info.png " alt="info" className="h-[15px] w-[15px]"/></span>
      <img src="profile.jpg" className="w-8 aspect-square rounded-lg object-fit" />
    </div>
  );
}
export default Rightside;
