import React from 'react';

const TextareaPage = props => (
  <div>
    {props.label}
    <textarea
      className="form-control InputMdb"
      style={{ ...props }}
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
      row="5"
    />
  </div>
);

export default TextareaPage;
