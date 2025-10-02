// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "@/app/components/Nav";

gsap.registerPlugin(ScrollTrigger);

interface Photo {
  "photoList-id": number;
  "photoList-src": string;
  "photoList-hasAvif": boolean;
  "photoList-typePortrait": boolean;
  "photoList-category": string;
  "photoList-title": string;
  "photoList-keyword": string[];
}

export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);

useEffect(() => {
  fetch("https://storage.googleapis.com/dorandoran-photo-mj/dorandoran/photo.json")
    .then((res) => res.json())
    .then((data: Photo[]) => {
      console.log("photo.json loaded:", data); // 여기서 출력
      setPhotos(data);
    })
    .catch((err) => console.error("photo.json fetch error:", err));
}, []);

useEffect(() => {
  console.log("photos state changed:", photos);
}, [photos]);

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
        {photos.length === 0 ? (
          <p>사진 로딩 중...</p>
        ) : (
          photos.map((p) => (
            <div key={p["photoList-id"]}>
              <img src={p["photoList-src"]} alt={p["photoList-title"]} loading="lazy" />
              <p>{p["photoList-title"]}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
