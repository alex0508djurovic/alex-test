export type ISidebarItem = {
  linkTo: string;
  display: string;
  enabled?: boolean;
};

const sidebarList: ISidebarItem[] = [
  { linkTo: "/products", display: "Products", enabled: true },
  { linkTo: "", display: "Categories" },
  { linkTo: "", display: "Orders" },
  { linkTo: "", display: "Customers" },
  { linkTo: "/products/history", display: "history", enabled: true },
  { linkTo: "", display: "Lorem" },
  { linkTo: "", display: "Lorem" },
  { linkTo: "", display: "Lorem" },
  { linkTo: "/", display: "Exit", enabled:true },
];

export default sidebarList;
