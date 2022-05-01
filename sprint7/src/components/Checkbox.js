import { WrapperInputCheckbox } from './Style.js';

export const Checkbox = ({label, id, check, onChange, onClick}) => {
  return (
    <WrapperInputCheckbox>
        <input 
          type='checkbox' 
          id={id} 
          name={id} 
          checked={check} 
          onChange={onChange} 
          onClick={onClick}
          />
        <label htmlFor={id} > {label} </label>
    </WrapperInputCheckbox>
  );
}