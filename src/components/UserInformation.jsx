import React from 'react'
import styles from "../App.module.css";
import hotel from "../assets/hotel.png"
import link from "../assets/link.png"
import pin from "../assets/pin.png"
import twitter from "../assets/twitter.png"

const userInformation = ({user}) => {
  return (
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
      </div>)}

export default userInformation
