export const Checkbox = ({label, name, check, onChange, onClick}) => {
    return (
      <label>
        <input type='checkbox' name={name} checked={check} onChange={onChange} onClick={onClick}/>
        {label}
      </label>
    );
  }