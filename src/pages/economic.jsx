import React, { useEffect } from "react";
import { useLanguage } from "../components/context/LanguageContext";
import Header from "../layout/headers/header"; // 引入 Header 组件
import Footer from "../layout/footers/footer"; // 引入 Footer 组件

const EconomicModelPage = () => {
   useEffect(() => {
      document.documentElement.classList.add("dark");
      return () => document.documentElement.classList.remove("dark");
    }, []);

  const { locale } = useLanguage();
  const content = locale.economic_model;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* 页面内容 */}
      <main className="max-w-6xl mx-auto px-4 flex-grow mt-8 p-6 bg-black rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-200">{content.title}</h1>

        {/* 概要信息 */}
        <section className="mt-2 mb-8">
          <h2 className="text-xl font-semibold text-zinc-300 mt-8 mb-2">General</h2>
          <ul className="space-y-2 text-zinc-300">
            <li><strong>Name:</strong><span className="text-zinc-300 ml-2"> {content.general.name}</span></li>
            <li><strong>Max Supply:</strong><span className="text-zinc-300 ml-2"> {content.general.maxSupply}</span></li>
            <li><strong>Protocol Note:</strong><span className="text-zinc-300 ml-2"> {content.general.protocolNote}</span></li>
            {/* <li><strong>Current Status:</strong><span className="text-zinc-300 ml-2"> {content.general.currentStatus}</span></li> */}
          </ul>
        </section>

        {/* 分配结构 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.allocationStructure.title}
          </h2>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 p-2 text-left">Category</th>
                <th className="border border-gray-600 p-2 text-right">Proportion</th>
                <th className="border border-gray-600 p-2 text-right">Quantity</th>
                <th className="border border-gray-600 p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {content.allocationStructure.table.map((item, index) => (
                <tr key={index} className="hover:bg-gray-600/50 hover:text-zinc-200 text-zinc-400">
                  <td className="border border-gray-600 font-bold p-2">{item.category}</td>
                  <td className="border border-gray-600 p-2 text-right">{item.proportion}</td>
                  <td className="border border-gray-600 p-2 text-right">{item.quantity}</td>
                  <td className="border border-gray-600 p-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 其他内容 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.marketReleaseDetails.title}
          </h2>

          {/* 交易行为激励 */}
          <div className="py-2 mb-4">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {content.marketReleaseDetails.transactionBehavior.title}
            </h3>
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-600 p-2 text-left">Item</th>
                  <th className="border border-gray-600 p-2 text-right">Proportion</th>
                  <th className="border border-gray-600 p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {content.marketReleaseDetails.transactionBehavior.table.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-600/50 hover:text-zinc-200 text-zinc-400">
                    <td className="border border-gray-600 font-bold p-2">{item.item}</td>
                    <td className="border border-gray-600 p-2 text-right">{item.proportion}</td>
                    <td className="border border-gray-600 p-2">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 技术团队激励 */}
          <div className="py-2 mb-4">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {content.marketReleaseDetails.technicalTeam.title}
            </h3>
            <p>{content.marketReleaseDetails.technicalTeam.description}</p>
          </div>

          {/* SAT20 基金会 */}
          <div className="py-2 mb-4">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {content.marketReleaseDetails.foundation.title}
            </h3>
            <p>{content.marketReleaseDetails.foundation.description}</p>
          </div>

          {/* 平台运营支持 */}
          <div className="py-2 mb-4">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">
              {content.marketReleaseDetails.operationsSupport.title}
            </h3>
            <table className="w-full border-collapse border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-600 p-2 text-left">Item</th>
                  <th className="border border-gray-600 p-2 text-right">Proportion</th>
                  <th className="border border-gray-600 p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {content.marketReleaseDetails.operationsSupport.table.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-600/50 hover:text-zinc-200 text-zinc-400">
                    <td className="border border-gray-600 font-bold p-2">{item.item}</td>
                    <td className="border border-gray-600 p-2 text-right">{item.proportion}</td>
                    <td className="border border-gray-600 p-2">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 解锁及释放机制 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.vestingReleaseMechanisms.title}
          </h2>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-zinc-600 p-2 text-left">Allocation Item</th>
                <th className="border border-zinc-600 p-2 text-left">Lock-up / Release Mechanism</th>
              </tr>
            </thead>
            <tbody>
              {content.vestingReleaseMechanisms.table.map((item, index) => (
                <tr key={index} className="hover:bg-gray-600/50 hover:text-zinc-200 text-zinc-400">
                  <td className="border border-gray-600 font-bold p-2">{item.allocationItem}</td>
                  <td className="border border-gray-600 p-2">{item.mechanism}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 合规与风险控制 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.compliance.title}
          </h2>
          <ul className="space-y-2 text-zinc-400">
            {content.compliance.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 路线图 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.roadmap.title}
          </h2>
          <ul className="space-y-2 text-zinc-400">
            {content.roadmap.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* 附录 */}
        <section className="py-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            {content.appendix.title}
          </h2>
          <ul className="space-y-2 text-zinc-400">
            {content.appendix.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EconomicModelPage;