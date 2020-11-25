import { queryByLabelText } from '@testing-library/react';
import React , {useContext, useState} from 'react';
import {TransactionContext} from './transContext';


    function Child() {


        let {transactions, addTransaction}= useContext(TransactionContext);
        let[newDesc,setDesc] = useState()
        let[newAmount, setAmount]= useState(0); 
        
        
        const handleAddition =(event)=>{
            event.preventDefault();
            if (Number(newAmount)===0) {
              alert('pls enter correct value');
              return false;
            }
               addTransaction({
                   amount: Number(newAmount),
                   desc:newDesc
               }) 
              
        }
        const getINcome=()=>{
            let income=0;
            for (var i=0;i<transactions.length;i++){
                if (transactions[i].amount>0)
                income=income + transactions[i].amount
            }
            return income;
        }
        const getExpense=()=>{
            let expense=0;
            for (var i=0;i<transactions.length;i++){
                if (transactions[i].amount<0)
                expense=expense + transactions[i].amount
            }
            return expense;
        }



         
         // let transactions =[
        //     {amount:500,desc:'Cash'},
        //     {amount:-40,desc:'Book'},
        //     {amount:-200,desc:'Camera'},
        // ]
        return (
            <div className='container'>
                <h1 className='text-center'>Expense Tracker</h1>


        <h3>Your Balance<br />{getINcome() - getExpense()}</h3>

                <div className='expense-container'>
        <h3>Income<br />{getINcome()}</h3>
                    <h3>{getExpense()}<br /> $240</h3>
                </div>

                <h3>History</h3>
                <hr />
                
                <ul className='transaction-list'>
                   {transactions.map((transObj, ind)=>
                       (
                       <li key={ind}>
                        {transObj.desc}
                        {transObj.amount}
                        {console.log('obj; ', transObj)}
                        </li>
                       )   
                   )}
                    
                </ul>
 
                <h3>Add new transaction</h3>
                <hr />
                <form className='transaction-form' onSubmit={handleAddition}>
                    <label>
                        Enter Description<br/>
                        <input type='text' onChange={(ev)=>setDesc(ev.target.value)} required/>
                
                    </label>
                    <hr/>
                    <label>
                    Enter Amount <br/>
                    <input type='number' onChange={(ev)=>setAmount(ev.target.value)} required />
                    </label>
                    <hr/>
                    <input type ='submit' value='Add Transaction'/>

                </form>
            </div>
        )
    }

export default Child;
 