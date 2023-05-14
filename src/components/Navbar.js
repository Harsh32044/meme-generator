import img from '../images/troll-face.png'

export default function Navbar() {
    return (
        <header className="navbar">
            
            <img src={img} alt="memeface" className="memeface" />
            <h2 className='header-title'>Meme Generator</h2>
            <p>Learning React - Project 3</p>
        </header>
    )
}