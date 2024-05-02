import {Autoplay, Navigation} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

import {exp} from '@/utils/constants';
import {useEffect, useState} from "react";

export function ExpSection() {

    const [selectedExp, setSelectedExp] = useState(exp[0]);
    const [showInfosAnimation, setShowInfosAnimation] = useState(false);
    const [windowWidth, setWindowWidth] = useState(1080);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Appel initial pour définir l'échelle initiale
        handleResize();

        // Ajouter un écouteur d'événement pour redimensionner la fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleExpChange(activeIndex: number, clickedSlide: HTMLElement) {

        setShowInfosAnimation(true);

        setTimeout(() => {
            setShowInfosAnimation(false);
            setSelectedExp(exp[activeIndex]);
        }, 500);

        // reset other styles
        const cicles = clickedSlide.querySelectorAll(".circle");
        cicles.forEach((el) => {
            el.className = "circle";
        });

        const years = clickedSlide.querySelectorAll(".year");
        years.forEach((year) => {
            year.className = "year";
        });

        // set selected styles
        cicles.item(activeIndex).className = "circle circleSelected";
        years.item(activeIndex).className = "year yearSelected";

    }

    return (
        <section className={"expSection"} id={'exp'}>

            <div className={`infoContainer ${showInfosAnimation ? 'fadeOut' : 'fadeIn'}`}>
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
                    initialSlide={6}
                    onInit={(selected) => handleExpChange(selected.activeIndex, selected.el)}
                    slidesPerView={windowWidth <= 600 ? 3 : 5}
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