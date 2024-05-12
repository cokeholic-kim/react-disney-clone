import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <HomeImage src='./image/disney_home.png' alt='disney_home'/>
    </div>
  )
}

const HomeImage = styled.img`
    width: 100%;
    height:100vh;
`

export default Home
