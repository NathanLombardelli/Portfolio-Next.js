import {Autoplay, Navigation} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

import {exp} from '@/utils/constants';
import {useState} from "react";

export function ExpSection() {

    const [selectedExp, setSelectedExp] = useState(exp[0]);

    function handleExpChange(activeIndex: number, clickedSlide: HTMLElement) {

        setSelectedExp(exp[activeIndex]);
        console.log(exp[activeIndex]);

        // reset other styles
        const cicles = clickedSlide.querySelectorAll(".circle");
        cicles.forEach((el) => {
            el.className = "circle";
        });

        // set selected styles
        cicles.item(activeIndex).className = "circle selected";

    }

    return (
        <section className={"expSection"} id={'exp'}>

            <div className={'infoContainer'}>
                {selectedExp.image}
                <div className={'textInfos'}>
                    <p className={'titleInfos'}>{selectedExp.title}</p>
                    <p className={'dateInfos'}>{selectedExp.date}</p>
                    <p className={'descInfos'}>{selectedExp.desc}</p>
                    <p className={'compInfos'}>{selectedExp.comp}</p>
                </div>
            </div>

            <div className={'sliderContener'}>
                <Swiper
                    autoplay={false}
                    navigation
                    slideToClickedSlide
                    scrollbar={{draggable: true}}
                    centeredSlides={true}
                    slidesPerView={5}
                    onActiveIndexChange={(selected) => handleExpChange(selected.activeIndex, selected.el)}
                    modules={[Autoplay, Navigation]}
                >
                    {exp.map((ex, index) => {
                        return (<SwiperSlide key={index + "" + ex.year}>
                            <div className={'expCard'}>
                                <p className={'titleExp'}>{ex.title}</p>
                                <div className={'lineContainer'} style={{}}>
                                    <div className="circle"></div>
                                    <div className="line"></div>
                                </div>

                                <p className={'year'}>{ex.year}</p>
                            </div>
                        </SwiperSlide>);
                    })}

                </Swiper>
            </div>
        </section>
    );
}