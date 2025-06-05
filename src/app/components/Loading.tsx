'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export default function Loading({ isLoading, onLoadingComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // プログレス アニメーション
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 800);
            return 100;
          }
          return prev + Math.random() * 5 + 2;
        });
      }, 100);

      // ロゴ表示のタイミング
      setTimeout(() => setShowLogo(true), 300);

      return () => clearInterval(progressInterval);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
        >
          {/* 背景パターン - 型枠をイメージした幾何学模様 */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_25%,rgba(34,197,94,0.1)_50%,transparent_50%,transparent_75%,rgba(34,197,94,0.1)_75%)] bg-[length:40px_40px]"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* 会社ロゴエリア */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={showLogo ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative">
                {/* メインロゴテキスト */}
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                  <span className="block">藤喜建設</span>
                </h1>
                
                {/* 英語サブタイトル */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={showLogo ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-green-400 font-english text-sm md:text-base tracking-[0.3em] font-light"
                >
                  FUJIKI CONSTRUCTION
                </motion.p>

                {/* 専門分野テキスト */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={showLogo ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-white/60 text-xs md:text-sm mt-2 font-light"
                >
                  型枠工事専門会社
                </motion.p>
              </div>
            </motion.div>

            {/* 建設工事をイメージしたアニメーション */}
            <div className="mb-8">
              <motion.div
                className="relative w-48 h-2 mx-auto bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {/* プログレスバーの背景（コンクリート的な質感） */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700"></div>
                
                {/* プログレスバー（型枠から流れるコンクリートをイメージ） */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* 流動的な効果 */}
                <motion.div
                  className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-32, 192],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* プログレス数値 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 text-white/80 text-sm font-mono"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* 型枠構造をイメージしたアニメーション要素 */}
            <div className="relative w-64 h-32 mx-auto">
              {/* 基礎構造線 */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
              >
                <div className="h-0.5 bg-green-400/60"></div>
              </motion.div>

              {/* 左の支柱 */}
              <motion.div
                className="absolute bottom-0 left-1/4 w-0.5 bg-green-400/40"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
              />

              {/* 右の支柱 */}
              <motion.div
                className="absolute bottom-0 right-1/4 w-0.5 bg-green-400/40"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
              />

              {/* 上部横梁 */}
              <motion.div
                className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-green-400/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
              />

              {/* 中央の縦線（型枠の区切りをイメージ） */}
              <motion.div
                className="absolute top-1/4 bottom-0 left-1/2 w-0.5 bg-green-400/30 transform -translate-x-1/2"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                style={{ transformOrigin: "bottom" }}
              />
            </div>

            {/* ローディングテキスト */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-8"
            >
              <div className="flex items-center justify-center space-x-1 text-white/60 text-sm">
                <span>読み込み中</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  .
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                >
                  .
                </motion.span>
              </div>
            </motion.div>

            {/* 企業情報 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-white/40 text-xs font-light">
                岩手県八幡平市 | 創業23年 | 型枠工事のプロフェッショナル
              </p>
            </motion.div>
          </div>

          {/* 周囲の粒子効果 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 