const menu_data = [
  { id: 1, key: "home", link: "/", mega_menu: false, has_dropdown: false, active: "active" },
  { id: 2, key: "marketplace", title: "MarketPlace", link: "https://satsnet.ordx.market/", mega_menu: false, has_dropdown: false, active: "" },
  // { id: 3, key: "ordxMarket", title: "ORDX Market", link: "https://app.ordx.market", mega_menu: false, has_dropdown: false, active: "" },
  { id: 4, key: "launchpool", link: "https://satsnet.ordx.market/launchpool", mega_menu: false, has_dropdown: false, active: "" },
  { id: 5, key: "inscribe", link: "https://app.ordx.market/inscribe", mega_menu: false, has_dropdown: false, active: "" },
  {
    id: 6, key: "explore",
    link: "/",
    mega_menu: false,
    has_dropdown: true,
    sub_menus: [
      { link: "https://mainnet.sat20.org/browser/app", title: "Mainnet Explorer" },
      { link: "https://mempool.sat20.org/", title: "SatoshiNet Explorer" },
    ],
    active: ""
  },
  { id: 7, key: "economic", link: "/economic", mega_menu: false, has_dropdown: false, active: "" },
  { id: 8, key: "myAssets", link: "https://app.ordx.market/account", mega_menu: false, has_dropdown: false, active: "" },
];
export default menu_data;
