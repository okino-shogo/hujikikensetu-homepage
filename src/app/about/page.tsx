"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function About() {
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

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション - 圧巻のビジュアルインパクト */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景写真 - 強化されたパララックス効果 */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          {/* 高品質会社建物・現場写真 */}
          <img 
            src="/images/本社写真１.jpg" 
            alt="藤喜建設 本社の歩み" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          {/* 多層グラデーションオーバーレイ - より洗練された演出 */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* 動的な光の演出 */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              background: `radial-gradient(ellipse at ${50 + scrollY * 0.01}% ${50 - scrollY * 0.005}%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)`,
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
                {/* 会社名 - 英字 */}
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 0.1 : 0.4 }}
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    ABOUT FUJIKI CONSTRUCTION
                  </p>
                </motion.div>
                
                {/* メインタイトル - 明朝体で圧倒的な存在感 */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-none text-white text-shadow-strong flex flex-col items-center">
                    <div className="relative py-2">
                      <motion.span 
                        className="block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.3 : 0.6 }}
                        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                      >
                        昭和52年から
                      </motion.span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-white"
                        initial={{ width: 0 }}
                        animate={isLoadingComplete ? { width: "100%" } : { width: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: isLoadingComplete ? 0.6 : 0.9, 
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                    <div className="relative py-2">
                      <motion.span 
                        className="block gradient-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                      >
                        48年の歩み
                      </motion.span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-green-500"
                        initial={{ width: 0 }}
                        animate={isLoadingComplete ? { width: "100%" } : { width: 0 }}
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
                    型枠を通して地域の礎をつくり
                    <br className="hidden md:block" />
                    人の喜びを作る為に技術を磨み続ける
                  </p>
                </motion.div>
                
                {/* 実績数値 */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-8 justify-center pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 1.5 : 1.8 }}
                  style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                >
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">48</div>
                    <div className="text-lg text-white/80 font-medium">年の実績</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">八幡平市</div>
                    <div className="text-lg text-white/80 font-medium">本社所在地</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">型枠工事</div>
                    <div className="text-lg text-white/80 font-medium">専門分野</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* スクロール指示 - より洗練されたデザイン */}
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
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              会社概要
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              昭和52年の創業以来、八幡平市を中心とした岩手県内で型枠工事・建設工事を専門とし、
              地域の皆様から支えられながら成長してまいりました。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左：会社情報 */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  会社情報
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">会社名</span>
                    <span className="text-gray-900 font-medium">有限会社藤喜建設</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">創業</span>
                    <span className="text-gray-900">昭和52年（1977年）</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">代表</span>
                    <span className="text-gray-900">代表取締役 工藤伸元</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">会長</span>
                    <span className="text-gray-900">工藤喜代美（創業者）</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">所在地</span>
                    <span className="text-gray-900">岩手県八幡平市田頭第32地割59</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">電話</span>
                    <span className="text-gray-900">0195-76-4735</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">FAX</span>
                    <span className="text-gray-900">0195-76-5710</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 font-medium w-24 shrink-0">事業内容</span>
                    <span className="text-gray-900">建築工事・型枠工事</span>
                  </div>
                </div>
              </div>

              {/* 行動基準 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">
                  行動基準
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">私たちは型枠を通して地域の礎をつくります</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">私たちは人の喜びを作る為に技術を磨きます</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">私たちは信頼に応えられる企業を目指します</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右：沿革・特徴 */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  沿革
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="text-lg font-bold text-green-600 mb-2">昭和52年（1977年）</div>
                    <p className="text-gray-700">工藤喜代美により有限会社藤喜建設を創業</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <div className="text-lg font-bold text-green-600 mb-2">平成時代〜</div>
                    <p className="text-gray-700">岩手県内各地での建築・土木工事実績を積み重ね</p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-6">
                    <div className="text-lg font-bold text-green-600 mb-2">現在</div>
                    <p className="text-gray-700">代表取締役 工藤伸元のもと、48年の実績と信頼を築く</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                  私たちの特徴
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">型枠工事の専門性</h4>
                      <p className="text-blue-700 text-sm">建物の基礎となる型枠工事に特化し、高い技術力を維持</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">地域密着48年</h4>
                      <p className="text-blue-700 text-sm">八幡平市を中心に、地域に根ざした建設会社として成長</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">安全第一の施工</h4>
                      <p className="text-blue-700 text-sm">安全第一を心掛け、事故・災害のない現場作りを徹底</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 技術力と作業風景セクション */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              確かな技術力
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              48年にわたって培ってきた型枠工事の技術と、安全第一の姿勢で
              地域の建設工事を支えています。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* 型枠組立作業 */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/組立２.jpeg" 
                alt="型枠組立作業" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">型枠組立技術</h3>
              <p className="text-gray-600">
                精密な測量と確実な組立技術で、建物の基礎となる型枠を構築します。
              </p>
            </motion.div>

            {/* 生コン打設作業 */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/生コン打設２.jpg" 
                alt="生コン打設作業" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">コンクリート打設</h3>
              <p className="text-gray-600">
                型枠の品質が建物の強度に直結するため、細心の注意を払って施工します。
              </p>
            </motion.div>

            {/* 現場管理 */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/現場写真２.jpg" 
                alt="現場管理・安全管理" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">安全管理</h3>
              <p className="text-gray-600">
                「安全第一」を徹底し、事故のない現場づくりを心がけています。
              </p>
            </motion.div>
          </div>

          {/* 技術力の特徴 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">
                  48年で培った技術力
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">建築から土木まで幅広い現場経験</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">職人の技術力向上への継続的な取り組み</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-green-800 font-medium">最新の技術と伝統工法の融合</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                  地域への貢献
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-blue-800 font-medium">病院、学校など地域の重要施設の建設</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-blue-800 font-medium">道路、橋梁などインフラ整備への参画</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                    <p className="text-blue-800 font-medium">地元雇用の創出と技術者育成</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              お気軽にお問い合わせください
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              型枠工事のことなら何でもご相談ください。48年の経験と実績でお応えします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:0195-76-4735"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0195-76-4735
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                お問い合わせフォーム
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 