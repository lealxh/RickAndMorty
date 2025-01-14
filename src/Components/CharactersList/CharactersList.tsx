import React, { FC, useState } from 'react';
import { useCharactersList } from './hooks/useCharactersList';
import { Character } from '../../interfaces/Character';
import { ApiResults } from '../../interfaces/ApiResults';
import { useIsFetching } from '@tanstack/react-query';
const CharactersList: FC= () => {
  
  const [currentPage,setCurrentPage]=useState(1);
    
  const {data,error}=useCharactersList(currentPage)
  const isFetching=useIsFetching();
  const disabledPrev:boolean=currentPage<=1;
  const disabledNext:boolean=currentPage>=data?.info?.pages

  
  if(error)
    return <div>There was an error: {error.toString()}</div>

  if(isFetching)
    return <div>Loading...</div>

 return (<>
    
    <div className='my-4'>
    <button className={`border-2 border-gray-700 rounded-md bg-slate-400 px-6 py-1 mx-1 ${disabledPrev?'text-gray-600':'text-black'}`} disabled={disabledPrev} onClick={()=>setCurrentPage(prev=>prev-1)}>Prev</button>
    <button className={`border-2 border-gray-700 rounded-md bg-slate-400 px-6 py-1 mx-1 ${disabledNext?'text-gray-600':'text-black'}`} disabled={disabledNext} onClick={()=>setCurrentPage(prev=>prev+1)}>Next</button>
    </div>

    <ul>
      {data.results.map((reg:Character)=>(<li>{reg.name}</li>))}
    </ul>

    
    </>
  );

  return <>{JSON.stringify(data)}</>
};

export default CharactersList;