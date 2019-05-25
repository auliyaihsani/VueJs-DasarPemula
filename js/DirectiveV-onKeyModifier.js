var app = new Vue({
    el:'#app',
    data: {
        message: ''
    }, 
   methods: {
        escKey: function (){
            this.message = 'you esc key'
        },
        spaceKey: function (){
            this.message = 'you space key'
        },
        upKey: function (){
            this.message = 'you up key'
        },
        downKey: function (){
            this.message = 'you Down key'
        },
        aKey: function (){
            this.message = 'you alpahabet key'
        }
       
   }

})  

