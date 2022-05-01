import { WrapperInputText } from './Style.js';

export const InputWithButton = ({id, value, onClickSumar, onClickRestar, onChange}) => {
  return (
      <WrapperInputText>
        <label htmlFor={id}> {id} </label>
        <button onClick={onClickSumar}>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <button onClick={onClickRestar}>-</button>  
      </WrapperInputText>
    );
}