import styled from "styled-components";
import programming from "../programming.png";

export const HomeContainer = styled.div`
  body {
    height: 100%;
    font-family: "Montserrat", sans-serif;
    max-width: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }

  .home {
    color: white;
    
    background:rgba(0,0,0,0.7);
    max-width: 100vw;
    display: flex;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    flex-direction: column;
    height: 150%;
    line-height: 20px;
  }
  .contactBackground h1{
    margin:120px 0px 10px 0px;
  }
  .projects{
    color: white;
    background-color: rgba(0,0,0,0.7);
    max-width: 100vw;
    display: flex;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    flex-direction: column;
    height: 90%;
    line-height: 20px;
    padding:0px 0px 0px 0px;
   
  }
  
  h1 {
    text-align: center;
    margin:130px 0px 0px 0px;
  font-size:40px;
  }
 
  
  .top {
      background: black;
      width: 80%;
      line-height: 30px;
      margin: 50px 0px 0px 0px;
      color: white;
      height: 100%;
      text-align: justify;

      border-radius: 15px;

      z-index: 1;
    }

    .top:hover {
      animation: move 2s reverse;
    }
    @keyframes move {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(10px);
      }
    }

    .section1:hover {
      animation: move 2s reverse;
    }
    @keyframes move {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(10px);
      }
    }

    .top h3,
    h5 {
      padding: 0px 0px 0px 18px;
      color: green;
    }
    .top1 {
      width: 90%;
      margin: 20px 20px 0px 0px;
      color: white;
      height: 780px;
      display: block;
      border-radius: 2%;
      float: right;
    }
    .section h5 {
      margin: 20px 20px 20px 20px;
      color: blue;
    }

    .section h3 {
      margin: 20px 20px 20px 20px;
    }
    .image {
      width: 30vh;
      height: 30vh;

      border-radius: 50%;
      object-fit: cover;
      position: relative;
      float: center;
      margin: 15px auto auto auto;

      display: block;
    }

    h1.file{
      padding:180px 0px 0px 0px ;
    }
    .about {
      color: white;

      margin: 20px 20px 20px 20px;
    }

    .section h3 {
      display: block;
      text-align: center;
      margin: 0px 0px 0px 0px;

      padding: 20px 10px 10px 10px;
    }
    .section ul li {
      display: block;

      margin: 0px 0px 0px 0px;
    }

    .section {
      background: black;
      width: 80%;
      line-height: 30px;
      margin: 0px 0px 0px 0px;
      color: white;
      height: 100%;
      text-align: justify;
padding-bottom:20px;
      border-radius: 15px;
display:flex;
flex-direction:column;
align-items:center;
      z-index: 1;
    }
    .section2{
transition:all 1s ease-in-out;

    }
    
  
    .section1 {
      overflow: hidden;
      background: black;
      width: 80%;
      line-height: 30px;
      margin: auto auto 5% auto;
      color: white;
      height: 100%;
      text-align: justify;

      border-radius: 15px;

      z-index: 1;
    }
    .fa-bookmark {
      color: green;
      border-color: green;
    }
.contactBackground{
  color: white;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    display: flex;
    font-family: "Montserrat", sans-serif;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    line-height: 20px;
    margin:0px 0px 0px 0px;
 
     position:fixed;

}
    .section2 {
      justify-content: space-around;
      margin: 50px auto 20px auto;
      line-height: 20px;
    
      height: 450px;
      border-radius: 4%;
  
      width: 90%;

      display: block;
      color: white;
    }
    .section2 h3 {
      padding: 80px 0px 0px 20px;
      color: white;
      font-size: 30px;
      text-align: center;
    }
    .section1 h3 {
      text-align: center;
    }
    .section1 h4 {
      padding: 0px 0px 30px 30px;
      display: inline;
      position: relative;
    }
     .contact{
    display:flex;
   flex-direction:column;
   align-items:center;
   padding:10px 0px 0px 0px;

  }

    .blackiconcolor {
      color: blue;
      margin: auto 50%;
      font-size: 40px;
      transition: font-size 1s ease;
    }

    .blackiconcolor1 {
      color: blue;
      margin: -0px 0px 0px 270px;
      font-size: 40px;
      position: relative;

      transition: font-size 1s ease;
    }

    .skillScroll:hover {
      animation: move 2s reverse;
    }
    @keyframes move {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(10px);
      }
    }

    .scroll {
      animation: move 1s infinite alternate;
    }
    @keyframes move {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(10px);
      }
    }
    .skill {
      width: 50vw;
    }
    .section ul li p {
      display: inline;
      padding: 0px 0px 0px 255px;
    }
    .section ul li {
      padding: 10px;
    }
    .section1 ul li {
      padding: 10px 30px;
    }
    .section ul {
      margin: auto auto;
      padding: 0px 50px 0px 50px;
    }
    .html5 {
      margin: 0% 0% 0% 30%;
      display: inline;
    }
    .css3 {
      margin: auto 45%;
      display: inline;
    }
    .javascript {
      margin: auto 10%;
      display: inline;
    }
    .react {
      margin: auto 30%;
      display: inline;
    }
    .adobe {
      margin: auto 12%;
      display: inline;
    }

    .skill-icon {
      margin: auto 50%;
      color: blue;
      font-size: 30px;
    }
    .skill-icon:hover{
animation:icon 2s infinite alternate ;
    }
    @keyframes icon{
from{
  transform:rotateY(0deg);

}
to{
  transform:rotateY(360deg);
}
    }
    .vl {
      border-left: 6px solid green;
      height: 155%;
      margin: 0px 0px 3% 3%;
      display: block;
      position: absolute;
    }
    .v2 {
      border-left: 6px solid green;
      height: 10px;
      margin: 0px 0px 0px 10px;
      display: block;
      position: absolute;
    }
    .dot {
      height: 15px;
      width: 15px;
      background-color: green;
      border-radius: 50%;
      display: block;
      margin-left: 5.5px;
    }
  }
  .fa-calendar-alt {
    display: block;
    font-size: 15px;
    padding: 10px 0px 0px 30px;
    color: green;
  }
  .section1 p {
    display: inline;
    position: relative;
    padding-left: 10px;
  }
  

  .project {
    background: black;
    width: 90vw;
    line-height: 30px;
    justify-items:center;
    color: white;
    height:100%;
    text-align: justify;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(240px,1fr));
    margin:0% auto 10% auto;

    border-radius: 15px;

    z-index: 1;
  
  }
  .mainProject{
  margin:0px 30px 30px 40px;
  }
    .project{
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
    
      justify-items:center;
  
      grid-row-gap: 10px;
      grid-column-gap: 20px;
      height:100%;
      padding:5px 20px 10px 5px;
     }
  }

  

  .project h1 {
    text-align: center;
    padding-top: 30px;
  }
  .fa-file-alt {
    color: blue;
    font-size: 35px;
    display: inline;
    padding-top: -50px;
  }
  .project1 {
    border: 3px solid red;
    width: 250px;
    height: 200px;
  
   
    overflow: hidden;
  }
 
  .resort {
    width: 100%;
    height:100%;
    transition: all 1s ease-in-out;
  }

  .resort:hover {
    opacity: 0.2;
    transform: scale(1.2);
  }
  .box {
    border: 3px solid rgba(0, 0, 0, 0.4);
    background: white;
    opacity: 0.7;
    width: 250px;
    height: 7vh;
    padding: 0px 0px 0px px;
    overflow: hidden;
    transition: all 1s linear;
  }
  .box:hover {
    color: blue;
    opacity: 8;
  }
  .fa-eye {
    color: black;
    font-size: 20px;
    margin: 13px 10px 10px 48px;
  }
  .fa-eye:hover {
    color: blue;
  }
  a {
    text-decoration: none;
  }
  .fa-map-marker-alt {
    font-size: 20px;
 
  }
  .section2 h4 {
    text-align: center;
    font-weight: 90;
  }
  .fa-paper-plane {
  
    font-size: 20px;
  }
  .section2 p {
    text-align: center;
   
    opacity: 0.5;
  }
  .fa-phone {
  
    font-size: 20px;
  }
  .fa-arrow-alt-circle-down {
    display: inline-block;
  }
  @media only screen and (min-width: 550px) {
    .html5 {
      margin: auto 55%;
    
    }
    .section2{
      height:450px;
     
     
    }
    .css3 {
      margin: auto 55%;
     
    }
    .javascript {
      margin: auto 35%;
   
    }
    .react {
      margin: auto 45%;
     
    }
    .adobe {
      margin: auto 12%;
  
    }
    .mainProject{
      padding:5% 25%;
     
    }
   
  }
  @media only screen and (min-width: 650px) {
    .html5 {
      margin: auto 60%;
     
    }
    .css3 {
      margin: auto 60%;
     
    }
    .javascript {
      margin: auto 45%;
   
    }
    .react {
      margin: auto 50%;
     
    }
    .adobe {
      margin: auto 48%;
  
    }
    .project{
     
      
      grid-row-gap: 50px;
     
      padding:0px 20px 0px 20px;

 height:100%;
     }
     
     .mainProject{
      padding:5% 5% 5% 5%;
      margin:5% 5%
    }

  }

  @media only screen and (min-width: 1000px) {
    .image {
   
      margin: 5% 5%;
      display: inline;
    }
     .section2{
   display:flex;
      flex-wrap: wrap;
flex-direction:row;
flex-flow: row wrap;
align-items:center;
  }
   
    .resort{
      width:250px;
    }
    
    .box{
      padding:1% auto 1% auto;
      width:250px;
    }

 
  .contact{
   
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
  
    justify-items:center;

    grid-row-gap: 10px;
    grid-column-gap: 20px;
    height:100%;
    padding:5px 20px 10px 5px;
    background:#3b5dd1;
    width:20%;
    padding:0px 20px 0px 30px;
  }
  .contact:hover{
   animation:vibrate 1s infinite alternate;
  }
@keyframes vibrate {
  from{
  transform:translateY(0px);
  }
  to{
    transform:translateY(10px);
  }

}

  .section1 h2{
    text-align:center;

  }

    .section ul {
      margin: auto 12%;
    }
    .html5 {
      margin-left: 65%;
    }
    .css3 {
      margin-left: 65%;
    }
    .javascript {
      margin-left: 50%;
    }
    .react {
      margin-left: 55%;
    }
    .adobe {
      margin-left: 55%;
    }
    
  }

 
  @media only screen and (min-width: 1050px) {
    .image {
      float: left;
      margin: 5% 5%;
      display: inline;
    }

    .section ul {
      margin: auto 12%;
    }
    .html5 {
      margin-left: 70%;
    }
    .css3 {
      margin-left: 67%;
    }
    .javascript {
      margin-left: 55%;
    }
    .react {
      margin-left: 55%;
    }
    .adobe {
      margin-left: 58%;
    }
   

    .file{
      margin-top:0px;
font-size:50px;
    }
    .projects p{
      font-size:20px;
    }
    
    
  }
`;
