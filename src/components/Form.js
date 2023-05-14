const Form = () => {
    function handleClick() {
        console.log("I was clicked!")
    }
    return (
        <div className="memeform">
            <form className="form">
                <input type="text" className="form-input" placeholder="Top Text"/>
                <input type="text" className="form-input" placeholder="Bottom Text"/>
                <button onClick={handleClick} className="form-button"><h3>Get a new meme image! 🖼</h3></button>
            </form>
        </div>
    )
}

export default Form;