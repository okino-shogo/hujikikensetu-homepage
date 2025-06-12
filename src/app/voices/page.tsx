"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { employees } from './data';

export default function VoicesPage() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoadingComplete(true), 500);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const employee = employees[0];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション - 他のページと統一 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景動画/画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DSCF1724.jpg"
            alt="藤喜建設の施工現場"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {/* ページタイトル */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: isLoadingComplete ? 0.3 : 0.6 }}
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-[2px] bg-green-500 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-green-400 font-medium">EMPLOYEE VOICES</span>
                <div className="w-16 h-[2px] bg-green-500 ml-4"></div>
              </div>
            </motion.div>

            {/* メインタイトル */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                <div className="relative py-2 inline-block">
                  <motion.span 
                    className="text-white font-bold drop-shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: isLoadingComplete ? 0.4 : 0.7 }}
                    style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                  >
                    先輩社員の
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
                    声
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
              
              {/* サブタイトル */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: isLoadingComplete ? 1.2 : 1.5 }}
                style={{ transform: `translateY(${scrollY * -0.05}px)` }}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                  実際に働く社員の生の声をお届け
                  <br className="hidden md:block" />
                  藤喜建設で働く魅力を感じてください
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* スクロール指示 */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center"
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
      </section>

      {/* 社員インタビューセクション */}
      <section className="relative py-32 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* 社員写真 */}
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <Image 
                    src={employee.image} 
                    alt={`${employee.name}の写真`}
                    width={600}
                    height={700}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                {/* フローティングネームカード */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">{employee.name}</h3>
                  <p className="text-green-700 font-semibold mb-3 text-lg">{employee.age} | {employee.position}</p>
                  <div className="flex items-center text-gray-600 text-sm gap-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">入社 {employee.joinYear}年</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">経験 {employee.experience}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* インタビュー内容 */}
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* 引用符のデザイン要素 */}
                <div className="absolute -top-4 -left-4 text-8xl text-green-200 font-serif opacity-50">"</div>
                
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-green-100 relative z-10">
                  {/* Pull Quote */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 leading-relaxed italic">
                      "{employee.catchphrase}"
                    </h2>
                  </div>

                  <div className="space-y-8 text-gray-700 leading-loose text-lg">
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-3 border-l-4 border-green-600 pl-4">
                        普段のお仕事について
                      </h4>
                      <p>{employee.interview.currentWork}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-3 border-l-4 border-green-600 pl-4">
                        安全第一への取り組み
                      </h4>
                      <p>{employee.interview.challenges}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-3 border-l-4 border-green-600 pl-4">
                        働きやすい環境への変化
                      </h4>
                      <p>{employee.interview.companyAtmosphere} また、{employee.interview.improvements}</p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-xl font-bold text-green-800 mb-3">
                        これから入社する方へ
                      </h4>
                      <p className="font-medium">{employee.interview.messageToNewcomers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 職人のとある一日 */}
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
              職人のとある一日
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              藤喜建設の職人の実際の1日をご紹介します。
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* 中央のタイムライン軸 */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            <div className="space-y-16 md:space-y-24">
              {[
                { 
                  time: "7:30", 
                  title: "出社・朝礼", 
                  description: "全員で安全確認、今日の作業内容を共有します。",
                  comment: "毎朝の安全確認が一番大切です！",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  time: "8:00", 
                  title: "現場作業開始", 
                  description: "現場に向かい、型枠の組立・解体作業を行います。",
                  comment: "チームワークで効率よく作業しています。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )
                },
                { 
                  time: "10:00", 
                  title: "小休憩", 
                  description: "15分の休憩で水分補給と体調確認。",
                  comment: "仲間と冗談を言いながらリフレッシュ！この切り替えが大事なんです。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                { 
                  time: "12:00", 
                  title: "昼休憩", 
                  description: "60分の昼休憩。仲間とコミュニケーションも大切な時間です。",
                  comment: "みんなでお弁当を食べながら、仕事以外の話もします。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )
                },
                { 
                  time: "13:00", 
                  title: "午後の作業", 
                  description: "午前に続き、型枠工事の作業を継続します。",
                  comment: "午後も集中して、丁寧に作業を進めます。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  time: "15:00", 
                  title: "小休憩", 
                  description: "15分の休憩で疲労回復と安全確認。",
                  comment: "疲れた時こそ安全確認を怠りません。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                { 
                  time: "17:00", 
                  title: "作業終了・片付け", 
                  description: "道具の片付け、明日の準備、翌日の作業確認。",
                  comment: "道具を大切にすることも職人の心得です。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  time: "17:30", 
                  title: "帰社", 
                  description: "お疲れ様でした！自分の時間を有効活用してください。",
                  comment: "今日も一日お疲れ様でした！家族との時間も大切にしています。",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {/* タイムライン上の点と時間 */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>

                  {/* コンテンツカード */}
                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
                      {/* アイコン */}
                      <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        {item.icon}
                      </div>
                      
                      {/* タイトルと説明 */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                      
                      {/* 先輩の一言（吹き出し） */}
                      <div className="relative bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-bold">先</span>
                          </div>
                          <div>
                            <p className="text-green-800 font-medium italic">"{item.comment}"</p>
                          </div>
                        </div>
                        
                        {/* 吹き出しの三角形 */}
                        <div className={`absolute top-6 w-0 h-0 border-t-4 border-b-4 border-transparent -left-2 border-r-4 border-r-green-50 md:${index % 2 === 0 ? '-right-2 md:border-l-4 md:border-l-green-50 md:border-r-0' : '-left-2'}`}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-[2px] bg-green-600 mr-4"></div>
              <span className="font-english text-sm md:text-base tracking-[0.2em] text-green-600 font-medium">JOIN US</span>
              <div className="w-16 h-[2px] bg-green-600 ml-4"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              あなたも藤喜建設で働きませんか？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              先輩社員のように、やりがいを感じながら成長できる環境があります
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/careers"
              className="btn-primary px-10 py-5 rounded-lg text-lg font-sans font-semibold bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 text-center"
            >
              採用情報を見る
            </a>
            <a
              href="/contact"
              className="btn-outline px-10 py-5 rounded-lg text-lg font-sans font-semibold border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
            >
              お問い合わせ
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 