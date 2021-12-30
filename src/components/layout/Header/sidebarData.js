import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiFillShopping />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaIcons.FaSearch />,
    cName: "nav-text",
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <IoIcons.IoMdCart />,
    cName: "nav-text",
  },

  {
    title: "Account",
    path: "/account",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
];
