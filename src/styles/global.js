import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  
  :root{
    --background:#FAFCFC;
  }
  *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        
   }
   html {
    
     @media (max-width: 1080px){
       font-size: 93.75%;
     }
     @media (max-width: 720px){
       font-size: 87.5%;
      
      
     }
   }
   html,body,#root {
    height: 100%;
    
   }

   body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
    
   }
   body,input, textarea,button{
     font-family:'Roboto',sans-serif;
     font-weight:400;
   }
   h1,h2,h3,h4,h5,h6, strong{
     font-weight:700;
   }

   button {
     cursor:pointer;
   }
   
`;
