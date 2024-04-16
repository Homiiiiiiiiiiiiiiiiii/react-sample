import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
    const handClick = (e) => {
      alert('click')
    }

    const handleMouseOver = (e) => {
      e.target.style.backgroundColor = "skyblue"
    }

    const handleMouseOut = (e) => {
      e.target.style.backgroundColor = 'white'
    }

    const handleChange = (e) => {
      document.querySelector(".text-value").innerText = e.target.value
    }

    const [count, setCount] = useState(0);
    const handleButtonUp = (e) => {
      setCount(count + 1)
    }

    const handleButtonDown = (e) => {
      setCount(count - 1)
    }

    const [inputValue, setinputValue] = useState("")
    const handelInputChange = (e) => {
      setinputValue(e.target.value)
    }
  return (
    <div>
      <h1>입력 이벤트 예제</h1>
      <input type="text" onChange={handelInputChange} value={inputValue} placeholder="문자를 입력해주세요."/>
      <p>입력한 값 : {inputValue}</p>

      <h1>클릭 이벤트 예제</h1>
      <button onClick={handleButtonUp}>+</button>
      <button onClick={handleButtonDown}>-</button>
      <div>{count}</div>
      {count >= 5 ? <p>5 이상입니다.</p> :<p>5 이하입니다.</p>}


      <h1>Click Event</h1>
      <button onClick={handClick}>button</button>

      <h1>Mouse Over Event</h1>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>마우스를 올려주세요.</div>

      <h1>Input Event</h1>
      <input type="text" onChange={handleChange} placeholder="문자를 입력해주세요."/>
      <div className="text-value"></div>
    </div>
  );
}

export default App;
