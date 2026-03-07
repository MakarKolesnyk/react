import interestsList, { sweets } from "./components/GroupCheckBoxs/data";
import GroupCheckBoxes from "./components/GroupCheckBoxs/GroupCheckBoxes";

function App() {
  return (
    <>
      <GroupCheckBoxes list={interestsList} />
      <hr />
      <GroupCheckBoxes list={sweets} />
    </>
  );
}

export default App;
