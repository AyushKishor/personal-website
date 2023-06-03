import express from './express.png'
import node from './node.png'
import react from './react.png'
import mongo from './mongo.png'
import python from './python.png'

function Skills(){
    return (
        <div className="skills-section" id='skills-section'>
            <h1>My Skills</h1>

            <div className="skills">

                <div className="skill">
                    <img src={mongo} alt="mongodb" />
                    <p>MongoDB</p>
                </div>

                <div className="skill">
                    <img src={express} alt="expressjs" />
                    <p>ExpressJS</p>
                </div>

                <div className="skill">
                    <img src={node} alt="nodejs" />
                    <p>NodeJS</p>
                </div>

                <div className="skill">
                    <img src={react} alt="reactjs" />
                    <p>React</p>
                </div>

                <div className="skill">
                    <img src={python} alt="python" />
                    <p>Python</p>
                </div>

            </div>
           
        </div>
    )
}

export default Skills;