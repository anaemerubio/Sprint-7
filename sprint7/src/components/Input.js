export const Input = ({value, onChange}) => {
    return (
      <label>
        <input  type='text' value={value} onChange={onChange}/>
      </label>
    );
  }