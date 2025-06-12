"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";
import Head from "next/head";

const projects = [
  {
    id: 1,
    category: "建築工事",
    subcategory: "医療施設",
    title: "八幡平市立病院新築工事",
    description: "地域医療の中核を担う総合病院の新築工事。高度な技術と品質管理により、安全で機能的な医療施設を建設。",
    client: "八幡平市",
    location: "岩手県八幡平市",
    year: "2023年",
    size: "鉄筋コンクリート造　地上3階建",
    image: "/images/八幡平市立病院新築工事 (八幡平市).jpg",
    features: ["最新医療機器対応", "バリアフリー設計", "免震構造"],
    status: "完工"
  },
  {
    id: 2,
    category: "建築工事",
    subcategory: "教育・保育施設",
    title: "松尾保育所新築工事",
    description: "地域の子どもたちのための新しい保育施設。安全性と環境配慮を重視した設計で、快適な保育環境を実現。",
    client: "八幡平市",
    location: "岩手県八幡平市",
    year: "2022年",
    size: "木造　地上2階建",
    image: "/images/​​松尾保育所新築工事 (八幡平市).jpg",
    features: ["自然素材活用", "省エネ設計", "地域密着型"],
    status: "完工"
  },
  {
    id: 3,
    category: "土木工事",
    subcategory: "道路工事",
    title: "一般国道281号大坊の2地区道路改良(その7)工事",
    description: "交通の安全性向上と地域の利便性を図る道路改良工事。環境に配慮した施工方法を採用。",
    client: "岩手県",
    location: "岩手県葛巻町",
    year: "2023年",
    size: "道路改良　延長500m",
    image: "/images/一般国道281号大坊の2地区道路改良(その7)​工事(葛巻町)​.jpeg",
    features: ["安全施設整備", "排水設備改良", "環境配慮"],
    status: "完工"
  },
  {
    id: 4,
    category: "建築工事",
    subcategory: "産業施設",
    title: "松尾農場廃水処理施設建設工事",
    description: "環境保護と持続可能な農業経営を支援する廃水処理施設の建設工事。",
    client: "松尾農場",
    location: "岩手県八幡平市",
    year: "2022年",
    size: "鉄筋コンクリート造",
    image: "/images/松尾農場廃水処理施設建設工事 (八幡平市).jpg",
    features: ["環境対応技術", "省エネ設計", "メンテナンス性"],
    status: "完工"
  },
  {
    id: 5,
    category: "建築工事",
    subcategory: "事務所建築",
    title: "(株)高橋板金様事務所新築工事",
    description: "板金業の専門企業のための新事務所建設。効率的な作業環境と来客対応を両立した設計。",
    client: "株式会社高橋板金",
    location: "岩手県八幡平市",
    year: "2021年",
    size: "木造　地上1階建",
    image: "/images/(株)高橋板金様事務所新築工事 (八幡平市).jpg",
    features: ["作業場併設", "効率的動線", "耐久性重視"],
    status: "完工"
  },
  {
    id: 6,
    category: "建築工事",
    subcategory: "公共施設",
    title: "盛岡西消防署厨川出張所新築工事",
    description: "地域の防災拠点となる消防署出張所の新築工事。緊急対応に最適化された設計。",
    client: "盛岡地区広域消防組合",
    location: "岩手県盛岡市",
    year: "2020年",
    size: "鉄骨造　地上2階建",
    image: "/images/盛岡西消防署厨川出張所新築工事 (盛岡市).jpg",
    features: ["緊急車両対応", "24時間対応設計", "耐震構造"],
    status: "完工"
  },
  {
    id: 7,
    category: "建築工事",
    subcategory: "公共施設",
    title: "盛岡西警察署前九年交番新築工事",
    description: "地域の安全を守る交番施設の新築工事。市民に親しまれる開放的な設計。",
    client: "岩手県警察本部",
    location: "岩手県盛岡市",
    year: "2019年",
    size: "鉄骨造　地上1階建",
    image: "/images/盛岡西警察署前九年交番新築工事 (盛岡市).jpg",
    features: ["バリアフリー", "防犯設計", "地域密着型"],
    status: "完工"
  },
  {
    id: 8,
    category: "建築工事",
    subcategory: "教育・保育施設",
    title: "巣子保育園新築工事",
    description: "地域密着型の保育園新築工事。子どもたちが安心して過ごせる空間づくりを重視した設計・施工。",
    client: "滝沢市",
    location: "岩手県滝沢市",
    year: "2021年",
    size: "木造　地上1階建",
    image: "/images/ 巣子保育園新築工事 (滝沢市).jpeg",
    features: ["開放的な設計", "自然採光", "安全性重視"],
    status: "完工"
  },
  {
    id: 9,
    category: "建築工事",
    subcategory: "商業施設",
    title: "岩手三菱ふそう自動車販売(株)様 盛岡南支店新築工事",
    description: "大型車両の展示・整備に対応した商業施設。機能性と視認性を重視したショールーム設計。",
    client: "岩手三菱ふそう自動車販売株式会社",
    location: "岩手県盛岡市",
    year: "2023年",
    size: "鉄骨造　地上2階建",
    image: "/images/ 岩手三菱ふそう自動車販売(株)様盛岡南支店新築工事 (盛岡市).jpg",
    features: ["大型展示スペース", "整備工場併設", "モダンデザイン"],
    status: "完工"
  },
  {
    id: 10,
    category: "土木工事",
    subcategory: "橋梁工事",
    title: "町道堤川目線堤川目橋橋梁新設工事",
    description: "地域交通の要となる新しい橋梁の建設工事。高い技術力による安全で耐久性の高い橋梁を完成。",
    client: "矢巾町",
    location: "岩手県矢巾町",
    year: "2022年",
    size: "PC橋　橋長40m",
    image: "/images/ 町道堤川目線堤川目橋橋梁新設工事 (矢巾町).jpeg",
    features: ["PC構造", "耐震設計", "景観配慮"],
    status: "完工"
  }
];

const categories = [
  "すべて",
  "建築工事",
  "土木工事"
];

const subcategories: { [key: string]: string[] } = {
  "建築工事": ["すべて", "医療施設", "教育・保育施設", "商業施設", "事務所建築", "公共施設", "産業施設"],
  "土木工事": ["すべて", "道路工事", "橋梁工事", "林道工事"]
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedSubcategory, setSelectedSubcategory] = useState("すべて");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [scrollY, setScrollY] = useState(0);
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // スクロールアニメーションの初期化
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let filtered = projects;
    
    if (selectedCategory !== "すべて") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (selectedSubcategory !== "すべて") {
      filtered = filtered.filter(project => project.subcategory === selectedSubcategory);
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedSubcategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("すべて");
  };

  // 構造化データ用のプロジェクト情報
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "藤喜建設 施工実績",
    "description": "岩手県八幡平市を拠点とする藤喜建設の型枠工事施工実績をご紹介。公共施設、住宅、土木工事など幅広い分野での豊富な実績をご覧ください。",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "creator": {
          "@type": "Organization",
          "name": "株式会社 藤喜建設"
        },
        "dateCreated": `${project.year}-01-01`,
        "locationCreated": {
          "@type": "Place",
          "name": project.location
        },
        "about": {
          "@type": "Service",
          "name": "型枠工事",
          "serviceType": project.category
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "工期",
            "value": project.size
          },
          {
            "@type": "PropertyValue", 
            "name": "規模",
            "value": project.size
          },
          {
            "@type": "PropertyValue",
            "name": "予算",
            "value": project.size
          },
          {
            "@type": "PropertyValue",
            "name": "施主",
            "value": project.client
          }
        ]
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
        />
      </Head>
      {/* ヒーローセクション - 圧巻のビジュアルインパクト */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景写真 - 強化されたパララックス効果 */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          {/* 高品質施工現場俯瞰写真 */}
          <img 
            src="/images/組立３_edited.jpg" 
            alt="藤喜建設 施工実績" 
            className="w-full h-[130%] object-cover filter brightness-70 contrast-110"
          />
          
          {/* 多層グラデーションオーバーレイ - より洗練された演出 */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/40 to-gray-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-lime-900/40 via-transparent to-lime-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* 動的な光の演出 */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              background: `radial-gradient(ellipse at ${50 + scrollY * 0.01}% ${50 - scrollY * 0.005}%, rgba(132, 204, 22, 0.3) 0%, transparent 50%)`,
              transform: `rotate(${scrollY * 0.02}deg)`
            }}
          ></div>
        </div>
        
        {/* メインコンテンツ - 新しいタイポグラフィ */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 items-center min-h-screen py-20">
            {/* 中央配置：インパクトのあるメインメッセージ */}
            <div className="col-span-12 text-center">
              <div className="space-y-8 max-w-5xl mx-auto">
                {/* 専門分野 - 英字 */}
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 0.1 : 0.4 }}
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    PROJECT PORTFOLIO
                  </p>
                </motion.div>
                
                {/* メインタイトル - 明朝体で圧倒的な存在感 */}
                <div className="space-y-8 md:space-y-12">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight text-white text-shadow-strong">
                    <div className="relative py-2 inline-block">
                      <motion.span 
                        className="text-white font-bold drop-shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.3 : 0.6 }}
                        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                      >
                        創業以来の
                      </motion.span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-white w-full"
                        initial={{ scaleX: 0 }}
                        animate={isLoadingComplete ? { scaleX: 1 } : { scaleX: 0 }}
                        style={{ originX: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: isLoadingComplete ? 0.6 : 0.9, 
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                    <br />
                    <div className="relative py-2 inline-block">
                      <motion.span 
                        className="text-green-800 font-bold drop-shadow-lg shadow-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                      >
                        実績
                      </motion.span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-green-500 w-full"
                        initial={{ scaleX: 0 }}
                        animate={isLoadingComplete ? { scaleX: 1 } : { scaleX: 0 }}
                        style={{ originX: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: isLoadingComplete ? 1.0 : 1.2, 
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                  </h1>
                </div>
                
                {/* サブタイトル */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 1.2 : 1.5 }}
                  style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    岩手・青森を中心に、地域に根ざした
                    <br className="hidden md:block" />
                    確かな型枠工事を提供し続けています
                  </p>
                </motion.div>
                
                {/* 実績統計数値 */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 1.5 : 1.8 }}
                  style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                >
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">11+</div>
                    <div className="text-lg text-white/80 font-medium">主要施工実績</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">1977</div>
                    <div className="text-lg text-white/80 font-medium">設立年</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">100%</div>
                    <div className="text-lg text-white/80 font-medium">品質へのこだわり</div>
                  </div>
                </motion.div>
                
                {/* CTAボタン群 */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 1.8 : 2.1 }}
                  style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                >
                  <motion.a 
                    href="/projects"
                    className="btn-primary px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-lime-600 hover:bg-lime-700 transform hover:scale-105 transition-all duration-300"
                  >
                    実績を探す
                  </motion.a>
                  <motion.a 
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-bold text-base rounded-lg hover:bg-white hover:text-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    お問い合わせ
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトグリッド */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="relative aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* カード本文 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-lime-600 transition-colors">
                      {project.title}
                    </h3>
                                      <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">該当する実績が見つかりませんでした</h3>
              <p className="text-gray-500 mb-6">フィルターや検索条件を変更してお試しください</p>
              <button 
                onClick={() => {
                  setSelectedCategory("すべて");
                  setSelectedSubcategory("すべて");
                }}
                className="px-6 py-3 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors"
              >
                フィルターをリセット
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
} 