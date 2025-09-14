import { revalidateAll } from "../lib/actions";

const AllUpdateButton = () => {
  return (
    <form action={revalidateAll}>
      <button className="block m-auto cursor-pointer bg-gray-700 text-white px-5 py-2 rounded-xl mb-10 hover:scale-101 transition delay-50">
        すべて更新する
      </button>
    </form>
  );
};

export default AllUpdateButton;
