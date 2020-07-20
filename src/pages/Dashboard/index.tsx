import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form>
        <input placeholder="The repository's name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/20199659"
            alt="Fabricio Pirini"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peesy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/20199659"
            alt="Fabricio Pirini"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peesy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/20199659"
            alt="Fabricio Pirini"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peesy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
