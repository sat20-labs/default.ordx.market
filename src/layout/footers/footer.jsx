import { CopyRight } from '@/src/common/social-links';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const footer_content = {
    address: <>1811 Silverside Rd, Wilmington,<br />DE 19810, USA</>,
    phone: "+806(000)8899",
    email: "contact@info.com",
    download: "Download App", 
    footer_lisks : [
        {
            id: 1,
            cls: "footer-col-2-2", 
            title: "Solutions",
            delay: ".5s",
            links: [
                {name: "Payments", link: "#"},
                {name: "Advances", link: "#"},
                {name: "Online Checkout", link: "#"},
                {name: "Dashboard", link: "#"},
                {name: "Get Started", link: "#"}, 
            ]
        },
        {
            id: 2,
            cls: "footer-col-2-3", 
            title: "Other Pages",
            delay: ".7s",
            links: [
                {name: "About", link: "/about"},
                {name: "Services", link: "/service"},
                {name: "How It Works", link: "#"},
                {name: "Pricing Plan", link: "/price"},
                {name: "Blog", link: "/blog"},
                {name: "Contact", link: "/contact"},
            ]
        },
    ],
    social_links : [
        {
          link: "http://x.com/SATSWAPMarket",
          target: "_blank",
          icon: "line-md:twitter-x-alt", 
        },
        {
          link: "https://t.me/ordxnals",
          target: "_blank",
          icon: "line-md:telegram", 
        },
    ], 
}

const {address, phone, email, footer_lisks, download, social_links} = footer_content

const FooterTwo = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleLanguage = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <footer className="bg-zinc-950 w-full text-white py-4 border-t border-zinc-800">
            <div className="container mx-auto px-4">
                {/* Footer widgets area - Commented out for now */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-zinc-700 pb-10">
                    <div className="transform transition-all duration-500 opacity-0 translate-y-10" style={{opacity: 1, transform: 'translateY(0)'}}>
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image src={footer_logo} alt="Ordx Market" className="h-10 w-auto" />
                            </Link>
                            <div>
                                <Link href="https://maps.google.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                    {address}
                                </Link>
                                <ul className="mt-4 space-y-3">
                                    <li className="flex items-center">
                                        <span className="mr-2 text-gray-400">
                                            <PhoneTwo />
                                        </span>
                                        <Link className="text-gray-300 hover:text-white transition-colors" href={`tel:${phone}`}>
                                            {phone}
                                        </Link>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 text-gray-400">
                                            <EmailTwo />
                                        </span>
                                        <Link className="text-gray-300 hover:text-white transition-colors" href={`mailto:${email}`}>
                                            {email}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {footer_lisks.map((item, i) => (
                        <div key={i} className="transform transition-all duration-500 opacity-0 translate-y-10" style={{opacity: 1, transform: 'translateY(0)', transitionDelay: item.delay}}>
                            <div>
                                <h4 className="text-lg font-bold mb-5">{item.title}</h4>
                                <div>
                                    <ul className="space-y-3">
                                        {item.links.map((link, i) => (
                                            <li key={i}>
                                                <Link href={link.link} className="text-gray-300 hover:text-white transition-colors">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="transform transition-all duration-500 opacity-0 translate-y-10" style={{opacity: 1, transform: 'translateY(0)', transitionDelay: '.9s'}}>
                        <div>
                            <h4 className="text-lg font-bold mb-5">{download}</h4>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <Link href="#"><Image src={qr_code} alt="QR Code" className="w-24 h-auto" /></Link>
                                </div>
                                <div className="space-y-4">
                                    <Link href="#" className="block"><Image src={i_phone} alt="App Store" className="w-32 h-auto" /></Link>
                                    <Link href="#" className="block"><Image src={google_ply} alt="Google Play" className="w-32 h-auto" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                {/* Footer copyright area */}
                <div className="py-2 bg-transparent">
                    <div className="flex flex-col items-center justify-between">
                        {/* Social links */}
                        <div className="flex space-x-4">
                            {social_links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.link}
                                    target={link.target || ""}
                                    className="w-10 h-10 rounded-full bg-zinc-800/50 hover:bg-zinc-700 flex items-center justify-center"
                                >
                                    <Icon icon={link.icon} className='w-5 h-5 text-zinc-500 hover:text-zinc-300'/>
                                    
                                </Link>
                            ))}
                        </div>
                        
                        {/* Copyright text */}
                        <div className="my-2 md:mb-0 text-center text-sm text-gray-500">
                            <span><CopyRight /></span>
                        </div>
                        
                        {/* Language selector */}
                        {/* <div className="relative">
                            <button 
                                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-md bg-zinc-700 hover:bg-zinc-700"
                                onClick={toggleLanguage}
                            >
                                <span>English (US)</span>
                                <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            
                            {isOpen && (
                                <ul className="absolute right-0 mt-1 py-2 w-36 bg-zinc-800 rounded-md shadow-lg z-10">
                                    <li>
                                        <Link 
                                            href="#" 
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700 hover:text-white transition-colors"
                                        >
                                            Chinese
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTwo;
