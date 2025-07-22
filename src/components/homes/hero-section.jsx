import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { locale } = useLanguage();
  const [showLaunchPool, setShowLaunchPool] = useState(false);
  const closeTimeout = useRef();

  // 延迟关闭
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setShowLaunchPool(false), 180);
  };
  // 鼠标回到火箭或弹窗时清除关闭定时器
  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setShowLaunchPool(true);
  };

  return (
    <section className="relative h-[1200px] text-white py-16 px-4 md:px-16 lg:px-32 bg-no-repeat bg-top" style={{ backgroundImage: "url(/assets/img/bg01.jpg)" }}>
     <div className="container mx-auto px-4">
      {/* 主标题区域 */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{locale.heroSection.title}</h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
          {locale.heroSection.desc1} <span className="text-purple-400 font-semibold">{locale.heroSection.highlight}</span>{locale.heroSection.desc2}
        </p>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-12 text-left">
          <div className="bg-gradient-to-br from-purple-500/50 via-purple-500/70 via-10% to-sky-700/50 p-6 rounded-2xl border-b border-gray-500 hover:border-purple-500 shadow-xl hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">{locale.heroSection.card1Title}</h3>
            <p className="text-zinc-300 text-sm sm:text-md">{locale.heroSection.card1Desc}</p>
          </div>
          <div className="bg-gradient-to-b from-purple-500/50 via-purple-500/70 via-40% to-sky-700/60 p-6 rounded-2xl border-b border-gray-500 hover:border-purple-500 shadow-xl hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{locale.heroSection.card2Title}</h3>
            <p className="text-zinc-300 text-sm sm:text-md">{locale.heroSection.card2Desc}</p>
          </div>
          <div className="bg-gradient-to-bl from-purple-500/50 via-purple-500/70 via-20% to-sky-700/50 p-6 rounded-2xl border-b border-gray-500 hover:border-purple-500 shadow-xl hover:shadow-sky-500/50 hover:scale-105 transition duration-700 ease-in-out">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{locale.heroSection.card3Title}</h3>
            <p className="text-zinc-300 text-sm sm:text-md">{locale.heroSection.card3Desc}</p>
          </div>
        </div>
      </div>

      {/* 三模块区域 */}

      <div className="grid grid-cols-1 gap-y-6 sm:gap-y-0 mt-32 sm:mt-10">
        {/* 移动端：中央动效在最上方 */}
        <div className="flex flex-col items-center justify-center relative mb-[-80px] sm:mb-80 md:hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-4"
          >
            <img
              src="/assets/img/launch.png"
              alt="satswap review"
              className="w-[160px] m-2 object-contain rounded-full"
            />
          </motion.div>
        </div>

        {/* 中央动效（火箭） */}
        <div
          className="hidden md:flex flex-col mb-[2px] items-center justify-center relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mb-4"
          >
            <img
              src="/assets/img/launch.png"
              alt="satswap review"
              className="w-[80px] sm:w-[120px] m-2 object-contain rounded-full"
            />
          </motion.div>
          {/* 半透明弹窗，绝对定位在火箭下方 */}
          {showLaunchPool && (
            <div
              className="absolute left-1/2 top-[120%] mt-6 -translate-x-1/2 z-50 flex items-center justify-center w-[380px] h-[400px] "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="border-y-2 hover:border-y-4 border-b-sky-400 border-t-gray-700/40 rounded-2xl bg-transparent shadow-xl shadow-sky-500/50 pb-[2px] w-full text-center relative"
              >
                <div className="flex flex-col items-center py-6 bg-gradient-to-b from-gray-700/50 to-zinc-900/80 w-full h-full rounded-2xl text-white">
                  <div className="text-lg font-semibold mb-2 text-blue-400">{locale.heroSection.popupTitle}</div>
                  <p className="text-base mb-4">{locale.heroSection.popupDesc}</p>
                  <button disabled className="mt-2 bg-gray-700 text-white px-4 py-2 rounded-xl opacity-80 cursor-not-allowed">
                    {locale.heroSection.popupBtn}
                  </button>
                  <button
                    className="absolute top-2 right-4 text-gray-400 hover:text-white text-xl"
                    onClick={() => setShowLaunchPool(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
