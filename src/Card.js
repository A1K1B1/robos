// import React  from 'react';


const Card=({name, email, id})=>{
    // agr hm hr jagh props likhr  name email or id nhi likhna chahte to use ik variable bna ke bhi likh skteh h ya fir use function me props ki jagh bhi likh skte h jaise ki upre me likha h 
    return(
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200×200`}/>
            <div>
                 <h2>{ name}</h2>
                 <p>{ email}</p>
            </div>
         
        </div>
    );
}

export default Card;