let names = []

let get = id => (document.getElementById(id))

let welcome = () => {
    name = get('input').value
    name == '' ? name = 'Père Noël' : ''
    alert(`Bonjour ${name} !`)

    names = [...names, name]
    get('tbody').innerHtml += `<tr>
        <td>${names.length - 1}</td>
        <td>${name}</td>
    </tr>`;
}

// [].map((x)=>(x*2));
// let names = [];