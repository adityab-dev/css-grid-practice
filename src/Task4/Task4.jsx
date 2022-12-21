import React from 'react'

import styles from './Task4.module.css';

import img1 from '../Assets/task4-img1.png'
import img2 from '../Assets/task4-img2.png'
import img3 from '../Assets/task4-img3.png'
import img4 from '../Assets/task4-img4.png'

function Task4() {
  return (
    <>
      <h2>Task 4</h2>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItem1}`}>
          <div className={styles.contentContainer}>
            
            <div className={styles.imgContainer}>
              <img alt='img1' src={img1}/>
            </div>
            
            <div className={styles.tagsContainer}>
              
              <div className={styles.tagRow}>
                <div className={styles.tags}>balloon</div>
                <div className={styles.tags}>red</div>
                <div className={styles.tags}>sky</div>
              </div>
              
              <div className={styles.tagRow}>
                <div className={styles.tags}>blue</div>
                <div className={styles.tags}>Hot air balloon</div>
              </div>

            </div>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.gridItem2}`}>
          <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              <img alt='img2' src={img2}/>
            </div>
          
            <div className={styles.tagsContainer}>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>balloon</div>
                <div className={styles.tags}>houses</div>
              </div>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>train</div>
                <div className={styles.tags}>harborside</div>
              </div>

            </div>
          </div>
        </div>
        
        <div className={`${styles.gridItem} ${styles.gridItem3}`}>
          <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              <img alt='img3' src={img3}/>
            </div>
          
            <div className={styles.tagsContainer}>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>balloons</div>
                <div className={styles.tags}>inflating</div>
              </div>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>green</div>
                <div className={styles.tags}>blue</div>
              </div>

            </div>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.gridItem4}`}>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <img alt='img4' src={img4}/>
          </div>
          
            <div className={styles.tagsContainer}>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>balloon</div>
                <div className={styles.tags}>sun</div>
                <div className={styles.tags}>sky</div>
              </div>
            
              <div className={styles.tagRow}>
                <div className={styles.tags}>summer</div>
                <div className={styles.tags}>bright</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task4;