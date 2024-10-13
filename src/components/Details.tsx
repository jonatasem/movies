import './Details.scss';

export default function Details({ movie, setOpenMenu }) {
    if (!movie) return null; // Evita renderizar se não houver um filme selecionado

    return (
        <section className='container-details'>
            <button className='btn-closed' onClick={() => setOpenMenu(false)}>Fechar</button>
            <h1>{movie.name}</h1>
            <div className='card-details'>
                <img src={movie.src} alt={movie.title} />
                <ul>
                    <li>Avaliação: {movie.avaliation}</li>
                    <li>Ano de Lançamento: {movie.year}</li>
                </ul>
            </div>
            <h5>{movie.descriptionCompleted}</h5>
        </section>
    );
}