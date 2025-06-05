"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function CareersPage() {
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

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "型枠大工",
    "description": "<p>型枠大工としての作業一式、その他連携作業の補助や作業車両の運転及び操作等を行っていただきます。</p><p><strong>応募資格:</strong></p><ul><li>新卒: 令和8年卒業予定の高校生・短大・専門・大学生</li><li>既卒・中途: 18歳以上の方</li></ul><p>資格・経験スキルは不問ですが、普通自動車免許取得を推奨します。</p>",
    "identifier": {
      "@type": "PropertyValue",
      "name": "有限会社 藤喜建設",
      "value": "FWC-001"
    },
    "datePosted": new Date().toISOString().substring(0,10),
    "validThrough": new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().substring(0,10),
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "有限会社 藤喜建設",
      "sameAs": "https://www.fujiki-k.com",
      "logo": "/images/fujiki-logo_edited.avif"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "田頭第32地割59",
        "addressLocality": "八幡平市",
        "addressRegion": "岩手県",
        "postalCode": "028-7112",
        "addressCountry": "JP"
      },
      "description": "本社加工場若しくは各工事現場"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "JPY",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 184000,
        "maxValue": 220800,
        "unitText": "MONTH"
      },
      "description": "新卒 高卒: ¥184,000, 短大・専門卒: ¥202,400, 大卒: ¥220,800. 既卒・中途: ¥184,000～ (経験や資格により優遇)"
    },
    "responsibilities": "型枠大工としての作業一式、その他連携作業の補助や作業車両の運転及び操作等",
    "qualifications": "新卒: 令和8年卒業予定の高校生・短大・専門・大学生. 既卒・中途: 18歳以上の方. 普通自動車免許取得推奨.",
    "experienceRequirements": "不問",
    "educationRequirements": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "高校・短大・専門学校・大学卒業予定または既卒"
    },
    "jobBenefits": "各種手当(資格・役職・技能・通勤・住宅)、昇給年1回、賞与年1回(業績による)、社会保険完備(健康・厚生年金・雇用・労災)、建設業退職金共済加入、週休2日制(第2・4土曜、日曜、他)、長期休暇(GW・夏季・年末年始)、有給休暇、資格取得補助、宿泊施設利用補助、技能訓練派遣、研修参加、作業服等支給",
    "workHours": "8:00 - 17:00 (時間外勤務あり、休憩100分)",
    "skills": "型枠工事技術 (あれば尚可)"
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
        />
      </Head>
      <div className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 背景写真 */}
          <div 
            className="absolute inset-0 z-0"
            style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
          >
            <img 
              src="/images/作業風景１.jpg" 
              alt="型枠作業現場" 
              className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
            />
            
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-orange-900/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* 動的な光の演出 */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                background: `radial-gradient(ellipse at ${50 + scrollY * 0.01}% ${50 - scrollY * 0.005}%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)`,
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
                      CAREERS AT FUJIKI CONSTRUCTION
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
                          型枠大工
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
                          className="block gradient-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 50 }}
                          animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                        >
                          募集中
                        </motion.span>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-orange-500"
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
                      新卒・既卒問わず歓迎
                      <br className="hidden md:block" />
                      技術を磨き地域の礎をつくる仕事
                    </p>
                  </motion.div>
                  
                  {/* 採用情報数値 */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-8 justify-center pt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: isLoadingComplete ? 1.5 : 1.8 }}
                    style={{ transform: `translateY(${scrollY * -0.03}px)` }}
                  >
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">日給制</div>
                      <div className="text-lg text-white/80 font-medium">給与体系</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">週休2日</div>
                      <div className="text-lg text-white/80 font-medium">休日制度</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">48年</div>
                      <div className="text-lg text-white/80 font-medium">の実績</div>
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
                    <button className="btn-primary px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
                      募集要項を見る
                    </button>
                    <button className="btn-outline px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-orange-700">
                      応募・お問い合わせ
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* スクロール指示 */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: isLoadingComplete ? 2.1 : 2.4 }}
            >
              <div className="text-white/60 text-sm font-light mb-3 tracking-wider font-english">
                SCROLL TO EXPLORE
              </div>
              <div className="w-px h-12 bg-white/30 mx-auto animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </section>

        {/* 募集職種セクション */}
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
                募集職種
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                型枠工事を通して地域の礎をつくる。48年の実績を持つ藤喜建設で、
                一緒に技術を磨いて地域に貢献しませんか。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
              {/* 型枠大工 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">型枠大工</h3>
                        <p className="text-orange-600 font-medium">正社員募集</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">仕事内容</h4>
                        <p className="text-gray-600">建築工事における型枠工事全般。病院、保育所、住宅など様々な建物の基礎から躯体まで、型枠の組立・解体作業を行います。</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">応募資格</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• 新卒・既卒問わず歓迎</li>
                          <li>• 型枠工事経験者優遇</li>
                          <li>• やる気と向上心のある方</li>
                          <li>• 安全第一で作業できる方</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                      <h4 className="font-bold text-orange-900 mb-4">待遇・条件</h4>
                      <div className="space-y-3">
                        <div className="flex">
                          <span className="text-orange-700 font-medium w-20 shrink-0">給与</span>
                          <span className="text-orange-800">日給制（経験・能力による）</span>
                        </div>
                        <div className="flex">
                          <span className="text-orange-700 font-medium w-20 shrink-0">休日</span>
                          <span className="text-orange-800">週休2日制</span>
                        </div>
                        <div className="flex">
                          <span className="text-orange-700 font-medium w-20 shrink-0">勤務地</span>
                          <span className="text-orange-800">岩手県内各現場</span>
                        </div>
                        <div className="flex">
                          <span className="text-orange-700 font-medium w-20 shrink-0">保険</span>
                          <span className="text-orange-800">労災保険完備</span>
                        </div>
                        <div className="flex">
                          <span className="text-orange-700 font-medium w-20 shrink-0">交通費</span>
                          <span className="text-orange-800">支給（規定あり）</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-4">こんな方を求めています</h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-blue-800 text-sm">技術を磨いて成長したい方</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-blue-800 text-sm">地域に貢献する仕事がしたい方</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <p className="text-blue-800 text-sm">チームワークを大切にできる方</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 会社の魅力セクション */}
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
                藤喜建設の魅力
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                昭和52年創業、48年の実績と信頼。型枠工事を通して地域の発展に貢献する
                やりがいのある職場です。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 左：会社の特徴 */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                  <h3 className="text-2xl font-serif font-bold text-orange-900 mb-6">
                    会社の行動基準
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-orange-800 font-medium">私たちは型枠を通して地域の礎をつくります</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-orange-800 font-medium">私たちは人の喜びを作る為に技術を磨きます</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-orange-800 font-medium">私たちは信頼に応えられる企業を目指します</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">
                    技術と成長
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">48年の実績に基づく確かな技術指導</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">病院から住宅まで多様な現場での経験</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">型枠工事のプロフェッショナルとして成長</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 右：働く環境 */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    働く環境
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">安全第一の職場</h4>
                        <p className="text-gray-600 text-sm">「安全第一を心掛けて作業しています」を基本方針に、事故のない現場作りを徹底</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">地域密着の仕事</h4>
                        <p className="text-gray-600 text-sm">八幡平市を中心とした岩手県内で、地域の発展に直接貢献できる仕事</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">週休2日制</h4>
                        <p className="text-gray-600 text-sm">しっかりと休息を取れる労働環境で、プライベートも充実</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                    やりがい
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-blue-800 font-medium">建物の基礎となる重要な工事を担当</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-blue-800 font-medium">完成した建物が地域で長く使われる達成感</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-blue-800 font-medium">技術を磨いてプロフェッショナルになる喜び</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 先輩社員の声セクション */}
        <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                先輩社員の声
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                実際に働いている先輩社員から、藤喜建設での仕事について聞いてみました。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 職長さんの声 */}
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src="/images/職長2_edited.png" 
                    alt="先輩社員 - 型枠大工職長" 
                    className="w-20 h-20 rounded-full object-cover mr-4 border-4 border-orange-200"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sさん</h3>
                    <p className="text-orange-600 font-medium">27年目・型枠大工職長</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">雰囲気がいい会社</h4>
                    <p className="text-gray-600 leading-relaxed">
                      普段は職長として型枠作業を一通りやりながら、現場のチームをまとめる仕事をしています。
                      建築の仕事は危険な作業をすることもあるので、事故や災害が無いように安全第一を心掛けて作業しています。
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-800 font-medium italic">
                      「藤喜建設は明るいキャラクターの人が多く雰囲気のいい会社だと思います。
                      現在では労働環境も改善され、皆さんが思っているほど厳しい職場ではありません。
                      楽しい事や建設業でしか得られない事もあるので、興味のある方は挑戦してみてください。」
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 仕事の魅力 */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                    職人のとある一日
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">6:30</div>
                      <div>
                        <h4 className="font-bold text-blue-800">起床</h4>
                        <p className="text-blue-700 text-sm">朝が早いので、起きたらすぐに準備をして家を出ます</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">8:00</div>
                      <div>
                        <h4 className="font-bold text-blue-800">朝礼・作業開始</h4>
                        <p className="text-blue-700 text-sm">職長を中心に作業内容確認と安全対策を共有</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">17:00</div>
                      <div>
                        <h4 className="font-bold text-blue-800">作業終了・退勤</h4>
                        <p className="text-blue-700 text-sm">作業内容を報告書に記入して退勤</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">
                    働く上で大切にしていること
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">安全に作業を進めることがとても大切</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">適度に休憩を入れながら体調管理</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <p className="text-green-800 font-medium">オンとオフの切り替えも大事</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 応募・お問い合わせセクション */}
        <section className="relative py-24 bg-gradient-to-r from-orange-600 to-orange-700 overflow-hidden">
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
                応募・お問い合わせ
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                型枠工事を通して地域の礎をつくる仕事に興味をお持ちの方、
                お気軽にお問い合わせください。新卒・既卒問わず歓迎いたします。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:0195-76-4735"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0195-76-4735
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300"
                >
                  お問い合わせフォーム
                </a>
              </div>
              
              <div className="mt-8 text-white/80 text-sm">
                <p>受付時間：平日 8:00〜17:00</p>
                <p>所在地：岩手県八幡平市田頭第32地割59</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 