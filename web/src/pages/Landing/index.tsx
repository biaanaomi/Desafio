import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import searchIcon from '../../assets/images/icons/procurar.svg'
import registerIcon from '../../assets/images/icons/cadastro.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [])

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logoImg} alt="Vitalma" />
          <h2>Sua plataforma de controle de nutrientes</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de nutrientes" />

        <ButtonsContainer>
          <Link to="/search" className="search">
            <img src={searchIcon} alt="Procurar" />
            Procurar
          </Link>
          <Link to="/register" className="register">
            <img src={registerIcon} alt="Cadastro" />
            Cadastre-se
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de
          {` ${totalConnections} `}
          conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
}

export default Landing;