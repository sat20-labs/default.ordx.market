import React, { useState } from 'react';

const HeroBanner = ({ bg_img, title = "Get In", subtitle = "Touch" }) => {
    const [offset, setOffset] = useState(0);

    function handleScroll() {
        setOffset(window.scrollY);
    }
    // Add an event listener to update the offset on scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="mb-24 z-10 relative">
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <div className="w-full h-[400px] relative bg-cover bg-center"
                            style={{ backgroundImage: `url(${bg_img})` }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h4 
                                    style={{ transform: `translateY(${offset * 0.9}px)` }} 
                                    className="text-4xl md:text-5xl font-bold text-center">
                                    <span>{title}</span> <br />
                                    <span>{subtitle}</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;