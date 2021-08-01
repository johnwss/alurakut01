function Form01()
{

    return(
        
    <form onSubmit={function handleCreateCommunity(e){
      
        e.preventDefault();
        comunidades.push('opa')
        
       
      
        
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
 
    )}


export default Form01