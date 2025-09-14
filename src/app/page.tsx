import AllUpdateButton from "./components/AllUpdateButton";
import ClassA from "./components/ClassA";
import ClassB from "./components/ClassB";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="m-10 max-h-screen max-w-screen">
      <Title />
      {/* <AllUpdateButton /> */}
      <ClassA />
      <ClassB />
    </main>
  );
}
