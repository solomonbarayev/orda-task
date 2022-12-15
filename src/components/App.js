import '../blocks/App.css';
import Form from './Form';
import { useLanguage } from '../context/LanguageProvider';
import { translations } from '../utils/translations';

function App() {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageClick = (e) => {
    e.preventDefault();
    changeLanguage(e);
  };

  return (
    <div className="app">
      <div className="app__header-container">
        <h1 className="app__header">{translations[language].title}</h1>
        <ul className="app__languages">
          <li className="app__language">
            <button onClick={handleLanguageClick}>English</button>
          </li>{' '}
          |{' '}
          <li className="app__language">
            <button onClick={handleLanguageClick}>עברית</button>
          </li>
        </ul>
      </div>
      <div className="app__content">
        <Form />
      </div>
    </div>
  );
}

export default App;
