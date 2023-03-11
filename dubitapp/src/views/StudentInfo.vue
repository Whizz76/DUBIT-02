<template>
    <div id="studentInfo" >
    <img class="decorate" src="../assets/hg.gif" alt="loading.."/>
    <h1>Select the following</h1>
      <div id="info">
        <div>
          <select>
            <option>College</option>
            <option>College</option>
          </select>
          <select>
            <option>Branch</option>
          </select>
          <select>
            <option>Semester</option>
          </select>
          <button @click="navigate()">Next</button>
        </div>
        <div>
          <img src="../assets/enter.gif" alt="loading...">
        </div>
      </div>
      </div>
    </template>
    <script>
    import router from '@/router'
    export default{
      name:"StudentInfo",
      methods:{
        navigate(){
          router.push({name:"doubtpage"});
        }
      }
    }
    </script>
    
    <style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
    .decorate{
      width: 120px;
      height: 120px;
     position: absolute;
     top: 0;
     margin-top: 0px;
     right: 0;
      margin-right: 30px;
    }
    #studentInfo{
        background-color: #072956;
        position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top:30px ;
    bottom: 0;
    margin: 0;
    }
    #info {
      display: flex;
      justify-content: space-around;
      font-family: "Courgette", cursive;
      /*background-image: url("../../assets/wall.jpg");*/
      background-color: rgb(7, 40, 84);
    }
    h1 {
      margin-top: 40px;
      color: white;
      font-family: "Comfortaa", cursive;
    }
    select {
      display: block;
      margin-top: 80px;
      height: 40px;
      width: 40vw;
      font-size: 120%;
      font-family: "Comfortaa", cursive;
    }
    img{
        display: block;
        height: 35vw;
        width: 35vw;
    }
    option {
      display: block;
      height: 40px;
      font-family: "Comfortaa", cursive;
    }
    button {
      display: block;
      height: 40px;
      font-size: 120%;
      width: 40%;
      margin-top: 80px;
      margin: 80px auto;
      cursor: pointer;
      font-family: "Comfortaa", cursive;
      border: none;
      transition: 0.5s;
    }
    button:hover {
      background-color: lightblue;
      box-shadow: -3px 3px 3px lightblue;
      font-weight: bolder;
      transform: translate(5px, -5px);
    }
    #info div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    @media (max-width:900px){
        #info{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .decorate{
          width: 15vw;
          height: 15vw;
        }
        select{
            margin-top: 40px;
        }
        button{
            width: 50%;
            margin-bottom: 10px;
        }
        div{
            margin: 10px;
        }
        img{
            margin-top: 40px;
            width: 60vw;
            height: 60vw;
        }
         select{
            width: 70vw;
        }
        h1,option{
          margin-top: 60px;
          font-size: 18px;
        }
    }
    </style>