import Select from "./components/Select/Select";
import countries from './components/Select/data';


function App() {
  return (
    <>
    <Select list={countries}/>
    </>
  );
}

export default App;
