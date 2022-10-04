const deleteBtn = document.querySelectorAll('#delete')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteInquery)
})

function deleteInquery(){
    const dltElement = document.getElementsByIdName('delete')[0]
    box.style.visibility = 'hidden'
}