"use client"
import './global.scss';
import Spline from '@splinetool/react-spline';
import Nav from "../components/nav/Nav";


export default function Home() {

    return (
        <main>
            <div className={'containerHeader'}>
                <div>
                    <h1>Nathan Lombardelli</h1>
                </div>
                <div>
                </div>
                <div>
                    <h1>Nathan Lombardelli</h1>
                </div>

            </div>
            <Spline style={{height: '100vh'}} scene="https://prod.spline.design/S8kIvME2BM9NVwu8/scene.splinecode"/>

            <Nav/>

        </main>
    );
}
