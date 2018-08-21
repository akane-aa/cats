Vue.component('todo-item', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: '<div>'+
    '<input type="checkbox" v-model="todo.completed">'+
    '<span>{{ todo.text }}</span>' +
    '<button type="button" v-on:click="onClickRemove">よその子やんけ</button>' +
  '</div>',

  methods:{
    onClickRemove: function () {
      this.$emit('remove')
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    input: '',
    todos: []
  },

  methods: {
    addTodo: function(){
      this.todos.push({
        completed: false,
        text: this.input
      })
      this.input = ''
    }
  },
});
