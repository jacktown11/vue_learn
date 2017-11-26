

var data = {a: 1};
var vm = new Vue({
	el: '#example',
	data: data,
	created: function(){
		console.log('a is ' + this.a);
	}
});
vm.$watch('a',function(newValue, oldValue){
	console.log('The old value is ' + oldValue + '\nThe new value is ' + newValue);
});

console.log('vm.a === data.a  ' + (vm.a === data.a));

vm.a = 2;
console.log(data.a);

data.a = 3;
console.log(vm.a);

console.log(vm.$data === data);
console.log(vm.$el === document.getElementById('example'));

