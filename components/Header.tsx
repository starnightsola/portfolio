'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '@/styles/WaveMenu.css' // アニメーション用CSS
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 text-white font-en-ls">
      {/* 左：ロゴ */}
      <div className="w-32">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Kou BiShin Logo"
            width={100}
            height={50}
            className="h-auto w-full"
          />
        </Link>
      </div>

      {/* 右：メニュー + 波 */}
      <div className="relative">
        {/* 波（背景装飾） */}
        <div className={`wave ${isOpen ? 'expand' : ''}`}>
          <div className="wave-inner"></div>
        </div>

        {/* メニューボタン */}
        <button
          onClick={handleToggle}
          aria-label="メニューボタン"
          aria-expanded={isOpen}
          aria-controls="menu-list"
          className="relative z-50 bg-button text-white py-2 px-4 rounded-full overflow-hidden w-24 h-10 cursor-pointer hover:opacity-80 transition"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? 'CLOSE' : 'MENU'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* メニューの中身 */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="menu-list"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 left-auto mt-2 text-black rounded p-4 z-40"
            >
              <ul>
                <li className="mb-2 hover:opacity-50 transition-opacity duration-300">
                  <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="mb-2 hover:opacity-50 transition-opacity duration-300">
                  <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                </li>
                <li className="hover:opacity-50 transition-opacity duration-300">
                  <Link href="/works" onClick={() => setIsOpen(false)}>Works</Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}