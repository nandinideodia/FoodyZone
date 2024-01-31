import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const BASE_URL = "http://localhost:9000/"


const App = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)



  useEffect( () => {
    const fetchFoodData = async() => {

      setLoading(true)
      try{
        const response = await fetch(BASE_URL)
        const json = await response.json()
    
        setData(json)
        setLoading(false)
      } catch (error){
        setError("Unable to fetch data")
      }
    }
    fetchFoodData()

  })


  fetchFoodData()

  if(error) return <div>{error}</div>
  if(loading) return <div></div>







  return <Container>
    <TopContainer>
      <div className='logo'>
        <img src="/logo.svg" alt="logo" />
      </div>

      <div className='search'>
        <input type="text" placeholder='Search Food..' />

      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>


    </FilterContainer>

    <FoodCardsContainer>
      <FoodCards>


      </FoodCards>      
    </FoodCardsContainer>
  </Container>;
};

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
color: white;
min-height: 100vh;

`
const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding: 16px ;

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 4px; 
  }
}

`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`

const Button = styled.button`
  border-radius: 5px;
  background: #FF4343;
  padding: 6px 12px;
  border: none;
  color: white;

`
const FoodCardsContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 210px)
  
`
const FoodCards = styled.div`
  
`