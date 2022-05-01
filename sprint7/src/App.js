import React, {useState, useEffect} from 'react';
import { Checkbox } from './components/Checkbox';
import { InputWithButton } from './components/InputWithButtons';
import { Form, Panel } from './components/Style';

export default function App() {
  let [total, setTotal] = useState(0);

  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAds, setGoogleAds] = useState(false);

  let [pages, setPages] = useState(0);
  let [languages, setLanguages] = useState(0);

  let [btnLocalStorage, setBtnLocalStorage] = useState(false);
  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);
 
  let formFromStorage;

  function onChangeChecks (evt) {
    if(evt.target.id ==='web') setWeb(!web);
    if(evt.target.id ==='seo') setSeo(!seo);
    if(evt.target.id ==='googleAds') setGoogleAds(!googleAds);
  }

  const handlePages = (evt) => setPages(parseInt(evt.target.value));
  const handleLanguages = (evt) => setLanguages(parseInt(evt.target.value));
  
  function totalChecks(evt){
    let id = evt.target.id;
    let check = evt.target.checked;
    if(id === 'web' && check) setTotal(total + 500);
    if(id === 'web' && !check) setTotal(total - 500);
    if(id === 'seo' && check ) setTotal(total + 300);
    if(id === 'seo' && !check)  setTotal(total - 300);
    if(id === 'googleAds' && check) setTotal(total + 200);
    if(id === 'googleAds' && !check) setTotal(total - 200);
  }

  useEffect(()=> {
    if(!web) {
      setPages(0);
      setLanguages(0);
    }
  },[web]);

  useEffect(() => {
    total = 0;
    let totalWeb = (pages * languages) * 30;
    if(web) total += 500;
    if(seo) total += 300;
    if(googleAds) total += 200;
    setTotal(total + totalWeb);
  }, [pages, languages]);

  const sumarPages = () => setPages(++pages)  
  const restarPages = () => (!pages) ? setPages(pages) : setPages(--pages); 
  const sumarLanguages = () => setLanguages(++languages);
  const restarLanguages = () => (!languages) ? setLanguages(languages) : setLanguages(--languages);

  useEffect(()=>{
    if(btnLocalStorage) {
      let formToStorage = {
        web: web,
        seo: seo,
        googleAds: googleAds,
        languages: languages,
        pages: pages,
        total: total,
      }
      localStorage.setItem('form', JSON.stringify(formToStorage));
    }
  }, [btnLocalStorage])

  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      formFromStorage = JSON.parse(localStorage.getItem(('form')));
      console.log(formFromStorage);
      setWeb(formFromStorage.web);
      setSeo(formFromStorage.seo);
      setGoogleAds(formFromStorage.googleAds);
      setPages(formFromStorage.pages);
      setLanguages(formFromStorage.languages);
      setTotal(formFromStorage.total);
    }
  },[]);

  return (
    <Form>
      <h3>Services </h3>

      <Checkbox label='Web Development (500€)' id='web' check={web} onChange={onChangeChecks} onClick={totalChecks}/>

      {web && 
      <Panel>
        <InputWithButton id='pages' value={pages} onClickSuma={sumarPages} onClickResta={restarPages} onChange={handlePages}/>
        <InputWithButton id='languages' value={languages} onClickSuma={sumarLanguages} onClickResta={restarLanguages} onChange={handleLanguages}/>
      </Panel>}

      <Checkbox label='Seo Consultancy (300€)' id='seo' check={seo} onChange={onChangeChecks} onClick={totalChecks}/> 

      <Checkbox label='Google ADS Campaign (200€)' id='googleAds' check={googleAds} onChange={onChangeChecks} onClick={totalChecks}/>

      <p>Total: {total}</p>

      <button onClick={onClickLocalStorage}>Save Form</button>
    </Form>
  );
};
