import Image from "next/image";

export const comp = ['HTML', 'CSS', 'SCSS', 'Javascript', 'TypeScript', 'React', 'ReactNative', 'SQL', 'GitHub', 'Nodejs', 'Express'];
import helmoImage from "@/img/helmo.png";
import becodeImage from "@/img/becode.png";
import capsuleImage from "@/img/Capsule.png";
import {ReactElement} from "react";

export const descComp: { [key: string]: string } = {
    HTML: "HTML est le langage de balisage standard pour la création de pages web. Il fournit la structure de base d'une page web.",
    CSS: "CSS est utilisé pour styliser et mettre en forme les éléments HTML. Il permet de créer des mises en page attrayantes et responsives.",
    SCSS: "SCSS est une extension de CSS qui offre des fonctionnalités supplémentaires comme les variables, les mixins et les fonctions, ce qui facilite la gestion des styles.",
    Javascript: "JavaScript est un langage de programmation côté client qui permet d'ajouter des fonctionnalités interactives et dynamiques aux sites web et aux applications.",
    TypeScript: "TypeScript est une surcouche de JavaScript qui ajoute un typage statique optionnel et d'autres fonctionnalités avancées pour faciliter le développement d'applications robustes et évolutives.",
    React: "React est une bibliothèque JavaScript pour la construction d'interfaces utilisateur. Il permet de créer des composants réutilisables et facilite le développement d'applications web interactives et performantes.",
    ReactNative: "React Native est un framework permettant de développer des applications mobiles multiplateformes en utilisant JavaScript et React. Il permet de créer des applications mobiles natives avec une base de code commune.",
    SQL: "SQL est un langage de requête utilisé pour communiquer avec les bases de données. Il est essentiel pour stocker, récupérer et manipuler des données dans les applications web et mobiles.",
    GitHub: "GitHub est une plateforme de développement collaboratif utilisée pour héberger et réviser le code source. Il facilite la collaboration entre développeurs et permet de gérer efficacement les versions des applications.",
    Nodejs: "Node.js est un environnement d'exécution JavaScript côté serveur, permettant de construire des applications web évolutives et des API RESTful performantes.",
    Express: "Express.js est un framework web Node.js minimaliste et flexible qui facilite la création d'API web et d'applications web. Il fournit des fonctionnalités robustes pour gérer les requêtes HTTP et les routes."
};

interface expType {
    title: string,
    image: ReactElement<any, any>,
    location: string,
    desc: string,
    year: string,
    comp: string,
    date: string
}

export const exp: expType[] = [
    {
        title: "Étudiant Bachelier Développement d'application",
        image: <Image src={helmoImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Helmo",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2019",
        comp: "Java, C#, SQL",
        date: "Septembre 2019 - Janvier 2023"
    },
    {
        title: "Étudiant Bachelier Développement d'application",
        image: <Image src={helmoImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Helmo",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2020",
        comp: "Java, C#, SQL",
        date: "Septembre 2019 - Janvier 2023"
    },
    {
        title: "Étudiant Bachelier Développement d'application",
        image: <Image src={helmoImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Helmo",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2021",
        comp: "Java, C#, SQL",
        date: "Septembre 2019 - Janvier 2023"
    },
    {
        title: "Étudiant Bachelier Développement d'application",
        image: <Image src={helmoImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Helmo",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2022",
        comp: "Java, C#, SQL",
        date: "Septembre 2019 - Janvier 2023"
    },
    {
        title: "Étudiant Bachelier Développement d'application",
        image: <Image src={helmoImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Helmo",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2023",
        comp: "Java, C#, SQL",
        date: "Septembre 2019 - Janvier 2023"
    },
    {
        title: "Formation Développeur Web",
        image: <Image src={becodeImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "BeCode",
        desc: "Préparation de présentations technologiques,participation à des projets de groupes etapprentisage de technologies du web.",
        year: "2023",
        comp: "JavaScript, TypeScript, React, ReactNative, SQL, Api,Docker, GitHub, HTML, CSS, SCSS,...",
        date: "16 MARS 2023 - 04 DECEMBRE 2023"
    },
    {
        title: "Stagiaire Développeur Web Junior",
        image: <Image src={capsuleImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Capsule Corp",
        desc: "Participation au développement de l'application HomieApp ( SAAS de gestion immobilière :https://www.homieapp.be )",
        year: "2023",
        comp: "Ionic, React, Redux Toolkit, TypeScript, SQL, HTML,SCSS,...",
        date: "11 DÉCEMBRE 2023 - 04 MARS 2024"
    },
    {
        title: "Stagiaire Développeur Web Junior",
        image: <Image src={capsuleImage} alt={"Helmo Icon"} className={'imageInfos'}/>,
        location: "Capsule Corp",
        desc: "Participation au développement de l'application HomieApp ( SAAS de gestion immobilière :https://www.homieapp.be ) Ionic, React, Redux Toolkit, TypeScript, SQL, HTML,SCSS...",
        year: "2024",
        comp: "Ionic, React, Redux Toolkit, TypeScript, SQL, HTML,SCSS,...",
        date: "11 DÉCEMBRE 2023 - 04 MARS 2024"
    }
];