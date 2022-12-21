import "./App.css";
import Sidebar from "./components/Sidebar";
import NavPage from "./components/NavPage"; 

function App() {
  return (
    <div id="main">
      <div className="sidebar">
        <Sidebar/>
      </div>
        <NavPage/>
    </div>
  );
}

export default App;