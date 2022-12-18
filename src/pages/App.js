import LanguagePicker from '../components/LanguagePicker';
import '../blocks/App.css';
import Form from '../components/Form';
import { useLanguage } from '../context/LanguageProvider';
import { translations } from '../utils/translations';

function App() {
  const { language } = useLanguage();

  return (
    <div className="app">
      <div className="app__header-container">
        <h1 className="app__header">{translations[language].title}</h1>
        <LanguagePicker />
      </div>
      <div className="app__content">
        <Form />
      </div>
    </div>
  );
}

export default App;
