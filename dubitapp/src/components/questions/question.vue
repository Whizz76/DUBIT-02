<template>
    <div v-if="questions.length">
        <div :key="question.ques_id" v-for="question in questions" >
        <details>
            <summary>Q1: {{question.question}} <button @click="addAnswer(question.ques_id)" >Answer</button></summary>
            <div :key="answer.ans_id" v-for="answer in question.answers">
                <p>Ans:{{ answer.ans }}</p>
            </div>
        </details>
        </div>
    </div>
    <div v-else>
<h1>loading...................</h1>
    </div>
</template>
<script>
export default{
    data(){
        return{
            questions:[{ques_id:1,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]},{ques_id:2,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]}
        ,{ques_id:3,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]},{ques_id:4,question:"What is Process Dynamics",answers:[{ans:"Process Dynamics is a way to study various control processes",ans_id:1},{ans:"Process Dynamics is a way to study various control processes",ans_id:2}]}]
        }
    },
    methods:{
        addAnswer(id){
            console.log(id);

        }
    }
}
</script>

<style scoped>
details{
    color: white;
}
</style>