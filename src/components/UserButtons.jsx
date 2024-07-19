import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserButtons = () => {
  const CartInfo = useContext(CartContext);

  return (
    <div>
      <button
        className="px-2 relative"
        onClick={() => CartInfo.setIsCartOpen(true)}
      >
        <FontAwesomeIcon icon={faBagShopping} />
        <div
          id="cart-amount"
          className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border border-white rounded-full -top-2 -right-2"
        >
          3
        </div>
      </button>
      <Link to="/history">
        <FontAwesomeIcon className="px-2" icon={faUser} />
      </Link>
    </div>
  );
};

export default UserButtons;
