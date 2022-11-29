import SearchIcon from '@material-ui/icons/Search'; 
import MicIcon from '@material-ui/icons/Mic';

import { Button} from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import {useHistory} from 'react-router-dom';

import {useStateValue} from '../SearchProvider.js';
import {SET_SEARCH_TERM} from '../types.js';



const SearchInput = styled.div` 
    display: flex;
    align-items: Center;
    border: 1px solid lightgray;
    height: 30 px;
    padding: 10px 15px;
    width: 500 px;
    margin : 0px Auto;
    border-radius: 999px;

    input {
        flex: 1;
        padding : 8px 13px;
        font-size: medium;
        border: 0;
        outline: 0;
}
.searchicon {
    color:gray ;
}  
`
const SearchButton = styled.div`
    margin-top : 20px;
    display: flex;
    justify-content: center;
    button {
        margin : 5px;
        background : #f8f8f8 !important;
        border: 1px solid white;
        text-transform : inherit;
        &:hover {
            margin: 5px;
            background: #f8f8f8 !important;
            color: #000;
            border: 1px solid #c6c6c6
    }
}
`
//     const [isShown, setIsShown] = useState (false);// const SearchIcon = event => {//         setIsShown(true);   // }
                                 
//export default Search;   /// may need to be deleted

   // export default function Search ({ hide }) { 

const Search = ({ hide }) => { 
    const [input, setInput] = useState("");
    const history = useHistory();
    //const [{},dispatch]= useStateValue();
    
    const search =e => {
    e.preventDefault();
    console.log(input);
    history.push("/search");
    }
    // dispatch({
    //     type:SET_SEARCH_TERM,
    //     term:input
    //    })
    //    history.push("/search");
    // }

//export default function App() {
  
return (
                                                            //    <div> //  <button> Click </button>
<form onSubmit={search}>
    <SearchInput>
        <SearchIcon className="searchicon"/>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon/>
      </SearchInput>
      {!hide && (
        <SearchButton>
            <Button type="submit" variant="outlined">Google Search</Button>
            <Button variant="outlined">I am feeling lucky</Button>
        </SearchButton>
      )}
    </form>
)
      }
export default Search;
    
//); 
    //}
   // }
//export default Search;
//}
    