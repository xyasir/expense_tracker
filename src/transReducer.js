 const TransactionReducer =((state, action)=>{
     switch(action.type){
         case 'ADD':
             return[...state,action.payLoad]
         
         default :
             return state;    
     }
 })
 export default TransactionReducer;
 