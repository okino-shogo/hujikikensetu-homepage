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
                        className="block text-green-800 font-bold drop-shadow-lg shadow-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: isLoadingComplete ? 0.6 : 0.9 }}
                        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
                      >
                        八幡平の未来
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
                    src="/images/代表.jpg" 
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
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* 募集職種ヘッダー */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">募集職種</h3>
                <p className="text-xl font-semibold">型枠大工</p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 左列 */}
                  <div className="space-y-6">
                    {/* 業務内容 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">業務内容</h4>
                      <p className="text-gray-700 leading-relaxed">型枠大工としての作業一式、その他運搬作業の補助や作業車両の運転及び操作等</p>
                    </div>

                    {/* 応募資格 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">応募資格</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-gray-800">●新卒の方</p>
                          <p className="text-gray-700 ml-4">令和８年卒業予定の高校生・短大・専門・大学生</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">●既卒・中途の方</p>
                          <p className="text-gray-700 ml-4">18歳以上の方</p>
                        </div>
                      </div>
                    </div>

                    {/* 雇用形態・就業時間・休憩時間 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">雇用形態</h4>
                        <p className="text-gray-700">正社員</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">勤務地</h4>
                        <p className="text-gray-700">本社加工場若しくは各工事現場</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">就業時間</h4>
                        <p className="text-gray-700">8：00～17：00<br />※時間外勤務あり</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">休憩時間</h4>
                        <p className="text-gray-700">100分 ※昼休憩含む</p>
                      </div>
                    </div>

                    {/* 資格・経験・スキル等 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">資格・経験・スキル等</h4>
                      <p className="text-gray-700">不問　※但し普通自動車免許取得推奨</p>
                    </div>
                  </div>

                  {/* 右列 */}
                  <div className="space-y-6">
                    {/* 給与 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">給与（日給制）</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-gray-800">●新卒の方</p>
                          <div className="text-gray-700 ml-4 space-y-1">
                            <p>・高卒：￥184,000</p>
                            <p>・短大・専門卒：￥202,400</p>
                            <p>・大卒：￥220,800</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">●既卒・中途の方</p>
                          <p className="text-gray-700 ml-4">・￥184,000～（経験や資格により優遇）</p>
                        </div>
                      </div>
                    </div>

                    {/* 待遇 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">待遇</h4>
                      <div className="space-y-1 text-gray-700">
                        <p>・各種手当有り（資格・役職・技能・通勤・住宅）</p>
                        <p>・昇給：年1回</p>
                        <p>・賞与：有り（業績により決定します）</p>
                        <p>・社会保険（健康保険・厚生年金・雇用保険・労災保険）</p>
                        <p>・建設業退職金共済加入</p>
                      </div>
                    </div>

                    {/* 休日 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">休日</h4>
                      <div className="space-y-1 text-gray-700">
                        <p>・週休２日制（第２・４土曜、日曜、他当社カレンダーによる）</p>
                        <p>・長期休暇有り（G.W、夏季休暇、年末年始）</p>
                        <p>・入社６ヶ月経過後、年次有給休暇付与</p>
                      </div>
                    </div>

                    {/* 福利厚生 */}
                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-3 border-b border-orange-200 pb-2">福利厚生</h4>
                      <div className="space-y-1 text-gray-700">
                        <p>・業務に必要な資格取得の補助</p>
                        <p>・宿泊施設利用補助、その他各種施設利用特典</p>
                        <p>・関連団体主催の技能訓練への派遣</p>
                        <p>・各種スキルアップに必要な研修・講習会への参加</p>
                        <p>・作業服・ヘルメット・工具・安全具類の支給</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 応募方法 */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-orange-600 mb-4 text-center">応募方法</h4>
                  <div className="bg-orange-50 p-6 rounded-2xl">
                    <div className="space-y-2 text-gray-700">
                      <p>①各就職サイト（ハローワーク・キャリタスUC・indeed）からの応募</p>
                      <p>②電話（0195－76－4735）での応募</p>
                      <p>③当HPの問い合わせフォームでの応募</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 text-right">担当：工藤</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* お問い合わせへの遷移 */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* セクションヘッダー */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-[2px] bg-orange-600 mr-4"></div>
                <span className="font-english text-sm md:text-base tracking-[0.2em] text-orange-600 font-medium">CONTACT US</span>
                <div className="w-16 h-[2px] bg-orange-600 ml-4"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
                あなたを
                <span className="text-orange-600">お待ち</span>
                しています
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-serif font-medium">
                採用に関するご質問、エントリー、会社見学のお申し込みなど、
                <br className="hidden md:block" />
                どんなことでもお気軽にお問い合わせください。
              </p>
            </motion.div>

            {/* CTA ボタン */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="group bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center">
                  <span className="mr-3">お問い合わせはこちら</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:0195-76-4735"
                className="group flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-white border-2 border-gray-300 group-hover:border-orange-600 rounded-full flex items-center justify-center mr-4 transition-all duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold">0195-76-4735</p>
                </div>
              </motion.a>
            </motion.div>

            {/* サポート情報 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">会社見学</h4>
                <p className="text-gray-600 text-sm">職場の雰囲気を確認していただけます</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">質問・相談</h4>
                <p className="text-gray-600 text-sm">どんなことでもお気軽にご相談ください</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-lime-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">エントリー</h4>
                <p className="text-gray-600 text-sm">採用応募を受け付けております</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}