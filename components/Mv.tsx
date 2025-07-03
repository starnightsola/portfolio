import Image from 'next/image'
export default function Mv() {
  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <Image
            src="/mv.jpg"
            alt="Kou Bisin Portfolio"
            width={500} // 適宜調整（例: 500px）
            height={700} // 適宜調整（例: 700px）
            className="h-full w-auto shadow-lg object-cover"
        />

        {/* テキスト */}
        <h1 className="absolute text-block text-4xl md:text-6xl font-bold text-center z-10 drop-shadow-lg mv-title">
            Kou Bisin<br />Portfolio
        </h1>
    </div>
  )
}