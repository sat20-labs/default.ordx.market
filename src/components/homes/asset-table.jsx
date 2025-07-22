import { Icon } from "@iconify/react";
import React from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../context/LanguageContext";
import HotAssets from "./hot-assets"; // Assuming you have a HotAssets component

const AssetTable = () => {
  const router = useRouter();
  const { locale } = useLanguage();

  const assets = [
    {
      name: "The Oriental Pearl",
      icon: "🌕",
      floorPrice: "39.00 sats",
      change: "0.00%",
      volume: { btc: "0.0360", usd: "$3747.64" },
      marketCap: { btc: "60.9457", usd: "$6344541.71" },
      sales: 9,
      holders: "1,976",
      listings: 243,
      assetLink: "https://app.ordx.market/ordx/ticker/?ticker=pearl&assets_type=ticker",
    },
    {
      name: "RarePizza",
      icon: "🍕",
      floorPrice: "5.00 sats",
      change: "0.00%",
      volume: { btc: "0.0056", usd: "$582.97" },
      marketCap: { btc: "4.9553", usd: "$515852.21" },
      sales: 17,
      holders: "6,039",
      listings: 764,
      assetLink: "https://app.ordx.market/ordx/ticker/?ticker=rarepizza&assets_type=ticker",
    },
    // {
    //   name: "龙",
    //   icon: "🐉",
    //   floorPrice: "11.00 sats",
    //   change: "-",
    //   volume: { btc: "0.0000", usd: "$0.00" },
    //   marketCap: { btc: "0.5786", usd: "$60232.90" },
    //   sales: 0,
    //   holders: 60,
    //   listings: 21,
    //   assetLink: "https://app.ordx.market/ordx/ticker/?ticker=%E9%BE%99&assets_type=ticker",
    // },
    // {
    //   name: "Jades",
    //   icon: "💎",
    //   floorPrice: "2688888.00 sats",
    //   change: "-",
    //   volume: { btc: "0.0000", usd: "$0.00" },
    //   marketCap: { btc: "3.0922", usd: "$321901.44" },
    //   sales: 0,
    //   holders: 10,
    //   listings: 3,
    //   assetLink: "https://app.ordx.market/ordx/ticker/?ticker=jades&assets_type=ticker",
    // },
  ];

  const handleRowClick = (assetLink) => {
    window.open(assetLink, "_blank");
  };

  return (
    <section className="w-full mx-auto my-8 sm:my-16">
      <div className="container mx-auto p-4 bg-black text-white">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-white">
          {locale.assets_hot.title}
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          {locale.assets_hot.desc} 
        </p>
       
     
      <HotAssets />
   
        {/* <div className=" p-4 bg-black text-white border border-zinc-800 rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full table-auto text-sm sm:text-base mt-4">
          <thead>
            <tr className="text-left text-base whitespace-nowrap text-zinc-400 sm:text-xl border-b border-gray-700">
              <th className="py-2 px-3">Assets Name</th>
              <th className="py-2 px-3">Floor Price</th>
              <th className="py-2 px-3">Change</th>
              <th className="py-2 px-3">Volume</th>
              <th className="py-2 px-3">Market Cap</th>
              <th className="py-2 px-3">Sales</th>
              <th className="py-2 px-3">Holders</th>
              <th className="py-2 px-3">Listings</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, idx) => (
               <tr
               key={idx}
               className="border-b border-gray-800 last:border-b-0 hover:bg-gray-900 transition cursor-pointer whitespace-nowrap"
               onClick={() => handleRowClick(asset.assetLink)}
               title="点击查看详情"
             >
                <td className="py-2 px-3 flex justify-start items-center gap-2">
                  <span className="text-xl mt-2">{asset.icon}</span>
                  <span className="mt-2">{asset.name}</span>
                </td>
                <td className="py-2 px-3">{asset.floorPrice}</td>
                <td className="py-2 px-3 text-green-400">{asset.change}</td>
                <td className="py-2 px-3">
                  <Icon icon="cryptocurrency:btc" className="inline-block text-orange-500/90 w-5 h-5 mr-1" />
                  {asset.volume.btc} <br />
                  <span className="text-xs text-gray-400">{asset.volume.usd}</span>
                </td>
                <td className="py-2 px-3">
                  <Icon icon="cryptocurrency:btc" className="inline-block text-orange-500/90 w-5 h-5 mr-1" />
                  {asset.marketCap.btc} <br />
                  <span className="text-xs text-gray-400">{asset.marketCap.usd}</span>
                </td>
                <td className="py-2 px-3">{asset.sales}</td>
                <td className="py-2 px-3">{asset.holders}</td>
                <td className="py-2 px-3">{asset.listings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      </div>
    </section>
  );
};

export default AssetTable;
