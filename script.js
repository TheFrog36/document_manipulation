
const to_do1 = {
    name: "compra il pane",
    priority: 3
}

const to_do2 = {
    name: "ripassa css",
    priority: 6
}

const to_do3 = {
    name: "fai sport",
    priority: 6
}

const to_do4 = {
    name: "chiama cugino",
    priority: 4
}

const to_do5 = {
    name: "studia JS",
    priority: 9
}

const to_do_list = [to_do1, to_do2, to_do3, to_do4, to_do5]

function log_todo_list(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element.name, element.priority);
    }
}
console.log(log_todo_list(to_do_list))

// const container = document.getElementById('todo_container');
// const par = document.createElement('p');
// const textNode = document.createTextNode('Hello world')
// par.appendChild(textNode)
// container.appendChild(par)

function createTodoList(array){
    const container = document.getElementById('todo_container');
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const par = document.createElement('p');
        par.classList.add('list_element')
        const textNode = document.createTextNode(element.name + " " + element.priority);
        par.appendChild(textNode)
        container.appendChild(par)
    }
}

createTodoList(to_do_list)

