import { useState } from "react";
import { Await } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import hotel from "./images/hotel.png"
import link from "./images/link.png"
import pin from "./images/pin.png"
import profile from "./images/profile.png"
import search from "./images/search.png"
import sun from "./images/sun.png"
import twitter from "./images/twitter.png"

function App() {
  const [inputText, setInpuText] = useState("")
  const [user, setUser] = useState({
    name: "Nombre",
    created_at: "Fecha",
  })
  const handelInputChange = (event) =>{
    setInpuText(event.target.value)
  }

  async function searchUser(){
    try {
      const respose = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await respose.json()
      setUser(data)
      console.log(data);
    } catch (error) {
        console.log('error', error);
    } 
  }

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h4 className={styles.title}>devfinder</h4>
        <button className={styles.btnMode}>
          LIGHT <img width="20" src={sun} alt="" />
        </button>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <img width="15" src={search} alt="" />
          <input
          // onChange para input: permite camtar cada vez que el usurio escriba en el
            onChange={handelInputChange} 
            value={inputText}
            className= {styles.inputSearch}
            type="text"
            placeholder="Search GitHub username..."
          />
        </div>
        <div>
          <button className={styles.btnSearch} onClick = {() => searchUser()}>Search</button>
        </div>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.imageContainer}>
          <img width="100" src={user?.avatar_url} alt="" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.userDateContainer}>
            <h2>{user?.name}</h2>
            <p>{user?.created_at}</p>
          </div>
          <div className={styles.userBioContainer}>
            <p>{`@${user?.login}`}</p>
            <p>{user?.bio}</p>
          </div>
          <div className={styles.cardInformation}>
            <div>
              <h5>Repos</h5>
              <h2>{user?.public_repos}</h2>
            </div>
            <div>
              <h5>Followers</h5>
              <h2>{user?.followers}</h2>
            </div>
            <div>
              <h5>Following</h5>
              <h2>{user?.following}</h2>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div>
              <p>
                <img width="15" src={pin} alt="" />
                {/* solo actua si user tenga el contenido, esto es para prevenir que un no existe en un obj */}
                &nbsp;{user?.location}
              </p>
              <p>
                <img width="15" src={link} alt="" />
                &nbsp;{user?.blog}
              </p>
            </div>
            <div>
              <p>
                <img width="15" src={twitter} alt="" />
                &nbsp;{user?.twitter_username}
              </p>

              <p>
                <img width="15" src={hotel} alt="" />
                &nbsp;{user?.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
