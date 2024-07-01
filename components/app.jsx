import Mid from "./mid";
import Rightside from "./rightside";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="flex gap-5 mx-5 my-5">
      <Sidebar />
      <Mid />
      <Rightside />
 
    </div>
  );
}

export default App;
