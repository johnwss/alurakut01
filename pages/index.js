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

function ProfileRelationsBox(propriedadesrjs){
 return ( <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
  {propriedadesrjs.title}({propriedadesrjs.items.length})</h2> 
  
  {/* <ul>{seguidores.map((i)=>{
  return (<li key={i}>
  <a href={`https://github.com/${i}`} key={i}>
  <img src={`https://github.com/${i}.png`}/>
  <span>{i}</span>
  </a></li>
  )})}
  </ul> */}
</ProfileRelationsBoxWrapper> )}




function Home(){

  const githubUser = 'johnwss';
  const [comunidades,setComunidades] = React.useState([{id:'001',title:'Garfield',
  image:'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg'}])
  const pessoas = ['juunegreiros','gabrieluizramos','ramosht','omariosouto','filipedeschamps','fialhogi']
  //const comunidades = ['Alurakut']

 const [seguidores,setSeguidores] = React.useState([])
React.useEffect(()=>{
  fetch('https://api.github.com/users/juunegreiros/followers')
  .then((x)=>{return x.json()})
  .then((z)=>{setSeguidores(z)})
},[])
  //console.log(seguidores);
 
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
    
    <form onSubmit={function handleCreateCommunity(z){
     
     
      
      z.preventDefault();
      const dadosDoFormulario = new FormData(z.target);
      console.log('Campo:' , dadosDoFormulario.get('title'));
      console.log('Campo:' , dadosDoFormulario.get('image'));
      


      const comunidade = {
        id:new Date().toISOString,
        title:dadosDoFormulario.get('title'),
        image:dadosDoFormulario.get('image')
      }
      
      if(comunidade.title == '' || comunidade.image == ''){
        window.alert('Parar criar comunidades preencha todos os campos')
      }else{

      const comunidadesAtualizadas = [...comunidades,comunidade]
      setComunidades(comunidadesAtualizadas)
      
    }



      
      
      //console.log(comunidades)
      
     
    
      
  }}>
  <div>
  <input placeholder="Qual o nome da sua comunidade?"
  name="title"
  aria-label="qual vai ser o nome da sua comunidade?"
  type="text"/>
  </div>
  <div>
  <input placeholder="Qual seria a URL?"
  name="image"
  aria-label="qual vai ser o nome da sua comunidade?"
  type="text"/>
  </div>
  <button>Criar Comunidade</button>
  </form>
{/* <Form01/> */}
  </Box>
  </div>  

<div className="profileArea" style={{gridArea:'profileRelationsArea'}} >
<ProfileRelationsBox title="Seguidores" items={seguidores}/>


  <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
  Perfis({pessoas.length})</h2> 
  
  <ul>{pessoas.map((i)=>{
  return (<li key={i}>
  <a href={`https://github.com/${i}`} key={i}>
  <img src={`https://github.com/${i}.png`}/>
  <span>{i}</span>
  </a></li>
  )})}
  </ul>

  </ProfileRelationsBoxWrapper>
  <Box>Comunidades<ProfileRelationsBoxWrapper>
<ul>{comunidades.map((i)=>{
  return (<li key={i.id}>
  <a href={`https://github.com/${i.title}`} >
  <img src={i.image}/>
  <span>{i.title}</span>
  </a></li>
  )
  })}</ul>
</ProfileRelationsBoxWrapper>
</Box>
</div>
</MainGrid>
</>)}
export default Home
