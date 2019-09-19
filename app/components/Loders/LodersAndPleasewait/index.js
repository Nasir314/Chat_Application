import React from 'react';
import LoaderSpinner from '../Loders1';
import PleaseWait from './PleaseWait';

const OnLoadingAndFetching = (props) =>{
    return(
        <div className="onLoadingAndFetching" style={{background:props.background}}>
            <LoaderSpinner
                textAlign="center"
                marginTop={props.L_MarginTop}
                color={props.PL_Color}
                height={props.L_Height}
                width={props.L_Width}
            />
            <PleaseWait
                heading={props.P_Heading}
                marginLeft={props.P_MarginLeft}
                color={props.PL_Color}
                fontWeight={400}
                fontSize={props.P_FontSize}
                marginTop={props.P_MarginTop}
            />
      </div>
    )
}

export default OnLoadingAndFetching;