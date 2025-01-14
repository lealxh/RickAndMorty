import { useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../query-client/constants";
import { Character } from "../../../interfaces/Character";
import { ApiResults } from "../../../interfaces/ApiResults";
import { baseUrl } from "../../../query-client/constants";
import { useEffect } from "react";

export async function fetchCharacters(pageNum = 1) {
    const url=`${baseUrl}character/?page=${pageNum}`;
    const response = await fetch(url);    
    console.log(url);
    return response.json();
}

export function useCharactersList(pageNum:number){

    const fallback:ApiResults={info:{count:0,pages:0},results:[]};
   
    const {data=fallback,error}=useQuery({
        queryKey:[queryKeys.characters,pageNum],
        queryFn:()=>fetchCharacters(pageNum)
    })
    
    const queryClient=useQueryClient();
    useEffect(()=>{
        queryClient.prefetchQuery({
            queryKey:[queryKeys.characters,pageNum+1],
            queryFn:()=>fetchCharacters(pageNum)
        })
    },[pageNum,queryClient])

    return {data,error};

}


