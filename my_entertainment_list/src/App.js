import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider , Flex  } from "@chakra-ui/core"
import {Button} from 'react-bootstrap';
import SignUpOutter from './components/SignUpOutter'
import LogInOutter from './components/LogInOutter';


function App() {
  return (
    <div>
    <ThemeProvider>
          <>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>
          </>
          {/* <SignUpOutter></SignUpOutter> */}
          {/* <LogInOutter></LogInOutter> */}
    </ThemeProvider>
    </div>
  );
}

export default App;
