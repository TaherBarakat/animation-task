import { useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

import cssSvg from "./assets/css.svg";
import htmlSvg from "./assets/html.svg";
import javascriptSvg from "./assets/javascript.svg";
import reactSvg from "./assets/react.svg";
import tailwindSvg from "./assets/tailwind.svg";

function App() {
     const [isSkelton, setIsSkelton] = useState(true);
     const htmlParagraph = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-
scale=1.0">
  <title>Change Background Color</title>
  <style>
    body {
       font-family: Arial, sans-serif;
       display: flex;
 `;
     useEffect(() => {
          const skeltonDisplayPeriod = setTimeout(() => {
               setIsSkelton(false);
          }, 2500);
          return () => {
               clearTimeout(skeltonDisplayPeriod);
          };
     }, []);

     const animate = {
          y: 0,
          x: 0,
          rotate: 0,
     };
     const transition = {
          delay: 0.5,
          duration: 0.5,
     };
     return (
          <>
               <motion.div
                    id="page"
                    initial={{
                         backgroundColor: "#000000",
                    }}
                    animate={{
                         backgroundColor: "#ffff",
                    }}
                    transition={{
                         delay: 2.5,
                    }}
               >
                    <motion.nav
                         id="nav"
                         initial={{ y: -50, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{
                              type: "tween",
                              delay: 2.5,
                         }}
                    >
                         hani div
                    </motion.nav>
                    <main id="main">
                         <div id="banner">
                              <motion.h1
                                   id="title"
                                   initial={{
                                        background: "none",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "#4c4c4c",
                                   }}
                                   animate={{
                                        background: [
                                             "linear-gradient(to right,#4c4c4c -75%, #d41d1d -50%, #1d46d4 -25%,#4c4c4c 0%)",
                                             "linear-gradient(to right,#4c4c4c -25%, #d41d1d 0%, #1d46d4 50%,#4c4c4c 75%)",
                                             "linear-gradient(to right, #d41d1d 0%, #1d46d4 50%)",
                                             // "linear-gradient(to right, #d41d1d 0%, #1d46d4 50%)",
                                             "#000000",
                                        ],
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: [
                                             "transparent",
                                             "transparent",
                                             "transparent",
                                             "transparent",
                                        ],
                                   }}
                                   transition={{
                                        delay: 0.5,
                                        duration: 3,
                                        ease: "easeInOut",
                                   }}
                              >
                                   Front-End React Developer
                              </motion.h1>

                              {isSkelton ? (
                                   <pre id="html"> {htmlParagraph}</pre>
                              ) : (
                                   <div id="details">
                                        <p>
                                             Hi, I am Hani Hadid, a passionate
                                             Front-End Developer from Syria
                                        </p>
                                        <div>
                                             <span>icon </span>
                                             <span>icon </span>
                                        </div>
                                        <ul>
                                             <li>
                                                  <motion.img
                                                       initial={{
                                                            y: -400,
                                                            x: -300,
                                                            rotate: -39.49,
                                                       }}
                                                       animate={animate}
                                                       transition={transition}
                                                       src={htmlSvg}
                                                       alt=""
                                                  />
                                             </li>

                                             <li>
                                                  <motion.img
                                                       initial={{
                                                            scale: 1.3,
                                                            y: -300,
                                                            x: -300,
                                                            rotate: -164.32,
                                                       }}
                                                       animate={{
                                                            ...animate,
                                                            scale: 1,
                                                       }}
                                                       transition={transition}
                                                       src={cssSvg}
                                                       alt=""
                                                  />
                                             </li>

                                             <li>
                                                  <motion.img
                                                       initial={{
                                                            y: -400,
                                                            x: 200,
                                                       }}
                                                       animate={animate}
                                                       transition={transition}
                                                       src={javascriptSvg}
                                                       alt=""
                                                  />
                                             </li>
                                             <li>
                                                  <motion.img
                                                       initial={{
                                                            y: -390,
                                                            x: -200,
                                                       }}
                                                       animate={animate}
                                                       transition={transition}
                                                       src={tailwindSvg}
                                                       alt=""
                                                  />
                                             </li>
                                             <li>
                                                  <motion.img
                                                       initial={{
                                                            y: -350,
                                                            x: 600,
                                                       }}
                                                       animate={animate}
                                                       transition={transition}
                                                       src={reactSvg}
                                                       alt=""
                                                  />
                                             </li>
                                        </ul>
                                   </div>
                              )}
                         </div>
                         <div id="pp">
                              <motion.img
                                   id="nav"
                                   initial={{ x: 500, opacity: 0 }}
                                   animate={{ x: 0, opacity: 1 }}
                                   transition={{
                                        type: "tween",
                                        delay: 2.5,
                                   }}
                                   src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
                                   alt=""
                              />
                         </div>
                    </main>
               </motion.div>
          </>
     );
}

export default App;
