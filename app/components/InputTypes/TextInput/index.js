import React from 'react';
import './inputIndex.css';

const InputMdb = props => {
  const { width } = props;
  return (
    <div>
      <input
        className={
          props.isValidOrInvalid ? props.isValidOrInvalid==='isValid' ? 
            'form-control is-valid InputMdb' : 'form-control is-invalid InputMdb' 
            : 
            'form-control InputMdb' 
        }
        style={{ ...props }}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        maxLength={props.maxLength}
        minLength={props.minLength}
        required={props.required}
        value={props.value}
        min={props.min}
        max={props.max}
        onChange={props.handleChange}
        title={props.title}
      />
      <div style={{display: props.isValidOrInvalid ? 'inline-block' : 'none' }} 
        className= { props.isValidOrInvalid==='isValid' ? "" : "invalid-feedback" } 
        >
          {props.isValidOrInvalidMessage}
      </div>
    </div>
  );
};
export default InputMdb;
