import transportation, {drinks} from './components/RadioMap/data'
import RadioMap from './components/RadioMap/RadioMap';

function App() {
  return (
    <>
    <RadioMap list={transportation} name='transports'/>
    <hr />
    <RadioMap list={drinks} name='drinks'/>
    </>
  );
}

export default App;
