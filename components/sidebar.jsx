function Sidebar() {
    return (
      <div className="rounded-[3%] h-[95%] shadow-xl w-[225px] flex flex-col gap-12 p-10 px-6 items-center border border-b-slate-700  text-slate-400">
        <div className="font-bold text-xl text-slate-600 ">ORCA AI</div>
        <div className="flex flex-col h-[500px] justify-between text-sm">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
              <span class="material-symbols-outlined "><img src="/home.png " alt="home" className="h-[15px]"/></span> <p>Home</p>
            </li>
            <li className="flex gap-2 ">
              <span class="material-symbols-outlined"><img src="/layout.png " alt="home" className="h-[15px]"/></span>
              <p>Template</p>
            </li>
            <li className="flex gap-2 ">
              <span class="material-symbols-outlined"><img src="/report.png " alt="home" className="h-[15px]"/></span>
              <p>Reports</p>
            </li>
            <li className="flex gap-2 ">
              <span class="material-symbols-outlined"><img src="/pie.png " alt="home" className="h-[15px] w-[15px]"/></span>
              <p>Sales Performance</p>
            </li>
          </ul>
          <div className="flex justify-center gap-2">
            <img src="profile.jpg" className="w-10 aspect-square rounded-lg object-fit" />
            <div>
              <p className="font-semibold">Adela Parkson</p>
              <p className="text-xs opacity-75">Manager</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  