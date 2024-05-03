import {useState, ChangeEvent} from 'react';
import Image from "next/image";

import myImage from "../../img/helmo.png";
import cvImage from "../../img/cv.png";

export function ProSection() {
    const [reactChecked, setReactChecked] = useState(true);
    const [reactNativeChecked, setReactNativeChecked] = useState(true);

    const handleFiltre1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setReactChecked(event.target.checked);
    };

    const handleFiltre2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setReactNativeChecked(event.target.checked);
    };

    return (
        <section className={"proSection"} id={'pro'}>
            <h2>Mes Projets</h2>
            <div className={'technos'}>
                <input type="checkbox" id="filtre1" data-groupe="groupe1" checked={reactChecked}
                       onChange={handleFiltre1Change}/>
                <label htmlFor="filtre1">React</label>

                <input type="checkbox" id="filtre2" data-groupe="groupe2" checked={reactNativeChecked}
                       onChange={handleFiltre2Change}/>
                <label htmlFor="filtre2">React Native</label>
            </div>

            <div className="elements">
                <a href={'https://codepen.io/LombardelliN/pen/oNOrqaw'}
                   target={'_blank'}
                   className={`element ${reactChecked || reactNativeChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={myImage} alt={'image project'}/>
                    <div className={'infosPro'}><p>BeReact-ui</p></div>
                </a>
                <a href={'https://codepen.io/LombardelliN/pen/oNOrqaw'}
                   target={'_blank'}
                   className={`element ${reactChecked || reactNativeChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={cvImage} alt={'image project'}/>
                    <div className={'infosPro'}><p>DrinkSaver</p></div>
                </a>
                <a href={'https://codepen.io/LombardelliN/pen/oNOrqaw'}
                   target={'_blank'}
                   className={`element ${reactChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={myImage} alt={'image project'}/>
                    <div className={'infosPro'}><p>Portfolio</p></div>
                </a>
            </div>
        </section>
    );
}
