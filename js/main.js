let addButton = document.getElementById("add-button")
let arrayPeople = []




addButton.addEventListener('click', () =>{
    let inputPeople = document.querySelectorAll('#list-input .input-element')
    let objectPeople = {}
    let inputAlert
    let removeAlert 
    let similarInput 
    inputPeople.forEach((item) =>{
            let text = item.name;
            let value = item.value;
            //crear un objeto con name 
            objectPeople[text] = value
            console.log(objectPeople)
            console.log(item.value)
             inputAlert = !item.value ? item.classList.add("is-invalid") : item.classList.add("is-valid")
             removeAlert = item.value ? item.classList.remove("is-invalid") : item.classList.remove("is-valid")
        
    })

    if(objectPeople.name && objectPeople.lastName && objectPeople.email){
        arrayPeople.push(objectPeople)
        getPeople(arrayPeople)
    }else {
        alert("Favor de llenar todos los campos")
    }



 
})

let btnDelete 



const getPeople = (arr) =>{
    let peopleList = document.getElementById("people-list")
    peopleList.innerHTML = ""
    arr.forEach(item => {
        let {name, lastName, email} = item
        //creamos el tr principal 
        let trObject = document.createElement("tr")
        //creamos los td
        let tdName = document.createElement("td")
        let tdLastName = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdButton = document.createElement("td")
        btnDelete = document.createElement("button")
        btnDelete.setAttribute("class","btn btn-danger")
        //creamos los textos que llevaria cada td
        let names = document.createTextNode(`${name}`)
        let lastNames = document.createTextNode(` ${lastName}`)
        let emails = document.createTextNode(` ${email}`)
        let deleteText = document.createTextNode(`Eliminar`)
        //dentro de cada td asignamos los textos
        tdName.appendChild(names)
        tdLastName.appendChild(lastNames)
        tdEmail.appendChild(emails)
        btnDelete.appendChild(deleteText)
        tdButton.appendChild(btnDelete)
        //
        trObject.append(tdName,tdLastName,tdEmail,tdButton)
        //
        peopleList.appendChild(trObject) 

    })

    deletePeople(arr)

 
}



const deletePeople = (peopeArr) =>{
    let btnDelete = document.querySelectorAll(".btn-danger")
    btnDelete.forEach((item,index) =>{
        item.addEventListener("click", () =>{
            peopeArr.splice(index,1)
            getPeople(peopeArr)
        })
    })
}





