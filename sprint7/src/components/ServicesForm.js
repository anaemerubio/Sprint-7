import React, {useState, useEffect} from 'react';
import { Form } from './Style';
import { Checkbox } from './Checkbox';
import { Panel } from './Style'
import { InputWithButton } from './InputWithButtons';

export function ServicesForm() {
  let [total, setTotal] = useState(0);

  //Checkbox
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [googleAdds, setGoogleAdds] = useState(false);

  //Inputs text (Languages and Pages)
  let [pages, setPages] = useState(0);
  let [languages, setLanguages] = useState(0);

  let [btnLocalStorage, setBtnLocalStorage] = useState(false);
  const onClickLocalStorage = () => setBtnLocalStorage(!btnLocalStorage);
 
  //Checkbox handlers
  function onChangeChecks (evt) {
    if(evt.target.id ==='web') setWeb(!web);
    if(evt.target.id ==='seo') setSeo(!seo);
    if(evt.target.id ==='googleAdds') setGoogleAdds(!googleAdds);
  }

  //Inputs text handlers
  const handlePages = (evt) => setPages(parseInt(evt.target.value));
  const handleLanguages = (evt) => setLanguages(parseInt(evt.target.value));

  //Total summation checkboxes
  function totalChecks(evt){
    let id = evt.target.id;
    let check = evt.target.checked;
    if(id === 'web' && check) setTotal(total+500);
    if(id === 'web' && !check) setTotal(total-500);
    if(id === 'seo' && check ) setTotal(total+300);
    if(id === 'seo' && !check)  setTotal(total-300);
    if(id === 'googleAdds' && check) setTotal(total+200);
    if(id === 'googleAdds' && !check) setTotal(total-200);
  }

  //Add and substract pages and languages 
  const addPages = () => setPages(++pages)  
  const substractPages = () => (!pages) ? setPages(pages) : setPages(--pages); 
  const addLanguages = () => setLanguages(++languages);
  const substractLanguages = () => (!languages) ? setLanguages(languages) : setLanguages(--languages);

  //clean state pages and languages 
  useEffect(()=> {
    if(web && !localStorage.getItem(('form'))) {
      setPages(1);
      setLanguages(1);
    } else if (!web ) {
      setPages(0);
      setLanguages(0);
    }
  },[web]);

  //Total summation fom inputs and checkbox
  useEffect(() => {
    total = 0;
    let totalweb = (pages*languages)*30;
    if(web) total += 500;
    if(seo) total += 300;
    if(googleAdds) total += 200;
    setTotal(total+totalweb);
  }, [pages, languages]);

  //local Storage
  useEffect(()=>{
    if(btnLocalStorage) {
      let formToStorage = {
        web: web,
        seo: seo,
        googleAdds: googleAdds,
        languages: languages,
        pages: pages,
        total: total,
      }
      localStorage.setItem('form', JSON.stringify(formToStorage));
    }
  }, [btnLocalStorage])

  useEffect(()=>{
    if (localStorage.getItem(('form'))) {
      let formFromStorage = JSON.parse(localStorage.getItem(('form')));
      setWeb(formFromStorage.web);
      setSeo(formFromStorage.seo);
      setGoogleAdds(formFromStorage.googleAdds);
      setPages(formFromStorage.pages);
      setLanguages(formFromStorage.languages);
      setTotal(formFromStorage.total);
    }
  },[]);

  // Return form
  return (
    <Form>
      <h3>Our Services</h3>
      <Checkbox label='Web Development (500€)' id='web' check={web} onChange={onChangeChecks} onClick={totalChecks}/>

      {web && 
      <Panel>
        <InputWithButton id='pages' value={pages} onClickAdd={addPages} onClickSubstract={substractPages} onChange={handlePages}/>
        <InputWithButton id='languages' value={languages} onClickAdd={addLanguages} onClickSubstract={substractLanguages} onChange={handleLanguages}/>
      </Panel>}

      <Checkbox label='Seo Consultancy (300€' id='seo' check={seo} onChange={onChangeChecks} onClick={totalChecks}/> 
      <Checkbox label='Google ADS Campaign (200€)' id='googleAdds' check={googleAdds} onChange={onChangeChecks} onClick={totalChecks}/>
      <p>Total: {total}</p>
      <button onClick={onClickLocalStorage}>Save Form</button>
    </Form>
  );
};