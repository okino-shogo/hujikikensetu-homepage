"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLoadingContext } from "./components/LoadingProvider";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { isLoadingComplete } = useLoadingContext();

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
    "description": "昭和52年創業、48年の実績を持つ建築工事・型枠工事の専門会社。八幡平市を中心とした岩手県内で、病院、保育所から住宅まで、地域の暮らしを支える建物づくりを手がけています。",
    "foundingDate": "1977",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "田頭第32地割59",
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
        "name": "建築工事",
        "description": "病院、保育所、住宅などの建築工事全般"
      },
      {
        "@type": "Service", 
        "name": "型枠工事",
        "description": "建築工事における型枠工事の専門施工"
      },
      {
        "@type": "Service",
        "name": "土木工事", 
        "description": "道路、橋梁等の土木工事"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "48"
    },
    "award": "48年の信頼と実績"
  };

  return (
    <>
      <Head>
        <title>有限会社藤喜建設 | 型枠工事を通して地域の礎をつくる - 八幡平市の建築・土木工事</title>
        <meta 
          name="description" 
          content="昭和52年創業、48年の実績を持つ藤喜建設。八幡平市を中心とした岩手県内で型枠工事・建築工事・土木工事を専門に行い、病院、保育所から住宅まで地域の暮らしを支える建物づくりを手がけています。安全第一を心掛けた確実な施工でお客様の信頼にお応えします。" 
        />
        <meta name="keywords" content="藤喜建設,型枠工事,建築工事,土木工事,八幡平市,岩手県,病院,保育所,住宅,安全第一,48年実績" />
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
                          型枠で
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
                          className="block gradient-text bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 50 }}
                          animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                        >
                          築く
                        </motion.span>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-lime-500"
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
                      昭和52年創業、48年の実績
                      <br className="hidden md:block" />
                      地域の礎をつくる建築・土木の専門会社
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
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: isLoadingComplete ? 1.8 : 2.1 }}
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
          {/* 背景の装飾要素 */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lime-50 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-green-50 to-transparent rounded-full blur-3xl opacity-40"></div>
          
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
                  昭和52年創業以来48年、型枠工事を通して地域の礎をつくり、
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
                  <div className="text-7xl md:text-8xl font-serif font-bold text-lime-600/20">48</div>
                  <div className="text-sm md:text-base font-sans font-medium text-gray-600 -mt-4">Years of Excellence</div>
                </div>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-12">
                      <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">地域と共に歩む48年</h3>
                        <p className="text-white/90 leading-relaxed">
                          八幡平市の発展と共に成長してきた私たちの歴史
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* フローティングカード */}
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">100+</div>
                        <div className="text-sm text-gray-600">プロジェクト完成</div>
                      </div>
                    </div>
                  </motion.div>
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
                    <div className="text-4xl font-bold text-blue-600 mb-2">48年</div>
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
                    <p className="text-gray-300 leading-relaxed mb-6">
                      1977年の創業以来、八幡平市の発展と共に歩んできました。地域の皆様の信頼を胸に、より良い建築物を創造し続けています。
                    </p>
                    <a href="/about" className="inline-flex items-center text-lime-400 hover:text-lime-300 font-medium transition-colors">
                      詳しく見る
                    </a>
                  </div>
                </motion.div>

                {/* 追加の写真 */}
                <motion.div 
                  className="mt-6 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="/images/職長2_edited.png" 
                      alt="藤喜建設チーム" 
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src="/images/作業風景２.jpg" 
                      alt="施工現場の様子" 
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 私たちの想い */}
        <section className="relative py-20 md:py-32 overflow-hidden">
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
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-[1.1]">
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
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    技術・知識・経験はもちろん、人として、社会人としても信頼される企業であり続けるため、社員一同、日々研鑽を積んでいます。
                  </p>
                  
                  {/* 署名風の装飾 */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">有限会社藤喜建設</p>
                        <p className="text-xs text-gray-500 mt-1">Since 1977</p>
                      </div>
                      <div className="w-24 h-24 bg-lime-50 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-lime-600">藤</span>
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
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">技術を磨く</h3>
                        <p className="text-gray-600 mt-1">日々の研鑽と成長</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 装飾的な要素 */}
                <motion.div 
                  className="mt-12 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                    <p className="text-sm font-medium text-gray-700">
                      Creating Better Future Through Construction
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 藤喜建設の3つの強み */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                藤喜建設の3つの強み
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                48年の歴史で培った技術力と信頼、そして未来を見据えた挑戦
              </p>
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
                  <div className="relative">
                    <img 
                      src="/images/EhHtc5tUYAA-oZa.jpg" 
                      alt="会社の歴史" 
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                      <div className="text-5xl font-bold mb-2">48+</div>
                      <div className="text-sm font-medium">Years of Trust</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="pl-0 md:pl-8">
                    <div className="flex items-center mb-6">
                      <div className="ml-6">
                        <span className="text-blue-600 font-bold text-sm">STRENGTH 01</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">創業45年以上の信頼と地域密着の実績</h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      八幡平市の発展と共に歩んできた歴史。地域を知り尽くした私たちだからこそできる、きめ細やかな対応力があります。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                        <div className="text-sm text-blue-700">完成プロジェクト</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">48年</div>
                        <div className="text-sm text-blue-700">地域貢献</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
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
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">高度な専門技術と幅広い対応力</h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      型枠工事のプロフェッショナルとして、高品質な施工をお約束。建築一式から土木、舗装まで、多様なニーズにお応えできる総合力も自慢です。
                    </p>
                    {/* 技術サービス一覧 */}
                    <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">型枠工事</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">建築工事一式</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">土木工事</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-lime-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 font-medium">舗装工事</span>
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
                      src="/images/DSCF1720.jpg" 
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
                    建築工事・型枠工事を中心に、病院、保育所から住宅、
                    道路、橋梁まで幅広い分野で地域の発展に貢献しています。
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
                      <a href="/residential" className="inline-flex items-center text-white font-medium hover:text-lime-400 transition-colors group">
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
                          <div className="text-3xl font-bold text-blue-600">50+</div>
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
                    src="/images/katawaku1.jpg" 
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
                        48年の技術と経験で、建物の基礎となる型枠工事を専門に行います。安全第一を心掛け、確実な施工でお客様の信頼にお応えします。
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
                    src="/images/矢巾町１ (1).jpeg" 
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

        {/* 主要実績 */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-4">
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
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">OUR WORKS</span>
                <div className="w-12 h-[2px] bg-lime-600 ml-4"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                主要な施工実績
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                48年間で手がけた代表的な建築・土木工事をご紹介します。
                <br />地域の皆様と共に、数多くのプロジェクトを成功へと導いてきました。
              </p>
            </motion.div>

            {/* プロジェクトギャラリー - マゾンリーレイアウト風 */}
            <div className="grid grid-cols-12 gap-6">
              {/* 大型プロジェクト - 八幡平市立病院 */}
              <motion.div 
                className="col-span-12 md:col-span-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src="/images/八幡平市立病院.jpg" 
                    alt="八幡平市立病院" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">公共施設</div>
                        <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">2022年完成</div>
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">八幡平市立病院</h3>
                      <p className="text-white/90 mb-4">地域医療の中核を担う総合病院の新築工事。最新の医療設備と快適な療養環境を実現。</p>
                      <a href="/projects/hospital" className="inline-flex items-center text-white font-medium hover:text-lime-400 transition-colors group/link">
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  {/* 注目バッジ */}
                  <div className="absolute top-6 left-6 bg-lime-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-sm">注目プロジェクト</span>
                  </div>
                </div>
              </motion.div>

              {/* 中型プロジェクト - 松尾農場廃水処理施設 */}
              <motion.div 
                className="col-span-12 md:col-span-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                  <img 
                    src="/images/DSCF1742.jpg" 
                    alt="松尾農場廃水処理施設" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">環境施設</div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">松尾農場廃水処理施設</h3>
                      <p className="text-white/90 text-sm">環境に配慮した最新の廃水処理技術を導入</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 保育所プロジェクト群 */}
              <motion.div 
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-gray-900">保育所・児童福祉施設</h3>
                      <p className="text-gray-600 text-sm">子どもたちの笑顔のために</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src="/images/松尾地区保育所.jpg" 
                        alt="松尾保育所" 
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-bold text-gray-900">松尾保育所</h4>
                      <p className="text-sm text-gray-600 mt-1">明るく開放的な保育環境</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src="/images/R5年巣子保育園完成写真.jpeg" 
                        alt="巣子保育園" 
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-bold text-gray-900">巣子保育園</h4>
                      <p className="text-sm text-gray-600 mt-1">安全で快適な保育施設</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-pink-600">5+</span>
                      </div>
                      <p className="ml-3 text-gray-700 font-medium">保育施設の施工実績</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 土木インフラプロジェクト */}
              <motion.div 
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl group">
                  <img 
                    src="/images/写真1.jpeg" 
                    alt="道路改良工事" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">土木インフラ</div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-3">道路・橋梁工事</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-white/90">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">国道281号大坊の2地区道路改良工事</span>
                        </div>
                        <div className="flex items-center text-white/90">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">町道堤川目線堤川目橋橋梁新設工事</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 実績サマリー */}
              <motion.div 
                className="col-span-12 mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-lime-50 via-green-50 to-emerald-50 p-8 md:p-12 rounded-3xl">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">100+</div>
                      <p className="text-gray-700 font-medium">完成プロジェクト</p>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">48</div>
                      <p className="text-gray-700 font-medium">年の実績</p>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">50+</div>
                      <p className="text-gray-700 font-medium">公共施設</p>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">100%</div>
                      <p className="text-gray-700 font-medium">地域密着</p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-10">
                    <a href="/projects" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors group">
                      すべての施工実績を見る
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* お知らせ */}
        <section className="relative py-20 md:py-32 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* セクションヘッダー */}
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
                    <div className="w-16 md:w-24 h-[2px] bg-lime-600 mr-4"></div>
                    <span className="font-english text-sm md:text-base tracking-[0.2em] text-lime-600 font-medium">NEWS & TOPICS</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">
                    お知らせ
                  </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 text-right">
                  <a href="/news" className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group">
                    すべて見る
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ニュースレイアウト - 新聞風 */}
            <div className="grid grid-cols-12 gap-8">
              {/* メインニュース */}
              <motion.div 
                className="col-span-12 lg:col-span-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <article className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src="/images/R5年巣子保育園完成写真.jpeg" 
                      alt="八幡平市新保育園建設工事" 
                      className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">施工実績</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <time className="text-blue-600 font-medium">2024.10.20</time>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">重要なお知らせ</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      八幡平市新保育園建設工事が完成しました
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      地域の子どもたちの笑顔のために、安全で快適な保育環境を提供する施設が完成いたしました。最新の設備と温かみのある空間設計で、子どもたちの健やかな成長を支援します。
                    </p>
                    
                    <div className="flex items-center pt-4">
                      <div className="flex -space-x-2">
                        <img src="/images/作業風景３.jpg" alt="著者" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="/images/写真２_edited_edited.jpg" alt="著者" className="w-10 h-10 rounded-full border-2 border-white" />
                      </div>
                      <span className="ml-4 text-sm text-gray-600">プロジェクトチーム</span>
                    </div>
                  </div>
                </article>
              </motion.div>

              {/* サイドニュース */}
              <motion.div 
                className="col-span-12 lg:col-span-4 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* お知らせ1 */}
                <article className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-lime-100 text-lime-700 text-xs font-bold px-3 py-1 rounded-full">
                      お知らせ
                    </div>
                    <time className="text-sm text-gray-500">2024.11.15</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                    年末年始休業のお知らせ
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    誠に勝手ながら、12月29日（金）～1月3日（水）まで年末年始休業とさせていただきます。
                  </p>
                  
                  <div className="flex items-center text-lime-600 text-sm font-medium group-hover:text-lime-700">
                    詳細を見る
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>

                {/* お知らせ2 */}
                <article className="group cursor-pointer bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                      採用情報
                    </div>
                    <time className="text-sm text-gray-500">2024.09.15</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    新卒・中途採用を募集しています
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    建築業界で活躍したい方、地域貢献に興味のある方を募集中です。未経験者歓迎。
                  </p>
                  
                  <div className="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700">
                    詳細を見る
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>

                {/* ニュースレター登録 */}
                <div className="bg-gray-900 text-white p-6 rounded-2xl">
                  <h4 className="text-lg font-bold mb-3">最新情報をお届け</h4>
                  <p className="text-gray-300 text-sm mb-4">メールマガジンに登録して、藤喜建設の最新情報を受け取りましょう。</p>
                  <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    登録する
                  </button>
                </div>
              </motion.div>
            </div>

            {/* タイムライン形式の追加ニュース */}
            <motion.div 
              className="mt-16 pt-16 border-t border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">過去のお知らせ</h3>
              
              <div className="relative">
                {/* タイムライン */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {/* タイムラインアイテム1 */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-8 w-4 h-4 bg-white border-2 border-gray-400 rounded-full -translate-x-1/2 group-hover:border-lime-600 transition-colors"></div>
                    <div className="ml-20 flex-1">
                      <time className="text-sm text-gray-500 font-medium">2024.08.01</time>
                      <h4 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-lime-600 transition-colors cursor-pointer">
                        夏季休業のお知らせ
                      </h4>
                      <p className="text-gray-600 mt-2">8月11日～8月15日まで夏季休業とさせていただきます。</p>
                    </div>
                  </div>
                  
                  {/* タイムラインアイテム2 */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-8 w-4 h-4 bg-white border-2 border-gray-400 rounded-full -translate-x-1/2 group-hover:border-lime-600 transition-colors"></div>
                    <div className="ml-20 flex-1">
                      <time className="text-sm text-gray-500 font-medium">2024.07.15</time>
                      <h4 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-lime-600 transition-colors cursor-pointer">
                        安全大会を開催しました
                      </h4>
                      <p className="text-gray-600 mt-2">全社員参加の安全大会を開催し、安全意識の向上を図りました。</p>
                    </div>
                  </div>
                  
                  {/* タイムラインアイテム3 */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-8 w-4 h-4 bg-white border-2 border-gray-400 rounded-full -translate-x-1/2 group-hover:border-lime-600 transition-colors"></div>
                    <div className="ml-20 flex-1">
                      <time className="text-sm text-gray-500 font-medium">2024.06.01</time>
                      <h4 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-lime-600 transition-colors cursor-pointer">
                        新入社員が入社しました
                      </h4>
                      <p className="text-gray-600 mt-2">新たに3名の仲間が加わりました。共に成長していきます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 採用情報への誘導 */}
        <section className="relative py-32 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                あなたも、地図に残る仕事に挑戦しませんか？
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
                藤喜建設では、未来を共に創る新しい仲間を募集しています。経験は問いません。ものづくりへの情熱、成長したいという意欲があれば大丈夫。私たちと一緒に、八幡平の豊かな未来を築きましょう。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  募集要項を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/voices"
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                >
                  先輩社員の声を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="relative py-24 bg-gradient-to-r from-lime-600 to-lime-700 overflow-hidden">
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
                建築・土木工事のご相談
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                48年の実績と信頼で、お客様のご要望にお応えします。
                建築工事・型枠工事・土木工事のことなら藤喜建設にお任せください。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:0195-76-4735"
                  className="inline-flex items-center px-8 py-4 bg-white text-lime-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0195-76-4735
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-lime-600 transition-colors duration-300"
                >
                  お問い合わせフォーム
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}