import React from 'react'

import api from '../../services/api'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
  id: number
  avatar: string
  bio: string
  cost: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { id, avatar, name, subject, bio, cost, whatsapp } = teacher

  function createNewConnection() {
    api.post('connections', {
      user_id: id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
