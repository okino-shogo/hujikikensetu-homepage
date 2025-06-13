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
      image: "/images/現場写真１.jpg",
      scale: "延床面積 3,500㎡",
      location: "八幡平市",
      tags: ["建築工事", "型枠工事", "公共施設"]
    },
    {
      id: 2,
      title: "みどり保育園 園舎改築工事",
      category: "教育施設",
      year: "2023年",
      description: "子どもたちの安全を最優先に考慮した設計・施工。耐震性に優れた構造を実現。",
      image: "/images/現場写真２.jpg",
      scale: "延床面積 1,200㎡",
      location: "八幡平市",
      tags: ["建築工事", "型枠工事", "教育施設"]
    },
    {
      id: 3,
      title: "国道282号線 橋梁補修工事",
      category: "土木工事",
      year: "2022年",
      description: "重要な交通インフラの維持・補修工事。交通規制を最小限に抑えた効率的な施工。",
      image: "/images/写真1.jpeg",
      scale: "橋長 120m",
      location: "八幡平市",
      tags: ["土木工事", "型枠工事", "インフラ"]
    },
    {
      id: 4,
      title: "八幡平レジデンス マンション建設",
      category: "住宅",
      year: "2022年",
      description: "快適な住環境を提供する集合住宅の型枠工事。高品質な仕上がりを実現。",
      image: "/images/コマクサM 010.jpg",
      scale: "5階建て 24戸",
      location: "八幡平市",
      tags: ["建築工事", "型枠工事", "住宅"]
    },
    {
      id: 5,
      title: "盛岡商業センター 新棟増築",
      category: "商業施設",
      year: "2021年",
      description: "大型商業施設の増築工事。短工期での確実な施工を実現。",
      image: "/images/組立３_edited.jpg",
      scale: "延床面積 2,800㎡",
      location: "盛岡市",
      tags: ["建築工事", "型枠工事", "商業施設"]
    },
    {
      id: 6,
      title: "滝沢川 護岸改修工事",
      category: "土木工事",
      year: "2021年",
      description: "河川の安全性向上を目的とした護岸改修。環境に配慮した施工方法を採用。",
      image: "/images/生コン打設３.jpg",
      scale: "施工延長 500m",
      location: "滝沢市",
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
            src="/images/DSCF1730_edited.jpg"
            alt="藤喜建設 施工実績" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
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
                      施工実績
                    </motion.span>
                    <motion.span 
                      className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-green-800 font-bold drop-shadow-lg shadow-white"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      ACHIEVEMENTS
                    </motion.span>
                  </h1>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    47年間で築き上げた確かな実績
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
                    <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">47年</div>
                    <div className="text-lg text-white/80 font-medium">創業からの歩み</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-purple-400 mb-2">300+</div>
                    <div className="text-lg text-white/80 font-medium">施工案件数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">県内全域</div>
                    <div className="text-lg text-white/80 font-medium">対応エリア</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* スクロール指示 */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 1.8 : 2.1 }}
          >
            <div className="text-white/60 text-sm font-light mb-3 tracking-wider font-english">
              SCROLL TO EXPLORE
            </div>
            <div className="w-px h-12 bg-white/30 mx-auto animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* カテゴリーフィルター */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-[2px] bg-purple-600 mr-4"></div>
              <span className="font-english text-sm md:text-base tracking-[0.2em] text-purple-600 font-medium">PROJECT GALLERY</span>
              <div className="w-16 h-[2px] bg-purple-600 ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              施工実績一覧
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              医療施設から土木工事まで、様々な分野での豊富な実績をご覧ください
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "すべての実績" : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 施工実績グリッド */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <span className="flex items-center">
                        <span className="font-medium">{project.location}</span>
                      </span>
                      <span>•</span>
                      <span>{project.scale}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-1 rounded-full text-sm transition-colors duration-300"
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
      <section className="py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-[2px] bg-purple-600 mr-4"></div>
              <span className="font-english text-sm md:text-base tracking-[0.2em] text-purple-600 font-medium">OUR TRACK RECORD</span>
              <div className="w-16 h-[2px] bg-purple-600 ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
              これまでの実績
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">47</span>
              </div>
              <div className="text-2xl font-serif font-bold text-gray-900 mb-2">創業年数</div>
              <div className="text-gray-600">昭和52年創業</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">300+</span>
              </div>
              <div className="text-2xl font-serif font-bold text-gray-900 mb-2">施工実績</div>
              <div className="text-gray-600">累積プロジェクト数</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <div className="text-2xl font-serif font-bold text-gray-900 mb-2">安全管理</div>
              <div className="text-gray-600">事故ゼロへの取り組み</div>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white p-8 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">県内</span>
              </div>
              <div className="text-2xl font-serif font-bold text-gray-900 mb-2">対応エリア</div>
              <div className="text-gray-600">岩手県全域</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-32 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
              お客様のプロジェクトも
              <br />私たちにお任せください
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              47年の実績と技術力で、お客様のご要望にお応えします。
              <br />まずはお気軽にご相談ください。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.a>
              <motion.a 
                href="/work"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                事業内容を見る
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 