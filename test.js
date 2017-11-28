Vue.component('my-component',{
	template: '<div>A custom component!</div>'
});

new Vue({
	el: '#example'
});

var Child1 = {
	template: '<div> A component registered locally</div>'
};

var example1 = new Vue({
	el: '#example1',
	components:  {
		'my-component': Child1
	}
});

Vue.component('simple-component',{
	template: '<button v-on:click="counter++">{{counter}}</button>',
	data: function(){
		return {
			counter: 0
		};
	}
});
var example2 = new Vue({
	el: '#example2'
});

Vue.component('cp-example3',{
	template: '<p>The message received from props is {{message}}</p>',
	props: ['message']
});
var example3 = new Vue({
	el: '#example3'
});

Vue.component('cp-example4',{
	template: '<p>The message from my-message props is {{myMessage}}</p>',
	props: ['myMessage']
});
var example4 = new Vue({
	el: '#example4'
});

Vue.component('cp-example5',{
	template: '<p>The message from input is {{message}}</p>',
	props: ['message']
});
var example5 = new Vue({	
	el: '#example5',
	data: {
		parentMsg: ''
	}
});

Vue.component('cp-example6',{
	template: '<p>The {{year}} old boy {{name}} {{doSomething}}.</p>',
	props: ['name','year','doSomething']
});
var example6 = new Vue({	
	el: '#example6',
	data: {
		person: {
			name1: 'jack',
			year1: '13'
		},
		thing: 'plays with dog'
	}
});

Vue.component('cp-example7',{
	template: '<button v-on:click="incrementCounter">{{counter}}</button>',
	data: function(){
		return {
			counter: 0
		};
	},
	methods: {
		incrementCounter: function(){
			this.counter++;
			this.$emit('increment');
		}
	}
});

var example7 = new Vue({
	el: '#example7',
	data: {
		total: 0
	},
	methods: {
		incrementTotal: function(){
			this.total++;
		}
	}
});

Vue.component('cp-example8',{
	template: '<p @click.stop="incrementBar" style="border: 1px solid green;">the bar in child component: {{bar}}</p>',
	props: ['bar'],
	methods: {
		incrementBar: function(){
			this.$emit('update:bar',this.bar+1);
			console.log(this.bar);
		}
	}
});
var example8 = new Vue({
	el: '#example8',
	data: {
		foo: 0
	},
	methods: {
		incrementFoo: function(){
			this.foo++;
		}
	}
});

Vue.component('cp-example9',{
	template: '<p>\
		$ <input type="text" \
			ref="input" \
			v-on:input="updateValue($event.target.value)" />\
		</p>',
	props: ['value'],
	methods: {
		updateValue: function(value){
			var formattedValue = value.trim().slice(0,
				value.indexOf('.')<0 ? value.length : value.indexOf('.')+3);
			if(formattedValue !== value){
				this.$refs.input.value = formattedValue;
			}
			this.$emit('input',Number(formattedValue));
		}
	}
});

var example9 = new Vue({
	el: '#example9',
	data: {
		money: 0
	}
});


Vue.component('currency-input', {
  template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted: function () {
    this.formatValue();
  },
  methods: {
  	currencyFormat: function(value){
  		var value = String(value);
  		return value.trim().slice(0,
				value.indexOf('.')<0 ? value.length : value.indexOf('.')+3)
  	},
    updateValue: function (value) {
	    var formattedValue = this.currencyFormat(value);
		if(formattedValue !== value){
			this.$refs.input.value = formattedValue;
		}
		this.$emit('input',Number(formattedValue));
    },
    formatValue: function () {
      this.$refs.input.value = this.currencyFormat(this.value);
    },
    selectAll: function (event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(function () {
      	event.target.select()
      }, 0);
    }
  }
});

var example10 = new Vue({
  el: '#example10',
  data: {
    price: 0,
    shipping: 0,
    handling: 0,
    discount: 0
  },
  computed: {
    total: function () {
      return ((
        this.price * 100 + 
        this.shipping * 100 + 
        this.handling * 100 - 
        this.discount * 100
      ) / 100).toFixed(2)
    }
  }
});