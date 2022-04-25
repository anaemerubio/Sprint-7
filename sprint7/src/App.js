import React, {useState} from 'react';

export default function App() {

  const [checkOne, setcheckOne] = useState(false);
  const [checkTwo, setcheckTwo] = useState(false);
  const [checkThree, setcheckThree] = useState(false);
  const [budget, setBudget] = useState(0);

  const handleOne = () => setcheckOne(!checkOne);
  
  const handleTwo = () => setcheckTwo(!checkTwo);

  const handleThree = () => setcheckThree(!checkThree);
  
  function handleBudget(evt){
    let serviceCost = Number(evt.target.value);
    evt.target.checked ? setBudget(budget+serviceCost) : setBudget(budget-serviceCost)
  }

  return (
    <>
    <div>
      <Checkbox 
        check={checkOne} 
        onChange={handleOne}
        onClick={handleBudget}
        value={400}
        label='Web development (500€)'
      />
      
      <Checkbox 
        check={checkTwo} 
        onChange={handleTwo} 
        onClick={handleBudget}
        value={300}
        label='Seo consulting (300€)'
      />

      <Checkbox 
        check={checkThree} 
        onChange={handleThree} 
        onClick={handleBudget}
        value={200}
        label='GoogleAdds Campaign (200€)'
      />
    </div>
  <p>Total: {budget}</p>
  </>
  );
};

const Checkbox = ({check, onChange, onClick, value,label}) => {
  return (
    <label>
      <input type='checkbox' checked={check} onChange={onChange} onClick={onClick} value={value}/>
      {label}
    </label>
  );
}