"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function WorkPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<keyof typeof workTypes>("construction");
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const workTypes = {
    construction: {
      title: "建築工事",
      subtitle: "病院・保育所・住宅まで幅広く対応",
      description: "鉄筋コンクリート造、鉄骨造、木造建築まで、あらゆる建築物の型枠工事を手がけています。",
      image: "/images/本社写真１.jpg",
      features: [
        "病院・医療施設の建築工事",
        "保育所・教育施設の建築工事", 
        "住宅・マンションの建築工事",
        "商業施設の建築工事"
      ],
      color: "lime"
    },
    formwork: {
      title: "型枠工事",
      subtitle: "建物の品質を決める重要な工程",
      description: "コンクリート構造物の品質・強度・美観を左右する型枠工事。48年の経験と技術で確実な施工を行います。",
      image: "/images/作業写真19.jpeg",
      features: [
        "精密な型枠設計・施工",
        "安全第一の作業体制",
        "高品質なコンクリート仕上げ",
        "工期短縮への取り組み"
      ],
      color: "blue"
    },
    civil: {
      title: "土木工事",
      subtitle: "地域のインフラを支える基盤工事",
      description: "道路、橋梁、河川工事など、地域の社会インフラを支える土木工事の型枠施工を専門に行っています。",
      image: "/images/作業写真19.jpeg",
      features: [
        "道路・橋梁の型枠工事",
        "河川・治水工事",
        "公共施設の基盤工事",
        "災害復旧工事への対応"
      ],
      color: "green"
    }
  };

  const currentWork = workTypes[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src={currentWork.image}
            alt="藤喜建設の仕事" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/20"></div>
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
                    FUJIKI CONSTRUCTION WORKS
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
                      藤喜建設の
                    </motion.span>
                    <motion.span 
                      className={`block gradient-text bg-gradient-to-r from-${currentWork.color}-400 via-${currentWork.color}-500 to-${currentWork.color}-600 bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      仕事
                    </motion.span>
                  </h1>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    型枠工事を通して
                    <br className="hidden md:block" />
                    地域の暮らしを支える建物をつくる
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業内容タブセクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              事業内容
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              建築工事から土木工事まで、型枠工事を専門とする技術力で<br />
              地域の様々なニーズにお応えしています
            </p>
          </div>

          {/* タブナビゲーション */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(workTypes).map(([key, work]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof workTypes)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? `bg-${work.color}-600 text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {work.title}
              </button>
            ))}
          </div>

          {/* タブコンテンツ */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {currentWork.title}
              </h3>
              <p className={`text-xl text-${currentWork.color}-600 font-semibold mb-6`}>
                {currentWork.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentWork.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800">主な対応工事</h4>
                <ul className="space-y-3">
                  {currentWork.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${currentWork.color}-500 rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={currentWork.image}
                alt={currentWork.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-${currentWork.color}-900/20 to-transparent rounded-lg`}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 技術力・安全性セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              48年の技術力と安全への取り組み
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">豊富な経験</h3>
              <p className="text-gray-600">
                昭和52年創業以来、様々な建築物の型枠工事を手がけ、
                蓄積された技術とノウハウで高品質な施工を実現
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">安全第一</h3>
              <p className="text-gray-600">
                作業員の安全を最優先に、定期的な安全教育と
                現場での安全管理体制を徹底
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">効率的な施工</h3>
              <p className="text-gray-600">
                長年の経験に基づく効率的な作業工程で、
                工期短縮とコスト削減を実現
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-gradient-to-r from-lime-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            お仕事のご相談・お見積もり
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            建築工事・型枠工事・土木工事のことなら<br />
            まずはお気軽にご相談ください
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="px-10 py-4 bg-white text-lime-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              お問い合わせ
            </a>
            <a 
              href="/results"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-lime-600 transition-colors duration-300"
            >
              施工実績を見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 