import React from 'react'

let Header = ({search,Oninputchange ,onSearch}) => {
    return (
        <>
            <div className='jumbotron'>
                <h1 className='display-1'>
                    <span className="material-symbols-outlined brand-icon">
                        fastfood
                    </span>Food Recipe</h1>

                <div className="input-group w-50 mx-auto ">
                    <input type="text" className="form-control" placeholder='Search Your favourite Recipe...' value={search} onChange={Oninputchange} />
                    <div className="input-group-append">
                        <button className='btn btn-dark' onClick={()=>onSearch()}>Search Recipe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
