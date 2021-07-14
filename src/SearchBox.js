import React from 'react';

const SearchBox=({searchfield,searchchange})=>{
    return(
        <div className='pa3 tc ma  '>
        <input
        className=' pa3 ba b--green bg-lightest-blue'
         type='search'
          placeholder='search Robos' 
          onChange={searchchange}
          />
          </div>
    )
}
export default SearchBox;