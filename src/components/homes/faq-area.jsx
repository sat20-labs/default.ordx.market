import AnswerQuestion from '@/src/common/answer-question';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img from "../../../public/assets/img/faq-1.png" 
import { useLanguage } from "../context/LanguageContext";

const FaqArea = ({style_service}) => {
    const { locale } = useLanguage();
    const faq_content = locale.faq;

    return (
        <section className="faq-area pt-2 sm:pt-16 pb-16 bg-transparent relative">
            <div className="container mx-auto px-4">
                {/* <h2 className="text-3xl md:text-5xl font-bold text-start mb-8 text-white">{faq_content.title}</h2> */}
                <div className="flex flex-wrap -mx-4">
                    {/* 左侧内容区 */}
                    <div className="w-full lg:w-1/2 px-4 flex flex-col justify-start items-start">
                        <div className="relative">
                            <div className={`pb-5 ${style_service ? "font-semibold" : ""}`}>
                                {faq_content.sub_title && (
                                  <h4 className="mb-4 text-xl font-semibold text-sky-500">
                                    <span className="text-lg px-4 py-1 mr-2 border-2 border-zinc-800 gap-2 rounded-full">🔥
                                    {faq_content.sub_title}
                                    </span>
                                   </h4>
                                )}
                                <h3 className="text-3xl md:text-7xl font-bold m-4 text-zinc-200">{faq_content.title}</h3>
                                {faq_content.description && (
                                  <p className="text-zinc-600 text-xl dark:text-zinc-400 mb-6">{faq_content.description}</p>
                                )}
                            </div>
                            {faq_content.btn_text && (
                              <div className="mb-6">
                                  <Link className={`inline-block py-2 px-6 rounded-lg ${style_service ? "bg-orange-500 hover:bg-orange-600" : "bg-purple-600 hover:bg-purple-500"} text-white font-medium transition`} href="#">
                                      {faq_content.btn_text}
                                  </Link>
                              </div>
                            )}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 max-w-full mx-auto">
                                <Image src={img} alt="FAQ" fill style={{objectFit:'contain'}} />
                            </div>
                        </div>
                    </div>
                    {/* 右侧问答区 */}
                    <div className="w-full lg:w-1/2 px-4 flex items-center">
                        <AnswerQuestion /> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqArea;