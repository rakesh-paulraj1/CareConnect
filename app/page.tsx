import Image from "next/image";
import { FlipWords } from "./components/ui/flipwords";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="h-full w-full flex md:items-center md:justify-center bg-white relative overflow-hidden">
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 grid grid-cols-1 md:grid-cols-2">
        <div className=" p-5 flex justify-center items-center">
            <div>
            <div className="text-6xl lg:text-8xl animate-gradient to-65% bg-gradient-to-br bg-clip-text bg-right-bottom font-extrabold text-transparent from-white from-35% via-[#3178c6] to-[#3178c6] bg-[length:300%_300%]">
                Care Connect
                </div>
                <div className="text-black-400 font-bold text-xl md:text-xl leading-snug tracking-wide">
                   Your AI Hospital <FlipWords words={["Manager", "Specialist", "Receptionist"]} />
                </div>
                
            </div>
        </div>
     <span>hello</span>
    </div>
        
    </div>
    </div>
   
  );
}
