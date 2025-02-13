import { Link } from 'react-router-dom'
import styled from 'styled-components'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

const HomePage = () => {
  return (
    <Wrapper>
      <HomeElement>
        <Link to="/beers">
          <img src={beers} alt="beers" />
        </Link>
        <div>
          <Link style={{ color: 'black' }} to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
      <HomeElement>
        <Link to="/random-beer">
          <img src={randomBeer} alt="random-beer" />
        </Link>
        <div>
          <Link style={{ color: 'black' }} to="/random-beer">
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
      <HomeElement>
        <Link to="/new-beer">
          <img src={newBeer} alt="new-beer" />
        </Link>
        <div>
          <Link style={{ color: 'black' }} to="/new-beer">
            <h2>New Beer</h2>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div > div {
    padding: 0 5%;
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    font-size: 80%;
    img {
      width: 100vw;
    }
  }
`
const HomeElement = styled.div`
  max-width: 700px;
  margin-bottom: 2rem;
  > div {
    align-self: flex-start;
  }
`
