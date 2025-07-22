import React from "react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../context/LanguageContext";

const Sat20Wallet = () => {
  const { locale } = useLanguage();
  const { title, desc, cta, features } = locale.wallet;
  const walletUrl = 'https://github.com/sat20-labs/sat20wallet/releases/download/0.0.1/sat20wallet-chrome.zip';

  // 处理按钮点击事件，打开 walletUrl
  const handleWalletDownload = () => {
    window.open(walletUrl, '_blank');
  };

  return (
    <section className="w-full text-white py-4 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto px-4 py-16 opacity-80 hover:opacity-100  border border-gray-800 rounded-3xl shadow-2xl bg-no-repeat bg-bottom sm:bg-cover bg-[url('/assets/img/bg-apps.png')]">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 text-white">
          {title}
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          {desc}
        </p>
        <div className="relative w-full flex justify-center items-center mb-10 overflow-x-auto">
          <div className="w-[340px] sm:w-[600px] md:w-[800px] lg:w-[1024px] max-w-full">
            {/* Replace with your SVG/CSS/Canvas dynamic architecture code */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 2xl:mx-16 w-full 3xl:max-w-7xl mx-auto text-gray-200 text-base items-center">
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i}>
                <h3 className="text-lg sm:text-2xl font-semibold text-fuchsia-500/80 mb-2 list-disc">
                  <Icon icon="lucide:check" className="inline-block mr-2 text-green-500" />
                  {f.title}
                </h3>
                <p>{f.desc}</p>
              </div>
            ))}
            <div className="text-left mt-16">
              <button 
                onClick={handleWalletDownload} 
                className="h-12 hover:scale-105 ease-in-out duration-700 bg-gradient-to-r opacity-90 hover:opacity-100 from-sky-600 to-fuchsia-600 hover:to-fuchsia-500 shadow-2xl shadow-sky-600/50 text-base sm:text-lg font-bold px-8 py-2 rounded-2xl transition-all"
              >
                {cta}
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <img src="/assets/img/wallet.png" alt="SAT20 Wallet Preview" className="h-[600px] object-contain hover:scale-110 ease-in-out duration-700 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sat20Wallet;


