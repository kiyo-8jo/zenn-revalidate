const ClassA = () => {
  return (
    <div className="py-3 mb-20">
      <form className="flex items-center justify-between mb-10">
        <h2 className="text-xl">Aクラス</h2>
        <button className="cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl hover:scale-101 transition delay-50">
          Aクラスのみ更新する
        </button>
      </form>
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
  );
};

export default ClassA;
