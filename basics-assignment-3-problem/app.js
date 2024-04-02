const app = Vue.createApp({
    data() {
        return {
            calculated: 0
        };
    },
    watch: {
        calculated() {
            const that = this;
            setTimeout(function() {
                that.calculated = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.calculated < 37) {
                return 'Not there yet';
            } else if (this.calculated > 37) {
                return 'Too much!';
            } else {
                return this.calculated;
            }
        }
    },
    methods: {
        add(num) {
            this.calculated += num;
        }
    }
});


app.mount('#assignment');
