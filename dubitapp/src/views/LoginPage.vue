<template>
    <div id="loginPage">
    <h1>Login Page</h1>
    <div id="login">
      <div><img src="../assets/login.jpg" alt="loading..." /></div>
      <div class="login">
        <input type="email" placeholder="Enter your email.." />
        <input type="password" placeholder="Enter your password" />
        <!--<router-link :to="{name:'info'}">Login</router-link>-->
        <button @click="navigate()">Login</button>
      </div>
    </div>
    </div>
    <!--<router-view/>-->
  </template>
  <script>
  import router from '@/router'
  //import info from "../studentInfo/studentinfo.vue"
  export default{
    name:"login",
    //components:{info},
    methods:{
      navigate(){
       router.push({name:"studentInfo"});
      }
    }
  }
  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
  
  #loginPage{
    margin: 0;
    background-color: #072956;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top:30px ;
    bottom: 0;
  }

  #login {
    font-family: "Barlow Condensed", sans-serif;
    display: flex;
    justify-content: center;
    margin: 30px;
    background-color: #072956;
  }
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
  }
  img {
    display: flex;
    width: 30vw;
    height: 30vw;
  }
  input {
    display: block;
    height: 30px;
    border-radius: 5px;
    font-size: 120%;
    padding: 10px;
    margin: 30px;
    width: 70%;
    text-align: center;
  }
  h1 {
    color: white;
    margin-top: 0px;
    font-family: "Barlow Condensed", sans-serif;
  }
  button {
    display: block;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: bolder;
    width: 30%;
    font-size: 140%;
    padding: 5px;
    height: 45px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 60px;
    transition: 0.5s;
    border: none;
  }
  button:hover {
    background-color: lightblue;
    box-shadow: -3px 3px 3px lightblue;
    font-weight: bolder;
    transform: translate(5px, -5px);
  }
  @media (max-width:900px){
      #login{
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          margin: 0;
      }
      button{
          width: 50%;
      }
      img{
          margin-top: 60px;
          width: 60vw;
          height: 60vw;
      }
      input{
          width: 90%;
      }
  }
  </style>