"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLoadingContext } from "../components/LoadingProvider";

export default function WorkPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFlow, setActiveFlow] = useState<number | null>(null);
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFlow = (index: number) => {
    setActiveFlow(activeFlow === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="/images/本社写真１.jpg"
            alt="藤喜建設の仕事" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-lime-900/40 via-transparent to-lime-900/20"></div>
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
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 items-center min-h-screen py-20">
            <div className="col-span-12 text-center">
              <div className="space-y-8 max-w-5xl mx-auto">
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 0.1 : 0.4 }}
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    FUJIKI CONSTRUCTION WORKS
                  </p>
                </motion.div>
                
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
                        未来を支える
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
                        誇りと情熱
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
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: isLoadingComplete ? 1.2 : 1.5 }}
                  style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    藤喜建設の流儀
                    <br className="hidden md:block" />
                    地域の暮らしを支える建築技術
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
            <div className="w-2 h-2 bg-lime-400 rounded-full mx-auto transform animate-bounce" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </section>

      {/* 私たちの仕事へのこだわり */}
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
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
              私たちの仕事へのこだわり
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                私たち藤喜建設の仕事は、単に建物を造ることではありません。それは、人々の生活を豊かにし、地域社会の未来を形作ること。創業以来、変わらぬ想いを胸に、一つひとつのプロジェクトに誠実に向き合っています。
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* こだわり1: 品質 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border border-lime-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  揺るぎない品質への追求
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                目に見えない基礎の部分から、仕上げの細部に至るまで。長年培ってきた技術と経験を結集し、お客様に心からご満足いただける高品質な仕上がりをお約束します。見えないところにこそ、私たちの誇りが宿ります。
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-blue-800 text-sm font-medium">
                  💡 採用視点: 未経験からでも、先輩の丁寧な指導のもと、一生ものの技術を身につけられます。
                </p>
              </div>
            </motion.div>

            {/* こだわり2: 安全 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border border-lime-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  徹底した安全管理体制
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                共に働く仲間、そして地域社会の安全を守ることは、私たちの最優先事項です。日々のKY活動（危険予知活動）、定期的な安全教育、最新の安全設備の導入など、安心して働ける環境づくりを徹底しています。安全なくして、良い仕事は生まれません。
              </p>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="text-green-800 text-sm font-medium">
                  💡 採用視点: 安心して仕事に集中できる環境が、あなたの成長を後押しします。
                </p>
              </div>
            </motion.div>

            {/* こだわり3: 信頼関係 */}
            <motion.div
              className="bg-white p-8 rounded-3xl shadow-lg border border-lime-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-900 mb-4">
                  お客様と地域に寄り添う信頼関係
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                お客様の想いを深く理解し、期待を超える提案をすること。そして、八幡平の地域社会の一員として、その発展に貢献すること。コミュニケーションを大切にし、長期的な信頼関係を築いていくことが、私たちの喜びです。
              </p>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                <p className="text-orange-800 text-sm font-medium">
                  💡 採用視点: 人との繋がりを大切にする社風が、仕事のやりがいにも繋がります。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
              事業内容
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              藤喜建設は、型枠工事のスペシャリストとしての確かな技術を核に、建築工事一式から土木工事まで、幅広い分野でお客様のニーズにお応えしています。それぞれの分野で、私たちの専門性と情熱が活かされています。
            </p>
          </motion.div>

          {/* 型枠工事 */}
          <div className="mb-32">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                型枠工事
              </h3>
              <p className="text-2xl text-blue-700 font-semibold mb-8">
                ミリ単位の精度が、未来の安心を支える。型枠工事のプロフェッショナル集団。
              </p>
              <div className="max-w-5xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  建物の強度や耐久性を左右する、コンクリート構造。その美しい仕上がりと確かな品質は、精密な『型枠』があってこそ生まれます。藤喜建設は、住宅の基礎から高層ビル、橋梁といった大規模な土木構造物まで、あらゆる型枠工事に対応できる高い技術力と豊富な経験を有しています。まさに、建物の"骨格"を創り上げる、建設業に不可欠な仕事です。
                </p>
              </div>
            </motion.div>

            {/* 型枠工事の流れ */}
            <div className="max-w-7xl mx-auto">
              <motion.h4
                className="text-3xl font-bold text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                型枠工事の流れ
              </motion.h4>

              <div className="space-y-12">
                {/* Step 1: 拾い出し */}
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border-2 border-blue-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          1
                        </div>
                        <h5 className="text-2xl font-bold text-blue-900">
                          拾い出し（図面から未来を読み解く）
                        </h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        設計図面を基に、実際に建物を建てるために必要なコンクリートの形状や寸法を正確に読み取り、型枠の数量や形状を算出します。この『拾い出し』作業の精度が、後の工程すべてに影響する重要な第一歩。PCを使い、専用CADソフトで加工図を作成することもあります。
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            🎯 やりがい・面白さ: パズルのように複雑な図面から、完成形をイメージする面白さ。正確さが求められる緊張感と達成感があります。
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">
                            💡 未経験者へ: 最初は先輩が丁寧に図面の見方から教えます。少しずつ理解できるようになると、仕事がどんどん面白くなりますよ。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-blue-700 font-medium">図面解読・CAD作図</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: 加工 */}
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border-2 border-orange-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-orange-50 p-8 lg:p-12 flex items-center justify-center lg:order-1">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-orange-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                        <p className="text-orange-700 font-medium">匠の技・精密加工</p>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          2
                        </div>
                        <h5 className="text-2xl font-bold text-orange-900">
                          加工（匠の技で、部材に命を吹き込む）
                        </h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        拾い出しで作成した加工図に基づいて、ベニヤ板や桟木（さんぎ）といった木材を、切断したり釘打ちしたりして、型枠のパーツを製作します。ミリ単位の精度が求められる、まさに職人の腕の見せ所です。
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            🎯 やりがい・面白さ: 自分の手で、図面上の線が実際の形になっていく喜び。木材の特性を理解し、工夫を凝らす面白さがあります。
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">
                            💡 未経験者へ: 安全な工具の使い方から指導します。まずは簡単な加工作業からスタートし、徐々に技術を習得していきましょう。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: 型枠組立 */}
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border-2 border-green-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          3
                        </div>
                        <h5 className="text-2xl font-bold text-green-900">
                          型枠組立（建て込み）（チームで創り上げる、巨大な立体パズル）
                        </h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        加工した型枠材を建設現場に運び込み、図面通りに正確に組み立てていきます。『墨出し』という、建物の正確な位置や高さを出す作業を基準に、クレーンなども使いながら、チームで協力して巨大な型枠を建て込みます。コンクリートを流し込んだ際の圧力に耐えられるよう、強固に固定することも重要です。
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            🎯 やりがい・面白さ: 仲間と息を合わせて大きなものを創り上げる達成感は格別！図面が立体になり、建物の輪郭が見えてくる感動があります。
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">
                            💡 未経験者へ: 先輩の指示に従い、部材を運んだり、簡単な補助作業から始めます。チームワークの大切さを肌で感じられる工程です。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-green-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <p className="text-green-700 font-medium">チーム組立・建て込み</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4: コンクリート打設 */}
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border-2 border-purple-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-purple-50 p-8 lg:p-12 flex items-center justify-center lg:order-1">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-purple-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <p className="text-purple-700 font-medium">打設・品質管理</p>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          4
                        </div>
                        <h5 className="text-2xl font-bold text-purple-900">
                          コンクリート打設（情熱を注ぎ込み、未来を固める）
                        </h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        組み上がった型枠の中に、生コンクリートを流し込みます。型枠がコンクリートの圧力で変形したり、壊れたりしないよう、バイブレーターで気泡を抜きながら均一に充填されるよう、常に細心の注意を払います。打設中は、型枠の状態を職人が常にチェックし、万全を期します。
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            🎯 やりがい・面白さ: 建物の主要部分が形作られる、まさにクライマックス。自分たちの仕事が、強固な構造物を生み出す瞬間に立ち会えます。
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">
                            💡 未経験者へ: コンクリートの特性や、打設時の注意点を学びます。安全第一で、先輩の指示のもと作業を行います。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 5: 型枠解体 */}
                <motion.div
                  className="bg-white rounded-3xl shadow-lg border-2 border-yellow-200 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          5
                        </div>
                        <h5 className="text-2xl font-bold text-yellow-900">
                          型枠解体（脱型）（美しい素顔との対面）
                        </h5>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        コンクリートが設計通りの強度に達したら、型枠を取り外します。これを『脱型（だっけい）』と呼びます。コンクリートの表面を傷つけないよう、慎重に作業を進めます。美しく仕上がったコンクリートの壁面を見た時の達成感は、何物にも代えがたいものです。解体した型枠材は、清掃・整備して再利用することもあり、環境にも配慮しています。
                      </p>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-green-800 font-medium text-sm">
                            🎯 やりがい・面白さ: 自分たちが創り上げた構造物の『素顔』と対面する瞬間。苦労が報われる喜びを感じられます。
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <p className="text-blue-800 font-medium text-sm">
                            💡 未経験者へ: 解体作業の手順や、部材の整理整頓などを学びます。次の現場に向けて、資材を大切に扱うことも重要な仕事です。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-8 lg:p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-yellow-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-16 h-16 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <p className="text-yellow-700 font-medium">美しい完成・感動の対面</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 動画への誘導 */}
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                  <h5 className="text-2xl font-bold mb-4">
                    型枠大工の仕事をもっと知りたい方へ
                  </h5>
                  <p className="text-lg mb-6 opacity-90">
                    実際の作業風景や、職人のインタビューをご覧いただけます
                  </p>
                  <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
                    作業動画を見る →
                  </button>
                </div>
              </motion.div>
            </div>
                     </div>

           {/* 建築工事一式 */}
           <div className="mb-32">
             <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <h3 className="text-4xl md:text-5xl font-bold text-lime-900 mb-6">
                 建築工事一式
               </h3>
               <p className="text-2xl text-lime-700 font-semibold mb-8">
                 暮らしに寄り添い、想いを建てる。設計から完成まで、トータルサポート。
               </p>
               <div className="max-w-5xl mx-auto">
                 <p className="text-lg text-gray-700 leading-relaxed mb-8">
                   個人のお客様のこだわりの住まいから、地域の人々が集う商業施設、未来を担う子どもたちのための公共施設まで。藤喜建設は、新築、増改築、リフォーム、リノベーションなど、あらゆる建築プロジェクトに対応します。お客様一人ひとりの夢やご要望に真摯に耳を傾け、長年培ってきた技術とノウハウで、機能性とデザイン性を兼ね備えた快適な空間を創造します。
                 </p>
               </div>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <h4 className="text-2xl font-bold text-gray-900 mb-6">対応可能な建築物</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                   {[
                     { icon: "🏠", text: "戸建住宅（注文住宅、高性能住宅など）" },
                     { icon: "🏢", text: "集合住宅（アパート、マンション）" },
                     { icon: "🏪", text: "商業施設（店舗、事務所、倉庫）" },
                     { icon: "🏫", text: "公共施設（学校、公民館、福祉施設など）" }
                   ].map((item, index) => (
                     <div key={index} className="bg-lime-50 p-4 rounded-xl border border-lime-200">
                       <div className="flex items-center space-x-3">
                         <span className="text-2xl">{item.icon}</span>
                         <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                   <h5 className="text-lg font-bold text-green-900 mb-2">仕事の魅力（採用視点）</h5>
                   <p className="text-green-800 text-sm leading-relaxed">
                     お客様の『こんな家に住みたい』『こんなお店を作りたい』という夢を直接形にできる、大きなやりがいのある仕事です。設計段階から関わることもあり、完成してお客様に喜んでいただけた時の感動はひとしおです。幅広い知識と経験が身につきます。
                   </p>
                 </div>
               </motion.div>

               <motion.div
                 className="relative"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
               >
                 <div className="aspect-[4/3] bg-gradient-to-br from-lime-100 to-lime-200 rounded-3xl overflow-hidden shadow-lg">
                   <img
                     src="/images/本社写真１.jpg"
                     alt="建築工事の実績"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-lime-900/30 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                     <p className="font-semibold">建築工事の実績</p>
                   </div>
                 </div>
               </motion.div>
             </div>
           </div>

           {/* 土木工事一式 */}
           <div className="mb-32">
             <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                 土木工事一式
               </h3>
               <p className="text-2xl text-green-700 font-semibold mb-8">
                 見えない場所から、確かな安心を。地域社会の基盤を築く、縁の下の力持ち。
               </p>
               <div className="max-w-5xl mx-auto">
                 <p className="text-lg text-gray-700 leading-relaxed mb-8">
                   道路、駐車場、宅地造成、擁壁、河川改修、上下水道工事など、人々の安全で快適な暮らしを支える社会インフラの整備も、藤喜建設の重要な仕事です。八幡平市の地理や気候を熟知した私たちが、確かな技術と計画で、災害に強く、機能的な地域社会の基盤づくりに貢献します。地図に残る仕事、未来に繋がる仕事です。
                 </p>
               </div>
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
               <motion.div
                 className="relative lg:order-2"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden shadow-lg">
                   <img
                     src="/images/作業写真19.jpeg"
                     alt="土木工事の現場"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                     <p className="font-semibold">土木工事の現場</p>
                   </div>
                 </div>
               </motion.div>

               <motion.div
                 className="lg:order-1"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
               >
                 <h4 className="text-2xl font-bold text-gray-900 mb-6">対応可能な工事</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                   {[
                     { icon: "🛣️", text: "造成工事、土地改良" },
                     { icon: "🚧", text: "道路工事、舗装工事" },
                     { icon: "🅿️", text: "駐車場整備、外構工事" },
                     { icon: "🧱", text: "擁壁工事、護岸工事" },
                     { icon: "💧", text: "上下水道管布設工事" }
                   ].map((item, index) => (
                     <div key={index} className="bg-green-50 p-4 rounded-xl border border-green-200">
                       <div className="flex items-center space-x-3">
                         <span className="text-2xl">{item.icon}</span>
                         <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                   <h5 className="text-lg font-bold text-blue-900 mb-2">仕事の魅力（採用視点）</h5>
                   <p className="text-blue-800 text-sm leading-relaxed">
                     普段何気なく利用している道路や施設も、私たちの仕事が支えています。地域社会への貢献をダイレクトに実感できるのが土木工事の魅力。ダイナミックな重機を操作したり、広大な現場を管理したりと、スケールの大きな仕事に携わるチャンスもあります。
                   </p>
                 </div>
               </motion.div>
             </div>
           </div>

           {/* その他専門工事 */}
           <div className="mb-32">
             <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
                 その他専門工事
               </h3>
               <p className="text-2xl text-orange-700 font-semibold mb-8">
                 『できない』を『できる』に。藤喜建設の総合力。
               </p>
               <div className="max-w-5xl mx-auto">
                 <p className="text-lg text-gray-700 leading-relaxed mb-8">
                   上記のほかにも、藤喜建設はとび・土工・仮設工事、鋼構造物工事、石工事、しゅんせつ工事など、多岐にわたる専門工事の許可を有し、お客様のあらゆるニーズにお応えできる体制を整えています。『こんな工事は頼めるだろうか？』と迷ったら、まずは私たちにご相談ください。長年の経験とネットワークを活かし、最適なソリューションをご提案します。
                 </p>
               </div>
             </motion.div>

             <div className="max-w-5xl mx-auto">
               <motion.div
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 {[
                   { icon: "🏗️", text: "足場組立・解体" },
                   { icon: "🔩", text: "鉄骨建方" },
                   { icon: "🔨", text: "解体工事" },
                   { icon: "💧", text: "小規模な水道施設工事" },
                   { icon: "🪨", text: "石積み、石張り工事" },
                   { icon: "⚙️", text: "その他専門工事" }
                 ].map((item, index) => (
                   <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-200 text-center">
                     <span className="text-3xl block mb-3">{item.icon}</span>
                     <span className="text-gray-700 font-medium">{item.text}</span>
                   </div>
                 ))}
               </motion.div>

               <motion.div
                 className="bg-yellow-50 p-8 rounded-xl border border-yellow-200"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
               >
                 <h5 className="text-xl font-bold text-yellow-900 mb-4 text-center">仕事の魅力（採用視点）</h5>
                 <p className="text-yellow-800 leading-relaxed text-center">
                   幅広い分野の知識や技術に触れる機会があり、オールラウンドなスキルを身につけることができます。様々な専門業者と協力してプロジェクトを進めることも多く、コミュニケーション能力も磨かれます。
                 </p>
               </motion.div>
             </div>
           </div>
         </div>
       </section>

       {/* プロジェクトの流れ */}
       <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
         <div className="container mx-auto px-4">
           <motion.div
             className="text-center mb-20"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-8">
               プロジェクトの流れ
             </h2>
             <p className="text-2xl text-gray-700 font-semibold mb-6">
               想いをカタチにする旅。お客様と共に創り上げる、藤喜建設のプロジェクト。
             </p>
             <div className="max-w-4xl mx-auto">
               <p className="text-lg text-gray-700 leading-relaxed">
                 藤喜建設では、お客様とのコミュニケーションを第一に、ご相談から完成、そしてアフターサポートまで、一貫して丁寧な対応を心がけています。ここでは、建築工事の一般的な流れをご紹介します。
               </p>
             </div>
           </motion.div>

           <div className="max-w-6xl mx-auto">
             <div className="space-y-8">
               {[
                 {
                   step: "01",
                   title: "お問い合わせ・ご相談",
                   description: "お客様の夢やご要望、お困りごとをじっくりお伺いします。",
                   note: "💡 採用視点: お客様の想いを引き出すコミュニケーション能力も大切です。",
                   color: "blue"
                 },
                 {
                   step: "02", 
                   title: "現地調査・ヒアリング",
                   description: "計画地や既存建物の状況を詳細に調査し、より具体的なご要望をヒアリングします。",
                   note: "",
                   color: "green"
                 },
                 {
                   step: "03",
                   title: "プランニング・お見積り",
                   description: "お客様のご要望とご予算に基づき、最適なプランと詳細なお見積りをご提案します。CGパースなどで完成イメージを共有することも。",
                   note: "",
                   color: "purple"
                 },
                 {
                   step: "04",
                   title: "ご契約",
                   description: "プランとお見積りにご納得いただけましたら、工事請負契約を締結します。",
                   note: "",
                   color: "orange"
                 },
                 {
                   step: "05",
                   title: "各種申請・詳細設計",
                   description: "建築確認申請などの法的手続きや、実際に工事を進めるための詳細な図面作成を行います。",
                   note: "",
                   color: "red"
                 },
                 {
                   step: "06",
                   title: "着工・施工",
                   description: "安全管理と品質管理を徹底し、計画通りに工事を進めます。経験豊富な現場監督が、工程・品質・安全をしっかりと管理します。",
                   note: "💡 採用視点: 現場では、様々な職人さんと協力しながら仕事を進めます。多くのことを学べる環境です。",
                   color: "lime"
                 },
                 {
                   step: "07",
                   title: "各種検査・お引渡し",
                   description: "社内検査、行政による完了検査を経て、お客様に完成した建物をお引渡しします。",
                   note: "",
                   color: "indigo"
                 },
                 {
                   step: "08",
                   title: "アフターサポート",
                   description: "お引渡し後も、定期的な点検やメンテナンスなど、末永く安心してお住まいいただけるようサポートいたします。",
                   note: "",
                   color: "pink"
                 }
               ].map((item, index) => (
                 <motion.div
                   key={index}
                   className="relative"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: index * 0.1 }}
                   viewport={{ once: true }}
                 >
                   <div className="flex items-center space-x-6">
                     <div className={`w-20 h-20 bg-${item.color}-600 rounded-full flex items-center justify-center flex-shrink-0`}>
                       <span className="text-white font-bold text-lg">{item.step}</span>
                     </div>
                     <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                       <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                       <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
                       {item.note && (
                         <div className={`bg-${item.color}-50 p-3 rounded-lg border border-${item.color}-200`}>
                           <p className={`text-${item.color}-800 text-sm font-medium`}>{item.note}</p>
                         </div>
                       )}
                     </div>
                   </div>
                   {index < 7 && (
                     <div className="ml-10 w-px h-8 bg-gray-300"></div>
                   )}
                 </motion.div>
               ))}
             </div>
           </div>
         </div>
       </section>

       {/* CTA セクション */}
       <section className="py-32 bg-gradient-to-r from-lime-600 via-lime-700 to-green-600 relative overflow-hidden">
         <div className="absolute inset-0 section-pattern opacity-10"></div>
         
         <div className="container mx-auto px-4 relative z-10">
           <motion.div
             className="text-center"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
               藤喜建設の仕事にご興味をお持ちいただけましたか？
             </h2>
             <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
               私たちと一緒に、未来を創る仕事をしませんか？<br />
               八幡平の地域社会に貢献し、やりがいのある仕事で成長していきましょう。
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <motion.a 
                 href="/careers"
                 className="px-10 py-4 bg-white text-lime-700 font-semibold rounded-xl text-lg hover:bg-lime-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 採用情報を見る
               </motion.a>
               <motion.a 
                 href="/voices"
                 className="px-10 py-4 border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-lime-700 transition-all duration-300 transform hover:scale-105"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 先輩社員の声を見る
               </motion.a>
               <motion.a 
                 href="/results"
                 className="px-10 py-4 border-2 border-white text-white font-semibold rounded-xl text-lg hover:bg-white hover:text-lime-700 transition-all duration-300 transform hover:scale-105"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 施工実績を見る
               </motion.a>
             </div>
           </motion.div>
         </div>
       </section>
     </main>
   );
 } 