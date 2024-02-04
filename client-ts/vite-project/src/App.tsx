import "./App.css";
import NavBar from "./components/navbar/NavBar.tsx";
import Log from "./containers/Log.tsx";
import NewWorkout from "./containers/NewWorkout.tsx";
import Routines from "./containers/Routines.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar className="mb-10" />
      {/* <Outlet /> */}
      <Log />
      <NewWorkout />
      <Routines />
    </div>
  );
};

export default App;
