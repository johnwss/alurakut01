import styled from "styled-components";
const MainGrid = styled.main`
width:100%;
display:grid;
grid-gap:10px;
padding:16px;
.profileArea{
  display:block;
  @media(min-width:860px;){display:block;}
}

@media(min-width:860px){
  grid-template-areas:"profileArea welcomeArea profileRelationsArea";
  grid-template-columns:160px 1fr 312px;
}`

export default MainGrid;