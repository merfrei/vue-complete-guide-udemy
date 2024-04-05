const app = Vue.createApp({
  data() {
    return {
      isVisible: true,
      enteredValue: '',
      assignments: [],
    };
  },
  methods: {
    addAssignment() {
      this.assignments.push(this.enteredValue);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  },
});

app.mount("#assignment");
