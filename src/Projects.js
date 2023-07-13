function Projects(){
    return (
        <div className="projects-section" id="projects-section">
            <h1>My Projects</h1>

            <div className="projects">

                <div className="project">
                    <h3>Workout Tracker Web App</h3>
                    <p>Workout Logging App using MERN Stack</p>
                    <button><a href="https://github.com/AyushKishor/workout-app">Demo</a></button>
                    <button><a href="https://github.com/AyushKishor/workout-app">GitHub</a></button>
                </div>

                <div className="project">
                    <h3>INDStock</h3>
                    <p>Inventory Management App for Stores using NodeJS and EJS</p>
                    <button><a href="https://indstock.herokuapp.com/">Demo</a></button>
                    <button><a href="https://github.com/AyushKishor/INDStock">GitHub</a></button>
                </div>

                <div className="project">
                    <h3>Movie Searcher</h3>
                    <p>Built with OMDB API and React</p>
                    <button><a href="https://movie-list-eight-neon.vercel.app">Demo</a></button>
                    <button><a href="https://github.com/AyushKishor/MovieList">GitHub</a></button>
                </div>

                <div className="project">
                    <h3>Speech to ISL</h3>
                    <p>Convert Speech to Sign Language</p>
                    <button><a href="https://ayushkishor.github.io/ISL/">Demo</a></button>
                    <button><a href="https://github.com/AyushKishor/ISL">GitHub</a></button>
                </div>

            </div>
        </div>
    )
}

export default Projects;
