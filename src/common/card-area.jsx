import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import card_img_1 from "../../public/assets/img/card/card-bg.png";
import card_img_2 from "../../public/assets/img/card/card-shape-1.png";
import card_img_3 from "../../public/assets/img/card/card-img-1.png";
import card_img_4 from "../../public/assets/img/card/card-img-2.png";
import card_img_5 from "../../public/assets/img/card/card-img-3.png";
import card_img_6 from "../../public/assets/img/card/card-img-4.png";

const card_content = {
    card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: card_img_1,
        },
        {
            id: 2,
            cls: "img-1",
            data_parallax: "",
            img: card_img_2,
            hidden: true,
        },
        {
            id: 3,
            cls: "img-2",
            data_parallax: '{"x": 50, "smoothness": 30}',
            img: card_img_3,
            hidden: true,
        },
        {
            id: 4,
            cls: "img-3",
            data_parallax: '{"x": -50, "smoothness": 30}',
            img: card_img_4,
            hidden: true,
        },
        {
            id: 5,
            cls: "img-4",
            data_parallax: "",
            img: card_img_5,
            hidden: true,
        },
        {
            id: 6,
            cls: "img-5",
            data_parallax: "",
            img: card_img_6,
            hidden: true,
        },
    ],

    title: <>Manage <span>All your Cards</span> in one Place</>,
    description: <>Digital products are where it's at! There are so many benefits
    to selling digital products. It's easy to get started and they <br />
    can be extremely profitable</>,
    btn_text: "Get Started Free"
}
const {card_images, title, description, btn_text} = card_content

const CardArea = ({style_service}) => {
    return (
        <>
        <div className="py-32 md:py-44">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="relative">
                            {card_images.map((item, i) => 
                                <div 
                                    key={i} 
                                    className={`tp-card-${item.cls} ${item.hidden ? 'hidden sm:block' : ''}`} 
                                    data-parallax={item.data_parallax}
                                >
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="mt-10 lg:mt-0">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
                            <p className="text-gray-600 mb-6">{description}</p>
                            <Link 
                                className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} inline-block py-3 px-8 rounded-lg bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 relative`} 
                                href="/service-details"
                            >
                                <span>{btn_text}</span>
                                <b className="absolute"></b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CardArea;