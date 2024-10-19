import './App.css'
import Header from './header'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './Users/addUser';

function App() {

  return (
    <div className="">
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/adduser' element={<AddUser />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
