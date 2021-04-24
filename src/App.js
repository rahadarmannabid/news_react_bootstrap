import './App.css';
import { Button } from 'react-bootstrap';
import News from './Component/News/News';
import Header from './Component/Header/Header';
import TopHeadline from './Component/TopHeadline/TopHeadline';

function App() {
  return (
    <div>

      <h1>This is Bootstrap</h1>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>


    </div>
  );
}

export default App;
