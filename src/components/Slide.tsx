import React, { useEffect, useState } from 'react';

import imgNetflix from '../assets/slide/netflix.png';
import imgHbo from '../assets/slide/hbo.webp';
import imgPrime from '../assets/slide/prime.jpg';
import imgDisney from '../assets/slide/disney.webp';

import './Slide.scss';

const images = [imgNetflix, imgHbo, imgPrime, imgDisney];

export default function Slide() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Altera a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <section className='container-slide'>
            <div className='slide-wrapper'>
                {images.map((img, idx) => (
                    <div
                        className='slide'
                        key={idx}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    >
                        <img src={img} alt={`Slide ${idx}`} />
                    </div>
                ))}
            </div>
            <div className='indicators'>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`indicator ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
}