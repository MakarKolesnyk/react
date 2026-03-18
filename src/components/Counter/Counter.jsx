import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/counterSlice";

const Counter = () => {
  const countValue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const addCount = () => {
    dispatch(increment());
  };
  const subCount = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h2>Counter: {countValue}</h2>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </div>
  );
};

export default Counter;
