// import { SocialLinksTwo } from '@/src/common/social-links';
import team_data from '@/src/data/team-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

const team_content = {
    sub_title: "Hot",
    title: "Join Communities",
    des: <>Our clients are the companies and startups who <br /> make the world go round,!</>,
}
const {sub_title, title, des}  = team_content

const CommunitiesArea = () => {
    return (
        <>
           <div className="bg-blue-900 pb-36">
               <div className="container mx-auto px-4">
                  <div className="mb-16">
                     <div className="flex flex-wrap items-end -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                           <div>
                              <h5 className="flex items-center gap-2 text-2xl font-semibold pb-2 mb-4 text-purple-500">
                                {sub_title}
                                <span className="ml-2 text-orange-500 text-2xl">🔥</span>
                              </h5>
                              <h3 className="text-2xl sm:text-5xl font-bold text-zinc-200">{title}</h3>
                           </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4" data-wow-duration=".9s" data-wow-delay=".5s">
                           <div className="flex justify-end md:justify-start">
                              <p className="text-blue-100">{des}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-wrap -mx-4">
                    {team_data.slice(0, 4).map((item, i)  => 
                        <div key={i} 
                          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-12 hover:scale-105 transition-transform duration-300 ease-in-out">
                           <div className="relative bg-zinc-800/50 hover:bg-zinc-800/80 rounded-xl shadow-xl hover:shadow-purple-600/30 border-2 border-zinc-700/50 hover:border-gray-500 text-center z-10 p-6 h-full flex flex-col items-center">
                              <div className="mb-4 w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200">
                                 <Image src={item.img} alt="theme-pure" className="object-cover w-full h-full" />
                              </div>
                              <div className="mb-2">
                                 <h4 className="text-2xl font-semibold text-zinc-300"><Link href={item.link}>{item.name}</Link></h4>
                                 <span className="text-lg text-zinc-400">{item.job_title}</span>                                 
                              </div>
                              <div className='pb-2'><Image src={item.h_img} alt="theme-pure" className="w-full h-full mx-auto" /> </div>
                              <div className="flex justify-center gap-3 mt-2 mb-4">
                                 <Link target='_blank' className='text-blue-400 hover:text-blue-600' href={item.x_link}>
                                    <Icon icon="akar-icons:twitter-fill" className='w-5 h-5' />
                                 </Link>
                                 <Link target='_blank' className='text-blue-500 hover:text-blue-700' href={item.tg_link}>
                                    <Icon icon="akar-icons:telegram-fill" className='w-5 h-5' />
                                 </Link>
                                 <Link target='_blank' className='text-indigo-500 hover:text-indigo-700' href={item.dc_link}>
                                    <Icon icon="akar-icons:discord-fill" className='w-5 h-5' />
                                 </Link>
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

export default CommunitiesArea;
