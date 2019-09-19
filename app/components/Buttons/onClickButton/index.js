import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';
import Spinner from '../../Loders/LodersAndPleasewait/Spinner/index';
import '../buttonStyle.css'

const OnClickButton = props => {
  return props.disabled ? (
    props.icon && props.name ? (
      <MDBBtn
        rounded
        floating
        onClick={props.handleClick}
        disabled={props.disabled}
        className={props.className}
        title={props.title}
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
        onClick={props.handleClick}
        disabled={props.disabled}
        size="sm"
        className={props.className}
        title={props.title}
      >
        <MDBIcon className='iconStyle' icon={props.icon} size="sm" />
      </MDBBtn>
    ) : (
      <MDBBtn
        rounded
        floating
        onClick={props.handleClick}
        disabled={props.disabled}
        className={props.className}
        title={props.title} 
      >
        {props.isLoading ? (
          <Spinner SpinnerInsideButton height={25} width={25} />
        ) : (
          <div style={{padding:'5px 25px'}}> {props.name} </div>
        )}
      </MDBBtn>
    )
  ) : props.icon && props.name ? (
    <MDBBtn
      rounded
      floating
      onClick={props.handleClick}
      className={props.className}
      title={props.title}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        <>
          <div> <MDBIcon style={{padding:'2px 15px', fontSize:'16px'}} icon={props.icon} /> {props.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
        </>
      )}
    </MDBBtn>
  ) : props.icon ? (
    <MDBBtn
      rounded
      floating
      onClick={props.handleClick}
      size="sm"
      className={props.className}
      title={props.title}
    >
      <MDBIcon className='iconStyle' icon={props.icon} size="sm" />
    </MDBBtn>
  ) : (
    <MDBBtn
      rounded
      floating
      onClick={props.handleClick}
      className={props.className}
      title={props.title}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        <div style={{padding:'5px 25px'}}> {props.name} </div>
      )}
    </MDBBtn>
  );
};
export default OnClickButton;
