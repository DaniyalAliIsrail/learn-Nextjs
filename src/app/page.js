import Image from "next/image";
import LearnLink from "./components/LearnLink";
import LearnuseRouter from "./components/LearnuseRouter";
import LernuseGlobalcss from "./components/LernuseGlobalcss";
import LearnModuleCss from "./components/LearnModuleCss";
import LearnUseImage from "./components/LearnUseImage";
import LearnDataFetching from "./components/LearnDataFetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-24">
     <div>
      next.js page
      {/* <h1 className="text-3xl">Hello Next.js</h1>
      <br></br>
      <LearnLink/>
      <br></br>
      <LearnuseRouter/>
      <LernuseGlobalcss/>
      < LearnModuleCss/>
      <LearnUseImage/> */}
      {/* <LearnDataFetching/> */}
     </div>
    </main>
  );
}
