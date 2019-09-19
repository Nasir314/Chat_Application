import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import Spinner from '../../../components/Loders/LodersAndPleasewait/Spinner';
import '../buttonStyle.css';

const OnSubmitButton = props => {
  return props.disabled ? (
    props.icon && props.name ? (
      <MDBBtn
        rounded
        floating
        title={props.title}
        type={props.type}
        disabled={props.disabled}
        className={props.className}
        id={props.id}
        >
        {props.isLoading ? (
          <Spinner SpinnerInsideButton height={25} width={25} />
        ) : (
          <div> <MDBIcon style={{padding:'2px 15px', fontSize:'16px'}} icon={props.icon} /> {props.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
        )}
      </MDBBtn>
    ) : props.icon ? (
      <MDBBtn
        rounded
        floating
        title={props.title}
        type={props.type}
        disabled={props.disabled}
        size="sm"
        className={props.className}
        id={props.id}
      >
        <MDBIcon className='iconStyle' icon={props.icon} size="sm" />
      </MDBBtn>
    ) : (
      <MDBBtn
        rounded
        floating
        title={props.title}
        type={props.type}
        disabled={props.disabled}
        className={props.className}
        id={props.id}
      >
        {props.isLoading ? (
          <Spinner SpinnerInsideButton height={25} width={25} />
        ) : (
          <div style={{padding:'5px 25px'}} > {props.name} </div>
        )}
      </MDBBtn>
    )
  ) : props.icon && props.name ? (
    <MDBBtn
      rounded
      floating
      title={props.title}
      type={props.type}
      className={props.className}
      id={props.id}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        <div> <MDBIcon style={{padding:'2px 15px', fontSize:'16px'}} icon={props.icon} /> {props.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
      )}
    </MDBBtn>
  ) : props.icon ? (
    <MDBBtn
      rounded
      floating
      title={props.title}
      type={props.type}
      size="sm"
      className={props.className}
      id={props.id}
    >
      <MDBIcon className='iconStyle' icon={props.icon} size="sm" />
    </MDBBtn>
  ) : (
    <MDBBtn
      rounded
      floating
      title={props.title}
      type={props.type}
      className={props.className}
      id={props.id}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        <div style={{padding:'5px 25px'}} > {props.name} </div>
      )}
    </MDBBtn>
  );
};
export default OnSubmitButton;
