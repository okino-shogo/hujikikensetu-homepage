"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLoadingContext } from "../components/LoadingProvider";
import { employees, filterOptions } from "./data";
import { EmployeeFilter } from "./types";

export default function VoicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState<EmployeeFilter>({ category: 'all' });
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const { isLoadingComplete } = useLoadingContext();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let filtered = employees;
    
    if (filter.category && filter.category !== 'all') {
      filtered = filtered.filter(employee => employee.category === filter.category);
    }
    
    if (filter.position && filter.position !== 'all') {
      filtered = filtered.filter(employee => 
        employee.position.includes(filter.position!) || 
        employee.tags.some(tag => tag.includes(filter.position!))
      );
    }
    
    setFilteredEmployees(filtered);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション - トップメッセージと社員紹介への導入 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})` }}
        >
          <img 
            src="/images/作業写真19.jpeg"
            alt="藤喜建設 先輩社員" 
            className="w-full h-[130%] object-cover filter brightness-75 contrast-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-yellow-900/20"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 items-center min-h-screen py-20">
            <div className="col-span-12 text-center">
              <div className="space-y-8 max-w-6xl mx-auto">
                <motion.div 
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <p className="font-english text-sm md:text-base tracking-[0.3em] text-white/80 font-light">
                    REAL VOICES FROM OUR TEAM
                  </p>
                </motion.div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white text-shadow-strong">
                    <motion.span 
                      className="block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      ここで働く、私たちの
                    </motion.span>
                    <motion.span 
                      className="block gradient-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      リアルボイス
                    </motion.span>
                  </h1>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif font-medium leading-relaxed">
                    藤喜建設で、未来を創る仲間たち
                  </p>
                </motion.div>

                <motion.div 
                  className="max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                    藤喜建設には、経験豊富なベテランから、未来を担う若手まで、様々なバックグラウンドを持つ社員が活躍しています。<br />
                    彼らが日々どんな想いで仕事に向き合い、どんなことにやりがいを感じているのか。そして、藤喜建設とはどんな会社なのか。<br />
                    ここでは、先輩たちのリアルな声をお届けします。あなたの未来の姿が、ここにあるかもしれません。
                  </p>
                  
                  <p className="text-xl md:text-2xl text-orange-300 font-semibold">
                    気になる先輩を見つけたら、ぜひクリックして詳しい話を聞いてみてください！
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 社員インタビュー記事一覧セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                社員インタビュー記事
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                様々な年代・職種・バックグラウンドを持つ社員たちの、リアルな働く姿をご覧ください
              </p>
            </motion.div>
          </div>

          {/* フィルタリング機能 */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">カテゴリー</label>
                <select
                  value={filter.category || 'all'}
                  onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {filterOptions.categories.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">職種</label>
                <select
                  value={filter.position || 'all'}
                  onChange={(e) => setFilter({ ...filter, position: e.target.value })}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  {filterOptions.positions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <p className="text-center text-gray-600">
              {filteredEmployees.length}人の社員が見つかりました
            </p>
          </div>

          {/* 社員カード一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEmployees.map((employee, index) => (
              <motion.div
                key={employee.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/voices/${employee.id}`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {employee.name}
                        </h3>
                        <p className="text-orange-300 font-medium">
                          {employee.position}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          {employee.experience}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {employee.department}
                        </span>
                        {employee.age && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {employee.age}
                          </span>
                        )}
                      </div>
                      
                      <blockquote className="text-gray-700 text-base leading-relaxed mb-4 italic border-l-4 border-orange-500 pl-4">
                        "{employee.catchphrase}"
                      </blockquote>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {employee.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-right">
                        <span className="text-orange-600 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                          詳しく見る →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredEmployees.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                該当する社員が見つかりませんでした。<br />
                フィルターを変更してお試しください。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 職場環境・働きやすさセクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                働きやすい職場環境
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                藤喜建設が大切にしている職場環境の特徴をご紹介します
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "温かいチームワーク",
                description: "年代や経験を超えてお互いをサポートし合う、家族のような温かい職場です。困った時は必ず誰かが手を差し伸べてくれます。"
              },
              {
                icon: "📚",
                title: "充実した教育体制",
                description: "先輩から後輩への丁寧な技術指導が充実。未経験でも一から学べる環境で、着実にスキルアップできます。"
              },
              {
                icon: "⚖️",
                title: "改善されたワークライフバランス",
                description: "働き方改革により労働環境が大幅に改善。残業時間の削減や休暇の取りやすさなど、プライベートも充実させられます。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 求職者へのメッセージ */}
      <section className="py-24 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              これから仲間になる方へ
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                藤喜建設は技術と人を大切にする会社です。<br />
                経験の有無に関わらず、やる気のある方を歓迎します。<br />
                一緒に地域の発展に貢献する建物を作りませんか？
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">未経験者も安心</h3>
                  <p className="text-gray-600">
                    丁寧な指導体制で、基礎から着実に技術を身につけることができます
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">やりがいのある仕事</h3>
                  <p className="text-gray-600">
                    完成した建物を見たときの達成感は、何にも代えがたいものがあります
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/careers"
                  className="px-10 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-lg"
                >
                  採用情報を見る
                </Link>
                <Link 
                  href="/contact"
                  className="px-10 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                >
                  まずは相談する
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 