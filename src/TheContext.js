import React, { useState, createContext } from "react";

export const SidebarContext = createContext();
export const NewlinksContext = createContext();
export const CardsContext = createContext();

export const SideLinks = (props) => {
  const [links, setLinks] = useState([
    {
      name: "My Dashboard",
      src: "/icons/home.svg",
      goto: "/components/dashboard",
    },
    {
      name: "Sales",
      src: "/icons/sales.svg",
      goto: "/components/mainsales/common",
    },
    {
      name: "New",
      src: "/icons/add.svg",
      goto: "/components/new/new",
    },
    {
      name: "Add",
      src: "/icons/plus.svg",
      goto: "/components/add/add",
    },
    {
      name: "History",
      src: "/icons/history.svg",
      goto: "/components/history",
    },
  ]);
  const [Cards, setCards] = useState([
    {
      id: 1,
      name: "Stocks",
      src: "/icons/shape.svg",
      num: "502",
      color: "#E8523F",
    },
    {
      id: 2,
      name: "Sales",
      src: "/icons/salesnew.svg",
      num: "101",
      color: "#6672FB",
    },
    {
      id: 3,
      name: "Purchases",
      src: "/icons/cart.svg",
      num: "421",
      color: "#F8B849",
    },
    {
      id: 4,
      name: "Employees",
      src: "/icons/users.svg",
      num: "721",
      color: "#1F998E",
    },
  ]);
  const [NewLinks, setNewLinks] = useState([
    {
      id: 1,
      name: "Sales",
      goto: "/components/new/sales/sales",
      src: "/icons/salesnew.svg",
      color: "#E8523F",
    },
    {
      id: 2,
      name: "Purchase",
      goto: "/components/new/newpurchase",
      src: "/icons/cart.svg",
      color: "#6672FB",
    },
    {
      id: 3,
      name: "Sales Return",
      goto: "/components/new/salesreturn",
      src: "/icons/s-return.svg",
      color: "#F8B849",
    },
    {
      id: 4,
      name: "Purchase Return",
      goto: "/components/new/purchasereturn",
      src: "/icons/p-return.svg",
      color: "#1F998E",
    },
  ]);
  return (
    <SidebarContext.Provider value={[links, setLinks]}>
      <NewlinksContext.Provider value={[NewLinks, setNewLinks]}>
        <CardsContext.Provider value={[Cards, setCards]}>
          {props.children}
        </CardsContext.Provider>
      </NewlinksContext.Provider>
    </SidebarContext.Provider>
  );
};
