import './cocktailcard.styles.css';
import { Cocktail } from '../../App';

type cockailCardProps = {
  cocktail: Cocktail;
}
 const CockailCard = ({cocktail} : cockailCardProps ) => {
   const{strDrinkThumb, strDrink, strAlcoholic, idDrink}= cocktail
    return (
      <div className='cocktail-container'>
        <img src={strDrinkThumb} alt={`${strDrink}${idDrink}`}/>
        <h4>{strDrink}</h4>
        <p>{strAlcoholic}</p>
      </div>
    );
}

export default CockailCard;
