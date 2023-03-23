import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CocktailList from './component/cocktail-list/cocktail-list.component';
import Nav from './component/nav/nav.component';


export type Cocktail = {
  strDrinkThumb: string;
  strDrink: string;
  strAlcoholic: string;
  idDrink: string;
}
const App = () => {
  const [searchField, setSearchField] = useState('')
  const [cocktails, setCocktails] = useState([])
  const [searchResult, setSearchResult] = useState<Cocktail[]>([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((response) => response.json())
      .then((data) => {
        const { drinks } = data
        setCocktails(drinks)
      })
  }, [])

  console.log(cocktails)

  useEffect(() => {
    const filteredCocktails = cocktails.filter((cocktail : Cocktail) => {
      return cocktail.strDrink.toLocaleLowerCase().includes(searchField)
    })
    setSearchResult(filteredCocktails)
  }, [cocktails, searchField])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchcocktail = event.target.value.toLocaleLowerCase()
    setSearchField(searchcocktail)
  }

  return (
    <div className="App">
      <Nav onSearchHandler={onSearchChange} />
      <CocktailList cocktails={searchResult} />
    </div>
  );

}
export default App;
