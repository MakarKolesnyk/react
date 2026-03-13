import Wrapper from "./components/Wrapper/Wrapper";
import Timer from "./components/Timer/Timer";
import ModelWindow from "./components/ModelWindow/ModelWindow";
import { useState, useEffect } from "react";

function App() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const closeModel = ()=>{setIsOpenModel(false)}
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setIsOpenModel(true);
    }, 2000);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, []);
  return (
    <>
      {isOpenModel && (
        <ModelWindow closeModel={closeModel}>
          <h3>model window</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            cumque iste. Eligendi, culpa. Asperiores quod quae quam temporibus
            quidem, aut ab nesciunt nostrum deserunt iusto!
          </p>
        </ModelWindow>
      )}
      <Wrapper>
        <h2>Timer!</h2>
        <Timer />
      </Wrapper>
      <Wrapper>
        <h2>Hi</h2>
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
