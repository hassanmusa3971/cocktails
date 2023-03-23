import CockailCard from '../cocktailcard/cocktailcard.component';
import  './cocktail-list.styles.css';
import { Cocktail } from '../../App';

type cocktailListProps = {
  cocktails: Cocktail[];
}

 const CocktailList = ({ cocktails } : cocktailListProps) => {
    return (
      <div className='cocktail-list'>
        {
        cocktails.map((cocktail) => (
              <CockailCard key={`${cocktail.idDrink}${cocktail.strDrink}`} cocktail={cocktail} />
        ))
        }
      </div>
    );
}

export default CocktailList;
