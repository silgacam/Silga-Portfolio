import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import profileData from '../data/profile.json';
import profileImage from '../assets/silgaProfile.png';

function Profile() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="profile" id="profile">
      <h2>{language === 'tr' ? 'Profil' : 'Profile'}</h2>

      <div className="profileContent">
        <div className="basicInformation">
          <h3>
            {language === 'tr' ? 'Temel Bilgiler' : 'Basic Information'}
          </h3>

          {profileData.information.map((info) => (
            <div className="informationItem" key={info.id}>
              <span>{info.title[language]}</span>
              <p>{info.description[language]}</p>
            </div>
          ))}
        </div>

        <div className="profileImage">
          <img src={profileImage} alt="Silga Cam Basdemir" />
        </div>

        <div className="aboutMe">
          <h3>{language === 'tr' ? 'Hakkımda' : 'About Me'}</h3>

          {profileData.about[language].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;