import React, {Component} from 'react';
import styles from './styles.scss';
export default class Banner extends Component {

  render() {

    return (
      <div className={styles.regBannerWrapper}>
        <h2 className={styles.regBannerHeading}>Create a MyZone Account to get these benefits and more:</h2>
          <div className={styles.regBannerInfos}>
            <div className={styles.regBannerInfo}>Earn a $20 Reward when you make five purchases of $20 or more</div>
            <div className={styles.regBannerInfo}>Save your information and preferences for faster checkout</div>
            <div className={styles.regBannerInfo}>Manage your vehicles, see your order history and warranty information</div>
          </div>
      </div>
    );
  }
}
