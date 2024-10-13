import './MovieSpan.scss'

import urlMovie from '../assets/source-movie/freeguy.mp4'

export default function MovieSpan(){
    return (
        <video width='100%' controls autoPlay loop>
            <source src={urlMovie} type='video/mp4' />
        </video>
    )
}
