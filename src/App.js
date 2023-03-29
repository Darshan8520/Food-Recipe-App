import './App.css';
import Recipe from './Recipes';
import Header from './Header';
import { useState ,useEffect } from 'react';
import axios from 'axios';

function App() {
  let [search,setSearch]=useState("Food")
  let [Recipes,setRecipes]=useState([])


  
  useEffect(()=>{
     getRecipe()
  },[])
  let getRecipe = async()=>{
    let resp = await axios.get(`https://api.edamam.com/search?q=${search }&app_id=3517e492&app_key=8bbb834d549a0544ddc46a1455edbb38`)
    console.log(resp);
    setRecipes(resp.data.hits)
  }

  let Oninputchange = (e)=>{
    setSearch(e.target.value)
    // console.log(e.target.value);
  }

  let onSearch =()=>{
    getRecipe()
  }
  return (
    <div className="App">
     <Header search={search} Oninputchange={Oninputchange} onSearch={onSearch}/>
     <div className='container'>
     <Recipe recipes={Recipes}/>
     </div>
    </div>
  );
}

export default App;
