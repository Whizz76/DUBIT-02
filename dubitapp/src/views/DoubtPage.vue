<template>
   <div id="doubt">
       <h2 id="intro">Hi {{username}}</h2>
       <button id="activity" @click="goToActivity()" >View your activity</button>
       <h2 id="ask">Ask your Question</h2>
       <div class="ask"><input type="text" placeholder="type your question here..."><button id="add" @click="move()">Add</button></div>
       
       <h2 id="doubt">Doubts and Answers</h2>
       <div :key="question.ques_id" v-for="question in questions" >
        <details>
            <summary>Q1: {{question.question}} <button @click="addAnswer(question.ques_id)" >Answer</button></summary>
            <div :key="answer.ans_id" v-for="answer in question.answers">
                <p>Ans:{{ answer.ans }}</p>
            </div>
        </details>
        </div>
   </div>
</template>
<script>
import router from '@/router';
import Questions from "../components/questions/question.vue";
export default{
    components:{Questions},
    data(){
        return{
            username:"Aparna",
            questions:[{ques_id:1,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]},{ques_id:2,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]}
        ,{ques_id:3,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]},{ques_id:4,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]}]
        }
       
    },
   methods:{
      move(){
         router.push({name:"added"})
      },
      goToActivity(){
        router.push({name:"activity"})
      }
   }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Courgette&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");

#doubt:before{
   background-image: url("../assets/wall.jpg");
	width: 100%;
	height: 100%;
	background-size: cover;
	content: "";
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -1;
	display: block;
	
}
#doubt{
    background-color: transparent;
}
#intro{
    margin-top: 0;
}

.ask{
    display: flex;
    justify-content: center;
    align-items: center;
}
.ask input[type="text"]:focus{
    box-shadow: -3px 3px 3px lightblue;
}
#add{
    margin-left: 5px !important; 
    border: 2px solid white;
    width: 80px;
    background-color: darkslateblue;
    color: white;
    transition: 0.3s;
}
#add:hover{
    box-shadow: -3px 3px 3px white;
    font-weight: bolder;
    transform: translate(5px, -5px);
 
}
button{
    width: 200px;
    font-size: 110%;
    height: 50px;
    border-radius: 8px;
    border: 5px solid lightcoral;
     font-family: "Comfortaa", cursive;
     cursor: pointer;
}
h1,h2,h3{
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
}

input{
    width: 50vw;
    height: 40px;
    border-radius: 5px;
    font-size: 120%;
    padding-left: 10px;
    border: 5px solid lightskyblue;
     font-family: "Comfortaa", cursive;
}
#ask{
    position: relative;
    margin-top: 70px;
}
.doubt{
    margin-bottom: 70px;
}
#activity{
    transition: 0.3s;
}
#activity:hover{
    box-shadow: -3px 3px 3px lightcoral;;
    font-weight: bolder;
    transform: translate(5px, -5px);
 
}
</style>