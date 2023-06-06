import './App.css';
import Navbar from './components/atoms/navbar/navbar';
import  InProgress  from './components/sections/InProgress/InProgress';
import TodoCard from './components/sections/todoCard/todoCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoCard/>
      <InProgress/>
    </div>
  );
}

export default App;
