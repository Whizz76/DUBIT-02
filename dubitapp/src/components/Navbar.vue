<template>
    <div id="navBar">
    <div id="nav">
    <div id="largeScreens">
        <!-- Using the dubit logo image -->
      <img src="../assets/dubit.jpg" alt="loading" >
      <!-- Directing to login and signUp page-->
      <router-link class="links" :to="{ name: 'login' }"><h3>Login</h3></router-link>
      <router-link class="links" :to="{ name: 'signup' }"><h3>Sign-Up</h3></router-link>
      <h3>Features</h3>
      <h3>About</h3>
      <h3>Contact</h3>
      <div @click="change()" id="smn">
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
      
    </div>
    <div ref="navBarForSmallScreens" class="smn">
      <router-link class="links" :to="{ name: 'login' }"><h3>Login</h3></router-link>
      <router-link class="links" :to="{ name: 'signup' }"><h3>Sign-Up</h3></router-link>
      <h3>Features</h3>
      <h3>About</h3>
      <h3>Contact Us</h3>
    </div>
    </div>
  </template>

  <script>
  export default{
    methods:{
        change(){
            this.$refs.navBarForSmallScreens.classList.toggle("show");
        }
    }
  }
</script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Courgette&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
  h3 {
    cursor: pointer;
    font-family: Comfortaa, sans-serif;
  }
  .smn{
    transition: 0.5s;
    z-index: -1;
    background-color: white;
    justify-content: center;
    align-items: center;
    color: #072956;
    width: 95vw;
    height: 0;
    border-radius: 10px;
    flex-direction: column;
    display:flex;
    top: 80px;
    position: fixed;
  }
  .show h3{
    transition: 0.5s;
  }
  .show h3:hover{
    scale: 1.5;
  }
  #smn{
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    transition: 0.5s;
    height: 20px;
    margin-top: 20px;
    position: absolute;
    right: 0;
    margin-right: 50px;
    cursor: pointer;
  }
  #smn div{
    width: 100%;
    height: 3px;
    background-color: white;
    margin-bottom: 5px;
  }
  .show{
   background-color: white;
    justify-content: center;
    align-items: center;
    z-index: 5;
    color: #072956;
    width: 95vw;
    height: 300px;
    flex-direction: column;
    display:flex;
    position: fixed;
    top: 80px;

  }
  .show .links,.smn .links{
    color: #072956;
  }
  .links{
    color: white;
    text-decoration: none;
   
  }
 #largeScreens {
    position: fixed;
    height: 60px;
    background-color: #072956;
    background-blend-mode: color-dodge;
    color: white;
    display: flex;
    opacity: 1;
    justify-content: space-around;
    top: 0;
    left: 0;
    margin-left: 0;
    width: 100vw;
    z-index: 2;
    font-family: Comfortaa, sans-serif;
  }
  
  #nav img {
    display: block;
    position: relative;
        left: -30px;
    height: 60px;
    width: 120px;
  }
  h3:hover {
    box-sizing: border-box;
  }
  @media (max-width: 800px) {
    #navBar{
        justify-content: center;
        align-items: center;
        display: flex;
    }
   #largeScreens h3 {
      display: none;
    }
    #nav img{
        position: relative;
        left: -30px;
    }
    #nav {
      justify-content: initial;
    }
    #smn{
    display: block;
  }
  }
  </style>