import mypicture from './me.png'

function Hero(){
    return (
        <div className="hero" id='home'>
            <div className="hero-text">
                <h1>Hi, I am Ayush Kishor</h1>
                <p>Full-Stack Developer and Professional CSS hater</p>
            </div>
            <div className="hero-img">
                <img src={mypicture} alt="Ayush Kishor" />
            </div>

        </div>
    );
}

export default Hero;