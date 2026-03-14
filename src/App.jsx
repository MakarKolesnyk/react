import Wrapper from "./components/Wrapper/Wrapper";
import Timer from "./components/Timer/Timer";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import ToolTip from "./components/ToolTip/ToolTip";

function App() {
  return (
    <>
      <Wrapper>
        <ToolTip textToolTip="Click START for start timer">
          <h2>Timer!</h2>
        </ToolTip>

        <Timer />
      </Wrapper>
      <Wrapper>
        <ToolTip textToolTip="click button and select">
          <h2>Dropdown menu</h2>
        </ToolTip>

        <DropDownMenu text="hi, user" widthList={200}>
          <p>Lorem, ipsum dolor.</p>
          <p>Ducimus, sed ab.</p>
          <p>Itaque, sapiente facilis?</p>
        </DropDownMenu>
        <DropDownMenu text="type" widthList={200}>
          <p>Lorem, ipsum dolor.</p>
          <p>Ducimus, sed ab.</p>
          <p>Itaque, sapiente facilis?</p>
        </DropDownMenu>
      </Wrapper>
      <Wrapper>
        <h2>Hello</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima et
          tenetur ducimus quo quaerat, id repellat corporis a? A, ipsam!
        </p>
      </Wrapper>
    </>
  );
}

export default App;
