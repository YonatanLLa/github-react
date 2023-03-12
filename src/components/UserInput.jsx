import React from 'react'
import styles from '../App.module.css'
import search from "../assets/search.png"

function UserInput({searchUser,handelInputChange,inputText}) {
  return (
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
  )
}

export default UserInput
