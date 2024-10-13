import './home.scss';
import AllMovies from '../api/AllMovies';
import { useState } from 'react';
import Details from '../components/Details';
import Layout from '../components/Banner';

import SideBar from '../components/SideBar';
import MovieSpan from '../components/MovieSpan';

import Slide from '../components/Slide';

export default function Home() {
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleOpenDetails = (movie) => {
        setSelectedMovie(movie);
        setOpenMenu(true);
    };

    return (
        <section className='container-home'>
            <SideBar />
            <article className='layout-content'>
                <div className="slide-content">
                    <Slide />
                </div>
                <div className="movie-content">
                    <MovieSpan />
                </div>
            </article>
            <Layout />
            <div className="produtos">
                <ul>
                    {AllMovies.map((item, index) => (
                        <li key={index}>
                            <p>{item.name}</p>
                            <a onClick={() => handleOpenDetails(item)}>
                                <img src={item.src} alt={item.name} />
                            </a>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {openMenu && (
                <Details movie={selectedMovie} setOpenMenu={setOpenMenu} />
            )}
        </section>
    );
}