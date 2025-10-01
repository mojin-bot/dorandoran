"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import photoList from "@/data/photo.json";

// Nav 불러오기
import { Nav } from "@/components/components";
import { IconSprite } from "@/components/components";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
useEffect(() => {
    gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
    });
    });
}, []);

return (
    <main>
    <Nav />

    <section>두 번째 섹션</section>
    </main>
);
}
