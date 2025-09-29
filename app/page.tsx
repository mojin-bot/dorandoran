"use client";

import { useEffect } from "react";
import gasp from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

// JSON 데이터 import
import photoList from "@/app/data/photo.json";

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
      {/* 1페이지 */}
      <section className={`${styles.section} ${styles.section1}`}>
        <h1>도란도란 펜션</h1>
        <p>환영합니다 🌿</p>
      </section>



      {/* 2페이지: photo.json 불러와서 출력 */}
      <section className={`${styles.section} ${styles.section2}`}>
        <h2>갤러리</h2>
        <div className={styles.gallery}>
          {photoList.map((item) => (
            <figure key={item["photoList-id"]}>
              <img src={item["photoList-src"]} alt={item["photoList-title"]} />
              <figcaption>{item["photoList-title"]}</figcaption>
            </figure>
          ))}
        </div>
      </section>


            {/* 3페이지 */}
      <section className={`${styles.section} ${styles.section3}`}>
        <h2>객실 소개</h2>
      </section>

      {/* 4페이지 */}
      <section className={`${styles.section} ${styles.section4}`}>
        <h2>이용 안내</h2>
      </section>
    </main>
  );
}
