import {useState, ChangeEvent} from 'react';
import Image from "next/image";

import npmImage from "../../img/npm.png";
import gitImage from "../../img/git-card.jpg";
import drinkImage from "../../img/drinkSaverIcon.png";
import portfolioImage from "../../img/portfolio.png";

export function ProSection() {
    const [reactChecked, setReactChecked] = useState(true);
    const [reactNativeChecked, setReactNativeChecked] = useState(true);
    const [nextChecked, setNextChecked] = useState(true);

    const handleFiltre1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setReactChecked(event.target.checked);
    };

    const handleFiltre2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setReactNativeChecked(event.target.checked);
    };

    const handleFiltreNextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNextChecked(event.target.checked);
    };

    return (
        <section className={"proSection"} id={'pro'}>
            <h2>Mes Projets</h2>
            <div className={'technos'}>
                <input type="checkbox" id="filtre1" checked={reactChecked}
                       onChange={handleFiltre1Change}/>
                <label htmlFor="filtre1">React</label>

                <input type="checkbox" id="filtre2" checked={reactNativeChecked}
                       onChange={handleFiltre2Change}/>
                <label htmlFor="filtre2">React Native</label>
                <input type="checkbox" id="filtreNext" checked={nextChecked}
                       onChange={handleFiltreNextChange}/>
                <label htmlFor="filtreNext">Next.js</label>
            </div>

            <div className="elements">
                <a href={'https://www.npmjs.com/package/bereact-ui'}
                   target={'_blank'}
                   className={`element ${reactChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={npmImage} alt={'image du projet BeReact-ui'}/>
                    <div className={'infosPro'}>
                        <p className={'title'}>BeReact-ui</p>
                        <p>Une librairie de mes composants React.</p>
                        <p>( En cours )</p>
                    </div>
                </a>
                <a href={'https://github.com/DrinkSaver'}
                   target={'_blank'}
                   className={`element ${reactNativeChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={drinkImage} alt={'image du projet DrinkSaver'}/>
                    <div className={'infosPro'}>
                        <p className={'title'}>DrinkSaver</p>
                        <p>Une application mobile de référencement de bars/café et de prix de produits.</p>
                        <p>( En cours )</p>
                    </div>
                </a>
                <a href={'https://nathanlombardelli.be'}
                   target={'_blank'}
                   className={`element ${nextChecked ? '' : 'hidden'}`}><Image
                    className={'proImage'} src={portfolioImage} alt={'image du projet Portfolio'}/>
                    <div className={'infosPro'}>
                        <p className={'title'}>Portfolio</p>
                        <p>Le site sur lequel vous vous trouver actuelement.</p>
                    </div>
                </a>
                <a href={'https://github.com/NathanLombardelli'}
                   target={'_blank'}
                   className={`element`}><Image
                    className={'proImage'} src={gitImage} alt={'image du projet GitHub'}/>
                    <div className={'infosPro'}>
                        <p className={'title'}>GitHub</p>
                        <p>Mes autres projets se trouvent sur mon GitHub.</p>
                    </div>
                </a>

            </div>
        </section>
    );
}
