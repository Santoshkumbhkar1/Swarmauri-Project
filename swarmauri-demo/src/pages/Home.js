import React from 'react'
import './CSS/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <main >
      <h1>Welcome to Our Site</h1>
      <section>
        <p>This is demo project about  my frontend skills </p>
      </section>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio website</h3>
            <p> This is dynamic full stack website created using node.js  and react is is fully responsive page</p>
          </div>
          <div className="project-card">
            <h3>Task Management</h3>
            <p>Task management app where users can organize their tasks.it allow users to create, update, and delete tasks, as 
            well as view staƟsƟcs about their task completion progress</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTMl</li>
           <li>Node.js</li>
                     
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to reach out!</p>
        <button className="contact-button">Contact</button>
      </section>

    </main>
    </div>
    
  )
}

export default Home