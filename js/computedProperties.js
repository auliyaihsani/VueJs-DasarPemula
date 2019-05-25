var app = new Vue({
    el:'#app',
    data: {
        show: true,
        message: 'hello vue',
        message2: 'hello friend',
        int1:1,
        int2:2
    },
    computed: {
       sum: function() {
            return this.int1 + this.int2;      
        }
    },
})