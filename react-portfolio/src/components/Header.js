import React from "react";
import { motion } from "framer-motion";
import { pic } from "../lab.jpg";
import { Image } from "semantic-ui-react";
import Typing from "react-typing-animation";
import MyModal from "./MyModal";
import { Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <Image src={pic} size="medium" circular />

            <motion.h1
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1>
                    <span>Michael</span>
                </h1>
            </motion.h1>
            <motion.h1
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1>
                    <span>Luck</span>
                </h1>
            </motion.h1>

            <motion.div
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <ul className="info">
                    <Typing>
                        <p>Im a Full Stack Web Developer</p>
                        <p>And an Indie Game dev</p>
                    </Typing>
                    <br />
                    <MyModal />
                    <Menu.Item className="info">
                        <NavLink  to="/about">
                            About Me
                        </NavLink>
                    </Menu.Item>
                </ul>
            </motion.div>
        </div>
    );
}

export default Header;
