var example1 = new Vue({
	el: '#example-1',
	data: {
		message: '',
		checked: false,
		checkedNames: [],
		radio: '',
		selected: '',
		selectedM: [],
		options: [
			{text: 'A', value: 'A'},
			{text: 'B', value: 'B'},
			{text: 'C', value: 'C'}
		],
		selected3: '',
		a: 'good',
		b: 'bad',
		toggle: '',
		radiox: '',
		select1645: []
	},
	methods: {
		report: function(){
			console.log(typeof this.checked);
		}
	}
})