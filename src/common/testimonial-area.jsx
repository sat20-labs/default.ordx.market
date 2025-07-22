import testimonial_data from '@/src/data/testimonial-data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from "../components/context/LanguageContext";

const testimonial_content = {
   bg_img: "/assets/img/testimonial/testi-bg-5-1.jpg",
   sub_title: {
      en: "CLIENTS & PROJECTS",
      zh: "客户与项目"
   },
   title: {
      en: <>About Customer <span>Stories</span></>,
      zh: <>关于客户<span>故事</span></>
   },
}
const { bg_img, sub_title, title } = testimonial_content

const testimonials = [
   {
      name: {
         en: "Alice",
         zh: "爱丽丝"
      },
      content: {
         en: "This platform is amazing! I can trade Satoshi assets easily.",
         zh: "这个平台太棒了！我可以轻松交易聪资产。"
      }
   },
   {
      name: {
         en: "Bob",
         zh: "鲍勃"
      },
      content: {
         en: "The launch pool feature is very convenient.",
         zh: "发射池功能非常方便。"
      }
   }
];

// setting 
const setting = {
   loop: true,
   slidesPerView: 4,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '768': {
         slidesPerView: 3,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },
   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
   navigation: {
      nextEl: '.test-prev',
      prevEl: '.test-next',
   },
}

const TestimonialArea = () => {

   const { lang } = useLanguage();
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };

   return (
      <>
         <div className="tp-testimonial-area pt-130 pb-130 fix"
            style={{ backgroundImage: `url(${bg_img})` }}
         >
            <div className="container">
               <div className="row align-items-end tp-testimonial-five-section-space">
                  <div className="col-md-8">
                     <div className="tp-testimonial-five-section-box">
                        <span className="tp-section-subtitle-5">{sub_title[lang]}</span>
                        <h3 className="tp-section-title-5">{title[lang]}</h3>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
                        <div className="test-next">
                           <button><i className="far fa-arrow-left"></i></button>
                        </div>
                        <div className="test-prev">
                           <button><i className="far fa-arrow-right"></i></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-12">
                     <div className="tp-testimonial-five-slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""
                              }`}>
                           {testimonial_data.slice(12, 25).map((item, i) =>
                              <SwiperSlide key={i} className="tp-testimonial-five-item">
                                 <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                                    <div className="tp-testimonial-five-top-info d-flex align-items-center">
                                       <div className="tp-testimonial-five-avata">
                                          <Image src={item.author_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-testimonial-five-author-info">
                                          <h4>{item.name}</h4>
                                          <span>{item.title}</span>
                                       </div>
                                    </div>
                                    <div className="tp-testimonial-five-brand d-none d-sm-block">
                                       <Image src={item.brand_icon} alt="theme-pure" />
                                    </div>
                                 </div>
                                 <div className="tp-testimonial-five-content">
                                    <p>{item.description}</p>
                                 </div>
                              </SwiperSlide>
                           )
                           }
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <section className="py-16 bg-zinc-900 text-white">
            <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold mb-8 text-center">
                  {lang === "zh" ? "用户评价" : "Testimonials"}
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((item, idx) => (
                     <div key={idx} className="bg-zinc-800 rounded-xl p-6 shadow">
                        <div className="text-lg mb-4">{item.content[lang]}</div>
                        <div className="font-semibold text-blue-400">{item.name[lang]}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default TestimonialArea;