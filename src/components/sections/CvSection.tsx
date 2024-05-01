import Image from "next/image";
import cvImage from "@/img/cv.png";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export function CvSection() {
    return (
        <section className={"cvSection"} id={'cv'}>
            <h2>Mon CV</h2>
            <div className={'imgCVContainer'}>
                <Image className={'cvImage'} src={cvImage} alt={'cv image'}/>
            </div>
            <a href={'/files/CV_Nathan_Lombardelli.pdf'} target="_blank" className={'downloadCVButton'}>
                <FontAwesomeIcon color={'#fff'} icon={faDownload}/>
                <p>Télécharger ( PDF )</p>
            </a>


        </section>
    );
}