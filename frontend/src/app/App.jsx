
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import ReportForm from '../components/subpages/report_form/ReportForm';
import TiledLayout from '../components/tile/TiledLayout';
import ShoppingAssistant from '../components/subpages/ShoppingAssistant';
import CodingAssistant from '../components/subpages/CodingAssistant';
import AnotherOneAssistant from '../components/subpages/AnotherOneAssistant';


import './App.css';

function App() {
  // React Router added so we can navigate to sub-pages by clicking the cards
  return (
    <Router basename='/MoonAI'>
      
      <Header/>

      <TiledLayout/>
        <Routes>
          
          <Route path="/moon_report_generator"
            element={<ReportForm/>}
          />
          <Route path="/shopping_assistant"
            element={<ShoppingAssistant/>}
          />
          <Route path="/coding_assistant"
            element={<CodingAssistant/>}
          />
          <Route path="/another_one_assistant"
            element={<AnotherOneAssistant/>}
          />

        </Routes>
      
      <Footer/>

    </Router>
  )
}

export default App
