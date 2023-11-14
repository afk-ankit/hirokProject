import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, setName } from "./store/slices/userSlice";
import { useRef } from "react";

function App() {
  const name = useSelector((state) => state.name);
  const rollNo = useSelector((state) => state.rollNo);
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is {name}</h1>
      <input type="text" ref={nameRef} />
      <button
        onClick={() => {
          dispatch(setName(nameRef.current.value));
        }}
      >
        Submit name
      </button>
      <br />
      <h1>Roll no is {rollNo}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}

export default App;
