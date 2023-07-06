import { Avatar } from './Avatar'
import styles from './SideBar.module.css'
import { PencilLine } from 'phosphor-react'

export function SideBar() {
  return(
    <aside className={styles.aside}>
        <img className={styles.cover} 
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        />
        
        <div className={styles.profile}>
          <div className={styles.positionAvatar}>
          <Avatar src='https://github.com/AlexandreOliveira7.png'/>
          </div>
          <strong>Alexandre Oliveira</strong>
          <span>Dev Front-End</span>
        </div>

        <footer className={styles.SideFooter}>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
    </aside>
  )
}