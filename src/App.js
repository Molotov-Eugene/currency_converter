import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { CurrencyList } from './CurrencyList';
import { useState, useEffect } from 'react';
import { Button,
  ButtonGroup,
  Dropdown,
  ButtonToolbar,
  Nav,
 } from 'react-bootstrap';

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
      <Header>
        <PagesBtns>
          <Nav variant="pills" defaultActiveKey="/list">
            <Nav.Item>
              <Nav.Link href="/list">List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/converter">Converter</Nav.Link>
            </Nav.Item>
          </Nav>
        </PagesBtns>
        <div className="control-buttons">
          <ButtonToolbar>
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" id="dropdown-currency">
                {userCurrency}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>USD</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ButtonGroup aria-label='language'>
              <Button variant="outline-secondary">
                Rus🇷🇺
              </Button>
              <Button variant="outline-secondary">
                Eng🇺🇸
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </Header>
      <CurrencyList></CurrencyList>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  background-color: #111;
  padding: 10px;
`

const PagesBtns = styled.div`
  flex-grow: 1;
`


export default App;
