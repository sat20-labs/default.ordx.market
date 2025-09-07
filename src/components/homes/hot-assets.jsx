import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from '@iconify/react';
import { useLanguage } from "../context/LanguageContext";
import fetchAssetData from "../../common/fetchAssetData";
import fetchSatswapData from "../../common/fetchSatswapData";
// Add Swiper for carousel in the second card
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HotAssets() {
    const { locale } = useLanguage();
    const [pearlData, setPearlData] = useState(null);
    const [rarePizzaData, setRarePizzaData] = useState(null);
    const [satswapRows, setSatswapRows] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const [pearl, rarePizza] = await Promise.all([
                fetchAssetData("pearl"),
                fetchAssetData("rarepizza"),
            ]);
            setPearlData(pearl);
            setRarePizzaData(rarePizza);

            const keys = [
                "ordx:f:ordxsat",
                "ordx:f:satdog",
                "ordx:f:satcat",
                "runes:f:SATS•SATSWAP•SATOSHINET",
            ];
            const rows = await fetchSatswapData(keys);
            setSatswapRows(rows);
        };

        fetchData();
    }, []);

    const formatNum = (n, digits = 4) => {
        if (n === null || n === undefined || isNaN(Number(n))) return "-";
        const val = Number(n);
        if (val >= 1000) return Math.round(val).toLocaleString();
        return val.toFixed(digits);
    };

    if (!pearlData || !rarePizzaData) {
        return <div>Loading...</div>;
    }

    // Build slides for ORDX carousel
    const ordxSlides = [
        {
            key: 'pearl',
            title: locale.assets_hot.pearl_title,
            subtitle: locale.assets_hot.pearl_subtitle,
            gradientFrom: "#4CA5FF",
            gradientTo: "#B673F8",
            dotColor: "bg-blue-300",
            assetLogo: "/assets/img/logo/pearl.png",
            assetLink: `https://app.ordx.market/ordx/ticker/?ticker=pearl&assets_type=ticker`,
            displayName: pearlData?.name || 'Pearl',
            stats: [
                { label: "FLOOR PRICE", value: `${pearlData.lowestPrice} sats`, color: "bg-blue-400" },
                { label: "TOTAL SALES", value: `${pearlData.transactionVolume.toFixed(2)} BTC`, color: "bg-purple-400" },
                { label: "MARKET CAP", value: `${(pearlData.marketCap / 100000000).toFixed(2)} BTC`, color: "bg-emerald-400" },
                { label: "HOLDERS", value: `${pearlData.holderCount}`, color: "bg-pink-400" },
            ],
        },
        {
            key: 'rarepizza',
            title: locale.assets_hot.rarepizza_title,
            subtitle: locale.assets_hot.rarepizza_subtitle,
            gradientFrom: "#FFC700",
            gradientTo: "#FF4BC0",
            dotColor: "bg-yellow-300",
            assetLogo: "/assets/img/logo/rarepizza.png",
            assetLink: `https://app.ordx.market/ordx/ticker/?ticker=rarepizza&assets_type=ticker`,
            displayName: rarePizzaData?.name || 'RarePizza',
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
                <p className="text-center text-gray-400 max-w-4xl mx-auto mb-10 text-base sm:text-lg">
                    {locale.assets_hot.desc}
                </p>
                <div className="bg-black/50 p-2 sm:p-6 rounded-xl">
                    <h2 className="text-white text-2xl font-semibold mb-6 flex items-center gap-2">
                        🔥 Hot Assets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* SATSWAP Market List (Card 1) */}
                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/50 transition-transform transform ease-in-out duration-700">
                            <div className="relative h-28 md:h-40">
                                <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
                                    <defs>
                                        <linearGradient id={`gradient-satswap`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#00C6FF" />
                                            <stop offset="100%" stopColor="#0072FF" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,30 C150,80 350,0 500,50 L500,00 L0,0 Z" fill={`url(#gradient-satswap)`} />
                                </svg>
                                <div className="relative z-10 p-1 pt-4">
                                    <h2 className="text-white text-2xl sm:text-3xl font-semibold mx-2 mb-4 sm:mb-12 sm:mx-8">{locale.satswap?.title || 'SATSWAP Market'}</h2>
                                    <p className="text-zinc-400 text-xs sm:text-sm mx-2 sm:mx-8">{locale.satswap?.desc || 'Layer2 DEX Market List'}</p>
                                </div>
                            </div>
                            <div className="p-3 -mt-4">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left">
                                        <thead>
                                            <tr className="text-xs uppercase text-white/60">
                                                {/* <th className="py-2 px-2">Pair</th> */}
                                                <th className="py-2 px-2">Ticker</th>
                                                <th className="py-2 px-2">Price</th>
                                                <th className="py-2 px-2">24h Vol</th>
                                                <th className="py-2 px-2">Trade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(satswapRows && satswapRows.length ? satswapRows : [
                                                { name: 'ORDXSAT', price: null, vol24h: null, live: false },
                                                { name: 'SATDOG', price: null, vol24h: null, live: false },
                                                { name: 'SATCAT', price: null, vol24h: null, live: false },
                                                { name: 'SATS•SATSWAP•SATOSHINET', price: null, vol24h: null, live: false },
                                            ]).map((row, i) => (
                                                <tr key={i} className="border-t border-white/5">
                                                    {/* <td className="py-3 px-2 font-medium">{row.pair}</td> */}
                                                    <td className="py-3 px-2 text-white/90 text-xs">
                                                        <div className="flex items-center gap-2">
                                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-700/50 text-white text-base font-bold">
                                                                {(row?.name && String(row.name).trim().charAt(0).toUpperCase()) || "?"}
                                                            </span>
                                                            <span>{row.nameWithProtocol || row.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-2 text-sm text-white/80">{row.price == null ? '-' : `${formatNum(row.price, 4)} `}<span className="text-zinc-500 text-sm">sats</span></td>
                                                    <td className="py-3 px-2 text-sm text-white/80">{row.vol24h == null ? '-' : `${formatNum(row.vol24h / 1e8, 4)} `} <span className="text-zinc-500 text-sm"> BTC</span></td>
                                                    <td className="py-3 px-2">
                                                        {row.live ? (
                                                            <a
                                                                href={`https://satsnet.ordx.market/swap/detail/?asset=${encodeURIComponent(row.key)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded text-emerald-300 bg-emerald-900/40 hover:bg-emerald-800/50 transition"
                                                            >
                                                                Trade
                                                            </a>
                                                        ) : (
                                                            <span className={`inline-flex items-center gap-2 text-xs px-2 py-1 rounded text-zinc-300 bg-zinc-800/70`}>
                                                                {locale.launchpool?.btn || 'Coming soon'}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* ORDX Market Carousel (Card 2) */}
                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-xl hover:shadow-sky-500/50 transition-transform transform ease-in-out duration-700">
                            {/* Static header for ORDX Market */}
                            <div className="relative h-28 md:h-40">
                                <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full">
                                    <defs>
                                        <linearGradient id={`gradient-ordx-static`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#F97316" />
                                            <stop offset="100%" stopColor="#22D3EE" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,30 C150,80 350,0 500,50 L500,00 L0,0 Z" fill={`url(#gradient-ordx-static)`} />
                                </svg>
                                <div className="relative z-10 p-1 pt-4">
                                    <h2 className="text-white text-2xl sm:text-3xl font-semibold mx-2 mb-4 sm:mb-12 sm:mx-8">{locale.ordx?.title || 'ORDX Market (L1 DEX)'}</h2>
                                    <p className="text-zinc-400 text-xs sm:text-sm mx-2 sm:mx-8">{locale.ordx?.desc || 'Layer1 Bitcoin-native DEX'}</p>
                                </div>
                            </div>

                            {/* Only rotate the asset info below */}
                            <div className="p-3 -mt-4">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    loop
                                >
                                    {ordxSlides.map((asset, idx) => (
                                        <SwiperSlide key={asset.key}>
                                            {/* Asset name */}
                                            <div className="mb-0 pl-2 sm:pl-4">
                                                {/* <span className="text-white/60 text-xs mr-2">Asset</span> */}
                                                <span className="text-white text-lg font-semibold">{asset.displayName}</span>
                                            </div>
                                            {/* Top row: CTA and logo */}
                                            <div className="w-full flex justify-between items-center gap-2 mb-8">
                                                <span className="pl-2 sm:pl-4">
                                                    <a
                                                        href={asset.assetLink}
                                                        className="px-3 sm:px-6 py-3 bg-gradient-to-r opacity-90 hover:opacity-100 from-sky-600 to-fuchsia-600 text-white text-sm sm:text-lg font-medium rounded-lg hover:scale-105 shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 transition-transform duration-300">
                                                        Trade Now <Icon icon="lucide:arrow-up-right" className="inline-block ml-2 w-5 h-5" />
                                                    </a>
                                                </span>
                                                <span className="pr-4 sm:pr-6">
                                                    <img
                                                        src={asset.assetLogo}
                                                        alt="Asset Preview"
                                                        className="w-16 h-16 sm:w-24 sm:h-24 p-2 rounded-full shadow-md"
                                                    />
                                                </span>
                                            </div>

                                            {/* Stats */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 text-center text-white py-6 px-2 bg-neutral-900">
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
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
