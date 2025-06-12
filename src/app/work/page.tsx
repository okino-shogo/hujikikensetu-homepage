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
            src="/images/DSCF1720.jpg"
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
                        className="block text-green-800 font-bold drop-shadow-lg shadow-white"
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
              className="card-hover p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-50 border-2 border-gray-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
              className="card-hover p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-50 border-2 border-gray-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
              className="card-hover p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-50 border-2 border-gray-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
              藤喜建設は、型枠工事一式（建築・土木）を主軸とする専門会社として、確かな技術を核に、建築工事一式まで、幅広い分野でお客様のニーズにお応えしています。それぞれの分野で、私たちの専門性と情熱が活かされています。
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
            <div className="w-full">
              <motion.h4
                className="text-3xl font-bold text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                型枠工事の流れ
              </motion.h4>

              <div className="space-y-0">
                {/* Step 1: 拾い出し */}
                <motion.div
                  className="relative h-screen min-h-[600px] overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 背景画像 */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/拾い出し・加工帳作成.jpg" 
                      alt="拾い出し作業" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl">
                        <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">01</div>
                        <h5 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          拾い出し
                        </h5>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                          施工する建物の図面をもとにPCを使ってコンクリートの成型に必要な型枠の数量や形を導き出し、"加工帳"という材料の加工図を作成する作業を"拾い出し"といいます。拾い出しの作業では、以降の作業の段取りや流れがスムーズにいくかどうかが決まる大切な作業です。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: 加工 */}
                <motion.div
                  className="relative h-screen min-h-[600px] overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 背景画像 */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/作業してる様子.jpg" 
                      alt="材料加工作業" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl ml-auto text-right">
                        <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">02</div>
                        <h5 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          加工
                        </h5>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl ml-auto">
                          拾い出しで作成した加工帳を元に材料の加工をします。材料はベニヤ板や桟木（木を細長く製材したもの）を切ったり、釘で打つことで型枠の形に加工します。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3: 型枠組立 */}
                <motion.div
                  className="relative h-screen min-h-[600px] overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 背景画像 */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/組立３.jpeg" 
                      alt="型枠組立作業" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl">
                        <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">03</div>
                        <h5 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          型枠組立（建て込み）
                        </h5>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                          加工した材料を工事現場に運搬して、組立を行います。事前に"墨出し"と呼ばれる型枠を組み立てる位置や方向を目印として付けておき、それに沿って型枠を組み立てていきます。組み立てた型枠はコンクリート打設の際に破損や漏れ・型枠のズレがないように外側から鉄パイプ等で締固めを行います。型枠の組立はミリ単位でのズレでも建物の仕上がりや強度に影響が出てしまうので、職人にとって一番の腕の見せ所です。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4: コンクリート打設 */}
                <motion.div
                  className="relative h-screen min-h-[600px] overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 背景画像 */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/生コン打設３.jpg" 
                      alt="コンクリート打設作業" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl ml-auto text-right">
                        <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">04</div>
                        <h5 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          コンクリート打設
                        </h5>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl ml-auto">
                          組立が終ったら液体状のコンクリートを型枠に流し込む作業になります。打設の際はコンクリートで型枠が破裂したり、ズレる事があるので型枠職人が作業中は常にチェックを行い、異常がないかを確認します。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 5: 型枠解体 */}
                <motion.div
                  className="relative h-screen min-h-[600px] overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 背景画像 */}
                  <div className="absolute inset-0">
                    <img 
                      src="/images/工事例２.jpg" 
                      alt="型枠解体作業" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl">
                        <div className="text-8xl md:text-9xl font-bold text-white/20 mb-4">05</div>
                        <h5 className="text-4xl md:text-5xl font-bold text-white mb-6">
                          型枠解体（脱型）
                        </h5>
                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                          コンクリートが固まり十分な強度が出たら、型枠を"解体"（脱型）をします。解体の際に固まったコンクリートに傷を付けないように丁寧に且つ、後の作業が控えているため、決められた期間内に素早く作業を終える必要があります。解体後の材料は会社に引き上げます。その際、現場によっては一度使用した型枠を再利用できることもあるため、材料をキレイにして保管します。
                        </p>
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
            私たちと一緒に、未来を創る仕事をしませんか？
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
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