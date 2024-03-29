const app = Vue.createApp({
    data() {
        return {
            name: 'Nano',
            birthDate: '1985-05-30',
            imageUrl: 'https://f4.bcbits.com/img/0021048415_20.jpg',
        };
    },
    methods: {
        randomNum() {
            return Math.random();
        },
        calculateAge(birthDateString) {
            const birthDate = new Date(this.birthDate);
            const nowDate = new Date();
            let age = nowDate.getFullYear() - birthDate.getFullYear();
            const monthDifference = nowDate.getMonth() - birthDate.getMonth();
            if (monthDifference < 0 || (monthDifference === 0 && nowDate.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }
});

app.mount('#assignment');
