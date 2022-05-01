import { WrapperInputText } from './Style';

export const InputWithButton = ({id, value, onChange, onClickSuma, onClickResta}) => {
  return (
      <WrapperInputText>
        <label htmlFor={id}> {id} </label>
        <button onClick={onClickSuma}>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <button onClick={onClickResta}>-</button>  
      </WrapperInputText>
    );
}