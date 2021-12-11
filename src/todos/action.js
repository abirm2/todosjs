
import { ADDTASK, DELETETASK, DONETASK, EDITTASK} from "./types.js";

export const addtask = newtask => {
    return {
        type: ADDTASK,
        payload: newtask
    }
}
export  const edittask=(id , tasknew)=>{
    return{
        type: EDITTASK,
        payload: tasknew ,
        id:id
    }
}
export  const deletetask=(id )=>{
    return{
        type: DELETETASK,
        payload:id
    }
}
export  const donetask=(id )=>{
    return{
        type: DONETASK,
        payload:id
    }
}