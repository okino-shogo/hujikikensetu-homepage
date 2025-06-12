"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "会社概要" },
    { href: "/work", label: "藤喜建設の仕事" },
    { href: "/projects", label: "施工実績" },
    { href: "/voices", label: "先輩社員の声" },
    { href: "/careers", label: "採用情報" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              {/* ロゴ画像 */}
              <img 
                src="/images/fujiki-logo_edited.avif" 
                alt="藤喜建設ロゴ" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                style={!isScrolled ? { 
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.6)' 
                } : {}}
              >
                藤喜建設
              </div>
              <div
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? "text-lime-600" : "text-lime-300"
                }`}
                style={!isScrolled ? { 
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.6)' 
                } : {}}
              >
                FUJIKI CONSTRUCTION
              </div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "text-gray-700 hover:text-lime-600"
                    : "text-white hover:text-lime-300"
                } group`}
                style={!isScrolled ? { 
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.6)' 
                } : {}}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* お問い合わせボタン（デスクトップ） */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  isMobileMenuOpen
                    ? "rotate-45 top-3"
                    : "rotate-0 top-1"
                }`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute top-6 left-0 w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${
                  isMobileMenuOpen
                    ? "-rotate-45 top-3"
                    : "rotate-0 top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-gray-700 hover:text-lime-600 hover:bg-lime-50 transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link
                href="/contact"
                className="block w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-bold text-center transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 