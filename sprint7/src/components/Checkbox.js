export const Checkbox = ({label, id, check, onChange, onClick}) => {
  return (
    <label htmlFor={id} >
      <input type='checkbox' id={id} name={id} checked={check} onChange={onChange} onClick={onClick}/>
      {label}
    </label>
  );
}