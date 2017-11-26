var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{text: 'learn javascript'},
			{text: 'learn vue'},
			{text: 'build some thing awsome'}
		]
	}
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello vue.js!'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

// Vue.component('todo-item',{
// 	template: '<li>this is a todo item.</li>'
// });


Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{id: 0, text: 'Vegetables'},
			{id: 1, text: 'Cheese'},
			{id: 2, text: 'Whatever else humans are supported to eat'}
		]
	}
});