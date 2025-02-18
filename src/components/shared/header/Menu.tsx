import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button flex items-center">
          Hello, sign in
        </Link>
        <Link href="/cart" className="header-button">
          <div className="flex items-end">
          <ShoppingCartIcon className="w-8 h-8"/>
          <span className="font-bold">Cart</span>
          </div>
        </Link>
      </nav>
    </div>
  )
};

export default Menu;
