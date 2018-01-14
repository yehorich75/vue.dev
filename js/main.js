Vue.filter ('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(l) { return l.toUpperCase() })
});

Vue.component ('app-car', {
    data: function () {
        return {
            cars: [
                {model: "BMW"},
                {model: "Volvo"},
                {model: "Mercedes-Benz"},
                {model: "Ford"},
                {model: "Audi"},
                {model: "Siat"},
                {model: "Fiat"}
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue ({
    el: '#app-car',
    data: {

    }
});

new Vue ({
    el: '#app',
    data: {
        title: "Hello World!",
        styleCSS: ""
    },
    methods: {
        changeText () {
            this.title='Another Text'
        }
    }
});

new Vue ({
    el: '#app-2',
    data: {
        value: 1,
    },
    methods: {
        increment (value) {
            this.value = value
            if (value == 25)
                alert ("25")
        },    
    },
    computed: {
        doubleValue () {
            return this.value * 2
        }
    }
});

new Vue ({
    el: '#app-3',
    data: {
        show: false,
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mersedes", speed: 350.4},
            {model: "Ford", speed: 160.5}
        ]
    },
    methods: {

    }
});

new Vue ({
    el: '#app-4',
    data: {
        show: false,
        message: "Hello world, hello!",
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mersedes", speed: 350.4},
            {model: "Ford", speed: 160.5}
        ]
    },
    computed: {
        showMess () {
            return this.message.toUpperCase ();
        }
    },
    filters: {
        lowercase (value) {
            return value.toLowerCase ()
        }
    }
});