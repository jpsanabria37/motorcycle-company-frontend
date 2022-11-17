import {
  RiDashboardLine,
  RiMotorbikeLine,
  RiTyphoonFill,
} from "react-icons/ri";

import { FaCity } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 m-0 flex h-screen w-24 flex-col border-r border-gray-200 bg-white p-6 text-white">
        <Link href={"/ciudades"}>
          <SideBarIcon icon={<FaCity />} text="Ciudades" />
        </Link>
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default sidebar;
