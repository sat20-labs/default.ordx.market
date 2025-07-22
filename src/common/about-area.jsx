import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import en from "../../locales/en";
import zh from "../../locales/zh";
import { useLanguage } from "../components/context/LanguageContext";

// images import 
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png"
import about_img_2 from "../../public/assets/img/about/about-2.jpg"
import about_img_3 from "../../public/assets/img/about/about-1.jpg"
import about_img_4 from "../../public/assets/img/about/about-3.jpg"
import about_img_5 from "../../public/assets/img/about/about-5.png"

// about data
const about_data = [
    {
        id: 1, 
        cls: "bg-shape",
        img: about_img_1
    },
    {
        id: 2, 
        cls: "main-img z-index",
        img: about_img_2
    },
    {
        id: 3, 
        cls: "sub-img-1 d-none d-sm-block z-30",
        img: about_img_3
    },
    {
        id: 4, 
        cls: "sub-img-2 d-none d-sm-block",
        img: about_img_4
    },
    {
        id: 5, 
        cls: "sub-img-3 d-none d-sm-block z-20",
        img: about_img_5
    },
]

const AboutArea = () => {
    const { locale } = useLanguage();
    const { title, sub_title, des, about_list, btn_text } = locale.about;

    return (
        <>
            <div className="pt-16 pb-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        {/* 左侧图片组 */}
                        <div className="w-full sm:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end relative">
                            {about_data.map((item, i) => (
                                <div key={i} className={`absolute ${
                                    i === 0 ? 'left-0 top-0 w-32 h-32 opacity-30' :
                                    i === 1 ? 'left-1/2 top-1/4 w-64 h-64 z-10' :
                                    i === 2 ? 'left-20 top-2/3 w-24 h-24 z-20 hidden sm:block ' :
                                    i === 3 ? 'right-0 top-1/2 w-20 h-20 hidden sm:block' :
                                    i === 4 ? 'right-10 bottom-0 w-16 h-16 z-20 hidden sm:block' : ''
                                }`}>
                                    <Image src={item.img} alt="about" fill style={{objectFit:'contain'}} />
                                </div>
                            ))}
                            {/* 主图片居中显示 */}
                            <div className="relative z-20 w-64 h-64">
                                <Image src={about_data[1].img} alt="about-main" fill style={{objectFit:'cover', borderRadius:'1rem'}} />
                            </div>
                        </div>
                        {/* 右侧内容区 */}
                        <div className="w-full sm:w-1/2">
                            <div className="mb-6 ml-4">
                                <h4 className="text-lg font-semibold text-sky-600 mb-4"><span className='px-4 py-1 border border-zinc-500 bg-zinc-800/50 rounded-full'>{title}</span></h4>
                                <h3 className="text-5xl font-bold mb-4 text-zinc-200">{sub_title}</h3>
                                <p className="text-zinc-700 dark:text-zinc-300 mb-4">{des}</p>
                            </div>
                            <ul className="mb-6 ml-4 space-y-2">
                                {about_list.map((item, i) => (
                                    <li key={i} className="flex items-center py-4 text-lg font-bold text-zinc-200">
                                        <span className="inline-block mr-2 text-green-500">✔</span>{item}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <a className="inline-block py-2 px-6 rounded-lg bg-blue-600 text-white font-medium transition hover:bg-blue-700" href="https://ordx.market/market">
                                    <span>{btn_text}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;