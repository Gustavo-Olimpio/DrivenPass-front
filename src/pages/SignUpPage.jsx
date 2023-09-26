import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {  
  const navigate = useNavigate();
    return (
      <Container>
      <img src="https://images.vexels.com/media/users/3/136534/isolated/preview/c93f32e11dbf6b5fe3efc5be5554ec50-icone-de-cadeado.png"/>
      <h1>DrivenPass</h1>
      <h2>Usuário (e-mail)</h2>
      <input/>
      <h2>Senha</h2>
      <input/>
      <GreenButton>Criar</GreenButton>
      <RedButton onClick={e=> navigate("/")}>Voltar</RedButton>
     
     
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
  border-radius:10px;
  margin-bottom:10px;
}
  button:hover{
        cursor: pointer;
    }
`
const GreenButton = styled.button`
  margin-top:30px;
  background-color:#9BFBB0;
  border: 3px solid #9BFBB0;

`
const RedButton = styled.button`
  background-color:#FB9B9B;
  border: 3px solid #FB9B9B;
  
`