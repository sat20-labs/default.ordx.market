import React from 'react';
import Image from 'next/image';
import { useLanguage } from "../context/LanguageContext";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

const HeroHomeLaunch = () => {
    const { locale } = useLanguage();

    return (
        <>
            <section className="relative w-full py-16 overflow-hidden bg-no-repeat bg-[length:99%_auto] sm:bg-top sm:bg-contain" style={{ backgroundImage: "url(/assets/img/bg-section.jpg)" }}>
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex sm:h-[750px] flex-col sm:flex-row items-center">
                        {/* Left Content */}
                        <div className="w-full sm:w-1/2 p-10 mb-12 lg:mb-0">
                            <div className="max-w-2xl">
                                <h1 className="text-5xl sm:text-7xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-sky-500 leading-10 mb-10">
                                    {locale.heroSection.title}
                                </h1>
                                <p className="text-lg text-gray-300 mb-8">
                                    {locale.heroSection.desc1}
                                    <span className="font-semibold text-sky-600">
                                        {locale.heroSection.highlight}
                                    </span>
                                    {locale.heroSection.desc2}
                                </p>
                                <div className='w-full mb-12 gap-2 sm:gap-4'>
                                    <div className="grid md:grid-cols-3 gap-2 sm:gap-4 text-left">
                                        <div className="mb-2 bg-transparent p-6 rounded-2xl bg-zinc-950 border border-purple-700 hover:border-purple-800 shadow-xl shadow-sky-500/10 hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-6">{locale.heroSection.card1Title}</h3>
                                            <p className="text-zinc-300 text-sm sm:text-sm">{locale.heroSection.card1Desc}</p>
                                        </div>
                                        <div className="mb-2 bg-transparent p-6 rounded-2xl bg-zinc-950 border border-purple-700 hover:border-purple-800 shadow-xl shadow-sky-500/10 hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{locale.heroSection.card2Title}</h3>
                                            <p className="text-zinc-300 text-sm sm:text-sm">{locale.heroSection.card2Desc}</p>
                                        </div>
                                        <div className="mb-2 bg-transparent p-6 rounded-2xl bg-zinc-950 border border-purple-700 hover:border-purple-800 shadow-xl shadow-sky-500/10 hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{locale.heroSection.card3Title}</h3>
                                            <p className="text-zinc-300 text-sm sm:text-sm">{locale.heroSection.card3Desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <a href="https://satsnet.ordx.market/launchpool/" className="px-1 sm:px-6 py-2 sm:py-3 w-36 sm:w-48 items-center bg-gradient-to-r opacity-90 hover:opacity-100 from-sky-600 to-fuchsia-600 text-white font-medium rounded-lg hover:scale-105 shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 transition duration-700">
                                        <span className="flex justify-center items-center mt-2 sm:mt-0 text-sm sm:text-base">
                                            <Icon icon="lucide:rocket" className="text-white w-5 h-5 mr-1 sm:mr-2" />
                                            {locale.popupBtn || "JOIN POOL"}
                                        </span>
                                    </a>
                                    <a href="https://satsnet.ordx.market/" className="px-1 sm:px-6 py-3 w-36 sm:w-48 bg-gray-900 text-white font-medium border border-gray-800 rounded-lg hover:scale-105 shadow-xl shadow-sky-600/15 hover:shadow-sky-500/50 transition duration-700">
                                        <span className="flex justify-center items-center mt-1 sm:mt-0 text-sm sm:text-base">
                                            <Icon icon="lucide:arrow-left-right" className="text-white w-5 h-5 mr-1 sm:mr-2" />
                                            {locale.transcend.satswap}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full sm:w-1/2 items-start sm:items-start sm:pr-10">
                            <div className="relative sm:w-[900px] h-[400px] sm:h-[800px] left-0 bg-no-repeat bg-bottom bg-cover sm:bg-contain" style={{ backgroundImage: "url(/assets/img/hero-section.png)" }}>

                                <div className='relative bg-transparent opacity-80 hover:opacity-100 ' >
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className=" drop-shadow-2xl hover:shadow-sky-500/50 "
                                    >
                                        <Image
                                            src="/assets/img/launch.png"
                                            alt="LaunchPool Hero"
                                            width={100}
                                            height={200}
                                            className="mx-auto w-[80px] sm:w-[160px]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-50 lg:opacity-100">
                    {/* <Image src="/assets/img/shape/shape-3.png" alt="Shape" width={200} height={200} /> */}
                </div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 opacity-50 lg:opacity-100">
                    {/* <Image src="/assets/img/shape/shape-4.png" alt="Shape" width={200} height={200} /> */}
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-10 opacity-30 lg:opacity-70">
                    {/* <Image src="/assets/img/shape/shape-1.png" alt="Shape" width={150} height={150} /> */}
                </div>
                <div className="absolute top-1/4 right-0 -mr-10 opacity-30 lg:opacity-70">
                    {/* <Image src="/assets/img/shape/shape-2.png" alt="Shape" width={150} height={150} /> */}
                </div>
            </section>
        </>
    );
}

export default HeroHomeLaunch;
