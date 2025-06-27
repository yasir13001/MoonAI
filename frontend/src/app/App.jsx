
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import ReportForm from '../components/subpages/report_form/ReportForm';
import TiledLayout from '../components/tile/TiledLayout';
import MoonDataAPI from '../components/subpages/moon_data_api/MoonDataAPI';
import ShoppingAssistant from '../components/subpages/shopping_assistant/ShoppingAssistant';
import AnotherOneAssistant from '../components/subpages/AnotherOneAssistant';
import Contributors from '../components/contributors/Contributors';
import Contacts from '../components/contacts/Contacts';


import './App.css';

function App() {
  
  return (
    <Router basename='/MoonAI/'>
      
        <Routes>

          <Route path="/"
            element={
              <>
                <Header />
                <TiledLayout />
                <Contributors />
                <Contacts />
                <Footer />
              </>
            }
          />
          <Route path="/moon_report_generator"
            element={<ReportForm/>}
          />
          <Route path="/moon_data_api"
            element={<MoonDataAPI/>}
          />
          <Route path="/shopping_assistant"
            element={<ShoppingAssistant/>}
          />
          <Route path="/another_one_assistant"
            element={<AnotherOneAssistant/>}
          />

        </Routes>

    </Router>
  )
}

export default App
