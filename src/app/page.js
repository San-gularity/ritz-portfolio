import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Graph from "@/components/Graph";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Graph></Graph> */}
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Work></Work>
            <Contact></Contact>
        </div>
    );
}
