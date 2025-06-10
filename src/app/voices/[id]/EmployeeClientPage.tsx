"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Employee } from "../types";
import { useLoadingContext } from "../../components/LoadingProvider";

interface EmployeeClientPageProps {
  employee: Employee;
}

export default function EmployeeClientPage({ employee }: EmployeeClientPageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<'interview' | 'schedule'>('interview');
  const { isLoadingComplete } = useLoadingContext();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const interviewQuestions = [
    {
      question: "藤喜建設に入社したきっかけ、決め手は何でしたか？",
      answer: employee.interview.reason
    },
    {
      question: "現在の仕事内容と、その中で一番やりがいを感じる瞬間はどんな時ですか？",
      answer: employee.interview.currentWork
    },
    {
      question: "藤喜建設はどんな会社ですか？職場の雰囲気について教えてください。",
      answer: employee.interview.companyAtmosphere
    },
    ...(employee.interview.improvements ? [{
      question: "労働環境の改善について、具体的にどんな点が変わりましたか？",
      answer: employee.interview.improvements
    }] : []),
    {
      question: "仕事で大変だったことや、それを乗り越えた経験があれば教えてください。",
      answer: employee.interview.challenges
    },
    {
      question: "入社してから、ご自身が成長したと感じる点はどこですか？",
      answer: employee.interview.growth
    },
    {
      question: "休日の過ごし方や、仕事とプライベートのバランスについて教えてください。",
      answer: employee.interview.workLifeBalance
    },
    {
      question: "今後の目標や、挑戦してみたいことはありますか？",
      answer: employee.interview.futureGoals
    },
    {
      question: "これから藤喜建設への入社を考えている方へ、メッセージをお願いします！",
      answer: employee.interview.messageToNewcomers
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src={employee.profileImages[0]}
            alt={employee.name} 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/voices"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                ← 先輩社員一覧に戻る
              </Link>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {employee.name}
                </h1>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium">
                    {employee.position}
                  </span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">
                    {employee.department}
                  </span>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                    経験 {employee.experience}
                  </span>
                  {employee.age && (
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-medium">
                      {employee.age}
                    </span>
                  )}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-white italic font-medium">
                  "{employee.catchphrase}"
                </blockquote>
                
                {employee.education && (
                  <p className="text-white/80 mt-4">
                    {employee.education}
                    {employee.previousJob && ` | 前職：${employee.previousJob}`}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ナビゲーションタブ */}
      <section className="bg-gray-100 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveSection('interview')}
                className={`px-8 py-4 font-semibold transition-colors ${
                  activeSection === 'interview'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                インタビュー
              </button>
              <button
                onClick={() => setActiveSection('schedule')}
                className={`px-8 py-4 font-semibold transition-colors ${
                  activeSection === 'schedule'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                とある一日
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* インタビューセクション */}
      {activeSection === 'interview' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {employee.name}さんインタビュー
                </h2>
                <p className="text-xl text-gray-600">
                  Q&A形式で詳しくお話を伺いました
                </p>
              </div>

              <div className="space-y-12">
                {interviewQuestions.map((qa, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-8"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                        Q{index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
                        {qa.question}
                      </h3>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                        A
                      </div>
                      <div className="text-gray-700 leading-relaxed text-lg">
                        {qa.answer.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 趣味・プライベート */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  趣味・プライベート
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {employee.hobbies.map((hobby, index) => (
                    <span 
                      key={index}
                      className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-md"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* スケジュールセクション */}
      {activeSection === 'schedule' && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  とある一日のスケジュール
                </h2>
                <p className="text-xl text-gray-600">
                  {employee.name}さんの仕事の流れ
                </p>
              </div>

              <div className="relative border-l-2 border-orange-200 ml-6">
                {employee.dailySchedule.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-8 pl-12"
                  >
                    <div className="absolute -left-[11px] top-1 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
                    <p className="text-orange-500 font-semibold text-lg">{item.time}</p>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 