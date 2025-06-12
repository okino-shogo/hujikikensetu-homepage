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
            src="/images/作業写真19.jpeg" 
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
                        className="block text-green-800 font-bold drop-shadow-lg shadow-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                      >
                        47年の歩み
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
                    <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">47</div>
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
            className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 2.1 : 2.4 }}
          >
            <div className="text-white/60 text-sm font-light mb-3 tracking-wider font-english">
              SCROLL TO EXPLORE
            </div>
            <div className="w-px h-12 bg-white/30 mx-auto animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 md:w-16 h-[2px] bg-lime-600 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">OUR PHILOSOPHY</span>
                <div className="w-12 md:w-16 h-[2px] bg-lime-600 ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
                企業理念
              </h2>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* メイン理念 */}
            <motion.div
              className="relative mb-16 md:mb-20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-lime-50 via-lime-100 to-green-100 p-12 md:p-16 lg:p-20 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* 背景装飾 */}
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-lime-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-green-200 rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-lime-800 mb-8 md:mb-12">
                    建築で生活を豊かに
                  </h3>
                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed md:leading-loose font-serif">
                      この言葉には、私たちが提供する建物や構造物が、
                      お客様の生活や事業にプラスの影響を与え、
                      より快適で、より安全で、より希望に満ちたものになるように、
                      という願いが込められています。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 理念の3つの柱 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl md:text-3xl font-bold text-white">技</span>
                </div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 md:mb-4 text-center">技術の研鑽</h4>
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                  常に最新の技術を学び、伝統の技と融合させ、より良い建築物を創造します。
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl md:text-3xl font-bold text-white">心</span>
                </div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 md:mb-4 text-center">真摯な姿勢</h4>
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                  お客様の声に耳を傾け、期待を超える価値を提供することを目指します。
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl md:text-3xl font-bold text-white">絆</span>
                </div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 md:mb-4 text-center">地域との絆</h4>
                <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                  地域社会と共に成長し、次世代へ繋がる価値を創造し続けます。
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 md:w-16 lg:w-24 h-[2px] bg-lime-600 mr-4"></div>
                  <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">COMPANY OVERVIEW</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1]">
                  会社概要
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
                  昭和52年の創業以来、八幡平市を中心とした岩手県内で
                  型枠工事一式（建築・土木）を主軸とし、建築工事一式まで、地域の皆様から支えられながら成長してまいりました。
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex lg:justify-end lg:items-end">
                <div className="text-center lg:text-right">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-lime-600/20">Since</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 -mt-2 lg:-mt-4">1977</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 詳細会社情報 - カード形式 */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-12 gap-8">
              {/* メイン情報カード */}
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-lime-600 to-lime-700 text-white p-8">
                    <h3 className="text-2xl font-serif font-bold">会社詳細情報</h3>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">正式社名</p>
                          <p className="text-lg font-bold text-gray-900">有限会社藤喜建設</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">所在地</p>
                          <p className="text-gray-900">
                            〒028-7112<br />
                            岩手県八幡平市田頭第32地割59番地
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">連絡先</p>
                          <p className="text-gray-900">
                            TEL: 0195-76-4735<br />
                            FAX: 0195-76-5710
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">創業・設立</p>
                          <p className="text-gray-900">
                            創業: 1977年（昭和52年）<br />
                            法人設立: 1990年（平成2年）
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">資本金</p>
                          <p className="text-lg font-bold text-gray-900">5,000,000円</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">代表取締役</p>
                          <p className="text-lg font-bold text-gray-900">工藤 伸元</p>
                          <p className="text-sm text-gray-600">2022年就任</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">従業員数</p>
                          <p className="text-lg font-bold text-gray-900">13名</p>
                          <p className="text-sm text-gray-600">経験豊富な専門チーム</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">事業内容</p>
                          <p className="text-sm text-gray-900">
                            型枠工事一式（建築・土木）<br />
                            建築工事一式
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">建設業許可</p>
                          <p className="text-sm text-gray-900">
                            一般建設業許可<br />
                            （建築工事業・大工工事業）
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* サイドカード */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                {/* 登録・許可業種 */}
                <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-2xl border border-lime-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">登録・許可業種</h4>
                  <div className="space-y-2">
                    <span className="inline-block bg-white text-lime-700 px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2">一般建設業許可</span>
                    <span className="inline-block bg-white text-lime-700 px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2">建築工事業</span>
                    <span className="inline-block bg-white text-lime-700 px-3 py-1 rounded-lg text-sm font-medium mr-2 mb-2">大工工事業</span>
                  </div>
                </div>

                {/* 実績カウンター */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-blue-700">年の歴史</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">100+</div>
                      <div className="text-sm text-blue-700">完成案件</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ビジュアル付き情報セクション */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左：会社の特徴 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/images/DSCF1730_edited.jpg" 
                  alt="藤喜建設本社" 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    八幡平市に根ざして47年
                  </h3>
                  <p className="text-white/90">
                    地域と共に成長し、信頼される企業として
                  </p>
                </div>
              </div>

              {/* 行動基準 */}
              <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  私たちの行動基準
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 shrink-0 group-hover:scale-110 transition-transform">1</div>
                    <p className="text-gray-700 font-medium">私たちは型枠を通して地域の礎をつくります</p>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 shrink-0 group-hover:scale-110 transition-transform">2</div>
                    <p className="text-gray-700 font-medium">私たちは人の喜びを作る為に技術を磨きます</p>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 shrink-0 group-hover:scale-110 transition-transform">3</div>
                    <p className="text-gray-700 font-medium">私たちは信頼に応えられる企業を目指します</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右：沿革・特徴 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* 沿革タイムライン */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                  沿革
                </h3>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lime-300"></div>
                  <div className="space-y-8">
                    <div className="relative flex items-start">
                      <div className="absolute left-8 w-4 h-4 bg-lime-500 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                      <div className="ml-16">
                        <div className="text-lg font-bold text-lime-600">1977年</div>
                        <p className="text-gray-700 mt-1">工藤喜代美により創業</p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="absolute left-8 w-4 h-4 bg-lime-500 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                      <div className="ml-16">
                        <div className="text-lg font-bold text-lime-600">1990年</div>
                        <p className="text-gray-700 mt-1">有限会社藤喜建設として法人化</p>
                      </div>
                    </div>
                    <div className="relative flex items-start">
                      <div className="absolute left-8 w-4 h-4 bg-lime-500 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                      <div className="ml-16">
                        <div className="text-lg font-bold text-lime-600">2022年</div>
                        <p className="text-gray-700 mt-1">工藤伸元が第三代目代表取締役に就任</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 私たちの強み */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  私たちの強み
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-orange-800 mb-2">型枠工事の専門技術</h4>
                    <p className="text-orange-700 text-sm">47年の経験に裏打ちされた確かな技術力</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-orange-800 mb-2">地域密着の信頼</h4>
                    <p className="text-orange-700 text-sm">八幡平市と共に歩み続けた実績</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-orange-800 mb-2">安全第一の施工</h4>
                    <p className="text-orange-700 text-sm">事故ゼロを目指す徹底した安全管理</p>
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
              47年にわたって培ってきた型枠工事の技術と、安全第一の姿勢で
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
                src="/images/生コン打設３.jpg" 
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

      {/* アクセス情報 */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* 背景パターン要素 */}
        <div className="absolute inset-0 section-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center mb-16 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 md:w-16 h-[2px] bg-lime-600 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">ACCESS</span>
                <div className="w-12 md:w-16 h-[2px] bg-lime-600 ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 md:mb-6">
                アクセス
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                岩手県八幡平市に本社を構え、地域密着でサービスを提供しています。
              </p>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start max-w-7xl mx-auto">
            {/* 地図エリア */}
            <motion.aside
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              aria-label="会社の場所"
            >
              <div className="rounded-2xl md:rounded-3xl h-[400px] md:h-[500px] shadow-xl overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=39.9337129,141.0773120&hl=ja&z=15&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="有限会社藤喜建設の場所"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.aside>

            {/* アクセス情報 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 md:space-y-8">
                {/* 所在地カード */}
                <address className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 not-italic">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 md:mb-6">会社所在地</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">住所</p>
                      <p className="font-bold text-gray-900">〒028-7112</p>
                      <p className="text-gray-900">岩手県八幡平市田頭第32地割59番地</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-2">お問い合わせ</p>
                      <div className="space-y-2">
                        <p className="text-gray-900">
                          <span className="font-medium">TEL:</span> 
                          <a href="tel:0195-76-4735" className="text-lime-600 hover:text-lime-700 transition-colors ml-1">0195-76-4735</a>
                        </p>
                        <p className="text-gray-900">
                          <span className="font-medium">FAX:</span> 0195-76-5710
                        </p>
                      </div>
                    </div>
                  </div>
                </address>

                {/* 交通アクセスカード */}
                <article className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 md:p-8 rounded-2xl border border-lime-200">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 md:mb-6">アクセス方法</h3>
                  <div className="space-y-4 md:space-y-6">
                    <section>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">🚗 車でお越しの場合</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-gray-700 text-sm md:text-base">東北自動車道西根ICから松尾八幡平方面に向かって10分</p>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-gray-700 text-sm md:text-base">JR花輪線大更駅から5分</p>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">🚌 公共交通機関をご利用の場合</h4>
                      <ul>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-gray-700 text-sm md:text-base">盛岡駅からJR花輪線に乗車し大更駅下車後、バスで中島バス停下車。後徒歩15分</p>
                        </li>
                      </ul>
                    </section>
                  </div>
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-lime-300">
                    <p className="text-xs md:text-sm text-gray-600">
                      ※ご来社の際は事前にご連絡ください
                    </p>
                  </div>
                </article>

                {/* 営業時間 */}
                <aside className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-base md:text-lg">営業時間</h4>
                  <dl className="space-y-2 text-gray-700">
                    <div>
                      <dt className="sr-only">平日営業時間</dt>
                      <dd className="text-sm md:text-base">月曜日〜金曜日: 8:00〜17:00</dd>
                    </div>
                    <div>
                      <dt className="sr-only">土曜営業時間</dt>
                      <dd className="text-sm md:text-base">土曜日: 8:00〜12:00</dd>
                    </div>
                    <div>
                      <dt className="sr-only">休業日</dt>
                      <dd className="text-xs md:text-sm text-gray-500">日曜・祝日休業</dd>
                    </div>
                  </dl>
                </aside>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 md:w-[500px] h-80 md:h-[500px] bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 leading-relaxed drop-shadow">
              型枠工事・建築工事のことなら何でもご相談ください。
              <br className="hidden md:block" />47年の経験と実績でお応えします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <motion.a 
                href="tel:0195-76-4735"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white text-emerald-700 font-bold text-base md:text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl md:text-2xl mr-2 md:mr-3">📞</span>
                <span>0195-76-4735</span>
              </motion.a>
              
              <motion.a 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white text-white font-bold text-base md:text-lg rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせフォーム
              </motion.a>
            </div>

            {/* 営業時間の補足 */}
            <div className="mt-8 md:mt-12 text-white">
              <p className="text-sm md:text-base font-medium drop-shadow">営業時間: 平日 8:00〜17:00 / 土曜 8:00〜12:00</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 