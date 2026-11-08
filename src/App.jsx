
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { ThemeContext } from './contexts/ThemeContext';

import skillsData from './data/skills.json';
import profileData from './data/profile.json';
import projectsData from './data/projects.json';

import './App.css';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  const [apiStatus, setApiStatus] = useState('Yükleniyor...');

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post(
          'https://reqres.in/api/workintech',
          {
           skills: skillsData,
          profile: profileData,
          projects: projectsData,
          },
          {
          headers: {
            'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
          },
          }
        );

        console.log('API başarılı:', response.data);
        setApiStatus('Veriler başarıyla gönderildi.');
      } catch (error) {
        console.error('API hatası:', error);
        setApiStatus('API isteği başarısız oldu.');
      }
    };

    sendData();
  }, []);

  return (
    <div className={isDarkMode ? 'app darkMode' : 'app'}>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;