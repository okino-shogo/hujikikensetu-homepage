"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";
import Head from "next/head";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formType, setFormType] = useState("construction"); // construction or recruitment
  const { isLoadingComplete } = useLoadingContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    budget: "",
    timeline: "",
    message: "",
    // 採用関連フィールド
    age: "",
    experience: "",
    qualification: "",
    motivation: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // 構造化データ - ContactPoint
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "株式会社 藤喜建設",
    "url": "https://www.fujiki-kensetsu.jp",
    "logo": "https://www.fujiki-kensetsu.jp/images/fujiki-logo_edited.avif",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+81-195-75-2345",
        "contactType": "customer service",
        "areaServed": "JP",
        "availableLanguage": "Japanese",
        "description": "型枠工事のご依頼、お見積り、ご相談はお気軽にお電話ください。"
      },
      {
        "@type": "ContactPoint",
        "email": "info@fujiki-kensetsu.jp",
        "contactType": "customer service",
        "areaServed": "JP",
        "availableLanguage": "Japanese",
        "description": "24時間メール受付。2営業日以内に回答いたします。"
      },
      {
        "@type": "ContactPoint",
        "contactType": "recruitment",
        "areaServed": "JP",
        "availableLanguage": "Japanese",
        "description": "採用に関するお問い合わせ。型枠工事技術者を募集中。"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "大更第25地割68番地176",
      "addressLocality": "八幡平市",
      "addressRegion": "岩手県",
      "postalCode": "028-7100",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9288,
      "longitude": 141.0977
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // フォーム送信処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // フォームリセット
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        location: "",
        budget: "",
        timeline: "",
        message: "",
        age: "",
        experience: "",
        qualification: "",
        motivation: ""
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
        />
      </Head>
      {/* ヒーローセクション - 圧巻のビジュアルインパクト */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景写真 - 強化されたパララックス効果 */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          {/* 高品質オフィス・コミュニケーション写真 */}
          <img 
            src="/images/現場写真３.jpg" 
            alt="建設現場での相談 - 藤喜建設" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          {/* 多層グラデーションオーバーレイ - より洗練された演出 */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/40 to-gray-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-lime-900/40 via-transparent to-lime-900/20"></div>
          
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
              <div className="space-y-8 max-w-4xl mx-auto">
                {/* 専門分野 - 英字 */}
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 0.1 : 0.4 }}
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    CONTACT US
                  </p>
                </motion.div>
                
                {/* メインタイトル - 明朝体で圧倒的な存在感 */}
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-none text-white text-shadow-strong">
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: isLoadingComplete ? 0.3 : 0.6 }}
                      style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                    >
                      お問い合わせ
                    </motion.span>
                  </h1>
                </div>
                
                {/* サブタイトル */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 0.9 : 1.2 }}
                  style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                >
                  <p className="text-2xl md:text-3xl text-white/90 font-serif font-medium leading-relaxed">
                    建築・土木工事のご相談、お見積りなど
                    <br className="hidden md:block" />
                    お気軽にお問い合わせください
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* スクロール指示 - より洗練されたデザイン */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up"
            style={{ animationDelay: '2s' }}
          >
            <div className="text-white/60 text-sm font-light mb-3 tracking-wider font-english">
              SCROLL TO CONTACT
            </div>
            <div className="w-px h-12 bg-white/30 mx-auto animate-pulse"></div>
            <div className="w-2 h-2 bg-lime-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>

      {/* お問い合わせ情報 */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* 会社情報 */}
            <motion.div
              className="animate-on-scroll"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                    会社情報
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    建築工事・型枠工事・土木工事のことなら、48年の実績を持つ藤喜建設にお任せください。
                  </p>
                </div>

                {/* 連絡先情報 */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">会社概要</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-20 text-gray-600 font-medium">会社名</div>
                        <div className="text-gray-900">有限会社藤喜建設</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-20 text-gray-600 font-medium">所在地</div>
                        <div className="text-gray-900">〒028-7112<br />岩手県八幡平市田頭第32地割59</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-20 text-gray-600 font-medium">創業</div>
                        <div className="text-gray-900">昭和52年（1977年）</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-20 text-gray-600 font-medium">事業内容</div>
                        <div className="text-gray-900">建築工事・型枠工事・土木工事</div>
                      </div>
                    </div>
                  </div>

                  {/* 電話・FAX */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="tel:0195-76-4735"
                      className="bg-lime-50 border border-lime-200 p-6 rounded-xl hover:bg-lime-100 transition-colors duration-300 group"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                        <div className="text-lime-900 font-bold">電話</div>
                      </div>
                      <div className="text-2xl font-bold text-lime-700 group-hover:text-lime-800">
                        0195-76-4735
                      </div>
                      <p className="text-lime-600 text-sm mt-1">営業時間：8:00〜17:00</p>
                    </a>

                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-blue-900 font-bold">FAX</div>
                      </div>
                      <div className="text-2xl font-bold text-blue-700">
                        0195-76-5710
                      </div>
                      <p className="text-blue-600 text-sm mt-1">24時間受付</p>
                    </div>
                  </div>

                  {/* 営業時間・定休日 */}
                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">営業時間・定休日</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-20 text-orange-600 font-medium">営業時間</div>
                        <div className="text-orange-900">8:00〜17:00</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-orange-600 font-medium">定休日</div>
                        <div className="text-orange-900">週休2日制（日曜・祝日他）</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* お問い合わせフォーム */}
            <motion.div
              className="animate-on-scroll"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  お問い合わせフォーム
                </h2>
                <p className="text-gray-600 mb-8">
                  以下のフォームにご記入いただき、送信してください。
                  後日、担当者よりご連絡いたします。
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                        placeholder="山田太郎"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                        placeholder="0195-76-4735"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                      placeholder="example@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="residential">住宅建築</option>
                      <option value="commercial">商業施設</option>
                      <option value="civil">土木工事</option>
                      <option value="renovation">リフォーム・改修</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      詳細・ご要望 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors resize-none"
                      placeholder="お問い合わせ内容や工事の詳細、ご要望などをお聞かせください。"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-lime-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    送信する
                  </button>
                </form>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">個人情報の取り扱いについて</h4>
                  <p className="text-sm text-gray-600">
                    お客様からご提供いただいた個人情報は、お問い合わせへの回答及び関連する情報提供のみに使用し、
                    適切に管理いたします。第三者への提供は行いません。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* アクセス情報 */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              アクセス
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              八幡平市の中心部に位置し、岩手県内どこでも迅速に対応いたします。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 地図 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div className="flex items-center justify-center h-80">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">地図</h3>
                      <p className="text-gray-600">
                        岩手県八幡平市田頭第32地割59
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* アクセス詳細 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    交通アクセス
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-900">JR花輪線・IGRいわて銀河鉄道</p>
                        <p className="text-gray-600">好摩駅より車で約15分</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mt-3 mr-4 shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-900">東北自動車道</p>
                        <p className="text-gray-600">滝沢ICより車で約20分</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    対応エリア
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-900">
                      <span className="font-medium">主要エリア：</span>
                      八幡平市を中心とした岩手県内
                    </p>
                    <p className="text-gray-600">
                      盛岡市、雫石町、葛巻町、岩手町、
                      一戸町、二戸市など県内全域に対応
                    </p>
                  </div>
                </div>

                <div className="bg-lime-50 border border-lime-200 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-lime-900 mb-4">
                    工事エリア外でもご相談ください
                  </h3>
                  <p className="text-lime-800">
                    地域に根ざした建設会社として、48年の実績とネットワークを活かし、
                    より広いエリアでのご相談も承っております。まずはお気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 