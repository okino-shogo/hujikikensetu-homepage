"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function VoicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeEmployee, setActiveEmployee] = useState(0);
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const employees = [
    {
      id: 1,
      name: "佐藤 健一",
      position: "型枠工事主任",
      experience: "15年",
      age: "38歳",
      image: "/images/本社写真１.jpg",
      quote: "毎日が学びの連続です。完成した建物を見たときの達成感は何にも代えがたいものがあります。",
      story: "高校卒業後、この会社に入社しました。最初は何もわからない状態でしたが、先輩方に丁寧に指導していただき、今では後輩の指導も任されています。建物が完成したときにお客様から感謝の言葉をいただけることが、この仕事の一番のやりがいです。",
      workStyle: "安全第一を心がけ、品質の高い仕上がりを目指しています。チームワークを大切にし、若手社員の育成にも力を入れています。",
      hobby: "釣り、野球観戦"
    },
    {
      id: 2,
      name: "田中 美咲",
      position: "現場管理",
      experience: "8年",
      age: "32歳",
      image: "/images/作業写真19.jpeg",
      quote: "女性でも活躍できる職場です。みんなで支え合いながら良いものを作っています。",
      story: "大学で建築を学び、設計事務所を経てこの会社に転職しました。現場管理として、安全管理や品質管理を担当しています。最初は体力的にきついこともありましたが、チームのサポートもあり、今では充実した毎日を送っています。",
      workStyle: "細かい部分まで気を配り、現場の安全と品質を保つことを心がけています。コミュニケーションを大切にし、現場の雰囲気作りにも注力しています。",
      hobby: "読書、ヨガ"
    },
    {
      id: 3,
      name: "高橋 大輔",
      position: "新入社員",
      experience: "2年",
      age: "24歳",
      image: "/images/本社写真１.jpg",
      quote: "先輩方が親切で、安心して仕事に取り組めます。技術を身につけて一人前になりたいです。",
      story: "工業高校を卒業してから入社しました。最初は覚えることが多くて大変でしたが、先輩方が丁寧に教えてくださるので、少しずつできることが増えています。将来は先輩のような技術者になりたいと思っています。",
      workStyle: "わからないことは素直に質問し、一つ一つ確実に覚えることを心がけています。安全には特に気をつけて作業しています。",
      hobby: "ゲーム、映画鑑賞"
    },
    {
      id: 4,
      name: "鈴木 正男",
      position: "ベテラン職人",
      experience: "25年",
      age: "52歳",
      image: "/images/作業写真19.jpeg",
      quote: "長年の経験を活かして、質の高い仕事をすることが私の誇りです。",
      story: "25年間この会社で働いてきました。技術の進歩とともに建設業界も変化してきましたが、基本的な「良いものを作る」という姿勢は変わりません。若い世代に技術を伝承していくことも大切な役割だと思っています。",
      workStyle: "長年の経験と勘を活かしつつ、新しい技術も積極的に取り入れています。品質にはとことんこだわり、妥協しない姿勢を貫いています。",
      hobby: "家庭菜園、囲碁"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="/images/作業写真19.jpeg"
            alt="藤喜建設 先輩社員" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-yellow-900/20"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 items-center min-h-screen py-20">
            <div className="col-span-12 text-center">
              <div className="space-y-8 max-w-5xl mx-auto">
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    EMPLOYEE VOICES
                  </p>
                </motion.div>
                
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-none text-white text-shadow-strong">
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      先輩社員の
                    </motion.span>
                    <motion.span 
                      className="block gradient-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      声
                    </motion.span>
                  </h1>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    働く仲間たちの想い
                    <br className="hidden md:block" />
                    リアルな職場の声をお届けします
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社員インタビューセクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              社員インタビュー
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              様々な年代・職種の社員が、藤喜建設での仕事について語ります
            </p>
          </div>

          {/* 社員セレクター */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {employees.map((employee, index) => (
              <button
                key={employee.id}
                onClick={() => setActiveEmployee(index)}
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  activeEmployee === index
                    ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="font-semibold">{employee.name}</div>
                <div className="text-sm">{employee.position}</div>
              </button>
            ))}
          </div>

          {/* アクティブ社員のインタビュー */}
          <motion.div
            key={activeEmployee}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {employees[activeEmployee].name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                      {employees[activeEmployee].position}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      経験 {employees[activeEmployee].experience}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {employees[activeEmployee].age}
                    </span>
                  </div>
                  <blockquote className="text-xl italic text-gray-700 border-l-4 border-orange-500 pl-4 mb-6">
                    "{employees[activeEmployee].quote}"
                  </blockquote>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">入社のきっかけ・これまでの歩み</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {employees[activeEmployee].story}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">仕事への取り組み</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {employees[activeEmployee].workStyle}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">趣味・プライベート</h4>
                    <p className="text-gray-600">
                      {employees[activeEmployee].hobby}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                src={employees[activeEmployee].image}
                alt={employees[activeEmployee].name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 職場環境・働きやすさセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              働きやすい職場環境
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">チームワーク</h3>
              <p className="text-gray-600">
                年代を超えてお互いをサポートし合う、
                温かいチームワークが自慢です
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">技術向上</h3>
              <p className="text-gray-600">
                先輩から後輩への技術指導が充実し、
                着実にスキルアップできる環境
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">ワークライフバランス</h3>
              <p className="text-gray-600">
                働きやすい環境づくりに取り組み、
                プライベートも大切にできます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 求職者へのメッセージ */}
      <section className="py-24 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            これから仲間になる方へ
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              藤喜建設は技術と人を大切にする会社です。<br />
              経験の有無に関わらず、やる気のある方を歓迎します。<br />
              一緒に地域の発展に貢献する建物を作りませんか？
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">未経験者も安心</h3>
                <p className="text-gray-600">
                  丁寧な指導体制で、基礎から着実に技術を身につけることができます
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">やりがいのある仕事</h3>
                <p className="text-gray-600">
                  完成した建物を見たときの達成感は、何にも代えがたいものがあります
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/careers"
                className="px-10 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                採用情報を見る
              </a>
              <a 
                href="/contact"
                className="px-10 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                まずは相談する
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 