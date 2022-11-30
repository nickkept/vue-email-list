const { createApp } = Vue;
createApp({
    data() {
        return {
            mailList: [],
            temporaryMailList:[],
        };
    },
    methods: {
        fetchData() {


            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp);
                    console.log(resp.data.response);
                    this.temporaryMailList.push(resp.data.response)
                    if(this.temporaryMailList.length === 10){
                        this.mailList = this.temporaryMailList;
                    }
                    
                });
        },
        getTenMails(){
            for (let i=0; i<10 ; i++) {
            
                this.fetchData();
            }
        }
    },
    mounted () {
        
    }
}).mount("#app")













