import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import styles from './main1.module.css'
import { Header } from './components/header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div>
    <Header/>
    <div className={styles.container}>
     <SideBar/>
      <main>
        <Post/>
        <Post/>
      </main>
    </div>
  </div>
  
  </React.StrictMode>,
)
