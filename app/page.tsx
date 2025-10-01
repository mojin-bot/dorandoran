"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

// '@'는 보통 'app' 디렉토리 또는 프로젝트의 소스 루트를 가리킵니다.
import photoList from "@/data/photo.json";

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







            <header className="site-header">
                    <svg className="logo-symbol">
                        <use href="/icons.svg#logo-symbol"></use>
                    </svg>
                    <svg className="logo-text">
                        <use href="/icons.svg#logo-text"></use>
                    </svg>
            </header>


            <footer>
                    <svg className="logo-text">
                        <use href="/icons.svg#logo-text"></use>
                    </svg>

                    <nav></nav>



            </footer>








    
    {/* 1페이지 */}
    <section className={`${styles.section} ${styles.section1}`}>

       {/*         상단 심볼 가운데 상단 고정


가운데 

{
"photoList-id": 33,
"photoList-src": "/photo/out/IMG_7702_-portrait.jpg",
"photoList-hasAvif": true,
"photoList-typePortrait": true,
"photoList-category": "out",
"photoList-title": "펜션외부",
"photoList-keyword": ["외관", "잔디", "입구", "마당"]
},
이거 아이디만 가지고 쓸수 있어?


이이미지 쓸건데 가득체웠다가 프레임을 줄일거야
다닫히면

"당신만의 힐링 스팟"
"오션뷰와 바비큐, 도란도란 펜션에서의 
하루가 기다립니다. "



            하단 텍스트 로고 가운데 하단 고정


    <h1>도란도란 펜션</h1>
    <p>환영합니다 🌿</p>
    -->


*/}

    </section>

    {/* 2페이지: 갤러리 */} 
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

    {/* 3페이지: 객실 소개 */}
    <section className={`${styles.section} ${styles.section3}`}>
    <h2>객실 소개</h2>
    <div className={styles.content}>
        {/* 객실 이미지 & 텍스트 자리 */}
        <p>이 페이지에는 객실 사진과 설명을 넣을 수 있어요.</p>
    </div>
    </section>

    {/* 4페이지: 이용 안내 */}
    <section className={`${styles.section} ${styles.section4}`}>
    <h2>이용 안내</h2>
    <div className={styles.content}>
        {/* 안내 이미지 & 텍스트 자리 */}
        <p>이 페이지에는 펜션 이용 규칙이나 주변 안내를 넣을 수 있어요.</p>
    </div>
    </section>
</main>
);
}
