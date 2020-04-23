# ZINGAKRAAI<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
 <link rel='stylesheet' href='Gallery.css'/>
   <title>Document</title>
</head>
<body>
    <div class="navbar">
        <a href="Home.html">HOME</a>
         <a href="Portfolio.html">PORTFOLIO</a>
            <a href="Contact.html">CONTACT</a> 
              <a href="#Gallery">GALLERY</a>
       </div>
   <div class="marquee"> 
    <marquee behavior="scroll" direction="right">welcome scroll down to view more.</marquee>
   </div>
 

 <div class="container">
   <img src="picture.1.jpg" class="image">
   <img src="picture.2.jpg" class="image">
    <img src="picture.3.jpg" class="image">
    <img src="picture.4.jpg" class="image">
    <img src="picture.5.jpg" class="image">
    <img src="picture.6.jpg" class="image">
    <img src="picture.7.png" class="image">
    <img src="picture.8.png" class="image">
    <img src="picture.9.jpg" class="image">
    <img src="picture.10.jpg" class="image">
    <img src="picture.11.jpg" class="image">
    <img src="picture.12.jpg" class="image">
    <img src="picture.13.jpg" class="image">
    <img src="picture.14.jpg" class="image">
    <img src="picture.17.jpg" class="image">
    <img src="picture.18.jpg" class="image">
 </div>
</div>
</div>
<!-- footer-->
<div class="footer">
    <p>ADDRESS<br>12 NTSHIYANE STREET ILITHA PARK KHAYELITSHA 7784</p>
    <p>E-MAIL<br>zingakraai88@gmail.com </p>>
    <p>Contact number<br>0638290985</p>
    </div>
</body>
</html>.navbar {
    background-color: #333;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    padding-bottom: 1%;
  }
  
  /* Style the links inside the navigation bar */
   .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  /* Change the color of links on hover */
    .navbar a:hover {
    background-color: #ddd;
    color:black;
  }
  
  /* Add a color to the active/current link */
    .navbar a.active {
    background-color: #4CAF50;
    color: white;
  }
h1 {

    padding: 5%;
    text-align: center;
    color: green;
    padding-bottom: 0%;

}

h2  {

    text-align: center;
    color: green;
    font-size: xx-large;
}

.marquee {
   padding-top: 30px;
   margin-top: 80px;
    height: 50px;
    overflow:hidden;
    position: relative;
    background: green;
    color: white;
    border: 1px solid gray;
}

.container {
  position: relative;
  width: 50%;
}



.image {
  display: block;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}



.text {
  color:white;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

   /*FOOTER*/
 
   .footer {
    display: flex;
    justify-content:space-evenly;
    flex-direction: row;
    background:green;
    color:white;
    padding-bottom: 1%;
    padding-top: 2px;
}


