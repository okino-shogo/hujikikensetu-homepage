"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLoadingContext } from "./components/LoadingProvider";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { isLoadingComplete } = useLoadingContext();
  
  // 創業年から現在までの年数を計算
  const foundingYear = 1977;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - foundingYear;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "有限会社藤喜建設",
    "url": "https://www.fujiki-kensetsu.jp",
    "description": "昭和52年創業、47年の実績を持つ型枠工事専門会社。八幡平市を中心とした岩手県内で、型枠工事一式（建築・土木）を主軸とし、病院、保育所から住宅まで、地域の暮らしを支える建物づくりを手がけています。",
    "foundingDate": "1977",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "田頭第32地割59番地",
      "addressLocality": "八幡平市",
      "addressRegion": "岩手県",
      "postalCode": "028-7112",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-195-76-4735",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": "ja"
    },
    "sameAs": [
      "https://www.fujiki-kensetsu.jp"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "型枠工事一式（建築・土木）",
        "description": "建築工事・土木工事における型枠工事の専門施工"
      },
      {
        "@type": "Service", 
        "name": "建築工事一式",
        "description": "病院、保育所、住宅などの建築工事"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47"
    },
    "award": "47年の信頼と実績"
  };

  return (
    <>
      <Head>
        <title>有限会社藤喜建設 | 型枠工事専門会社 - 八幡平市の型枠工事・建築工事</title>
        <meta 
          name="description" 
          content="昭和52年創業、47年の実績を持つ藤喜建設。八幡平市を中心とした岩手県内で型枠工事一式（建築・土木）を主軸とする専門会社。病院、保育所から住宅まで地域の暮らしを支える建物づくりを手がけています。安全第一を心掛けた確実な施工でお客様の信頼にお応えします。" 
        />
        <meta name="keywords" content="藤喜建設,型枠工事,型枠工事専門,建築工事,八幡平市,岩手県,病院,保育所,住宅,安全第一,47年実績" />
        <link rel="canonical" href="https://www.fujiki-kensetsu.jp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 背景写真 */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
          >
            <img 
              src="/images/本社写真１.jpg" 
              alt="藤喜建設 本社 - 型枠工事の専門会社" 
              className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
            />
            
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
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
          
          {/* メインコンテンツ */}
          <div className="relative z-20 container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4 items-center min-h-screen py-20">
              <div className="col-span-12 text-center">
                <div className="space-y-8 max-w-5xl mx-auto">
                  {/* 英字 */}
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: isLoadingComplete ? 0.1 : 0.4 }}
                    style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                  >
                    <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                      FUJIKI CONSTRUCTION COMPANY
                    </p>
                  </motion.div>
                  
                  {/* メインタイトル */}
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
                          人と地域を支え
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
                          className="block"
                          initial={{ opacity: 0, y: 50 }}
                          animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                        >
                          <span className="text-yellow-300 font-black drop-shadow-2xl shadow-orange-600 relative">
                            「喜び」
                            {/* 光るエフェクト */}
                            <span className="absolute inset-0 text-yellow-300 blur-md opacity-60 animate-pulse">「喜び」</span>
                          </span>
                          <span className="text-lime-500 font-bold drop-shadow-lg shadow-white ml-4">をつくる</span>
                        </motion.span>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-lime-500"
                          initial={{ width: 0 }}
                          animate={isLoadingComplete ? { width: "100%" } : { width: 0 }}
                          transition={{ 
                            duration: 1.2, 
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
                      昭和52年創業、{yearsInBusiness}年の実績
                      <br className="hidden md:block" />
                      型枠工事のプロフェッショナルとして地域の礎をつくる
                    </p>
                  </motion.div>
                  
                  {/* CTAボタン群 */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoadingComplete ? 1.5 : 1.8 }}
                    style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                  >
                    <a href="/about" className="btn-primary px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-lime-600 hover:bg-lime-700 transform hover:scale-105 transition-all duration-300">
                      会社概要
                    </a>
                    <a href="/projects" className="btn-outline px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-lime-700">
                      施工実績
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* スクロール指示 */}
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
              <div className="w-2 h-2 bg-lime-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </section>

        {/* 私たちについて */}
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            {/* セクションヘッダー：左寄せでモダンなスタイル */}
            <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
              <motion.div 
                className="col-span-12 md:col-span-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 md:w-20 h-[2px] bg-lime-600 mr-4"></div>
                  <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">ABOUT US</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-[1.1]">
                  私たちについて
                </h2>
                                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                        昭和52年創業以来{yearsInBusiness}年、型枠工事を通して地域の礎をつくり、
                        人の喜びを作る為に技術を磨き続けています。
                      </p>
              </motion.div>

              {/* 数値インジケーター */}
              <motion.div 
                className="col-span-12 md:col-span-4 flex md:justify-end items-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-right">
                  <div className="text-7xl md:text-8xl font-serif font-bold text-lime-600/20">{yearsInBusiness}</div>
                  <div className="text-sm md:text-base font-sans font-medium text-gray-600 -mt-4">Years of Excellence</div>
                </div>
              </motion.div>
            </div>

            {/* 3つの柱：会社の行動基準 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {/* 第1の柱：地域社会の礎を築く */}
              <motion.div 
                className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-lime-50 hover:to-green-50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* 見出し */}
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-lime-600 transition-colors duration-300 font-serif leading-tight">
                  地域社会の<br />
                  <span className="text-lime-600">礎を築く</span>
                </h3>
                
                {/* 説明文 */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  私たちは型枠を通して地域の礎をつくります
                </p>
                
                {/* 装飾線 */}
                <div className="w-16 h-1 bg-gradient-to-r from-lime-500 to-green-600 mx-auto group-hover:w-24 transition-all duration-500"></div>
              </motion.div>

              {/* 第2の柱：技術を磨き続ける */}
              <motion.div 
                className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* 見出し */}
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300 font-serif leading-tight">
                  技術を<br />
                  <span className="text-blue-600">磨き続ける</span>
                </h3>
                
                {/* 説明文 */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  私たちは人の喜びを作る為に技術を磨きます
                </p>
                
                {/* 装飾線 */}
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto group-hover:w-24 transition-all duration-500"></div>
              </motion.div>

              {/* 第3の柱：信頼に応える企業を目指す */}
              <motion.div 
                className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 hover:shadow-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* 見出し */}
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300 font-serif leading-tight">
                  信頼に応える<br />
                  <span className="text-orange-600">企業を目指す</span>
                </h3>
                
                {/* 説明文 */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  私たちは信頼に応えられる企業を目指します
                </p>
                
                {/* 装飾線 */}
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto group-hover:w-24 transition-all duration-500"></div>
              </motion.div>
            </div>

            {/* メインコンテンツ：非対称グリッドレイアウト */}
            <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12">
              {/* 左側：写真とビジョン */}
              <motion.div
                className="col-span-12 lg:col-span-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* メイン写真 */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src="/images/組立３_edited.jpg" 
                      alt="藤喜建設の施工現場" 
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    {/* オーバーレイテキスト */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8 md:p-12">
                      <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 drop-shadow-lg shadow-black">地域と共に歩む47年</h3>
                        <p className="text-white/90 leading-relaxed drop-shadow-md shadow-black">
                          八幡平市の発展と共に成長してきた私たちの歴史
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* フローティングカード */}

                </div>

                {/* 会社の行動基準 */}
                <motion.div 
                  className="mt-12 bg-gradient-to-br from-lime-50 to-green-50 p-8 md:p-10 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-sans mr-3">01</span>
                    会社の行動基準
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start group">
                      <div className="w-6 h-6 bg-lime-500 rounded-full mt-1 mr-4 shrink-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-gray-700 font-medium leading-relaxed">私たちは型枠を通して地域の礎をつくります</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-6 h-6 bg-lime-500 rounded-full mt-1 mr-4 shrink-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-gray-700 font-medium leading-relaxed">私たちは人の喜びを作る為に技術を磨きます</p>
                    </div>
                    <div className="flex items-start group">
                      <div className="w-6 h-6 bg-lime-500 rounded-full mt-1 mr-4 shrink-0 group-hover:scale-110 transition-transform"></div>
                      <p className="text-gray-700 font-medium leading-relaxed">私たちは信頼に応えられる企業を目指します</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 右側：実績とストーリー */}
              <motion.div
                className="col-span-12 lg:col-span-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* 実績グリッド */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{yearsInBusiness}年</div>
                    <div className="text-sm text-blue-700 font-medium">創業からの歴史</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-orange-600 mb-2">八幡平</div>
                    <div className="text-sm text-orange-700 font-medium">地域密着</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-green-600 mb-2">型枠</div>
                    <div className="text-sm text-green-700 font-medium">専門技術</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-purple-600 mb-2">安全</div>
                    <div className="text-sm text-purple-700 font-medium">第一主義</div>
                  </div>
                </div>

                {/* ストーリーカード */}
                <motion.div 
                  className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-serif font-bold mb-4">私たちのストーリー</h3>
                    <p className="text-white leading-relaxed mb-6">
                      1977年の創業以来、八幡平市の発展と共に歩んできました。地域の皆様の信頼を胸に、より良い建築物を創造し続けています。
                    </p>
                    <a href="/about" className="inline-flex items-center text-lime-400 hover:text-lime-300 font-medium transition-colors">
                      詳しく見る
                    </a>
                  </div>
                </motion.div>


              </motion.div>
            </div>
          </div>
        </section>

        {/* 私たちの想い */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          {/* フルワイド背景写真 */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/矢巾町１.jpeg" 
              alt="建築現場の風景" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-12 gap-8">
              {/* 左側：引用風のメインメッセージ */}
              <motion.div 
                className="col-span-12 lg:col-span-7"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 md:w-24 h-[2px] bg-lime-600 mr-4"></div>
                    <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">OUR PHILOSOPHY</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-gray-900 mb-10 leading-[1.1]">
                    私たちの想い
                  </h2>
                  
                  {/* 引用アイコン */}
                  <div className="text-6xl text-lime-600/20 font-serif leading-none mb-6">"</div>
                  
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                    建築で生活を豊かに
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    私たち藤喜建設は、1977年の創業以来、ここ岩手県八幡平市に根ざし、建築を通じて人々の生活を豊かにすることを目指してまいりました。単に建物を造るのではなく、そこに住まう人、利用する人の笑顔を想像し、安心と快適、そして夢を形にすること。それが私たちの使命です。
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    技術・知識・経験はもちろん、人として、社会人としても信頼される企業であり続けるため、社員一同、日々研鑽を積んでいます。
                  </p>
                  
                  {/* CTAボタン */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/about" className="inline-flex items-center px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition-colors duration-300">
                      会社概要を詳しく見る
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="/contact" className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-400 hover:border-lime-600 text-gray-700 hover:text-lime-600 font-semibold rounded-lg transition-colors duration-300">
                      お問い合わせはこちら
                    </a>
                  </div>
                  
                  {/* 代表挨拶 - 顔写真と署名 */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-gray-800 mb-2">代表取締役</p>
                        <p className="text-2xl font-serif font-bold text-gray-900 mb-1">工藤　伸元</p>
                        <p className="text-sm text-gray-600 font-medium">有限会社藤喜建設</p>
                        <p className="text-xs text-gray-500 mt-1">Since 1977</p>
                      </div>
                      <div className="flex flex-col items-center">
                        {/* 不要な要素（社長・写真準備中）は削除済み */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 右側：ビジュアル要素 */}
              <motion.div 
                className="col-span-12 lg:col-span-5 flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* キーワードカード */}
                <div className="space-y-4">
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:bg-white/95 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">地域と共に</h3>
                        <p className="text-gray-600 mt-1">八幡平市の発展に貢献</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:bg-white/95 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">人を大切に</h3>
                        <p className="text-gray-600 mt-1">笑顔を創る建築</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:bg-white/95 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">技術を磨く</h3>
                        <p className="text-gray-600 mt-1">日々の研鑽と成長</p>
                      </div>
                    </div>
                  </motion.div>
                </div>


              </motion.div>
            </div>
          </div>
        </section>

        {/* 藤喜建設の3つの強み */}
        <section className="relative py-24 md:py-40 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* 背景パターン */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-lime-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* セクションヘッダー */}
            <motion.div 
              className="text-center mb-16 md:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-[2px] bg-lime-600 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">OUR STRENGTHS</span>
                <div className="w-12 h-[2px] bg-lime-600 ml-4"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-gray-900 mb-8">
                藤喜建設の3つの強み
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {yearsInBusiness}年の歴史で培った技術力と信頼、そして未来を見据えた挑戦
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/results" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                  施工実績を見る
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/work" className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors duration-300">
                  藤喜建設の仕事
                </a>
              </div>
            </motion.div>

            {/* 強み1：信頼と実績 - フルワイドレイアウト */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="col-span-12 md:col-span-5">
                  {/* 画像削除済み */}
                </div>
                <div className="col-span-12 text-center">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                      <div>
                        <span className="text-blue-600 font-bold text-sm">STRENGTH 01</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">創業45年以上の信頼と地域密着の実績</h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      八幡平市の発展と共に歩んできた歴史。地域を知り尽くした私たちだからこそできる、きめ細やかな対応力があります。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">多数</div>
                        <div className="text-sm text-blue-700">完成プロジェクト</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">47年</div>
                        <div className="text-sm text-blue-700">地域貢献</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">高い</div>
                        <div className="text-sm text-blue-700">顧客満足度</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 強み2：専門技術 - 逆レイアウト */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="col-span-12 md:col-span-7 order-2 md:order-1">
                  <div className="pr-0 md:pr-8">
                    <div className="flex items-center mb-6">
                      <div className="ml-6">
                        <span className="text-lime-600 font-bold text-sm">STRENGTH 02</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">高度な技術と幅広い対応力</h3>
                      </div>
                    </div>
                                          <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        型枠工事一式（建築・土木）のプロフェッショナルとして、高品質な施工をお約束。{yearsInBusiness}年の実績と技術で、多様なニーズにお応えできる専門力を誇ります。
                      </p>
                    {/* 技術サービス一覧 */}
                    <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">型枠工事一式（建築・土木）</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">建築工事一式</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 order-1 md:order-2">
                  <div className="relative">
                    <img 
                      src="/images/型枠１.jpeg" 
                      alt="専門技術" 
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-lime-600 text-white p-6 rounded-2xl shadow-xl">
                      <div className="flex items-center">
                        <div>
                          <div className="text-2xl font-bold">認定技術</div>
                          <div className="text-sm">Professional Skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 強み3：社風 - センターレイアウト */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 md:p-12 rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                  <span className="text-orange-600 font-bold text-sm">STRENGTH 03</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">人を育てる、温かい社風</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    経験豊富なベテランから意欲ある若手まで、互いに尊重し、支え合う文化。未経験からでもプロを目指せる教育体制と、働きがいのある環境があります。
                  </p>
                </div>
                
                {/* チーム写真グリッド */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="relative overflow-hidden rounded-xl group">
                    <img 
                      src="/images/作業写真7.jpeg" 
                      alt="チームメンバー" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm font-medium">ベテラン技術者</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl group">
                    <img 
                      src="/images/作業風景２.jpg" 
                      alt="チームメンバー" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm font-medium">若手社員</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl group">
                    <img 
                      src="/images/DSCF1724.jpg" 
                      alt="チームメンバー" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm font-medium">現場リーダー</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-xl group">
                    <img 
                      src="/images/DSCF1728.jpg" 
                      alt="チームメンバー" 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-sm font-medium">新入社員</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            {/* セクションヘッダー */}
            <motion.div 
              className="mb-16 md:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 md:w-24 h-[2px] bg-lime-600 mr-4"></div>
                    <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">OUR SERVICES</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 leading-[1.1]">
                    事業内容
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                    型枠工事一式（建築・土木）を主軸とし、建築工事一式まで、
                    病院、保育所から住宅、道路、橋梁まで幅広い分野で地域の発展に貢献しています。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 建築工事 - フルワイドレイアウト */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-12 gap-0 md:gap-8 items-stretch">
                <div className="col-span-12 md:col-span-8 relative h-[400px] md:h-[600px]">
                  <img 
                    src="/images/盛岡西消防署厨川出張所新築工事.jpg" 
                    alt="建築工事" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                    <div className="p-8 md:p-16 max-w-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-white font-bold text-sm uppercase tracking-wider">Service 01</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">建築工事</h3>
                      <p className="text-white/90 leading-relaxed mb-6">
                        病院、保育所から住宅まで、地域の暮らしを支える建物づくりを手がけています。八幡平市立病院、松尾保育所、巣子保育園など多数の実績があります。
                      </p>
                      <a href="/projects" className="inline-flex items-center text-white font-medium hover:text-lime-400 transition-colors group">
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 bg-blue-50 p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">主な施工実績</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          八幡平市立病院
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          松尾保育所
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          巣子保育園
                        </li>
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-blue-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-blue-700">建築プロジェクト</div>
                        </div>
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 型枠工事・土木工事 - 2カラムレイアウト */}
            <motion.div 
              className="grid grid-cols-12 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* 型枠工事 */}
              <div className="col-span-12 md:col-span-6">
                <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                  <img 
                    src="/images/組立３_edited.jpg" 
                    alt="型枠工事" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center mb-4">
                        <span className="text-white/80 font-bold text-sm uppercase tracking-wider">Service 02</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-3">型枠工事</h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        {yearsInBusiness}年の技術と経験で、建物の基礎となる型枠工事を専門に行います。安全第一を心掛け、確実な施工でお客様の信頼にお応えします。
                      </p>
                      <a href="/commercial" className="inline-flex items-center text-lime-400 font-medium hover:text-lime-300 transition-colors group">
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* フローティングバッジ */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-gray-900">専門技術</p>
                  </div>
                </div>
              </div>

              {/* 土木工事 */}
              <div className="col-span-12 md:col-span-6">
                <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                  <img 
                    src="/images/矢巾町１.jpeg" 
                    alt="土木工事" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center mb-4">
                        <span className="text-white/80 font-bold text-sm uppercase tracking-wider">Service 03</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-3">土木工事</h3>
                      <p className="text-white/90 leading-relaxed mb-4">
                        道路改良工事、橋梁工事など、地域の社会基盤整備に貢献。一般国道281号大坊の2地区道路改良工事、町道堤川目線堤川目橋橋梁新設工事などの実績があります。
                      </p>
                      <a href="/civil" className="inline-flex items-center text-orange-400 font-medium hover:text-orange-300 transition-colors group">
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* フローティングバッジ */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-gray-900">インフラ整備</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 追加のCTA */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-6">すべての事業で、地域の暮らしを支えています</p>
              <a href="/projects" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                全ての施工実績を見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          {/* 背景パターン */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* ヘッダー部分 */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
                  <span className="text-emerald-400 text-sm font-medium">Contact Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  建築・土木工事の
                  <br className="md:hidden" />
                  <span className="text-emerald-400">ご相談</span>
                </h2>
                                 <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                   {yearsInBusiness}年の実績と信頼で、お客様のご要望にお応えします。
                   <br className="hidden md:block" />
                   建築工事・型枠工事・土木工事のことなら藤喜建設にお任せください。
                 </p>
              </div>

              {/* 連絡先カード */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* 電話でのお問い合わせ */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">お電話でのお問い合わせ</h3>
                                             <p className="text-gray-300 text-sm">平日 8:00-17:00</p>
                    </div>
                  </div>
                  <a 
                    href="tel:0195-76-4735"
                    className="block w-full text-center px-6 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors duration-300 text-xl"
                  >
                    0195-76-4735
                  </a>
                </motion.div>

                {/* フォームでのお問い合わせ */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">メールでのお問い合わせ</h3>
                                             <p className="text-gray-300 text-sm">24時間受付</p>
                    </div>
                  </div>
                  <a 
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors duration-300 text-lg"
                  >
                    お問い合わせフォーム
                  </a>
                </motion.div>
              </div>

              {/* 追加情報 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                                 <p className="text-gray-200 text-sm mb-4">
                   見積もり無料・現地調査無料・ご相談だけでもお気軽に
                 </p>

            
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}