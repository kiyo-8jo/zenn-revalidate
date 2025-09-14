export default function Home() {
  return (
    <main className="m-10 max-h-screen max-w-screen">
      <h1 className="text-2xl mb-10">学生一覧</h1>
      <button className="block m-auto cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl mb-10 hover:scale-101 transition delay-50">
        すべて更新する
      </button>
      <div className="py-3 mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl">Aクラス</h2>
          <button className="cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl hover:scale-101 transition delay-50">
            Aクラスのみ更新する
          </button>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-5">
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl">Bクラス</h2>
          <button className="cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl hover:scale-101 transition delay-50">
            Bクラスのみ更新する
          </button>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-5">
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
          <div className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm">
            <h3>田中太郎</h3>
            <p>age:15</p>
          </div>
        </div>
      </div>
    </main>
  );
}
