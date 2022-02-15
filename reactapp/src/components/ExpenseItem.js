function ExpenseItem(props){
    console.log(props)
    return(
     <div className="expense-item">
         <div>{props.info.date.toISOString()}</div>
         <div className="expense-item__description">
             <h2>{props.info.title}</h2>
             <div className="expense-item__price">${props.info.amount}</div>
         </div>
     </div>   
    )
}

export default ExpenseItem;