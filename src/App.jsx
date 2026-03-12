import DragElement from "./components/DragElement/DragElement";

function App() {
  return (
    <>
      <DragElement text="1" left={25} top={125}/>
      <DragElement text="2" left={125} top={25}/>
      <DragElement text="3" left={225} top={25}/>
      <DragElement/>
    </>
  );
}

export default App;
