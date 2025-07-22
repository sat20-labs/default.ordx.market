'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Sat20Wallet from './wallet-area';
import clsx from "clsx";
import { useLanguage } from "../context/LanguageContext";
import en from "../../locales/en";
import zh from "../../locales/zh";

const HomeAnimation = () => {
    const { lang } = useLanguage();
    const locale = lang === "zh" ? zh : en;

    const [step, setStep] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(prev => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const blockCount = isMobile ? 4 : 8;

    const flows = [
        { id: 'ordx', color: '#F7931A', label: locale.transcend.ordx, position: 'left' },
        { id: 'runes', color: '#29B6F6', label: locale.transcend.runes, position: 'left' },
        { id: 'brc20', color: '#AB47BC', label: locale.transcend.brc20, position: 'right' },
        { id: 'ordinals', color: '#66BB6A', label: locale.transcend.ordinals, position: 'right' },
    ];

    const appNames = [
        { name: locale.transcend.satswap, icon: 'lucide:chart-candlestick' },
        { name: locale.transcend.launchpool, icon: 'lucide:rocket' },
        { name: locale.transcend.swap, icon: 'mdi:cached' },
        { name: locale.transcend.gamefi, icon: 'mdi:gamepad-variant' },
        { name: locale.transcend.socialfi, icon: 'mdi:account-group' },
        { name: locale.transcend.dapps, icon: 'mdi:apps' },
    ];

    return (
        <section className="w-full bg-transparent flex flex-col items-center pt-1 sm:pt-6 px-2 relative overflow-hidden">
            <div className="container mx-auto px-1 sm:px-4 py-2 sm:py-16 opacity-80 hover:opacity-100 border border-gray-800 rounded-3xl shadow-2xl bg-no-repeat bg-bottom bg-contain bg-[url('/assets/img/bg-foot.png')]">
                <div className="flex flex-col items-center justify-center h-full bg-transparent text-zinc-100 py-2 sm:px-10 ">
                    <div className="text-center mt-8">
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                            {locale.transcend.title}
                        </h2>
                        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                            {locale.transcend.desc}
                        </p>
                    </div>
                    <div className="relative top-[40px] w-full max-w-7xl flex justify-between items-center px-2 py-10 sm:py-6 border border-dashed border-zinc-500 rounded-3xl">
                        {appNames.map((app, index) => (
                            <div key={index} className="flex flex-col items-center px-1">
                                <span className="flex justify-center items-center text-sm font-bold text-zinc-100 sm:px-5 sm:py-4 bg-gradient-to-br from-blue-500/50 to-purple-500/60 rounded-full">
                                    <Icon icon={app.icon} className="w-6 h-6 sm:w-8 sm:h-8 m-3 sm:m-2 sm:mr-2 text-zinc-50" />
                                    <span className="hidden sm:inline">{app.name}</span> {/* Hide name on mobile */}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="relative top-[30px] w-full max-w-7xl flex justify-between items-center px-2 sm:px-10 mt-6">
                        {appNames.map((app, index) => (
                            <div key={index} className="flex flex-col items-center px-2">
                                <Icon
                                    icon="material-symbols:arrow-warm-up"
                                    className="w-8 h-8 mt-8 sm:mt-4 text-sky-500"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full max-w-7xl h-[600px] px-0 sm:px-10 rounded-xl">
                        {/* Distributed Items Above SatoshiNet */}
                        <div className="absolute left-[12px] sm:left-[12px] top-[100px] sm:top-[95px] flex justify-start text-base sm:text-xl font-bold text-white mt-4 text-center z-10">
                            <span className='text-xs font-normal text-zinc-400 px-3 py-2 border border-zinc-500 rounded-lg'> {locale.transcend.l2}</span>
                            <span className='mx-3 mt-1 text-zinc-500'>{locale.transcend.satoshinet} </span>
                        </div>

                        {/* SatoshiNet (L2) */}
                        <div className="absolute flex flex-col items-center justify-start w-full left-1/2 top-[65px] sm:top-10 transform -translate-x-1/2 px-3 py-6">
                            <div className="border-zinc-600 border-[2px] rounded-3xl w-full">
                                <div className="bg-zinc-900 rounded-3xl w-full">
                                    <div className="rounded-3xl px-4 py-6 w-full overflow-hidden z-50">
                                        <motion.div
                                            className={clsx(
                                                "grid gap-1 sm:gap-4 w-full px-1 sm:px-4",
                                                isMobile ? "grid-cols-4" : "grid-cols-8"
                                            )}
                                            animate={{ x: ['-90%', '110%'] }} // Change direction to move right
                                            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                                        >
                                            {Array.from({ length: blockCount }).map((_, index) => (
                                                <div
                                                    key={`l2-block-${index}`}
                                                    className="h-12 w-12 sm:h-20 sm:w-20 bg-gradient-to-t from-blue-500/60 to-green-600/60 rounded-lg shadow-md flex items-center justify-center text-zinc-300 text-sm font-bold"
                                                >
                                                    <span className='hidden sm:inline'>{locale.transcend.block}</span> {blockCount - index}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* MainNet (L1) */}
                        <div className="absolute flex flex-col items-center justify-end w-full left-1/2 top-[380px] transform -translate-x-1/2 px-3 py-6">
                            <div className="border-zinc-600 border-[2px] rounded-3xl w-full">
                                <div className="bg-zinc-900 rounded-3xl w-full">
                                    <div className="rounded-3xl px-4 py-6 w-full overflow-hidden">
                                        <motion.div
                                            className={clsx(
                                                "grid gap-1 sm:gap-4 w-full px-1 sm:px-4 z-50",
                                                isMobile ? "grid-cols-4" : "grid-cols-8"
                                            )}
                                            animate={{ x: ['-50%', '50%'] }} // Change direction to move right
                                            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                                        >
                                            {Array.from({ length: blockCount }).map((_, index) => (
                                                <div
                                                    key={`l1-block-${index}`}
                                                    className="h-12 w-12 sm:h-20 sm:w-20 bg-gradient-to-t from-blue-500/60 to-purple-500/60 rounded-lg shadow-md flex items-center justify-center text-zinc-300 text-sm font-bold"
                                                >
                                                    <span className='hidden sm:inline'>{locale.transcend.block}</span> {blockCount - index}
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-[12px] sm:left-[12px] bottom-[58px] sm:bottom-[68px] flex justify-start text-base sm:text-xl font-bold text-white mt-4 text-center">                               
                                <span className='text-xs font-normal text-zinc-400 px-3 py-2 border border-zinc-500 rounded-lg'> {locale.transcend.l1}</span>
                                <span className='mx-4 mt-1 text-zinc-500'>{locale.transcend.mainnet} </span>
                            </div>

                        </div>


                        {/* Flows */}
                        {flows.map((asset, index) => (
                            <React.Fragment key={asset.id}>
                                {/* Dashed Line */}
                                <motion.div
                                    className="absolute border-l-2 border-dashed border-gray-300"
                                    style={{
                                        height: '210px',
                                        left: asset.position === 'left' ? `${5 + index * 15}%` : `${67 + (index - 2) * 15}%`,
                                        top: 190,
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                />
                                {/* Asset */}
                                <motion.div
                                    className="absolute text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full text-white border border-gray-300 shadow-md"
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{
                                        y: step === index ? 260 : 0,
                                        opacity: step === index ? 0.8 : 0.5,
                                    }}
                                    transition={{ duration: 1 }}
                                    style={{
                                        left: asset.position === 'left' ? `${8 + index * 15}%` : `${68 + (index - 2) * 15}%`,
                                        top: 150,
                                        backgroundColor: asset.color,
                                    }}
                                >
                                    <span className="rotate-90 sm:rotate-0">{asset.label}</span>
                                </motion.div>
                                {/* 通道描述 */}
                                <div
                                    className="absolute text-sm font-bold text-zinc-200 transform -translate-x-1/2"
                                    style={{
                                        left: asset.position === 'left' ? `${12 + index * 15}%` : `${73 + (index - 2) * 15}%`,
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        writingMode: 'vertical-rl',
                                        textOrientation: 'upright',
                                    }}
                                >
                                    <span className='flex justify-center items-center rounded-sm'>
                                        <Icon icon="meteocons:pressure-high-fill" className="w-[5em] h-[5em] mb-6 items-center" />
                                        <Icon icon="lucide:zap" className="w-5 h-5 mb-2" /> {index + 1}
                                        <Icon icon="meteocons:pressure-low" className="w-[5em] h-[5em] mt-4" />
                                    </span>
                                </div>
                                {/* 灰色虚线 */}
                                <motion.div
                                    className="absolute border-l-2 border-dashed border-gray-300"
                                    style={{
                                        height: '210px',
                                        left: asset.position === 'left' ? `${18 + index * 15}%` : `${79 + (index - 2) * 15}%`,
                                        top: 190,
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                />
                            </React.Fragment>
                        ))}

                        {/* Lightning Channel */}
                        <motion.div
                            className={clsx(
                                "absolute left-0 top-1/2  transform -translate-x-1/2 text-sm px-4 py-4 border-y-4 border-b-sky-400 border-t-gray-800/50 rounded-full bg-zinc-900/50 shadow-lg z-20",
                                isMobile ? "w-[98%] top-[255px]" : "w-[98%] top-[255px]"
                            )}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8 }}
                        >
                            <span className="flex justify-center items-center sm:text-xl font-normal text-sky-500">
                                <Icon icon="lucide:zap" className="w-10 h-10 text-center mr-2" /> {locale.transcend.lightning}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAnimation;
