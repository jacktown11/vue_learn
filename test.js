var example1 = new Vue({
	el: '#example-1',
	data: {
		counter: 0
	}
});

var example2 = new Vue({
	el: '#example-2',
	data: {
		name: 'vue.js'
	},
	methods: {
		greet: function(event){
			console.log('Hello, this is ' + this.name);

			//if a native dom event
			if(event){
				console.log('this is from tag ' + event.target.tagName)
			}
		}
	}
});

var example3 = new Vue({
	el: '#example-3',
	data: {

	},
	methods: {
		say: function(message){
			console.log(message);
		}
	}
});

var example4 = new Vue({
	el: '#example-4',
	data: {

	},
	methods: {
		warn: function(message,event){
			if(event){
				event.preventDefault();
			}
			console.log(message);
		}
	}
});

