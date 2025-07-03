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
          className="h-full w-auto shadow-lg object-cover mv"
        />

        {/* テキスト */}
        <h1 className="absolute text-block text-5xl md:text-6xl font-bold text-center z-10 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-lg mv-title">
          Kou BiShin<br />Portfolio
        </h1>
    </div>
  )
}