//Создать приложение  TaskManager. У нас есть два списка дел. 
//В конце каждого списка есть кнопка `transfer`. 
//При нажатии на кнопку - последний єлемент списка переносится в начало другого списка

const config = {
    el: '#app',
    data: {
        tasksList1: [
            {name: 'task1'},
            {name: 'task2'},
            {name: 'task3'},
            {name: 'task4'},
            {name: 'task5'},
            {name: 'task6'},
            {name: 'task7'},
        ],
        tasksList2: [
            {name: '1. task'},
            {name: '2. task'},
            {name: '3. task'},
            {name: '4. task'},
            {name: '5. task'},
            {name: '6. task'},
            {name: '7. task'},
        ],
        moveTaskList1() {
            console.log('test')
            this.$data.tasksList2.unshift({name: this.$data.tasksList1[this.tasksList1.length-1].name});
            this.$data.tasksList1.pop(this.$data.tasksList1[this.tasksList1.length-1]);
        },  
        moveTaskList2() {
            this.$data.tasksList1.unshift({name: this.$data.tasksList2[this.tasksList2.length-1].name});
            this.$data.tasksList2.pop(this.$data.tasksList2[this.tasksList1.length-1]);
        }, 
    }
}

const vue = new Vue(config);