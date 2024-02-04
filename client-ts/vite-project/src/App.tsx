import "./App.css";
import NavBar from "./components/navbar/NavBar.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar className="mb-10" />
      {/* <Outlet /> */}
    </div>
  );
};

export default App;
