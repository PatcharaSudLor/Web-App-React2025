import { useRef, useState } from "react";

function BmiText({ bmi }) {
  if (bmi < 18.5) {
    return (
      <>
        <h1>Underweight</h1>
        <img src="underweightperson.png" width={200} />
      </>
    );
  }
  if (bmi > 30) {
    return (
      <>
        <h1>Overweight</h1>
        <img src="Overweight.png" width={200} />
      </>
    );
  }
  return <h1>Normal</h1>;
}

export default function Bmi() {
  const W_inputRef = useRef(null);
  const H_inputRef = useRef(null);
  const [bmi, setBmi] = useState(0.0);

  function CalculateBmi() {
    let w = parseFloat(W_inputRef.current.value);
    let h = parseFloat(H_inputRef.current.value) / 100;
      setBmi(w / (h * h));
  }

  return (
    <>
      Weight: <input ref={W_inputRef} /> kg.<br />
      Height: <input ref={H_inputRef} /> cm.<br />
      <button onClick={CalculateBmi}>Calculate</button><br />
      BMI: {bmi.toFixed(2)}
      <BmiText bmi={bmi} />
    </>
  );
}
