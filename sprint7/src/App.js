import React, {useState} from 'react';

export default function App() {

const [checkOne, setcheckOne] = useState(false);
const [checkTwo, setcheckTwo] = useState(false);
const [checkThree, setcheckThree] = useState(false);

const handleChangeOne = () => setcheckOne(!checkOne);
const handleChangeTwo = () => setcheckTwo(!checkTwo);
const handleChangeThree = () => setcheckThree(!checkThree);

return (

  <div>
    <Checkbox label='Web development (500€)' check={checkOne} onChange={handleChangeOne} value={500}/>
    
    <Checkbox label='Seo consulting (300€)' check={checkTwo} onChange={handleChangeTwo} value={300}/>

    <Checkbox label='GoogleAdds Campaign (200€)' check={checkThree} onChange={handleChangeThree} value={200}/>
  </div>

);
};

const Checkbox = ({label, check, onChange, value}) => {

  return (
    <label>
      <input type='checkbox' checked={check} onChange={onChange} value={value}/>
      {label}
    </label>
  );

}