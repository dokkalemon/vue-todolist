/* 
Descrizione
Rifare l’esercizio della todo list.
Partire dalla definizione di un array con 3 oggetti ( i todo).

Ogni oggetto todo avrà le seguenti proprietà:
- text, una stringa che indica il testo del todo
- completed, un booleano (true/false) che indica se il todo è stato 
completato oppure no

MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà completed è uguale a true, visualizzare il testo del 
todo sbarrato.

MILESTONE 2
Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il 
todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: 
cliccando sul pulsante, il testo digitato viene letto e utilizzato 
per creare un nuovo todo, che quindi viene aggiunto alla lista dei
todo esistenti.

Bonus:
1. Oltre al click sul pulsante, intercettare anche il tasto ENTER per
 aggiungere il todo alla lista.

2. Cliccando sul testo del todo, invertire il valore della proprietà 
completed del todo corrispondente (se completed era uguale a false, 
impostare true e viceversa).
*/



const app = new Vue({
    el: '#app',
    data: {
        //lista to do
        todos: [
            {
                text: 'Fare la Spesa',
                completed: true
            },
            {
                text: 'Fare il bucato',
                completed: false
            },
            {
                text: 'Andare in palestra',
                completed: true
            },
        ],

        //testo dell'input
        newTodo: '',
    },
    methods: {

        //aggiungiamo il nuovo to do
        addTodo() {
            if (this.newTodo !== '') {
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false
                });
                console.log(this.newTodo);

                //pulire l'input
                this.newTodo = '';

                //focus nell'input
                this.$refs.inputTodo.focus()
            }
        },

        //cancelliamo il to do dalla lista
        removeTodo(index) {
            this.todos.splice(index, 1)
        },

        //se clicco il to do cambia la classe
        update(index) {
            if (this.todos[index].completed) {
                this.todos[index].completed = false
            } else {
                this.todos[index].completed = true
            }

        }
    },
}) 