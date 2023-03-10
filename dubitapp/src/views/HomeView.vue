<template>
  <div>
    <Navbar/>
   
  <div class="home">
    <div class="header">
      <div>
        <h1 class="heading">Welcome to Dubit!</h1>
        <h2 class="heading" >
          It is a platform for the students to ask their doubts related to any
          subject taught in their college. The students can also answer the
          doubts being posted by other students.
        </h2>
      </div>
      <div>
        <img class="change" src="../assets/logo.jpg" alt="loading.." />
      </div>
    </div>
    <div class="header">
      <div>
        <img class="change" src="../assets/help.jpg" alt="loading.." />
      </div>
      <div>
        <h2 class="heading">
          Dubit is a platform through which students can help each other in
          solving dobts related to academics
        </h2>
      </div>
    </div>

    <div class="works">
      <h1>How Dubit Works?</h1>
      <div class="header">
        <h1>1.</h1>
        <div>
          <img src="../assets/doubti.jpg" alt="loading.." />
        </div>
        <div>
          <h2>Having a doubt? Ask your doubts in the Dubit's doubt portal</h2>
        </div>
      </div>

      <div class="header">
        <h1>2.</h1>
        <div>
          <h2>Know an answer? Answer the already asked doubt questions.</h2>
        </div>
        <div>
          <img src="../assets/answer.gif" alt="loading.." />
        </div>
      </div>
    </div>
    <div class="header">
      <div>
        <img class="change" src="../assets/study.jpg" alt="loading.." />
      </div>
      <div>
        <h1 id="become" class="heading">
          Become a part of Dubit and gain knowledge as well as spread your
          knowledge.
        </h1>
      </div>
    </div>
    <div class="footer">
    <h1 id="build">#Let's build a community of students for the students</h1>
    <img src="../assets/community.jpg" alt="loading..." />
    </div>
    <button >Join Now</button>
  </div>
 

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'HomeView',
  components: {
Navbar
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Barlow+Condensed&family=Cedarville+Cursive&family=Comfortaa:wght@600&family=Comic+Neue:wght@300;400&family=Courgette&family=Grape+Nuts&family=Lemonada:wght@400;600&family=Lobster&family=Montserrat:wght@600&family=Overlock:ital,wght@0,400;1,900&family=Paprika&family=Permanent+Marker&family=Secular+One&display=swap");

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  text-align: left;
}
.footer img{
  display: block;
}
.footer{
  padding-left:10px ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#become {
  font-family: "Courgette", cursive;
}
.header h1 {
  font-size: 350%;
  margin-right: 20px;
  background: -webkit-linear-gradient(#a1ffce, #faffd1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Montserrat", sans-serif;
}
.header div {
  padding: 20px;
}
.header h2 {
  font-size: 200%;
  font-family: "Comfortaa", cursive;
  font-weight: bolder;
  line-height: 1.4;
}
.home {
  background-color: #072956;
  color: white;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.header img {
  display: block;
  height: 35vw;
  width: 35vw;
}
img {
  height: 40vw;
  width: 80vw;
  position: relative;
  left: -10px;
}
h1 {
  font-size: 200%;
  margin-top: 50px;
  font-family: "Permanent Marker", cursive;
  letter-spacing: 1px;
}
button {
  display: block;
  height: 50px;
  width: 40%;
  font-family: "Secular One", sans-serif;
  margin: 50px auto;
  cursor: pointer;
  border-radius: 5px;
  font-size: 150%;
  border: transparent;
  transition: 0.5s;
  box-shadow: 0 3px 6px 0 #f8ffae;
  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f8ffae,
    #43c6ac
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f8ffae,
    #43c6ac
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
button:hover {
  transform: scale(1.2);
  box-shadow: -5px 5px 5px #43c6ac;
}
.works h1 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 300%;
}
.works img:hover {
  transform: scale(1.1);
}
.works img {
  transition: 0.5s;
  border: 5px solid white;
  border-radius: 50%;
  width: 30vw;
  height: 30vw;
  display: block;
}
.works {
  border: 1px solid white;
  width: 95vw;
  margin: 20px auto 20px auto;
  background: #072956; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1d2671,
    #612035
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1d2671,
    #612035
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
@media (max-width: 920px) {
  #become {
    font-size: 250%;
  }
}
@media (max-width: 920px) {
  .header h1 {
    font-size: 250%;
  }
  .header h2 {
    font-size: 150%;
  }
  .header img {
    height: 30vw;
    width: 30vw;
  }
}
@media (max-width: 800px) {
  .works {
    background-color: #072956;
    background-image: none;
    border: none;
  }
  .works h1 {
    font-size: 250%;
  }
  .header {
    padding: 0px;
  }
  .works div h1 {
    display: none;
  }
  .works > div {
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
    background: #072956; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #1d2671,
      #612035
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #1d2671,
      #612035
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .header {
    flex-direction: column;
  }

  .header h1 {
    font-size: 350%;
  }
  .header h2 {
    font-size: 200%;
  }
  .header img {
    height: 40vw;
    width: 40vw;
    border-width: 2px;
  }
  #become {
    font-size: 250%;
  }
  .header .change {
    height: 60vw;
    width: 60vw;
  }
  img {
    width: 98vw;
    height: 49vw;
  }
  #build {
    margin: 10px;
  }
}
@media (max-width: 690px) {
  .header h1 {
    font-size: 250%;
  }
  .header h2 {
    font-size: 150%;
  }
  .header img {
    width: 70vw;
    height: 70vw;
  }
  .works img {
    width: 40vw;
    height: 40vw;
  }
  .header .change {
    width: 80vw;
    height: 80vw;
  }
  #become {
    font-size: 200%;
  }
  #build {
    font-size: 150%;
    margin: 5px;
  }
}
@media (max-width:500px){
  .header div{
    padding: 20px;
  }
  .header h2{
    font-size: 120%;
  }
}
@media (max-width:500px){
  .header div{
    padding: 0;
  }
  .works{
    width: 90vw;
  }
  .header h2{
    font-size: 110%;
  }
  #build{
    font-size: 120%;
    margin-top: 60px;
  }
  .heading{
    margin: 60px 10px 30px 10px;
  }
  button{
    width: 60%;
  }
}
</style>
