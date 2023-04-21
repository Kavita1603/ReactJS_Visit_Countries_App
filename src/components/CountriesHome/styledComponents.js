import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #161624;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`

export const CountriesHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  margin: 5px;
  margin-left: 80px;
`

export const NoCountriesVisitedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 10px;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  width: 80%;
  margin: 10px;
  margin-left: 120px;
  max-height: 50vh;
  overflow-y: scroll;
  padding-left: 120px;
`
export const listOfCountries = styled.hr`
  color: 1px solid white;
`

export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: none;
  padding: 10px;
  width: 87%;
  margin: 5px;
  margin-left: 10px;
  max-height: 50vh;
  overflow-y: scroll;
  padding-left: 120px;
`
