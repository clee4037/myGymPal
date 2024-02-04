// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setPage } from "../../utils/slice/navBarSlice";

const NavBarTitle = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <div
      className="navbar-start"
      onClick={() => {
        // navigate("/");
        // dispatch(setPage("log"));
      }}
    >
      <h1 className="text-2xl font-bold text-torq pl-2">MyWorkoutPal</h1>
    </div>
  );
};

export default NavBarTitle;
