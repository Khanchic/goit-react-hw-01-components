// import { Fragment } from "react";
import PropTypes from 'prop-types';

import styles from "../UserProfile/UserProfile.module.css"


export const UserProfile = ({ username, tag, location, avatar, stats }) => {
   
    return  <div className={styles.profile}>
                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={styles.avatar}
                    />
                    <p className={styles.name}>{username}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li className={styles.statsItem}>
                        <span className={styles.label}>Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>
                    <li className={styles.statsItem}>
                        <span className={styles.label}>Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>
                    <li className={styles.statsItem}>
                        <span className={styles.label}>Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
             </div>;
};


UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
        }).isRequired,
};
       