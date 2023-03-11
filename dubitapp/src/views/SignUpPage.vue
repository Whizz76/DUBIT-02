<template>
    <div id="signUpPage">
    <h1>Sign Up Page</h1>
    <div id="Sign">
      <div><img src="../assets/create.jpg" alt="loading..." ></div>
      <div class="Sign">
        <input type="email" placeholder="Enter your email.." >
        <input type="password" placeholder="Enter your password" >
        <input type="password" placeholder="Confirm your password" >
        <button @click="navigate()">Sign Up</button>
      </div>
    </div>
    </div>
  </template>
  <script>
  import router from '@/router'
  export default {
    methods:{
      navigate(){
        router.push({name:"login"});
      }
    }
  }
  </script>
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
  #signUpPage{
    background-color: #072956;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-top:30px ;
    bottom: 0;
  }
  #Sign {
    font-family: "Barlow Condensed", sans-serif;
    display: flex;
    justify-content: center;
    margin: 30px;
    background-color: #072956;
  }
  .Sign {
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
    margin-top: 60px;
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
      #Sign{
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
          width: 80vw;
          height: 80vw;
      }
      input{
          width: 90%;
      }
  }
  </style>