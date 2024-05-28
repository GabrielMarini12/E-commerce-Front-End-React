import logo from "../assets/logo/logo ecommerce.png";
import UserButtons from "./UserButtons";

const Header = () => {
  return (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-base">
      <a href="/">
        <img src={logo} alt="Logo da Zara" className="h-20 px-2" />
      </a>
      <UserButtons />
    </header>
  );
};

export default Header;
