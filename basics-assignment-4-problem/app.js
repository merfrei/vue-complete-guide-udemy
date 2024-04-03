const app = Vue.createApp({
    data() {
        return {
            paraStyle: 'user1',
            paraVisibility: true,
            backgroundColor: '',
        };
    },
    methods: {
        setClass(event) {
            if (event.target.value === 'user1' || event.target.value === 'user2') {
                this.paraStyle = event.target.value;
            }
        },
        toogleVisibility() {
            this.paraVisibility = !this.paraVisibility;
        },
        setColor(event) {
            this.backgroundColor = event.target.value;
        }
    }
});

app.mount('#assignment');
