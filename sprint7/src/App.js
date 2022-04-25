import React, {useState} from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

export default function App() {

  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCheck1 = () => setCheckOne(!checkOne);
  const handleCheck2 = () => setCheckTwo(!checkTwo);
  const handleCheck3 = () => setCheckThree(!checkThree);

  const handleInput1 = (e) => setInputOne(e.target.value);
  const handleInput2 = (e) => setInputTwo(e.target.value);
  
  function handleTotal(event){
    let evtValue = Number(event.target.value);
    (event.target.checked) ? setTotal(total+evtValue) : setTotal(total-evtValue)
  }

  return (
    <>
      <div>
        <h3>How we can help you ? </h3>
        <Checkbox 
          check={checkOne} 
          onChange={handleCheck1}
          onClick={handleTotal}
          value={500} 
        >
          Web development (500€)
        </Checkbox>
        {checkOne && 
        <Panel>
          <input type="number" value={inputOne} onChange={handleInput1}/>
          <input type="number" value={inputTwo} onChange={handleInput2}/>
        </Panel>}
        <Checkbox 
          check={checkTwo} 
          onChange={handleCheck2} 
          onClick={handleTotal}
          value={300}
        > 
          Seo Analysis (300€)
        </Checkbox>

        <Checkbox 
          check={checkThree} 
          onChange={handleCheck3} 
          onClick={handleTotal}
          value={200}
        >
          Google Adds campaign (200€)
        </Checkbox>
    </div>
    <p>Total price is {total}</p>
  </>
  );
};

const Checkbox = ({check, onChange, onClick, value, children}) => {
  return (
    <label>
      <input 
        type='checkbox' 
        checked={check} 
        onChange={onChange} 
        onClick={onClick} 
        value={value}
      />
      {children}
    </label>
  );
}