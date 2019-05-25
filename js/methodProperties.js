var app = new Vue({
    el:'#app',
    data: {
        show: true,
        message: 'hello vue',
        message2: 'hello friend',
        int1:1,
        int2:2,
        result: null, 
    },
    computed: {
       sum: function() {
            return this.int1 + this.int2;      
        }
    },
    methods: {
        sumProcess: function (int3) {
            return this.result = this.int1 + this.int2+int3;
        }
    },
})  