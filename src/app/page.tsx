"use client";

import { useState, useEffect } from "react";
import { quotes, Quote } from "./quotes";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate initial quote
  useEffect(() => {
    generateNewQuote();
  }, []);

  const generateNewQuote = () => {
    setIsLoading(true);
    // Add a small delay for better UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    if (currentQuote) {
      const textToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-aquamarine-50 to-aquamarine-100 dark:from-aquamarine-950 dark:to-aquamarine-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-aquamarine-800 dark:text-aquamarine-200 mb-4">
            Random Quote Generator
          </h1>
          <p className="text-lg text-aquamarine-700 dark:text-aquamarine-300">
            Discover inspiration with every click
          </p>
        </div>

        {/* Quote Card */}
        <div className="bg-aquamarine-50 dark:bg-aquamarine-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-aquamarine-100 dark:bg-aquamarine-800 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-aquamarine-200 dark:bg-aquamarine-700 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-aquamarine-200 border-t-aquamarine-600"></div>
            </div>
          ) : currentQuote ? (
            <div className="relative z-10">
              {/* Quote text */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-aquamarine-900 dark:text-aquamarine-100 leading-relaxed mb-8 text-center">
                "{currentQuote.text}"
              </blockquote>
              
              {/* Author and category */}
              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold text-aquamarine-600 dark:text-aquamarine-300 mb-2">
                  — {currentQuote.author}
                </p>
                <span className="inline-block px-4 py-2 bg-aquamarine-100 dark:bg-aquamarine-800 text-aquamarine-700 dark:text-aquamarine-200 rounded-full text-sm font-medium">
                  {currentQuote.category}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={generateNewQuote}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-gradient-to-r from-aquamarine-500 to-aquamarine-600 hover:from-aquamarine-600 hover:to-aquamarine-700 text-aquamarine-50 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-aquamarine-50 border-t-transparent"></div>
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  New Quote
                </>
              )}
            </span>
          </button>

          {currentQuote && (
            <button
              onClick={copyToClipboard}
              className="group relative px-8 py-4 bg-aquamarine-100 dark:bg-aquamarine-800 text-aquamarine-700 dark:text-aquamarine-200 font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-aquamarine-300 dark:border-aquamarine-700 hover:border-aquamarine-400 dark:hover:border-aquamarine-600 transform hover:scale-105 transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                {copied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Quote
                  </>
                )}
              </span>
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-aquamarine-600 dark:text-aquamarine-400 text-sm">
            Made by Pacifico using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
