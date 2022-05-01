import React, {useState, useEffect} from 'react';
import { Checkbox } from './components/Checkbox';
import { InputWithButton } from './components/InputWithButtons';
import { Form, Panel } from './components/Style';

export default function App() {
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAds, setGoogleAds] = useState(false);

  let [pages, setPages] = useState(0);
  let [languages, setlanguages] = useState(0);

  let [total, setTotal] = useState(0);

  const handleWeb = () => setWeb(!web);
  const handleSeo = () => setSeo(!seo);
  const handleGoogleAds = () => setGoogleAds(!googleAds);

  const handlePages = (event) => setPages(Number(event.target.value));
  const handleLanguages = (event) => setlanguages(Number(event.target.value));

  function totalChecks(event){
    let name = event.target.name;
    let checked = event.target.checked;
    if(name === 'web' && checked) setTotal(total + 400);
    if(name === 'web' && !checked) setTotal(total - 400);
    if(name === 'seo' && checked ) setTotal(total + 300);
    if(name === 'seo' && !checked)  setTotal(total - 300);
    if(name === 'googleAds' && checked) setTotal(total + 200);
    if(name === 'googleAds' && !checked) setTotal(total - 200);
  }

  const sumarPages = () => setPages(++pages)  
  const restarPages = () => (!pages) ? setPages(pages) : setPages(--pages); 
  const sumarLanguages = () => setlanguages(++languages);
  const restarLanguages = () => (!languages) ? setlanguages(languages) : setlanguages(--languages);

  useEffect(()=> {
    if(web) {
      setPages(1);
      setlanguages(1);
    } else {
      setPages(0);
      setlanguages(0);
    }
  },[web]);

  useEffect(() => {
    total = 0;
    let totalWeb = (pages*languages)*30;
    if(web) total += 400;
    if(seo) total += 300;
    if(googleAds) total += 200;
    setTotal(total+totalWeb);

  }, [pages, languages]);

  return (
    <Form>
      <h3>Services </h3>
      <Checkbox 
        label='Web Development (500€)'
        id='web'
        check={web} 
        onChange={handleWeb}
        onClick={totalChecks}
      />
    
      {web && 
      <Panel>
        <InputWithButton 
          id='pages' 
          value={pages} 
          onClickSumar={sumarPages}
          onClickRestar={restarPages}
          onChange={handlePages}
        />
        <InputWithButton 
          id='languages' 
          value={languages} 
          onClickSumar={sumarLanguages}
          onClickRestar={restarLanguages}
          onChange={handleLanguages}
        />
    
      </Panel>}

      <Checkbox 
        label='Seo Consultancy (300€)'
        id='seo'
        check={seo} 
        onChange={handleSeo} 
        onClick={totalChecks}
      /> 
      <Checkbox 
        label='GoogleADS Campaign (200€)'
        id='googleAds'
        check={googleAds} 
        onChange={handleGoogleAds} 
        onClick={totalChecks}
      />

      <p>Total: {total}</p>
    </Form>
  );
};