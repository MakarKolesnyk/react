import Task from "./components/Task/Task";


function App() {
  return (
    <>
     <Task text="text for first task" days={5} isDone/>
     <Task text="text for second task" days={2}/>
    </>
  );
}

export default App;
