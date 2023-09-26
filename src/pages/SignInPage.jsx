import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function SignInPage() {  
    const navigate = useNavigate();
    return (
     <Container>
        <img src="https://images.vexels.com/media/users/3/136534/isolated/preview/c93f32e11dbf6b5fe3efc5be5554ec50-icone-de-cadeado.png"/>
        <h1>DrivenPass</h1>
        <h2>Usuário (e-mail)</h2>
        <input/>
        <h2>Senha</h2>
        <input/>
        <button>Acessar</button>
        <span></span>
        <p onClick={e=> navigate("/signup")}>Primeiro acesso? Crie sua conta!</p>
     </Container>
    )
  }
  const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    margin-left:16px;
    width:150px;
    height:154px;
  }
  h1{
    font-family: 'Righteous', cursive;
    font-weight:400;
    font-size:36px;
    color:#005985;
    margin-bottom:50px;
  }
  h2{
    font-size:18px;
    font-weight:400;
    margin-bottom:10px;
  }
  input{
    font-size:18px;
    padding:4px;
    height:40px;
    width:67%;
    margin-bottom:10px;
    border: 2px solid #005985;
    border-radius:10px;
  }
  button{
    font-size:18px;
    font-weight:400;
    height:40px;
    width:67%;
    background-color:#9BFBB0;
    border: 3px solid #9BFBB0;
    border-radius:10px;
    margin-top:30px;
    transition: background-color 0.4s ease;
    transition:transform 0.4s ease;
  }
  button:hover {
    background-color: rgba(0, 174, 255, 0.801);
    border: 3px  rgba(0, 174, 255, 0.801);
    transform: scale(1.05);
}
  span{
    width:100%;
    border: 1px solid #DBDBDB;
    margin:40px;
  }
  p{
    font-size:18px;
    font-weight:400;
    text-decoration:underline;
  }
  p:hover,button:hover{
        cursor: pointer;
    }
  `