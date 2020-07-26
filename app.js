var list = document.getElementById('list')


function todoApp(){
	var task = document.getElementById("task");
	var li = document.createElement("li")
	var liText = document.createTextNode(task.value)
	li.appendChild(liText)

	

	var dltBtn = document.createElement('Button')
	var dltText = document.createTextNode('Delete')
	dltBtn.appendChild(dltText)

	dltBtn.setAttribute("class","btn")
 	dltBtn.setAttribute("onclick","dltItem(this)")

	li.appendChild(dltBtn)



	var editBtn = document.createElement('button')
	var editText = document.createTextNode('Edit')
	editBtn.appendChild(editText)

	editBtn.setAttribute("class","btn1")
	editBtn.setAttribute("onclick","editItem(this)")
	li.appendChild(editBtn)

	list.appendChild(li)
	task.value = ""


}



function dltItem(e){
	e.parentNode.remove()
}




function editItem(e){
	e.parentNode.firstChild;
	var editValue = prompt("Enter Your New Value")
	e.parentNode.firstChild.nodeValue=editValue
}




function clearAll(){
	list.innerHTML = ""
}
