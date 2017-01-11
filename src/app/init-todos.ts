export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('todos not found, creating...');
            var todos = [
                {
                    text: 'Pick-up kids from school.' 
                },
                {
                    text: 'Meeting with boss.' 
                },
                {
                    text: 'Dinner with family.' 
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }
        else{
            console.log('Found todos.');

        }
    }

    addTodo(newTodo){
        
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            this.load();
            var todos1 = JSON.parse(localStorage.getItem('todos'));
            todos1.push(newTodo);

            localStorage.setItem('todos', JSON.stringify(todos1));
        }
        else{
            var todos2 = JSON.parse(localStorage.getItem('todos'));
            todos2.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(todos2));
        }
    }

    deleteTodo(todoText){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            this.load();
            var todos1 = JSON.parse(localStorage.getItem('todos'));

            for(var i = 0 ; i < todos1.length ; i++){
                if(todos1[i].text == todoText){
                todos1.splice(i, 1);
                }
            }
            console.log(todoText+' was deleted');
            localStorage.setItem('todos', JSON.stringify(todos1));
        }
        else{
            var todos2 = JSON.parse(localStorage.getItem('todos'));

            for(var i = 0 ; i < todos2.length ; i++){
                if(todos2[i].text == todoText){
                todos2.splice(i, 1);
            }
            localStorage.setItem('todos', JSON.stringify(todos2));
        }
        console.log(todoText+' was deleted');
    }

}
}