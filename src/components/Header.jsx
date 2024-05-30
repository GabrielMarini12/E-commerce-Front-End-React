import logo from "../assets/logo/logo ecommerce.png";
import UserButtons from "./UserButtons";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const completeHeader = (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      <Link to="/">
        <img src={logo} alt="Logo da Zara" className="h-20 px-2" />
      </Link>
      <UserButtons />
    </header>
  );

  const simpleHeader = (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-xl z-10">
      <Link to="/">
        <img src={logo} alt="Logo da Zara" className="h-16 px-2" />
      </Link>
    </header>
  );

  return <>{pathname === "/" ? completeHeader : simpleHeader} </>;
};

export default Header;
