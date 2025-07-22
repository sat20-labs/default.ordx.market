import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from '@iconify/react';
import { useLanguage } from "../context/LanguageContext";
import fetchAssetData from "../../common/fetchAssetData";



export default function HotAssets() {
    const { locale } = useLanguage();
    const [pearlData, setPearlData] = useState(null);
    const [rarePizzaData, setRarePizzaData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const pearl = await fetchAssetData("pearl");
            const rarePizza = await fetchAssetData("rarepizza");
            setPearlData(pearl);
            setRarePizzaData(rarePizza);
        };

        fetchData();
    }, []);

    if (!pearlData || !rarePizzaData) {
        return <div>Loading...</div>;
    }

    // const hotAssets = [
    //     {
    //         title: locale.assets_hot.pearl_title,
    //         subtitle: locale.assets_hot.pearl_subtitle,
    //         gradientFrom: "#4CA5FF",
    //         gradientTo: "#B673F8",
    //         dotColor: "bg-blue-300",
    //         assetLogo: "/assets/img/logo/pearl.png",
    //         assetLink: "https://app.ordx.market/ordx/ticker/?ticker=pearl&assets_type=ticker",
    //         stats: [
    //             { label: "FLOOR PRICE", value: `${pearlData.lowestPrice}, value_u: "", color: "bg-blue-400" },
    //             { label: "TOTAL SALES", value: "33.76 BTC", value_u: "$3.50 M", color: "bg-purple-400" },
    //             { label: "MARKET CAP", value: "67.16 BTC", value_u: "$6.97 M", color: "bg-emerald-400" },
    //             { label: "HOLDERS", value: "1974", value_u: "", color: "bg-pink-400" },
    //         ],
    //     },
    //     {
    //         title: locale.assets_hot.rarepizza_title,
    //         subtitle: locale.assets_hot.rarepizza_subtitle,
    //         gradientFrom: "#FFC700",
    //         gradientTo: "#FF4BC0",
    //         dotColor: "bg-yellow-300",
    //         assetLogo: "/assets/img/logo/rarepizza.png",
    //         assetLink: "https://app.ordx.market/ordx/ticker/?ticker=rarepizza&assets_type=ticker",
    //         stats: [
    //             { label: "FLOOR PRICE", value: "5.00 sats", value_u: "", color: "bg-yellow-400" },
    //             { label: "TOTAL SALES", value: "4.9 BTC", value_u: "$50.89 K", color: "bg-pink-400" },
    //             { label: "MARKET CAP", value: "5.00 BTC", value_u: "$514.23 K", color: "bg-cyan-400" },
    //             { label: "HOLDERS", value: "6037", value_u: "", color: "bg-indigo-400" },
    //         ],
    //     },

    // ];

    // console.log("Pearl Data:", pearlData);
    // console.log("Rare Pizza Data:", rarePizzaData);
    const hotAssets = [
        {
            title: locale.assets_hot.pearl_title,
            subtitle: locale.assets_hot.pearl_subtitle,
            gradientFrom: "#4CA5FF",
            gradientTo: "#B673F8",
            dotColor: "bg-blue-300",
            assetLogo: "/assets/img/logo/pearl.png",
            assetLink: `https://app.ordx.market/ordx/ticker/?ticker=pearl&assets_type=ticker`,
            stats: [
                { label: "FLOOR PRICE", value: `${pearlData.lowestPrice} sats`, color: "bg-blue-400" },
                { label: "TOTAL SALES", value: `${pearlData.transactionVolume.toFixed(2)} BTC`, color: "bg-purple-400" },
                { label: "MARKET CAP", value: `${(pearlData.marketCap / 100000000).toFixed(2)} BTC`, color: "bg-emerald-400" },
                { label: "HOLDERS", value: `${pearlData.holderCount}`, color: "bg-pink-400" },
            ],
        },
        {
            title: locale.assets_hot.rarepizza_title,
            subtitle: locale.assets_hot.rarepizza_subtitle,
            gradientFrom: "#FFC700",
            gradientTo: "#FF4BC0",
            dotColor: "bg-yellow-300",
            assetLogo: "/assets/img/logo/rarepizza.png",
            assetLink: `https://app.ordx.market/ordx/ticker/?ticker=rarepizza&assets_type=ticker`,
            stats: [
                { label: "FLOOR PRICE", value: `${rarePizzaData.lowestPrice} sats`, color: "bg-yellow-400" },
                { label: "TOTAL SALES", value: `${rarePizzaData.transactionVolume.toFixed(2)} BTC`, color: "bg-pink-400" },
                { label: "MARKET CAP", value: `${(rarePizzaData.marketCap / 100000000).toFixed(2)} BTC`, color: "bg-cyan-400" },
                { label: "HOLDERS", value: `${rarePizzaData.holderCount}`, color: "bg-indigo-400" },
            ],
        },
    ];

    return (
        <section className="w-full bg-transparent flex flex-col items-center pt-1 sm:pt-6 px-2 relative overflow-hidden">
            <div className="container mx-auto px-4 py-4 sm:py-16 bg-transparent text-white border border-gray-800 rounded-3xl shadow-2xl">
                <h2 className="text-4xl sm:text-6xl font-bold text-center mt-4 sm:mt-10 mb-6 text-zinc-200">
                    {locale.assets_hot.title}
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
                    {locale.assets_hot.desc}
                </p>
                <div className="bg-black/50 p-2 sm:p-6 rounded-xl">
                    <h2 className="text-white text-2xl font-semibold mb-6 flex items-center gap-2">
                        🔥 Hot Assets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hotAssets.map((asset, idx) => (
                            <div
                                key={idx}
                                className="bg-neutral-900 rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/50 transition-transform transform ease-in-out duration-700"
                            >
                                <div className="relative h-96 sm:h-72">
                                    <svg
                                        viewBox="0 0 500 100"
                                        preserveAspectRatio="none"
                                        className="absolute top-0 left-0 w-full h-full"
                                    >
                                        <defs>
                                            <linearGradient
                                                id={`gradient-${idx}`}
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop offset="0%" stopColor={asset.gradientFrom} />
                                                <stop offset="100%" stopColor={asset.gradientTo} />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0,30 C150,80 350,0 500,50 L500,00 L0,0 Z"
                                            fill={`url(#gradient-${idx})`}
                                        />
                                    </svg>

                                    <div className="relative z-10 p-1 pt-3 sm:p-5">
                                        <h2 className="text-white text-2xl sm:text-3xl font-semibold mx-2 mb-2 sm:mx-8">{asset.title}</h2>
                                        <p className="text-blue-800 text-sm mx-2 sm:mx-8">{asset.subtitle}</p>
                                    </div>

                                    <div className="absolute top-[40%] right-6 z-10">
                                        <div className="h-12 w-1 bg-white/30 mx-auto"></div>
                                        <div
                                            className={cn("w-4 h-4 rounded-full shadow-lg", asset.dotColor)}
                                        />
                                    </div>
                                    <div className="absolute top-[60%] sm:top-[48%] w-full z-10 flex justify-between items-center gap-2">
                                        <span className="pl-6 sm:pl-16">
                                            <a
                                                href={asset.assetLink}
                                                className="px-2 sm:px-6 py-3 w-24 sm:w-48 items-center bg-gradient-to-r opacity-90 hover:opacity-100 from-sky-600 to-fuchsia-600 text-white text-sm sm:text-lg font-medium rounded-lg hover:scale-110 shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 transition-transform duration-700">
                                                Trade Now <Icon icon="lucide:arrow-up-right" className="inline-block ml-2 w-5 h-5" />
                                            </a>
                                        </span>
                                        <span className="pr-12 sm:pr-20">
                                            <img
                                                src={asset.assetLogo}
                                                alt="Asset Preview"
                                                className="w-24 h-24 sm:w-32 sm:h-32 p-2 hover:scale-125 transition-transform duration-700 rounded-full shadow-md"
                                            />
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 text-center text-white py-4 px-2 bg-neutral-900">
                                    {asset.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-xs text-white/60">{stat.label}</div>
                                            <div className="flex flex-col items-center text-lg ">
                                                <span className="font-bold ">{stat.value}</span>
                                                <span className="font-normal text-xs text-zinc-400 h-6">{stat.value_u}</span>
                                            </div>
                                            <div className="h-1 mt-1 rounded-full w-3/4 mx-auto mb-2">
                                                <div className={cn("h-1 w-full rounded-full", stat.color)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
