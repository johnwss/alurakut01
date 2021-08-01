import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsBoxWrapper';
//import Form01 from '../src/components/Form01'


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `






function ProfileSidebar(props){
return(
    <Box> 
  <img src={`https://github.com/${props.githubUser}.png`}style={{borderRadius:'8px'}}/> 
  <br/>
<p>
<a className="boxLink" href={`https://github.com/${props.githubUser}`}>@{props.githubUser}</a>
</p>
<hr/>
<AlurakutProfileSidebarMenuDefault/> 
  </Box>
  )
}

function Home(){

  const githubUser = 'johnwss';
  const [comunidades,setComunidades] = React.useState(['Alurakut'])
  //console.log(comunidades)
  const pessoas = ['juunegreiros','gabrieluizramos','ramosht','omariosouto','filipedeschamps','fialhogi']
  //const comunidades = ['Alurakut']
 
  return (
    <>
<AlurakutMenu/>
<MainGrid>
<div className="profileArea" style={{gridArea:'profileArea'}}>
  <ProfileSidebar githubUser={githubUser}/>
</div>

<div className="profileArea" style={{gridArea:'welcomeArea'}} >
  <Box ><h1 className="title">Bem-vindo(a)</h1>
  <OrkutNostalgicIconSet/>
  </Box>
  <Box > 
    <h2 className="subTitle">O que deseja acrescentar hoje?</h2>
    <form onSubmit={function handleCreateCommunity(e){
      
      e.preventDefault();
      setComunidades([...comunidades,'Outra'])
      //console.log(comunidades)
      
     
    
      
  }}>
  <div>
  <input placeholder="Qual o nome da sua comunidade?"
  nome="title"
  aria-label="qual vai ser o nome da sua comunidade?"
  type="text"/>
  </div>
  <div>
  <input placeholder="Qual seria a URL?"
  nome="image"
  aria-label="qual vai ser o nome da sua comunidade?"
  type="text"/>
  </div>
  <button>Criar Comunidade</button>
  </form>

  

  {/* <Form01/> */}
  </Box>
  </div>  

<div className="profileArea" style={{gridArea:'profileRelationsArea'}} >

  <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
  Perfis({pessoas.length})</h2> <ul>{pessoas.map((i)=>{
  return (<li>
  <a href={`https://github.com/${i}`} key={i}>
  <img src={`https://github.com/${i}.png`}/>
  <span>{i}</span>
  </a></li>
  )
  })}</ul>
  </ProfileRelationsBoxWrapper>
  <Box>Comunidades<ProfileRelationsBoxWrapper>
<ul>{comunidades.map((i)=>{
  return (<li>
  <a href={`https://github.com/${i}`} key={i}>
  <img src={`https://picsum.photos/300/300`}/>
  <span>{i}</span>
  </a></li>
  )
  })}</ul>
</ProfileRelationsBoxWrapper> </Box>
</div>
</MainGrid>
</>)}
export default Home
