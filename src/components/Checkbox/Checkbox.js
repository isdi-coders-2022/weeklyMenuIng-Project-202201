const Checkbox = ({ text, className, checked = false, onChange }) => {
  return (
    <>
      <label className="form-control" htmlFor={text}>
        <input
          id={text}
          type="checkbox"
          className={className}
          checked={checked}
          onChange={onChange}
        ></input>
        {text}
      </label>
    </>
  );
};

export default Checkbox;
