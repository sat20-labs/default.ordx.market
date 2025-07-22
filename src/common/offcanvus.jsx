import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
 
// images import 
import logo from "../../public/assets/img/logo/logo-black.png"

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <>
            <div className="fixed inset-0 z-[9999] pointer-events-none">
                <div className={`fixed top-0 right-0 w-[300px] h-full bg-zinc-900/90 text-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} pointer-events-auto`}>
                    <div className="p-5">
                        <button 
                            className="absolute top-5 right-5 text-white hover:text-green-400 transition-colors" 
                            onClick={() => setSidebarOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        
                        <div className="flex justify-center mb-8 pt-5 pb-3 border-b border-zinc-800">
                            <Link href="/" onClick={() => setSidebarOpen(false)}>
                                <Image src={logo} alt="Ordx Market" className="h-12 w-auto" />
                            </Link>
                        </div>
                        
                        <div className="mb-8">
                            <MobileMenus />
                        </div>
                        
                        {/* Instagram section - commented out
                        <div className="mb-8 text-center">
                            <h4 className="text-lg font-bold mb-4">Instagram</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="#" className="block">
                                    <Image src={canvus_img_1} alt="Instagram" className="w-full rounded-md hover:opacity-80 transition-opacity" />
                                </Link>
                                <Link href="#" className="block">
                                    <Image src={canvus_img_2} alt="Instagram" className="w-full rounded-md hover:opacity-80 transition-opacity" />
                                </Link>
                                <Link href="#" className="block">
                                    <Image src={canvus_img_3} alt="Instagram" className="w-full rounded-md hover:opacity-80 transition-opacity" />
                                </Link>
                                <Link href="#" className="block">
                                    <Image src={canvus_img_4} alt="Instagram" className="w-full rounded-md hover:opacity-80 transition-opacity" />
                                </Link>
                            </div>
                        </div>
                        */}
                        
                        {/* Info section - commented out
                        <div className="mb-8 text-center">
                            <h4 className="text-lg font-bold mb-2">We are here</h4>
                            <Link href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank" className="text-gray-300 hover:text-green-400 transition-colors">
                                27 Division St, New York, <br />
                                NY 10002, USA
                            </Link>
                        </div>
                        */}
                        
                        <div className="flex justify-center">
                            <div className="flex space-x-4">
                                <Link href="https://x.com/sat20market" className="text-white hover:text-green-400 transition-colors">
                                    <i className="fab fa-twitter text-xl"></i>
                                </Link>
                                {/* 其他社交媒体图标
                                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                                    <i className="fab fa-instagram text-xl"></i>
                                </Link>
                                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                                    <i className="fab fa-facebook-square text-xl"></i>
                                </Link>
                                <Link href="#" className="text-white hover:text-green-400 transition-colors">
                                    <i className="fab fa-dribbble text-xl"></i>
                                </Link>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setSidebarOpen(false)}
            ></div>
        </>
    );
};

export default Offcanvus;