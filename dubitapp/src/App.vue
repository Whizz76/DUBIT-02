<template>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
  color: white;
}
#homeLink{
  color: white !important;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  transition: 0.5s;
  cursor: pointer;
  display: block;
  width: 50px;
  margin: 20px auto 0px auto;
  font-size: 120%;

}
#homeLink:hover{
  scale: 1.2!important;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@media(max-width:500px){
  #homeLink{
    margin: 10px 10px 0 10px;
  }
}
</style>
