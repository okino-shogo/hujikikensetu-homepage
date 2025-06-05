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
        <section className="relative py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                私たちについて
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                昭和52年創業以来48年、型枠工事を通して地域の礎をつくり、
                人の喜びを作る為に技術を磨き続けています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 左側：会社の特徴 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-2xl border border-lime-200">
                    <h3 className="text-2xl font-serif font-bold text-lime-900 mb-6">
                      会社の行動基準
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-lime-800 font-medium">私たちは型枠を通して地域の礎をつくります</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-lime-800 font-medium">私たちは人の喜びを作る為に技術を磨きます</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-lime-800 font-medium">私たちは信頼に応えられる企業を目指します</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                      48年の実績
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-blue-800 font-medium">昭和52年創業の確かな技術力</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-blue-800 font-medium">八幡平市を中心とした地域密着</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                        <p className="text-blue-800 font-medium">安全第一を心掛けた現場管理</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 右側：実績数値 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-4xl font-bold text-lime-600 mb-2">48年</div>
                    <div className="text-gray-600 font-medium">の実績</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-4xl font-bold text-blue-600 mb-2">八幡平市</div>
                    <div className="text-gray-600 font-medium">中心エリア</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-4xl font-bold text-orange-600 mb-2">型枠工事</div>
                    <div className="text-gray-600 font-medium">専門技術</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-4xl font-bold text-green-600 mb-2">安全第一</div>
                    <div className="text-gray-600 font-medium">施工管理</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 私たちの想い */}
        <section className="relative py-32 bg-gradient-to-br from-lime-50 to-lime-100 overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                私たちの想い
              </h2>
              <p className="text-2xl text-lime-800 font-bold mb-8">
                建築で生活を豊かに
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-12 rounded-3xl shadow-lg border border-lime-200">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  私たち藤喜建設は、1977年の創業以来、ここ岩手県八幡平市に根ざし、建築を通じて人々の生活を豊かにすることを目指してまいりました。単に建物を造るのではなく、そこに住まう人、利用する人の笑顔を想像し、安心と快適、そして夢を形にすること。それが私たちの使命です。技術・知識・経験はもちろん、人として、社会人としても信頼される企業であり続けるため、社員一同、日々研鑽を積んでいます。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 藤喜建設の3つの強み */}
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
                藤喜建設の3つの強み
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* 信頼と実績 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">創業45年以上の信頼と地域密着の実績</h3>
                <p className="text-gray-600 leading-relaxed">
                  八幡平市の発展と共に歩んできた歴史。地域を知り尽くした私たちだからこそできる、きめ細やかな対応力があります。
                </p>
              </motion.div>

              {/* 専門技術 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-lime-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">高度な専門技術と幅広い対応力</h3>
                <p className="text-gray-600 leading-relaxed">
                  型枠工事のプロフェッショナルとして、高品質な施工をお約束。建築一式から土木、舗装まで、多様なニーズにお応えできる総合力も自慢です。
                </p>
              </motion.div>

              {/* 社風 */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">人を育てる、温かい社風</h3>
                <p className="text-gray-600 leading-relaxed">
                  経験豊富なベテランから意欲ある若手まで、互いに尊重し、支え合う文化。未経験からでもプロを目指せる教育体制と、働きがいのある環境があります。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="relative py-32 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                事業内容
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                建築工事・型枠工事を中心に、病院、保育所から住宅、
                道路、橋梁まで幅広い分野で地域の発展に貢献しています。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 建築工事 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2 0h4m6 0a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">建築工事</h3>
                <p className="text-gray-600 text-center mb-6">病院、保育所から住宅まで、地域の暮らしを支える建物づくりを手がけています。八幡平市立病院、松尾保育所、巣子保育園など多数の実績があります。</p>
                <div className="text-center">
                  <a href="/residential" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    詳細を見る →
                  </a>
                </div>
              </motion.div>
              
              {/* 型枠工事 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3l4 4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">型枠工事</h3>
                <p className="text-gray-600 text-center mb-6">48年の技術と経験で、建物の基礎となる型枠工事を専門に行います。安全第一を心掛け、確実な施工でお客様の信頼にお応えします。</p>
                <div className="text-center">
                  <a href="/commercial" className="text-lime-600 font-semibold hover:text-lime-700 transition-colors">
                    詳細を見る →
                  </a>
                </div>
              </motion.div>
              
              {/* 土木工事 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">土木工事</h3>
                <p className="text-gray-600 text-center mb-6">道路改良工事、橋梁工事など、地域の社会基盤整備に貢献。一般国道281号大坊の2地区道路改良工事、町道堤川目線堤川目橋橋梁新設工事などの実績があります。</p>
                <div className="text-center">
                  <a href="/civil" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    詳細を見る →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 主要実績 */}
        <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 section-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                主要な施工実績
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                48年間で手がけた代表的な建築・土木工事をご紹介します。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 公共施設・医療施設 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2 0h4m6 0a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">公共施設・医療施設</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-blue-800">八幡平市立病院</h4>
                    <p className="text-blue-600 text-sm">新築工事</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-bold text-blue-800">松尾農場廃水処理施設</h4>
                    <p className="text-blue-600 text-sm">建設工事</p>
                  </div>
                </div>
              </motion.div>

              {/* 保育所・児童福祉施設 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">保育所・児童福祉施設</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-green-800">松尾保育所</h4>
                    <p className="text-green-600 text-sm">新築工事</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-bold text-green-800">巣子保育園</h4>
                    <p className="text-green-600 text-sm">新築工事</p>
                  </div>
                </div>
              </motion.div>

              {/* 土木・インフラ */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">土木・インフラ</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-orange-800">国道281号大坊の2地区</h4>
                    <p className="text-orange-600 text-sm">道路改良工事</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-bold text-orange-800">町道堤川目線堤川目橋</h4>
                    <p className="text-orange-600 text-sm">橋梁新設工事</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* お知らせ */}
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
                お知らせ
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* お知らせアイテム1 */}
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-lime-600 text-white text-sm px-3 py-1 rounded-full font-semibold mr-3">お知らせ</span>
                        <span className="text-gray-500 text-sm">2024.11.15</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">年末年始休業のお知らせ</h3>
                      <p className="text-gray-600">誠に勝手ながら、12月29日（金）～1月3日（水）まで年末年始休業とさせていただきます。</p>
                    </div>
                  </div>
                </motion.div>

                {/* お知らせアイテム2 */}
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-semibold mr-3">施工実績</span>
                        <span className="text-gray-500 text-sm">2024.10.20</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">八幡平市新保育園建設工事が完成しました</h3>
                      <p className="text-gray-600">地域の子どもたちの笑顔のために、安全で快適な保育環境を提供する施設が完成いたしました。</p>
                    </div>
                  </div>
                </motion.div>

                {/* お知らせアイテム3 */}
                <motion.div 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-600 text-white text-sm px-3 py-1 rounded-full font-semibold mr-3">採用情報</span>
                        <span className="text-gray-500 text-sm">2024.09.15</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">新卒・中途採用を募集しています</h3>
                      <p className="text-gray-600">建築業界で活躍したい方、地域貢献に興味のある方を募集中です。未経験者歓迎。</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="/news" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  一覧を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
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