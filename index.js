//save data on local storage
function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const Description=event.target.Description.value;
    const category=event.target.category.value;

    const obj={
        amount,
        Description,
        category
    }
    localStorage.setItem(obj.amount,JSON.stringify(obj));
    
    showDataOnScreen(obj)
}

//show data on screen
function showDataOnScreen(exp){
    document.getElementById('amount').value='';
    document.getElementById('Description').value='';
    document.getElementById('category').value='';

    const parentNode=document.getElementById('expenseList');
    const childNode=`<li id=${exp.amount}> ${exp.amount} - ${exp.Description} - ${exp.category}
                        <button onclick=deleteExp('${exp.amount}')>Delete</button>
                        <button onclick=editExpence('${exp.amount}','${exp.Description}','${exp.category}')>
                        Edit</button>
                     </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;
}
//delete from storage
function deleteExp(dlt){
    localStorage.removeItem(dlt);
    deleteExpScreen(dlt)

}
//delete from screen
function deleteExpScreen(dlt){
    const parentNode=document.getElementById('expenseList');
    const deleteNode=document.getElementById(dlt);

    parentNode.removeChild(deleteNode);


}
//edit
function editExpence(amt ,dec ,cat){
    console.log(1)
    document.getElementById('amount').value=amt;
    document.getElementById('Description').value=dec;
    document.getElementById('category').value=cat;
    deleteExp(amt)

}