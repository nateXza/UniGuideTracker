import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "@/hooks/useTranslation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center text-white font-extrabold text-2xl transform rotate-3 shadow-lg group-hover:rotate-0 transition-transform duration-300">
                  U<span className="text-yellow-300 absolute top-1 right-1 text-xs">★</span>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg scale-110 blur-sm -z-10"></div>
              </div>
              <div className="ml-2 flex flex-col">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-500">
                  UniGuide
                </span>
                <span className="text-[10px] -mt-1 text-gray-600 tracking-wider font-medium">
                  DISCOVER YOUR PATH
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <a className={`${isActive("/") ? "text-primary-600" : "text-gray-700"} hover:text-primary-600 font-medium`}>
                {t("nav.home")}
              </a>
            </Link>
            <Link href="/universities">
              <a className={`${isActive("/universities") ? "text-primary-600" : "text-gray-700"} hover:text-primary-600 font-medium`}>
                {t("nav.universities")}
              </a>
            </Link>
            <Link href="/assessment">
              <a className={`${isActive("/assessment") ? "text-primary-600" : "text-gray-700"} hover:text-primary-600 font-medium`}>
                {t("nav.assessment")}
              </a>
            </Link>
            <Link href="/about">
              <a className={`${isActive("/about") ? "text-primary-600" : "text-gray-700"} hover:text-primary-600 font-medium`}>
                {t("nav.about")}
              </a>
            </Link>
            <LanguageSelector />
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/login">{t("nav.signIn")}</Link>
            </Button>
            <Button asChild>
              <Link href="/profile">{t("nav.getStarted")}</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </header>
  );
};

export default Navbar;
