import React,{useState} from "react";
import answer_question_data from "../data/answer-question-data";
import { useLanguage } from "../components/context/LanguageContext";

const AnswerQuestion = ({style}) => {
  const { lang } = useLanguage();
  const [shadow , setShadow ] = useState(2)
  return (
    <>
      <div className="w-full">
        <div className={style ? "font-semibold" : ""}>
          {answer_question_data.map((item) => {
            const isActive = shadow === item.id;
            return (
              <div
                onClick={() => setShadow(item.id)}
                key={item.id}
                className={`mb-4 rounded-2xl border border-zinc-800/50 bg-zinc-950 shadow-xl transition-all duration-200 ${isActive ? "ring-1 ring-sky-600/50 shadow-xl shadow-sky-500/30" : ""}`}
              >
                <h2 className="">
                  <button
                    className={`w-full flex justify-between items-center text-left px-6 py-4 text-base md:text-lg font-bold focus:outline-none transition-colors ${isActive ? "text-zinc-100" : "text-zinc-400"}`}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={item.aria_controls}
                  >
                    {lang === "zh" ? item.question_zh : item.question_en}
                    <span className={`ml-4 transition-transform duration-700 border border-sky-500 rounded-full ${isActive ? "rotate-90 text-sky-500 font-bold" : "rotate-0 text-sky-400"}`}>
                      <svg width="30" height="30" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </button>
                </h2>
                <div
                  id={item.aria_controls}
                  className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-96 py-2 mb-4 px-6" : "max-h-0 py-0 px-6"}`}
                  aria-labelledby={item.accordion_id}
                >
                  <div className="text-zinc-400 text-base">
                    <p>{lang === "zh" ? item.answer_zh : item.answer_en}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnswerQuestion;
