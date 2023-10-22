import './assets/css/style.css';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import PageProgress from './components/PageProgress';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionServices from './components/SectionServices';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <SectionHome />
      <SectionAbout />
      <SectionServices />
      <PageFooter />
      <PageProgress />
    </div>
  );
}

export default App;
