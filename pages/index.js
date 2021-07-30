import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsBoxWrapper';
import Form01 from '../src/components/Form01'
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


const comunidade = [];


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
  const pessoas = ['juunegreiros','gabrieluizramos','ramosht','omariosouto','filipedeschamps','fialhogi']
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
  <Form01/>
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
<Box>Comunidades</Box>
</div>
</MainGrid>
</>)}
export default Home
