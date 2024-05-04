// import {useState} from "react";

export function ContactSection() {

    // const [email, setEmail] = useState('');
    // const [content, setContent] = useState('');
    // const handleClick = async () => {
    //     try {
    //         const response = await fetch('/api/send', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 firstName: 'John',
    //                 // Autres données du mail que vous souhaitez passer
    //             }),
    //         });
    //         const data = await response.json();
    //         console.log('Response:', data);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <section className={"contactSection"} id={'contact'}>
            <h2>Me Contacter</h2>
            <h3><a href={'mailto:nathanlombardelli@hotmail.com'}>nathanlombardelli@hotmail.com</a></h3>
        </section>
    );
}