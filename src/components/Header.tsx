import './Header.scss'

export default function Header(){
    return (
        <header className='container-header'>
            <h1>Filmes Online X</h1>
            <input type="text" name="filtrar-filme" id="filtrar-filme" placeholder='Faça uma busca...'/>
        </header>
    )
}
