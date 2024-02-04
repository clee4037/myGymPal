import { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { LuDumbbell } from "react-icons/lu";
import { IoIosStats } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setPage } from "../../utils/slice/navBarSlice";

/* type  */
interface Props {
  button: string;
}
interface Icons {
  [key: string]: ReactElement;
}

const NavBarButtons = ({ button }: Props) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { currentPage } = useSelector((state) => state.navBar);
  const currentPage = button;

  const icons: Icons = {
    profile: <CgProfile size={24} />,
    log: <GoHistory size={24} />,
    routine: <LuDumbbell size={24} />,
    stats: <IoIosStats size={24} />,
  };

  // const selectButton = () => {
  //   button === "log" ? navigate("/") : navigate(`/${button}`);
  //   dispatch(setPage(button));
  // };

  return (
    <button
      className={
        currentPage === button
          ? "cursor-pointer text-torq pr-5 pl-5 btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost"
      }
      // onClick={() => selectButton()}
    >
      {icons[button]}
    </button>
  );
};

export default NavBarButtons;
