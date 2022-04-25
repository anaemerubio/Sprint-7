import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const Form = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const InputButtons = styled.div`
  display: flex;
`;

export default function App() {
  let [total, setTotal] = useState(0);

  //Checkboxes presupuesto
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  //Inputs Web (Número de páginas e idiomas)
  let [pages, setPages] = useState(0);
  let [language, setLanguage] = useState(0);

  //Handle Checks
  const handleWeb = () => setWeb(!web);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAdds = () => setGoogleAdds(!googleAdds);

  //Handle Inputs
  const handlePages = (event) => setPages(Number(event.target.value));
  const handleLanguage = (event) => setLanguage(Number(event.target.value));

  //Sumar cuando esté el checkbox seleccionado
  function totalChecks(event){
    let name = event.target.name;
    let checked = event.target.checked;
    
    if(name === 'web' && checked) setTotal(total+500);
    if(name === 'web' && !checked) setTotal(total-500);
    if(name === 'seo' && checked ) setTotal(total+300);
    if(name === 'seo' && !checked)  setTotal(total-300);
    if(name === 'googleAdds' && checked) setTotal(total+200);
    if(name === 'googleAdds' && !checked) setTotal(total-200);
  }
  
  useEffect(() => {
    const costWeb = () => {
      let costTotal = 0;
      let costChecks = 0;

      costTotal = (pages*language)*30;

      if(web) costChecks += 500;
      if(seo) costChecks += 300;
      if(googleAdds) costChecks += 200;

      setTotal(costTotal+costChecks);
  }
  if(web) costWeb();
  }, [pages, language]);

  //Sumar y restar inputs pages y language
  const sumarPages = () => {
    setPages(++pages);  
  } 
  const restarPages = () => {
    (pages===0) ? setPages(pages) : setPages(--pages);
  } 
  const sumarLanguage = () => {
    setLanguage(++language);
  } 
  const restarLanguage = () => {
    (language===0) ? setLanguage(language) : setLanguage(--language);
  } 

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox 
        label='Web deployment (500€)'
        name='web' 
        check={web} 
        onChange={handleWeb}
        onClick={totalChecks}
      />
    
      {web && 
      <Panel>
          
      <InputButtons>
        <label htmlFor='pages'>number of pages</label>
        <button onClick={sumarPages}>+</button>
        <Input id='pages' value={pages} onChange={handlePages}/>
        <button onClick={restarPages}>-</button>  
      </InputButtons>

      <InputButtons>
        <label htmlFor='language'>number of language</label>
        <button onClick={sumarLanguage}>+</button>
        <Input id='language'value={language} onChange={handleLanguage}/> 
        <button onClick={restarLanguage}>-</button>
      </InputButtons>

      </Panel>}

      <Checkbox 
        label='Seo Analysis (300€)'
        name='seo' 
        check={seo} 
        onChange={handleSeo} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='Google Adds action (200€)'
        name='googleAdds' 
        check={googleAdds} 
        onChange={handleGoogleAdds} 
        onClick={totalChecks}
      />
      <p>Total: {total}</p>
    </Form>
  );
};

const Checkbox = ({label, name, check, onChange, onClick}) => {
  return (
    <label>
      <input type='checkbox' name={name} checked={check} onChange={onChange} onClick={onClick}/>
      {label}
    </label>
  );
}

const Input = ({value, onChange}) => {
  return (
    <label>
      <input  type='text' value={value} onChange={onChange}/>
    </label>
  );
}