import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';

function App() {
  const [userCurrency, setUserCurrency] = useState('USD');

  const getUserIPData = async () => {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    setUserCurrency(data.currency);
    console.log(userCurrency)
  }

  getUserIPData();


  return (
    <div className="App">
      <Header className="App-header">
        <ButtonGroup aria-label='language'>
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-currency">
              {userCurrency}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>USD</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="secondary">
            Rus🇷🇺
          </Button>
          <Button variant="secondary">
            Eng🇺🇸
          </Button>
        </ButtonGroup>
      </Header>
    </div>
  );
}

const Header = styled.div`
  float: right;
`


export default App;
