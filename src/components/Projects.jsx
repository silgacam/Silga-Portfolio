import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import projectsData from '../data/projects.json';

function Projects() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="projects" id="projects">
      <h2>{language === 'tr' ? 'Projelerim' : 'Projects'}</h2>

      <div className="projectsList">
        {projectsData.map((project) => (
          <div className="projectCard" key={project.id}>

            <div className="projectImage">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="projectInfo">
              <h3>{project.name}</h3>

              <p>{project.description[language]}</p>

              <div className="projectTechnologies">
                {project.technologies.map((technology, index) => (
                  <span key={index}>{technology}</span>
                ))}
              </div>

              <div className="projectLinks">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    {language === 'tr' ? 'Siteyi Görüntüle' : 'View Site'}
                  </a>
                )}

                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;