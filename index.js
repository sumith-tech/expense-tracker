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
     axios.post("https://crudcrud.com/api/316d034e8b2949f0aee11ad3dddaeff5/appointment", obj)
    .then((respone) => {
        console.log(respone)
    })
    .catch((err)=>{
        console.log(err)
    })
    // localStorage.setItem(obj.amount,JSON.stringify(obj));
    
    // showDataOnScreen(obj)
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/316d034e8b2949f0aee11ad3dddaeff5/appointment")
    .then((response)=>{
        console.log(response)
        for(var i=0;i<response.data.length;i++){
            showDataOnScreen(response.data[i])
            
        }

    })
    .catch((err)=>{
        console.log(err)
    })
})

//show data on screen
function showDataOnScreen(exp){
    document.getElementById('amount').value='';
    document.getElementById('Description').value='';
    document.getElementById('category').value='';
    
    const parentNode=document.getElementById('expenseList');
    const childNode=`<li id=${exp._id}> ${exp.amount} - ${exp.Description} - ${exp.category}
                        <button onclick=deleteExp('${exp._id}')>Delete</button>
                        <button onclick=editExpence('${exp.amount}','${exp.Description}','${exp.category}','${exp._id}')>
                        Edit</button>
                     </li>`
    parentNode.innerHTML=parentNode.innerHTML+childNode;
}
//delete from storage
function deleteExp(dlt){

    axios.delete(`https://crudcrud.com/api/316d034e8b2949f0aee11ad3dddaeff5/appointment/${dlt}`)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
    // localStorage.removeItem(dlt);
    deleteExpScreen(dlt)

}
//delete from screen
function deleteExpScreen(dlt){
    const parentNode=document.getElementById('expenseList');
    const deleteNode=document.getElementById(dlt);
    
    parentNode.removeChild(deleteNode);


}
//edit
function editExpence(amt ,dec ,cat, id){
    console.log(1)
    document.getElementById('amount').value=amt;
    document.getElementById('Description').value=dec;
    document.getElementById('category').value=cat;
    deleteExp(id)

}