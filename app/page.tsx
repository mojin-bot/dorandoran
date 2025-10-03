// app/page.tsx
"use client";

const siteName = "도란도란";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Nav } from "@/app/components/Nav";
import { photoData, Photo } from "@/app/data/photo";

import { LogoSymbol, LogoText, LogoTextBottom } from "@/app/components/Logo";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";


import { Icon } from "@/app/components/Icon";


gsap.registerPlugin(ScrollTrigger);

// 카테고리 표시 이름 매핑
const categoryMap: Record<string, string> = {
  "out": "펜션외부",
  "1F": "1F",
  "2F": "2F",
};

// 공통 렌더링 함수
function PhotoSection({
  category,
  photos,
}: {
  category: string;
  photos: Photo[];
}) {
    const filtered = photos.filter(
        (p) =>
        p["photoList-category"] === category &&
        p["photoList-typePortrait"] === false
    );
    if (filtered.length === 0) return null;

    return (
        <div className="photo-section">
        <h3 className="photo-title">
            {categoryMap[category]} <span>{filtered.length}</span>
        </h3>
        <Swiper spaceBetween={10} slidesPerView={1.8} className="photo-swiper">
            {filtered.map((photo) => (
            <SwiperSlide key={photo["photoList-id"]}>
                <div className="slide-card">
                <div className="slide-image">
                    <img
                    src={photo["photoList-src"]}
                    alt={photo["photoList-title"]}
                    loading="lazy"
                    />
                </div>
                <div className="slide-text">
                    {categoryMap[category]} - {photo["photoList-title"]}
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}


export default function Home() {
    const photos: Photo[] = photoData;

    // id → 객체 맵 (필요시 사용)
    const photoMap = Object.fromEntries(
        photos.map((p) => [p["photoList-id"], p])
    );

    // 메인슬라이드용 필터
    const mainSlidePhotoMobile = photos.filter((p) =>
        p["photoList-keyword"].includes("대표컷모바일")
    );
    const mainSlidePhotoPc = photos.filter((p) =>
        p["photoList-keyword"].includes("대표컷")
    );

  // GSAP ScrollTrigger
    useEffect(() => {
        gsap.to(".wrap-mo", {
        keyframes: [
            { width: "100vw", height: "100vh", borderRadius: "0em", duration: 1 },
            { width: "88vw", height: "78vh", borderRadius: ".4em", duration: 3 },
            { width: "85vw", height: "75vh", borderRadius: ".4em", duration: 2 },
            { y: "-120%", duration: 1 },
        ],
        scrollTrigger: {
            trigger: ".container-a",
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            
            
        },
        ease: "none",
        });

        gsap.fromTo(
        ".inner-text",
        { scale: 1, opacity: 1 },
        {
            scale: 1.4,
            opacity: 0.5,
            ease: "power2.out",
            scrollTrigger: {
            trigger: ".container-a",
            start: "top top",
            end: "400% top",
            scrub: true,
            pin: false,
            },
        }
        );

        ScrollTrigger.create({
        trigger: ".container-b",
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: [".header", "footer"], className: "active-b" },
        });

        ScrollTrigger.create({
        trigger: ".container-c",
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: [".header", "footer"], className: "active-c" },
        });

        ScrollTrigger.create({
        trigger: ".container-d",
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: [".header", "footer"], className: "active-d" },
        });
    }, []);

    return (
        <main>
        {/* 헤더 */}
        <section className="header">
            <div className="header-wrap">
            <div className="head-h1">
                <LogoSymbol className="logoS" />
            </div>
            <Nav />
            </div>
        </section>

        {/* 메인 슬라이드 */}
        <section className="container-a">
            <div className="inner-text">당신만의 힐링 스팟</div>
            <div className="wrap wrap-mo">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {mainSlidePhotoMobile.map((p) => (
                <SwiperSlide key={p["photoList-id"]}>
                    <img
                    src={p["photoList-src"]}
                    alt={`${p["photoList-title"]} - ${siteName}`}
                    loading="lazy"
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div className="wrap wrap-pc">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {mainSlidePhotoPc.map((p) => (
                <SwiperSlide key={p["photoList-id"]}>
                    <img
                    src={p["photoList-src"]}
                    alt={`${p["photoList-title"]} - ${siteName}`}
                    loading="lazy"
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>

    {/* 사진 섹션 */}
    <section className="container-b">
        <div className="section-header">
            <h2 className="title">도란도란</h2>
            <p className="subtitle">펜션 사진 보기</p>
        </div>

        <PhotoSection category="out" photos={photos} />
        <PhotoSection category="1F" photos={photos} />
        <PhotoSection category="2F" photos={photos} />
    </section>

        {/* 추가 섹션 */}
        <section className="container-c"  >
            <div className="card">


                <div><LogoSymbol width={100} height={60} className="logoCS" /></div>
                <div><LogoTextBottom width={100} height={10} className="logoCTB " /></div>








                <h2 className="title">도란도란</h2>
                <p className="subtitle">풀빌라 독채 펜션 (2F)</p>
                <p className="address">안산시 단원구</p>

                {/* 기본 정보 */}
                <ul className="info">
                <li><Icon name="room" /> 방 : 3</li>
                <li><Icon name="restroom" /> 화장실 : 2</li>
                <li><Icon name="expand" /> 객실면적 : 35 평</li>
                </ul>

                {/* 인원 */}
                <p className="desc">
                사용인원 : 기본 6 인 ~ 최대 12 인<br />
                <span className="small">(추가요금 1인당 30,000원)</span>
                </p>

                <button className="btn">예약 문의</button>

                {/* 특징 */}
                <p className="features">
                독채 풀빌라 / 오션뷰 / 노을 / 석양 / 바베큐 / 객실내 무료 Wi-Fi / 주차
                </p>

                {/* 요금 테이블 */}
                <table className="price">
                <thead>
                    <tr>
                    <th>요금</th>
                    <th>주중 요금</th>
                    <th>금요일 요금</th>
                    <th>주말 요금</th>
                    <th>1인 추가요금</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>비수기</td>
                    <td>420,000원</td>
                    <td>470,000원</td>
                    <td>590,000원</td>
                    <td>30,000원</td>
                    </tr>
                    <tr>
                    <td>성수기</td>
                    <td>520,000원</td>
                    <td>620,000원</td>
                    <td>740,000원</td>
                    <td>30,000원</td>
                    </tr>
                </tbody>
                </table>

                {/* 객실 안내 */}
                <div className="room-info">
                <h3>객실 정보안내</h3>
                <p>
                    1층 : 거실, 주방, 노래방, 화장실 1, 방 2 (온돌)<br />
                    2층 : 방 1 (온돌), 화장실 1
                </p>
                </div>





                
                    <h2 className="title"><Icon name="bbq" /> 개별 야외 숯불 바베큐</h2>
                    <p>
                    (사전문의/현장결제)<br/>
                    이용요금 : 숯 세트 (숯 2 + 철망) 40,000원 (현장결제)<br/>
                    이용시간 : 입실 ~ 21:00
                    </p>

                    <h3>&lt;바비큐장 이용안내&gt;</h3>
                    <p>
                    펜션은 독립 된 개별 바비큐장이며 무료로 자유롭게 이용하시면 됩니다.<br/><br/>
                    바비큐 서비스(숯+철망)를 신청하지 않았을 경우, 펜션 내에는 그릴만 준비되어 있으며 숯과 철망 등 각종 먹거리는 직접 준비해오셔야 합니다. (불피우기 셀프)<br/><br/>
                    *화재위험으로 불멍 / 화목 이용은 불가 합니다.<br/>
                    가위, 집게, 토치(부탄가스 별도)등 집기류는 비치되어 있습니다.
                    </p>

                    <h2 className="title"><Icon name="reserve" /> 입/퇴실 안내</h2>
                    <p>
                    입실시간 : 15시, 퇴실시간 : 11시<br/>
                    늦은 입실 : 18시 이후의 입실은 사전에 반드시 연락을 주시기 바랍니다.<br/>
                    퇴실 준비 : 11시 (10시30분까지 준비하여 연락주시면 퇴실안내 도와드립니다.)
                    </p>

                    <h2 className="title"><Icon name="notice" /> 유의사항</h2>
                    <ul className="notice">
                    <li>보호자를 동반하지 않은 미성년자(만20세)는 입실 불가, 환불 없음.</li>
                    <li>모든 인원은 숙박여부와 관계없이 입실 인원에 포함됨.</li>
                    <li>최대 인원 초과 시 입실 거부될 수 있음.</li>
                    <li>오후 10시 이후 바비큐장 이용 및 고성방가 금지.</li>
                    <li>객실 내 절대 금연.</li>
                    <li>애완동물 입실 불가 (위반 시 퇴실 및 환불 불가).</li>
                    <li>바비큐는 지정된 장소에서만 이용 가능.</li>
                    <li>상업적 촬영 목적 시 사전 협의 필수.</li>
                    <li>시설물 파손·분실 시 사용자 책임.</li>
                    <li>퇴실 시 음식물 및 쓰레기 분리수거, 주방기구 세척 필수.</li>
                    <li>객실 정리 후 펜션지기에게 퇴실 점검 요청.</li>
                    </ul>
                </div>














        </section>


















    <section className="container-d">
        {/* 배경 이미지 */}
        {photoMap[33] && (
            <img
            src={photoMap[33]["photoList-src"]}
            alt={photoMap[33]["photoList-title"]}
            />
        )}
        {/* 카드 */}
        <div className="card">
            <div className="card-header">
                <Icon name="key"   className="title__icon" />
                <h2>도란도란 펜션<p className="subtitle">예약 문의</p></h2>
            </div>            
            <p className="desc">
                대부도 인근에 위치한 도란도란 펜션은 오션뷰와 노을을 즐길 수 있는 2층 독채 풀빌라입니다. <br></br>
                최대 12인까지 이용 가능한 넓은 공간과 
                개별 바비큐장, 노래방 시설로 가족·단체 여행에 최적화된 힐링 숙소입니다.
                <br /><br />
                전화문의
            </p>
            <div className="contact">
                <div className="contact-item">
                    <Icon name="call" className="contact__icon" />
                    <span>1551-3365</span>
                </div>
                <div className="contact-item">
                    <Icon name="call" className="contact__icon" />
                    <span>010-9949-0365</span>
                </div>
            </div>
        </div>
    </section>




        {/* 푸터 */}
        <footer>
            <div className="footer-wrap">
            <div className="foot-h1">
                <LogoText className="logoB " />
            </div>
            <Nav />
            </div>
        </footer>

        <section className="container-popup-gallery"></section>
    </main>
    );
}
