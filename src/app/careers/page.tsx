"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function CareersPage() {
  const [scrollY, setScrollY] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 背景写真 */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="/images/作業風景２.jpg" 
            alt="藤喜建設 採用情報" 
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
                        共に創る
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
                        八幡平の未来
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
                    未経験から始める、地図に残る仕事
                    <br className="hidden md:block" />
                    あなたの挑戦を全力でサポートします
                  </p>
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
            <div className="w-2 h-2 bg-orange-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* 代表からのメッセージ */}
      <section className="relative py-32 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-[2px] bg-orange-600 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-orange-600 font-medium">CEO MESSAGE</span>
                <div className="w-16 h-[2px] bg-orange-600 ml-4"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
                代表からのメッセージ
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-serif font-medium">
                共に成長し、八幡平の未来を創る仲間を求めています。
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* 代表者写真 */}
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src="/images/職長２_edited.png" 
                    alt="代表取締役 工藤伸元" 
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                {/* フローティングネームカード */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">工藤 伸元</h3>
                  <p className="text-orange-700 font-semibold mb-2">代表取締役</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">藤喜建設 第三代目</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 代表メッセージ文 */}
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* 引用符のデザイン要素 */}
                <div className="absolute -top-4 -left-4 text-8xl text-orange-200 font-serif opacity-50">"</div>
                
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-orange-100 relative z-10">
                  <div className="space-y-6 text-gray-700 leading-loose text-lg">
                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-orange-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                      藤喜建設は現代表取締役会長である工藤喜代美が昭和52年に創業して以来、地元八幡平市を中心に岩手県内の各地で様々な工事に関わり、たくさんの方々から支えて頂きながら地域を支える建設会社として今日まで進んでまいりました。
                    </p>
                    <p>
                      現在、建設業界では人材不足・高齢化が年々大きな課題となり、時代の変化に伴いこれまでの働き方を見直していかなければならない段階に進んでいます。当社としても福利厚生の充実や週休2日制の導入、作業効率向上の工夫等時代の変化にいち早く対応し、少しでも働きやすい職場になるよう取り組んでいます。
                    </p>
                    <p className="font-medium text-gray-900">
                      藤喜建設では学歴や経験は問いません。仕事で求められるスキルはキャリアを重ねる中で覚え、習得していくものばかりです。
                    </p>
                    <p>
                      当社では人材育成を重視し、通常業務を通して基礎技術を身に付けながら会社が資格取得やスキルアップの為のサポートを行い、未経験でも一人ひとりに合ったキャリア形成を行っていますので、建築に少しでも興味がある・モノ作りが好き、藤喜建設の理念や方針に共感して頂ける方は是非ともチャレンジをお待ちしています。
                    </p>
                  </div>
                  
                  {/* 署名 */}
                  <div className="mt-8 text-right">
                    <div className="inline-block">
                      <p className="text-gray-600 text-sm mb-2">有限会社藤喜建設</p>
                      <p className="text-2xl font-serif text-gray-900">代表取締役　工藤 伸元</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 藤喜建設で働く5つの魅力 */}
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
              藤喜建設で働く5つの魅力
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              未経験から始めて、プロフェッショナルへ。
              あなたの成長を全力でサポートする環境があります。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* 魅力1 */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    未経験からプロへ！安心の教育・資格取得支援
                  </h3>
                </div>
              </div>
              <p className="text-blue-800 leading-relaxed">
                OJTによる丁寧な指導はもちろん、資格取得にかかる費用は会社が全額サポート。一から専門技術を学び、国家資格を持つプロフェッショナルへと成長できます。型枠支保工作業主任者、足場の組立等作業主任者などの専門資格取得を全面的にバックアップします。
              </p>
            </motion.div>

            {/* 魅力2 */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">
                    地域に根ざし、安定して働ける環境
                  </h3>
                </div>
              </div>
              <p className="text-green-800 leading-relaxed">
                創業45年以上の実績と信頼が、あなたのキャリアを支えます。転勤もなく、地元八幡平で腰を据えて長く働けます。地域に密着した安定経営で、将来にわたって安心して働ける環境があります。
              </p>
            </motion.div>

            {/* 魅力3 */}
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">
                    互いに高め合う、温かい仲間たち
                  </h3>
                </div>
              </div>
              <p className="text-orange-800 leading-relaxed">
                ベテランから若手まで、社員同士の仲が良く、チームワークは抜群。困ったことがあればすぐに相談できる、風通しの良い社風です。先輩社員が丁寧に指導し、みんなで支え合って成長していく環境があります。
              </p>
            </motion.div>

            {/* 魅力4 */}
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl border border-purple-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-3">
                    社会貢献を実感できる、やりがいのある仕事
                  </h3>
                </div>
              </div>
              <p className="text-purple-800 leading-relaxed">
                『建築で生活を豊かに』。自分たちの仕事が、人々の暮らしや地域の発展に直接繋がる。病院、学校、住宅など、そんな大きなやりがいと達成感を日々感じられます。地図に残る仕事で地域社会に貢献できます。
              </p>
            </motion.div>
          </div>

          {/* 魅力5 - 横幅いっぱい */}
          <motion.div
            className="bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-3xl border border-lime-200 mt-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-lime-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-lime-900 mb-3">
                  充実の福利厚生と働きやすい職場づくり
                </h3>
              </div>
            </div>
            <p className="text-lime-800 leading-relaxed">
              社会保険完備、各種手当はもちろん、社員の健康と働きやすさを考えた制度づくりを進めています。週休2日制の導入、有給休暇の取得推進、資格取得費用の全額補助など、あなたの頑張りをしっかりと評価し、還元します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 募集要項 */}
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
              募集要項
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              詳細な募集内容をご確認いただけます。
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* 型枠大工 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleSection('katawaku')}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">型枠大工</h3>
                  <p className="text-gray-600">建築の基盤となる型枠工事のスペシャリスト</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${openSection === 'katawaku' ? 'bg-orange-100' : 'bg-gray-100'} flex items-center justify-center transform transition-all duration-300`}>
                  <div className={`w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${openSection === 'katawaku' ? 'rotate-45' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-600 absolute transform transition-transform duration-300 ${openSection === 'katawaku' ? '-rotate-45' : 'rotate-90'}`}></div>
                </div>
              </button>
              
              {openSection === 'katawaku' && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">仕事内容</h4>
                        <p className="text-gray-700 text-sm">建築工事現場において、コンクリート構造物の型枠組立・解体作業、生コンクリート打設作業、その他付帯作業</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">応募資格</h4>
                        <p className="text-gray-700 text-sm">未経験者歓迎・学歴不問・普通自動車免許取得推奨</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">雇用形態</h4>
                        <p className="text-gray-700 text-sm">正社員</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">給与</h4>
                        <p className="text-gray-700 text-sm">月給 184,000円～220,800円（経験・能力により決定）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">勤務時間</h4>
                        <p className="text-gray-700 text-sm">8:00～17:00（休憩100分）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">休日</h4>
                        <p className="text-gray-700 text-sm">週休2日制（第2・4土曜、日曜、祝日）、夏季・年末年始休暇</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* 建築施工管理 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleSection('kanri')}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">建築施工管理</h3>
                  <p className="text-gray-600">現場全体を統括する重要なポジション</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${openSection === 'kanri' ? 'bg-orange-100' : 'bg-gray-100'} flex items-center justify-center transform transition-all duration-300`}>
                  <div className={`w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${openSection === 'kanri' ? 'rotate-45' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-600 absolute transform transition-transform duration-300 ${openSection === 'kanri' ? '-rotate-45' : 'rotate-90'}`}></div>
                </div>
              </button>
              
              {openSection === 'kanri' && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">仕事内容</h4>
                        <p className="text-gray-700 text-sm">工程管理、品質管理、安全管理、原価管理、図面作成、現場監督業務</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">応募資格</h4>
                        <p className="text-gray-700 text-sm">建築系学科卒業者優遇・施工管理技士資格者優遇・普通自動車免許必須</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">雇用形態</h4>
                        <p className="text-gray-700 text-sm">正社員</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">給与</h4>
                        <p className="text-gray-700 text-sm">月給 220,000円～280,000円（経験・資格により決定）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">勤務時間</h4>
                        <p className="text-gray-700 text-sm">8:00～17:00（現場により変動あり）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">休日</h4>
                        <p className="text-gray-700 text-sm">週休2日制（土日祝日）、夏季・年末年始休暇</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* 土木作業員 */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleSection('doboku')}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">土木作業員</h3>
                  <p className="text-gray-600">インフラ整備を支える重要な仕事</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${openSection === 'doboku' ? 'bg-orange-100' : 'bg-gray-100'} flex items-center justify-center transform transition-all duration-300`}>
                  <div className={`w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${openSection === 'doboku' ? 'rotate-45' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-gray-600 absolute transform transition-transform duration-300 ${openSection === 'doboku' ? '-rotate-45' : 'rotate-90'}`}></div>
                </div>
              </button>
              
              {openSection === 'doboku' && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">仕事内容</h4>
                        <p className="text-gray-700 text-sm">道路工事、河川工事、舗装工事、上下水道工事等の土木作業全般</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">応募資格</h4>
                        <p className="text-gray-700 text-sm">未経験者歓迎・学歴不問・各種建設機械免許取得支援</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">雇用形態</h4>
                        <p className="text-gray-700 text-sm">正社員</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">給与</h4>
                        <p className="text-gray-700 text-sm">月給 180,000円～250,000円（経験・能力により決定）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">勤務時間</h4>
                        <p className="text-gray-700 text-sm">8:00～17:00（現場により変動あり）</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">休日</h4>
                        <p className="text-gray-700 text-sm">週休2日制（会社カレンダーによる）、夏季・年末年始休暇</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* 共通福利厚生 */}
          <motion.div
            className="max-w-5xl mx-auto mt-16 bg-gradient-to-br from-lime-50 to-lime-100 p-8 rounded-3xl border border-lime-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-lime-900 mb-6 text-center">共通福利厚生</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">社会保険完備（健康・厚生年金・雇用・労災）</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">建設業退職金共済加入</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">各種手当（通勤・住宅・資格・技能・役職）</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">昇給年1回・賞与年1回（業績による）</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">有給休暇・慶弔休暇</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">資格取得費用全額補助</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">作業服等支給</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mt-3 mr-3 shrink-0"></div>
                  <p className="text-lime-800">技能訓練派遣・研修参加支援</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 応募方法・お問い合わせ */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-[2px] bg-white/50 mr-4"></div>
              <span className="font-english text-sm md:text-base tracking-[0.2em] text-white/80 font-medium">ENTRY & CONTACT</span>
              <div className="w-16 h-[2px] bg-white/50 ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
              応募・お問い合わせ方法
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
              まずは会社見学からでも大歓迎！
              <br />お気軽にご連絡ください。あなたの挑戦をお待ちしています。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* エントリーフォーム */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">エントリーフォーム</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  24時間受付中
                  <br />オンラインで簡単応募
                </p>
                <button className="w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  エントリーする
                </button>
              </motion.div>

              {/* 電話応募 */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-3 h-12 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">お電話でのご応募</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  平日 8:00～17:00
                  <br />採用担当まで
                </p>
                <a 
                  href="tel:0195-76-4735"
                  className="block w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  0195-76-4735
                </a>
              </motion.div>

              {/* 会社見学 */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-4 h-6 bg-white rounded-sm"></div>
                    <div className="w-4 h-6 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">会社見学</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  まずは職場を見てみたい
                  <br />という方も大歓迎
                </p>
                <button className="w-full bg-white text-orange-600 font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  見学申込み
                </button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-serif font-bold text-white mb-4">選考プロセス</h4>
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <p className="text-sm">書類選考</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <p className="text-sm">面接<br/>(1～2回)</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <p className="text-sm">内定</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70 text-center">
                ※応募書類は返却いたしません。個人情報は採用選考のみに使用いたします。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 