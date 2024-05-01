import './Nav.scss';
import {useEffect, useRef, useState} from "react";

export default function Nav() {

    const [selectionWidth, setSelectionWidth] = useState<number>(0);
    const [selectionPos, setSelectionPos] = useState<number>(0);
    const [isHover, setIsHover] = useState(false);

    const comp = useRef<HTMLLIElement>(null);
    const exp = useRef<HTMLLIElement>(null);
    const pro = useRef<HTMLLIElement>(null);
    const cv = useRef<HTMLLIElement>(null);
    const con = useRef<HTMLLIElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = [comp, exp, pro, cv, con];
        elements.forEach(ref => {
            // @ts-ignore
            ref.current?.addEventListener('mouseover', () => updateSelection(ref.current));
            ref.current?.addEventListener('mouseout', handleMouseOut);
        });

        return () => {
            elements.forEach(ref => {
                // @ts-ignore
                ref.current?.removeEventListener('mouseover', () => updateSelection(ref.current));
                ref.current?.removeEventListener('mouseout', handleMouseOut);
            });
        };

    }, []);


    const handleMouseOut = () => {
        setIsHover(false);
    };
    const updateSelection = (element: HTMLLIElement) => {
        const rect = element.getBoundingClientRect();
        const navRect = navRef.current?.getBoundingClientRect();
        if (navRect) {
            setSelectionWidth(rect.width);
            setSelectionPos((rect.left - navRect.left));
            setIsHover(true);
        }
    }


    return (
        <nav ref={navRef} className={'nav'}>
            <ul>
                <li ref={comp}><a href={'#comp'}>Compétances</a></li>
                <li ref={exp}><a href={'#exp'}>Expériences</a></li>
                <li ref={pro}><a href={'#pro'}>Projets</a></li>
                <li ref={cv}><a href={'#cv'}>CV</a></li>
                <li ref={con}><a href={'#contact'}>Contact</a></li>
            </ul>
            <div style={{
                width: `${selectionWidth}px`,
                transform: `translateX(${selectionPos}px) scale(${isHover ? 1 : 0})`,
                opacity: isHover ? 1 : 0
            }} className={'navSelection'}/>
        </nav>
    );
}