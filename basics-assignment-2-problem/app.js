const app = Vue.createApp({
    data() {
        return {
            input: '',
            input2: ''
        }
    },
    methods: {
        showAlert() {
            alert('Alert!');
        },
        setInput(event) {
            this.input = event.target.value;
        },
        setInput2(event) {
            this.input2 = event.target.value;
        }
    }
});


app.mount('#assignment');
