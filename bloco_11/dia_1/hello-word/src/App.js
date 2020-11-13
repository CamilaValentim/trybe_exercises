import logo from './logo.svg';
import './App.css';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

const task = (value) => {
  return (
    <li>{value}</li>
    
  );
}

function App() {
  return (<div>
    <ul>{task('camila')}</ul>
    <ul>{task('Joao')}</ul>
    <ul>{listItems(1,2,3)}</ul>
  </div>

  )
  
}



export default App;
