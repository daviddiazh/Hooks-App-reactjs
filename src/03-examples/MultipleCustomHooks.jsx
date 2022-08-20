import { LoadingQuote, Quote } from './';
import { useCounter, useFetch } from '../hooks';

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    const { quote, author } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading 
                    ? <LoadingQuote /> 
                    : <Quote quote={ quote } author={ author } />
            }

            <button 
                className='btn btn-primary' 
                disabled={ isLoading }
                onClick={ () => increment() }>Next quote</button>
        </>
    )
}
