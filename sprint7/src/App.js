import React, {useState, useEffect} from 'react';
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';
import { Form, Panel, InputButtons } from './components/Style';

export default function App() {

  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAds, setGoogleAds] = useState(false);

  let [paginas, setPaginas] = useState(0);
  let [idiomas, setIdiomas] = useState(0);

  let [total, setTotal] = useState(0);

  const handleWeb = () => setWeb(!web);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAds = () => setGoogleAds(!googleAds);

  const handlePaginas = (evt) => setPaginas(Number(evt.target.value));
  const handleIdiomas = (evt) => setIdiomas(Number(evt.target.value));

  function totalChecks(evt){
    let name = evt.target.name;
    let chekced = evt.target.checked;
    if(name === 'web' && chekced) setTotal(total+400);
    if(name === 'web' && !chekced) setTotal(total-400);
    if(name === 'seo' && chekced ) setTotal(total+300);
    if(name === 'seo' && !chekced)  setTotal(total-300);
    if(name === 'googleAds' && chekced) setTotal(total+200);
    if(name === 'googleAds' && !chekced) setTotal(total-200);
  }
  
  const sumarPages = () => setPaginas(++paginas)  
  const restarPages = () => (!paginas) ? setPaginas(paginas) : setPaginas(--paginas); 
  const sumarLanguages = () => setIdiomas(++idiomas);
  const restarLanguages = () => (!idiomas) ? setIdiomas(idiomas) : setIdiomas(--idiomas);

  useEffect(()=> {
    if(web) {
      setPaginas(1);
      setIdiomas(1);
    } else {
      setPaginas(0);
      setIdiomas(0);
    }
  },[web]);

  useEffect(() => {
    total = 0;
    let totalWeb = (paginas*idiomas)*30;
    if(web) total += 400;
    if(seo) total += 300;
    if(googleAds) total += 200;
    setTotal(total+totalWeb);

  }, [paginas, idiomas]);

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox 
        label='Web Development (500€)'
        name='web' 
        check={web} 
        onChange={handleWeb}
        onClick={totalChecks}
      />
    
      {web && 
      <Panel>
          
        <InputButtons>
          <label htmlFor='paginas'>number of pages</label>
          <button onClick={sumarPages}>+</button>
          <Input 
            id='paginas' 
            value={paginas} 
            onChange={handlePaginas}/>
          <button onClick={restarPages}>-</button>  
        </InputButtons>

        <InputButtons>
          <label htmlFor='idiomas'>number of languages</label>
          <button onClick={sumarLanguages}>+</button>
          <Input 
            id='idiomas'
            value={idiomas} 
            onChange={handleIdiomas}/> 
          <button onClick={restarLanguages}>-</button>
        </InputButtons>

      </Panel>}

      <Checkbox 
        label='Seo Consultancy (300€)'
        name='seo' 
        check={seo} 
        onChange={handleSeo} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='GoogleADS Campaign (200€)'
        name='googleAds' 
        check={googleAds} 
        onChange={handleGoogleAds} 
        onClick={totalChecks}
      />
      <p>Total: {total}</p>
    </Form>
  );
};