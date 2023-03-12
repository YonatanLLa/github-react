import { useState } from "react";
import styles from "./App.module.css";
import UserInformation from "./components/UserInformation";
import Swal from 'sweetalert2';
import UserInput from "./components/UserInput";
import Card from "./components/card";

const App = () => {
  const [inputText, setInpuText] = useState("")
  const [user, setUser] = useState(null)
  const handelInputChange = (event) => setInpuText(event.target.value)
  

   const searchUser = async () =>{
    try {
      const respose = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await respose.json()
      if(data.message === "Not Found"){
        Swal.fire({
          title: 'Este usuario no existe',
          text: '¿Estás seguro que quieres continuar?',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Sí, continuar',
          cancelButtonText: 'No, cancelar'
        })
        return setInpuText("");
      }
      setUser(data);
      setInpuText("");
    } catch (error) {
        console.log('error', error);
    } 
  }

  return (
    <div className={styles.container}>
      <Card />
    <UserInput 
      searchUser={searchUser} 
      handelInputChange={handelInputChange} 
      inputText={inputText}
      />
     {
      user && (<UserInformation user={user}/>)
    } 
      
      </div>
  );
}
export default App;
