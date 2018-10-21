let get = id => (document.getElementById(id))

let welcome = () => {
    let name = get('input').value
    name == '' ? name = 'Père Noël' : name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    alert(`Bonjour ${name} !`)

    handleHistory(name)
}

const handleHistory = (name) => {
    if(name){ history = [...history, name] }

    let record = get('history')
    record.innerHTML = ''

    history.forEach((element, index) => {
        record.innerHTML += `<tr><td>${index}</td> <td>${element}</td></tr>`
    })
}

const search = (value) => {
    let record = get('history')
    record.innerHTML = ''

    history
        .filter(element => (
            element.toLowerCase().slice(0,value.length) == value.toLowerCase())
        )
        .forEach((element, index) => {
            record.innerHTML += `<tr><td>${index}</td> <td>${element}</td></tr>`
        });
}


//initialisation d'un seed de noms pour tester la fonctionnalité de recherche facilement
let history = ['Christopher','Christophe','Christelle','Thomas','Martin']
//affichage au premier chargement de lma page des noms présents dans l'array history
handleHistory(name)