// app/page.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import photoList from "@/app/data/photo.json";
import { Nav } from "@/app/components/Nav";

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
      <section>두 번째 섹션 2</section>
    </main>
  );
}
