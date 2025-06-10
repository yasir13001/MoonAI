
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ReportForm from './components/ReportForm';
import TiledLayout from './components/TiledLayout';
import ShoppingAssistant from './components/ShoppingAssistant';
import CodingAssistant from './components/CodingAssistant';
import AnotherOneAssistant from './components/AnotherOneAssistant';


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
