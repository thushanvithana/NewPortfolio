"use client";
import React, { useState, useEffect } from "react";
import Skills from "./Skills";
import Bloging from "./Bloging";
import Contact from "./Contact";
import YoutubeVideos from "./YoutubeVideos";
import Footer from "./Footer";
import YellowCover from "./YellowCover";
const Header = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header id="header">
        <a href="#">
          <img
            src="https://i.postimg.cc/zD0971Dy/Untitled-design.webp"
            alt="logo"
            width="105"
            height="95"
          ></img>
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
<br></br>
<br></br>
<br></br>
<br></br>
      <section>
        <h2 id="text" style={{ top: `${70 - scrollValue * 0.1}%` }}>
          <span>Hi there I'm</span>
          <br />
          Thushan Vithana
        </h2>


        <img
          src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png"
          id="bird1"
          style={{
            top: `${scrollValue * -1.5}px`,
            left: `${scrollValue * -2}px`,
          }}
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092542-9747edcc-fb51-4e21-aaf5-a61119393618.png"
          id="bird2"
          style={{
            top: `${scrollValue * -1.5}px`,
            left: `${scrollValue * 2}px`,
          }}
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092559-883fe071-eb4f-4610-8c8b-a037d061c617.png"
          id="forest"
          style={{ top: `${scrollValue * 0.15}px` }}
        />

        <a href="#" id="btn" style={{ marginTop: `${scrollValue * 1.5}px` }}>
          Explore Me
        </a>

        <img
          src="https://i.postimg.cc/XJT7ZDmK/170092605-eada6510-d556-45cc-b7fa-d9e4d1d258d26.png"
          id="rocks"
          style={{ top: `${scrollValue * -0.01}px` }}
        />
        <img
          src="https://user-images.githubusercontent.com/65358991/170092616-5a70c4af-2eed-496f-bde9-b5fcc7142a31.png"
          id="water"
        />
      </section>

      <div class="sec" style={{ backgroundColor: "#0E7678" }}>
        <YellowCover />

        <Skills />

        <div style={{ marginLeft: "65px" }}>
          <h3 style={{ color: "rgb(106, 108, 110)", marginLeft: "20px" }}>
            PRE-HANDLED LANGUAGES AND TOOLS
          </h3>
          <br></br>
          <p style={{ marginLeft: "30px" }}>
            {" "}
            <a
              href="https://developer.android.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                alt="android"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://azure.microsoft.com/en-in/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                alt="azure"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                alt="blender"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/cs/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                alt="csharp"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.adobe.com/in/products/illustrator.html"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                alt="illustrator"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.microsoft.com/en-us/sql-server"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                alt="mssql"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.oracle.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
                alt="oracle"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://www.photoshop.com/en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                alt="photoshop"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="php"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a href="https://unity.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
                alt="unity"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
            <a
              href="https://unrealengine.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg"
                alt="unreal"
                width="40"
                height="40"
              />{" "}
            </a>{" "}
          </p>
          <p style={{ marginLeft: "30px" }}>
            <a href="https://postman.com" target="_blank">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="45"
                height="45"
              />{" "}
            </a>
            <a href="https://developer.android.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/android-studio--v2.png" />{" "}
            </a>
            <a href="https://tomcat.apache.org/" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/tomcat.png" />
            </a>
            <a href="https://visualstudio.microsoft.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/visual-studio.png" />
            </a>
            <a href="https://code.visualstudio.com/download" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" />
            </a>
            <a href="https://www.jetbrains.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/jetbrains.png" />
            </a>
            <a href="https://github.com/" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/github.png" />
            </a>
            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/adobe-after-effects--v1.png" />
            </a>
            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/adobe-lightroom--v1.png" />
            </a>

            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/flutter--v1.png" />
            </a>

            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/react-native--v1.png" />
            </a>

            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/nextjs--v1.png" />
            </a>

            <a href="#" target="_blank">
              <img src="https://img.icons8.com/color/50/000000/spring--v1.png" />
            </a>
          </p>
        </div>

        <Bloging />
        <Contact />
        <div style={{ marginLeft: "65px" }}>
          <p>
            <a href="https://codepen.io/it21024368" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg"
                alt="@it21024368"
                height="30"
                width="40"
              />
            </a>
            <a href="https://twitter.com/@vithanathushan" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                alt="@vithanathushan"
                height="30"
                width="40"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/thushan-vithana-89256917b/?originalSubdomain=lk"
              target="blank"
            >
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="thushan vithana"
                height="30"
                width="40"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/19595249/thushan-vithana"
              target="blank"
            >
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
                alt="thushan vithana"
                height="30"
                width="40"
              />
            </a>
            <br></br>
            <a href="https://www.instagram.com/thushan_vithana/" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                alt="thushanvithana"
                height="30"
                width="40"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCv0a1V5BDbCggwFGqFd5lnQ"
              target="blank"
            >
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
                alt="thushan vithana"
                height="30"
                width="40"
              />
            </a>
            <a href="https://www.hackerrank.com/it21024368" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
                alt="@thushan2271"
                height="30"
                width="40"
              />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/thushan2271"
              target="blank"
            >
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg"
                alt="thushan2271"
                height="30"
                width="40"
              />
            </a>
          </p>
        </div>
        <YoutubeVideos />
      </div>
    </div>
  );
};

export default Header;
