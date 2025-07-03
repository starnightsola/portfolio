// components/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="flex flex-col items-center gap-6">
        {/* ロゴ */}
        <Image src="/footerlogo.svg" alt="Kou BiShin Logo" width={100} height={100} />

        {/* メニュー */}
        <ul className="flex gap-4 font-en-ls px-4">
          <li>
            <Link
              href="/"
              className="bg-button text-white py-3 px-6 rounded-full hover:opacity-80 transition"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-button text-white py-3 px-6 rounded-full hover:opacity-80 transition"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="bg-button text-white py-3 px-6 rounded-full hover:opacity-80 transition"
            >
              WORKS
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
