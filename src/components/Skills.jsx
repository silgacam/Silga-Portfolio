
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import skillsData from '../data/skills.json';

import javascriptIcon from '../assets/icons/javascript.png';
import nodeIcon from '../assets/icons/node.png';
import reactIcon from '../assets/icons/react.png';
import vscodeIcon from '../assets/icons/vscode.png';
import reduxIcon from '../assets/icons/redux.png';
import figmaIcon from '../assets/icons/figma.png';

const skillIcons = {
  JAVASCRIPT: javascriptIcon,
  NODE: nodeIcon,
  REACT: reactIcon,
  'VS CODE': vscodeIcon,
  REDUX: reduxIcon,
  FIGMA: figmaIcon
};

function Skills() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="skills" id="skills">
      <h2>{language === 'tr' ? 'Yetenekler' : 'Skills'}</h2>

      <div className="skillsList">
        {skillsData.map((skill) => (
          <div className="skillItem" key={skill.id}>
            <div
              className="skillLogo"
              style={{ backgroundColor: skill.color }}
            >
              <img
                src={skillIcons[skill.name]}
                alt={skill.name}
              />
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;