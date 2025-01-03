import { Outlet, useLocation } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";

export default function ShopLayout() {
  const { pathname } = useLocation();
  const displayName = pathname.substring(1).toLocaleUpperCase();
  return (
    <>
      <HeaderImage imageUrl="/shop.jpg">{displayName}</HeaderImage>
      <Outlet />
    </>
  );
}
