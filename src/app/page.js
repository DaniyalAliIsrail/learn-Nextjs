import Image from "next/image";
import LearnLink from "./components/LearnLink";
import LearnuseRouter from "./components/LearnuseRouter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-24">
     <div>
      <h1 className="text-3xl">Hello Next.js</h1>
      <br></br>
      <LearnLink/>
      <br></br>
      <LearnuseRouter/>
     </div>
    </main>
  );
}
