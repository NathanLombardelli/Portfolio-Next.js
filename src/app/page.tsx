"use client"
import './global.scss';
import Spline from '@splinetool/react-spline';
import Nav from "../components/nav/Nav";
import {useEffect, useState} from "react";


export default function Home() {

    const [date, setDate] = useState<string>("");
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

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    const scale = Math.max(0.8, 1 - (offsetY / window.innerHeight) * 0.2);

    return (
        <main>
            <Nav/>

            <section className={"mainSection"}>
                <Spline scene="https://prod.spline.design/dI-gsDDjICl92avH/scene.splinecode"/>
                <h1 style={{
                    position: 'fixed',
                    top: `calc(50vh - 250px + ${offsetY / 2}px)`,
                    transform: `translate3d(0px, ${-offsetY / 2}px, 0px) scale(${scale})`,
                }}>Salut , je suis Nathan</h1>
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


            <section className={"compSection"} id={'comp'}>

            </section>

            <section className={"expSection"} id={'exp'}>

            </section>

            <section className={"cvSection"} id={'cv'}>

            </section>

            <section className={"contactSection"} id={'contact'}>

            </section>

        </main>
    );
}
