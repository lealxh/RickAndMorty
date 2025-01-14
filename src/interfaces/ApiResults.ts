import { Character } from "./Character";

export interface ApiResults{
    info:{
        count:number;
        next?:string;
        pages:number;
        prev?:string;
    }
    results:Character[]

}