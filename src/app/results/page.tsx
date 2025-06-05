"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function ResultsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "八幡平市立病院 新館建設工事",
      category: "医療施設",
      year: "2023年",
      description: "地域医療の拠点となる新館の型枠工事を担当。複雑な構造にも対応した高精度な施工を実現。",
      image: "/images/本社写真１.jpg",
      tags: ["建築工事", "型枠工事", "公共施設"]
    },
    {
      id: 2,
      title: "みどり保育園 園舎改築工事",
      category: "教育施設",
      year: "2023年",
      description: "子どもたちの安全を最優先に考慮した設計・施工。耐震性に優れた構造を実現。",
      image: "/images/作業写真19.jpeg",
      tags: ["建築工事", "型枠工事", "教育施設"]
    },
    {
      id: 3,
      title: "国道282号線 橋梁補修工事",
      category: "土木工事",
      year: "2022年",
      description: "重要な交通インフラの維持・補修工事。交通規制を最小限に抑えた効率的な施工。",
      image: "/images/作業写真19.jpeg",
      tags: ["土木工事", "型枠工事", "インフラ"]
    },
    {
      id: 4,
      title: "八幡平レジデンス マンション建設",
      category: "住宅",
      year: "2022年",
      description: "快適な住環境を提供する集合住宅の型枠工事。高品質な仕上がりを実現。",
      image: "/images/本社写真１.jpg",
      tags: ["建築工事", "型枠工事", "住宅"]
    },
    {
      id: 5,
      title: "盛岡商業センター 新棟増築",
      category: "商業施設",
      year: "2021年",
      description: "大型商業施設の増築工事。短工期での確実な施工を実現。",
      image: "/images/作業写真19.jpeg",
      tags: ["建築工事", "型枠工事", "商業施設"]
    },
    {
      id: 6,
      title: "滝沢川 護岸改修工事",
      category: "土木工事",
      year: "2021年",
      description: "河川の安全性向上を目的とした護岸改修。環境に配慮した施工方法を採用。",
      image: "/images/作業写真19.jpeg",
      tags: ["土木工事", "型枠工事", "河川工事"]
    }
  ];

  const categories = ["all", "医療施設", "教育施設", "住宅", "商業施設", "土木工事"];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="/images/本社写真１.jpg"
            alt="藤喜建設 施工実績" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/20"></div>
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
                    CONSTRUCTION RESULTS
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
                      施工
                    </motion.span>
                    <motion.span 
                      className="block gradient-text bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      実績
                    </motion.span>
                  </h1>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    48年間で築き上げた実績
                    <br className="hidden md:block" />
                    地域の発展に貢献する建築・土木工事
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">48年</div>
                    <div className="text-lg text-white/80 font-medium">創業からの歩み</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">県内</div>
                    <div className="text-lg text-white/80 font-medium">広域対応</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">多様</div>
                    <div className="text-lg text-white/80 font-medium">な実績</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリーフィルター */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              施工実績一覧
            </h2>
            <p className="text-xl text-gray-600">
              様々な分野での豊富な実績をご覧ください
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === "all" ? "すべて" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 施工実績グリッド */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 実績に関する統計 */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              これまでの実績
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">48</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">創業年数</div>
              <div className="text-gray-600">昭和52年創業</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">300+</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">施工実績</div>
              <div className="text-gray-600">累積プロジェクト数</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">100%</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">安全管理</div>
              <div className="text-gray-600">事故ゼロへの取り組み</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">県内</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">対応エリア</div>
              <div className="text-gray-600">岩手県全域</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            お客様のプロジェクトも<br />
            私たちにお任せください
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            48年の実績と技術力で、お客様のご要望にお応えします。<br />
            まずはお気軽にご相談ください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              お問い合わせ
            </a>
            <a 
              href="/work"
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              事業内容を見る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 