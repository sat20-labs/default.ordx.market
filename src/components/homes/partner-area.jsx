import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import partner_data from '@/src/data/partner-data';
import { useLanguage } from "../context/LanguageContext";

const PartnerArea = () => {
    const { locale, lang } = useLanguage();

    return (
        <>
            <div className="pt-10 sm:pt-16 pb-20 bg-transparent bg-no-repeat bg-cover sm:bg-center" style={{ backgroundImage: "url(/assets/img/bg-partner.jpg)" }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">{locale.partner.title}</h3>
                                <p className="text-zinc-400 text-xl">{locale.partner.des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {partner_data.map((item, i) =>
                            <div key={i} className="w-full md:w-1/2 xl:w-1/5 px-4 mb-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                                <div className="h-full  backdrop-blur-md flex flex-col items-center justify-between bg-gradient-to-tr from-gray-800/50 to-black/50 rounded-xl shadow-xl hover:shadow-sky-600/50 border-2 border-zinc-700/50 hover:border-sky-600 p-6 text-center z-10">
                                    <div className="relative flex items-center justify-center mb-2">
                                        <Image src={item.img} alt="partner" className="w-16 h-16 " />                                        
                                    </div>
                                    <div className='mb-4'>
                                        <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{item.title_zh && lang === 'zh' ? item.title_zh : item.title}</h4>
                                        <p className="text-zinc-600 dark:text-zinc-300 mb-4">{item.description_zh && lang === 'zh' ? item.description_zh : item.description}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <Link className="inline-block py-2 px-6 rounded-lg bg-purple-600 text-white font-medium transition hover:bg-purple-700" target='_blank' href={item.link}>{locale.partner.btn}</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerArea;