import { BUY_CAKE } from "./CakeTypes"

export const buyCake = (number:any) => { 
    return {
        type : BUY_CAKE,
        payload : number
    }
}

