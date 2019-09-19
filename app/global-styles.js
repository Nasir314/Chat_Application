import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    // background-color: #bfbfd0;

    background-color: #dbe2e8;
    min-height: 100%;
    min-width: 100%;
    font-size: 16px;
    
    // background: url(https://images-na.ssl-images-amazon.com/images/G/02/shazam/SPA-0614-WK-IndiaHouseAssets-siteWrap2bV1-dc03d42f-5cba-427a-afc9-cca90afa1ed1.jpg) no-repeat fixed center top #000000 !important;
    // background: url(https://www.filmibeat.com/ph-big/2019/08/marjaavaan_156655172120.jpg) no-repeat fixed center top #000000 !important;

    // position: static;
    // width: auto;
    // margin: auto;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .common {
    margin: 20px 120px;
    min-height: 50vh;
    border-radius: 10px;
    background:#FFF;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
  }

  @media (max-width: 1000px) {
    .common {
      margin: 50px 50px;
    }
  }

  @media (max-width: 768px) {
    .common {
      margin: 50px 10px;
    }
  }
`;

export default GlobalStyle;
