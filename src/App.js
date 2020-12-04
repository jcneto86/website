import { Grommet, Nav, Anchor } from 'grommet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grommet plain>
      <Nav direction="row" background="brand" pad="medium">
        <Anchor label="Home"/>
        <Anchor hoverIndicator />
        <Anchor hoverIndicator />
      </Nav>
      </Grommet>
    </div>
  );
}

export default App;
