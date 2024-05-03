"use client"
import './global.scss';

import Spline from '@splinetool/react-spline';

import Nav from "../components/nav/Nav";

import {useEffect, useState} from "react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';


import {CompSection} from "@/components/sections/CompSection";
import {CvSection} from "@/components/sections/CvSection";
import {ExpSection} from "@/components/sections/ExpSection";
import {ProSection} from "@/components/sections/ProSection";


export default function Home() {

    const [date, setDate] = useState<string>("");
    const [scale, setScale] = useState(1);
    const [offsetY, setOffsetY] = useState(0);

    // Fonction pour gérer l'événement de scroll

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1000);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const newScale = Math.max(0.8, 1 - (window.scrollY / window.innerHeight) * 0.2);
            setScale(newScale);
        };

        // Ajouter un écouteur d'événement pour redimensionner la fenêtre
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        // Appel initial pour définir l'échelle initiale
        handleResize();

        // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, []);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };


    return (
        <main>
            <Nav/>

            <section className={"mainSection"}>
                {/* ToDO: IF MOBILE => REMOVE SLINE (LAG)*/}
                <Spline className={'spline'} scene="https://prod.spline.design/dI-gsDDjICl92avH/scene.splinecode"/>

                <h1 style={{
                    position: 'fixed',
                    top: `calc(50vh - 250px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Bonjour, je m'appelle Nathan</h1>
                <h2 style={{
                    position: 'fixed',
                    top: `calc(50vh - 150px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Développeur Web Junior.</h2>
                <p className={'desc'} style={{
                    position: 'fixed',
                    top: `calc(50vh - 25px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}> Je développe des sites web et des applications mobiles accessibles,
                    performants
                    et personnalisés de A à Z.</p>
                <p className={'location'}>Belgique Liège : {date}</p>
                <p className={'dispo'}><span>&nbsp;</span> disponible </p>

            </section>

            <CompSection/>


            <ExpSection/>

            <ProSection/>

            <CvSection/>

            <section className={"contactSection"} id={'contact'}>

            </section>

        </main>
    );
}
