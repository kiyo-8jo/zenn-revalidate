import { StudentDataType } from "../type";

async function getClassBData() {
  const endpoint =
    "https://68c651b5442c663bd026b6c1.mockapi.io/api/classroom/classB";
  const res = await fetch(endpoint);
  return res.json();
}

const ClassB = async () => {
  const classB = await getClassBData();

  return (
    <div className="py-3">
      <form className="flex items-center justify-between mb-10">
        <h2 className="text-xl">Bクラス</h2>
        <button className="cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl hover:scale-101 transition delay-50">
          Bクラスのみ更新する
        </button>
      </form>
      <div className="grid grid-flow-row grid-cols-5 gap-5">
        {classB.map((student: StudentDataType) => (
          <div
            key={student.id}
            className="border-1 border-gray-300 py-2 rounded-md text-center inset-shadow-sm"
          >
            <h3>{student.name}</h3>
            <p>age : {student.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassB;
