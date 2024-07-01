function LowerMid() {
    return (
      <div className="shadow-md p-4 flex flex-col gap-8 h-[500px] overflow-scroll">
        <div className="flex gap-4">
          <p className="text-sm  font-semibold text-slate-500 border-b-4 border-blue-500">Setup</p>
          <p className="text-sm opacity-35 font-semibold text-slate-600">Sample Output</p>
        </div>
        <div className="shadow-md ">
          <div className="flex items-center gap-1 text-sm font-bold text-slate-600">
            <span class="material-symbols-outlined"><img src="/usericon.png " alt="usericon" className="h-[15px] w-[15px]"/></span>
            <p>Call Opening</p>
          </div>
          <div className="flex items-center gap-2 mt-4 ml-2">
            <span class="material-symbols-outlined"><img src="/down.png " alt="down" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm">
              Was the purpose of the call stated in the beginning?
            </p>
          </div>
          <p className="text-sm text-slate-400 ml-12 mt-2">How will this be scored?</p>
          <div className="w-[88%] ml-12 text-xs text-slate-600 font-semibold border border-slate-300 rounded-lg p-2 px-4 mb-4 mt-2">
           <div className="flex justify-around">
           <div>
            <p className="text-slate-400 mb-2">Was the purpose of the call stated in the beginning?</p>
            <p >
              Did the PST member greet the customer and use the call opening with
              good energetic tone?
            </p>
            <p>
              Did the PST member use the right salutation and greeting on the
              email?
            </p>
            </div>
            <div>
            <button class=" gap-1 flex items-center px-4 py-2 border border-blue-500 rounded-lg bg-blue-50 hover:bg-blue-100">
            <img src="/pencil.png " alt="edit" className="h-[10px] w-[10px]"/>
    <span class="text-blue-500">Edit</span>
  </button>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm font-bold text-slate-600 ml-2">
            <span class="material-symbols-outlined"><img src="/usericon.png " alt="usericon" className="h-[15px] w-[15px]"/></span>
            <p>Greeting</p>
          </div>
          <div className="flex items-center gap-2 mt-2 ml-2">
            <span class="material-symbols-outlined"><img src="/right.png " alt="right" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm text-slate-500">
              Was the purpose of the call stated in the beginning?
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm font-bold text-slate-600 ml-2">
            <span class="material-symbols-outlined"><img src="/usericon.png " alt="usericon" className="h-[15px] w-[15px]"/></span>
            <p>Call Opening</p>
          </div>
          <div className="flex items-center gap-2 mt-2 ml-2">
            <span class="material-symbols-outlined"><img src="/right.png " alt="right" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm text-slate-500">
              Was the purpose of the call stated in the beginning?
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-sm font-bold text-slate-600 ml-2">
            <span class="material-symbols-outlined"><img src="/usericon.png " alt="usericon" className="h-[15px] w-[15px]"/></span>
            <p>Confidence</p>
          </div>
          <div className="flex items-center gap-2 mt-2 ml-2">
            <span class="material-symbols-outlined"><img src="/right.png " alt="right" className="h-[10px] w-[10px]"/></span>
            <p className="font-bold text-sm  text-slate-500">
              Was the purpose of the call stated in the beginning?
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default LowerMid;
  