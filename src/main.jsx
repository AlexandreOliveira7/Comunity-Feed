import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import styles from './main1.module.css'
import { Header } from './components/header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlexandreOliveira7.png',
      name: 'Alexandre Oliveira',
      role: 'Dev Front-End',
    },
    publishedAt: new Date('2023-07-10 20:20:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'}

    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/itsBinho.png',
      name: 'Robson Rocha',
      role: 'Student Front-End',
    },
    publishedAt: new Date('2023-07-10 20:20:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'}

    ],
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div>
    <Header/>
    <div className={styles.container}>
     <SideBar/>
      <main>
      {posts.map(post => {
        return (
          <Post
          key={post.id}
          author={post.author}
          publishedAt={post.publishedAt}
          content={post.content}
        />
        )
      })}
      </main>
    </div>
  </div>
  
  </React.StrictMode>,
)
