import React from 'react'
import sun from "../assets/sun.png"
import styles from '../App.module.css'

const Card = () => {
  return (
    <div className={styles.section1}>
        <h4 className={styles.title}>devfinder</h4>
        <button className={styles.btnMode}>
          LIGHT <img width="20" src={sun} alt="" />
        </button>
    </div>
  )
}

export default Card
