"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import {HoloCard} from "bereact-ui/Card";
import Image from "next/image";

import htmlCardImage from "@/img/html-card.jpg";
import htmlPatternImage from "@/img/html-pattern.jpg";
import cssCardImage from "@/img/css-card.jpg";
import cssPatternImage from "@/img/css-pattern.jpg";
import scssCardImage from "@/img/scss-card.jpg";
import scssPatternImage from "@/img/scss-pattern.jpg";
import jsCardImage from "@/img/js-card.jpg";
import jsPatternImage from "@/img/js-pattern.jpg";
import tsCardImage from "@/img/ts-card.jpg";
import tsPatternImage from "@/img/ts-pattern.jpg";
import reactCardImage from "@/img/react-card.jpg";
import reactPatternImage from "@/img/react-pattern.jpg";
import reactNativeCardImage from "@/img/reactNative-card.jpg";
import reactNativePatternImage from "@/img/reactNative-pattern.jpg";
import sqlCardImage from "@/img/sql-card.jpg";
import sqlPatternImage from "@/img/sql-pattern.jpg";
import gitCardImage from "@/img/git-card.jpg";
import gitPatternImage from "@/img/git-pattern.jpg";
import nodeCardImage from "@/img/node-card.jpg";
import nodePatternImage from "@/img/node-pattern.jpg";
import expCardImage from "@/img/exp-card.jpg";
import expPatternImage from "@/img/exp-pattern.jpg";

import {comp, descComp} from "@/utils/constants";
import {useState} from "react";

export function CompSection() {

    const [selectedComp, setSelectedComp] = useState(0);
    const [showTextAnimation, setShowTextAnimation] = useState(false);

    function handleCompChange(activeIndex: number) {

        setShowTextAnimation(true);

        setTimeout(() => {
            setShowTextAnimation(false);
            setSelectedComp(activeIndex)
        }, 500);
    }

    return (
        <section className={"compSection"} id={'comp'}>
            <h2>Mes Compétences</h2>
            <div className={'sliderContener'}>
                <Swiper
                    autoplay={false}
                    navigation
                    effect="coverflow"
                    pagination={{
                        el: "#containerForBullets",
                        type: "bullets",
                        bulletClass: "swiper-custom-bullet",
                        bulletActiveClass: "swiper-custom-bullet-active",
                        clickable: true,
                    }}
                    scrollbar={{draggable: true}}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    centeredSlides={true}
                    slidesPerView={3}
                    onActiveIndexChange={(selected) => handleCompChange(selected.activeIndex)}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                >

                    <SwiperSlide style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}><HoloCard
                        size={250}
                        content={<Image src={htmlCardImage} alt={'html logo'}/>}
                        pattern={htmlPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={cssCardImage} alt={'css logo'}/>}
                        pattern={cssPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={scssCardImage} alt={'scss logo'}/>}
                        pattern={scssPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={jsCardImage} alt={'javascript logo'}/>}
                        pattern={jsPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={tsCardImage} alt={'typescript logo'}/>}
                        pattern={tsPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={reactCardImage} alt={'react logo'}/>}
                        pattern={reactPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={reactNativeCardImage} alt={'react native logo'}/>}
                        pattern={reactNativePatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={sqlCardImage} alt={'sql logo'}/>}
                        pattern={sqlPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={gitCardImage} alt={'github logo'}/>}
                        pattern={gitPatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={nodeCardImage} alt={'node logo'}/>}
                        pattern={nodePatternImage.src}/></SwiperSlide>
                    <SwiperSlide><HoloCard
                        size={250}
                        content={<Image src={expCardImage} alt={'express logo'}/>}
                        pattern={expPatternImage.src}/></SwiperSlide>
                </Swiper>
                <div id="containerForBullets"></div>

                <div className={'textContenerComp'}>
                    <p className={`titleComp ${showTextAnimation ? 'fadeOut' : 'fadeIn'}`}>{comp[selectedComp]}</p>
                    <p className={`descComp ${showTextAnimation ? 'fadeOut' : 'fadeIn'}`}>{descComp[comp[selectedComp]]}</p>
                </div>

            </div>

        </section>
    );
}