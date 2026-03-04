import Task from "./components/Task/Task";

const dataTask = {
  id: 1,
  text: "Learing prop-types",
  days: 4,
  isDone: false,
};

function App() {
  return (
    <>
      <Task dataTask={dataTask} />
    </>
  );
}

export default App;
