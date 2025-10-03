// app/page.tsx
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "@/app/components/Nav";
import { photoData, Photo } from "@/app/data/photo"; // <-- ts 파일에서 import

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const photos: Photo[] = photoData;

  // GSAP ScrollTrigger
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
      <section>
        {photos.map((p) => (
          <div key={p["photoList-id"]}>
            <img src={p["photoList-src"]} alt={p["photoList-title"]} loading="lazy" />
            <p>{p["photoList-title"]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
