const app = Vue.createApp({
  data() {
    return {
      counter: 33,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
