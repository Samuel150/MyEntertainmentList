import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpOutter from './components/SignUpOutter';
import LogInOutter from './components/LogInOutter';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';

function App() {
  return (
    <ThemeProvider>   
    <>
      <Router>
      <Switch>
        <Route path='/Home' component={HomeScreen}/>
        <Route path='/SignUp' component={SignUpOutter}/>
        <Route path='/LogIn' component={LogInOutter}/>
        <Route path='/Profile' component={Profile}/>
      </Switch>   
      </Router>  
    </>
    </ThemeProvider>
  );
}

export default App;
