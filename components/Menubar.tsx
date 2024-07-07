"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { TbPlaylist } from "react-icons/tb";

import MenubarItem from "./MenubarItem";

const Menubar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: TbPlaylist,
        label: "Library",
        active: pathname === "/library",
        href: "/library",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div
      className="
        flex
        md:hidden
        w-full
        h-[50px]
        fixed
        bottom-0
        bg-black
    "
    >
      <div className="grid grid-cols-3 w-full items-center place-items-center">
        {routes.map((route) => (
          <MenubarItem key={route.label} {...route} />
        ))}
      </div>
    </div>
  );
};

export default Menubar;
