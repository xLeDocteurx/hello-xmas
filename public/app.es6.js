'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var get = function get(id) {
    return document.getElementById(id);
};

var welcome = function welcome() {
    var name = get('input').value;
    name == '' ? name = 'Père Noël' : name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    alert('Bonjour ' + name + ' !');

    handleHistory(name);
};

var handleHistory = function handleHistory(name) {
    if (name) {
        history = [].concat(_toConsumableArray(history), [name]);
    }

    var record = get('history');
    record.innerHTML = '';

    history.forEach(function (element, index) {
        record.innerHTML += '<tr><td>' + index + '</td> <td>' + element + '</td></tr>';
    });
};

var search = function search(value) {
    var record = get('history');
    record.innerHTML = '';

    history.filter(function (element) {
        return element.toLowerCase().slice(0, value.length) == value.toLowerCase();
    }).forEach(function (element, index) {
        record.innerHTML += '<tr><td>' + index + '</td> <td>' + element + '</td></tr>';
    });
};

//initialisation d'un seed de noms pour tester la fonctionnalité de recherche facilement
var history = ['Christopher', 'Christophe', 'Christelle', 'Thomas', 'Martin'];
//affichage au premier chargement de lma page des noms présents dans l'array history
handleHistory();