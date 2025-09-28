"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // 섹션 애니메이션
    gsap.utils.toArray<HTMLElement>("section").forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,            // 섹션 고정
        pinSpacing: false,    // 섹션 간 여백 제거 (풀페이지 느낌)
        scrub: true,          // 스크롤과 애니메이션 동기화
      });
    });
  }, []);

  return (
    <main>
      <section className={styles.section + " " + styles.section1}>
        <h1>도란도란 펜션</h1>
        <p>환영합니다 🌿</p>
      </section>
      <section className={styles.section + " " + styles.section2}>
        <h2>객실 소개</h2>
      </section>
      <section className={styles.section + " " + styles.section3}>
        <h2>갤러리</h2>
      </section>
      <section className={styles.section + " " + styles.section4}>
        <h2>이용 안내</h2>
      </section>
    </main>
  );
}
