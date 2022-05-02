import { WrapperInputText } from './Style';

export const InputWithButton = ({id, value, onChange, onClickAdd, onClickSubstract}) => {
  return (
      <WrapperInputText>
        <label htmlFor={id}> {id} </label>
        <button onClick={onClickAdd}>+</button> 
        <input  
          type='text' 
          id={id} 
          name={id} 
          value={value} 
          onChange={onChange}
        />
        <button onClick={onClickSubstract}>-</button>  
      </WrapperInputText>
    );
}