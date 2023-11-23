import React, { useState } from "react";
import IconButton from "../IconButton";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ToggleMobileNavBurger() {
  const [open, setOpen] = useState(false);

  function toggleOpenNav() {
    setOpen((s: boolean) => !s);
  }

  const variantsBar1 = {
    closed: {
      rotate: "45deg",
    },
    open: {
      rotate: "0deg",
    },
  };

  const variantsBar2 = {
    closed: {
      rotate: "-45deg",
    },
    open: {
      rotate: "0deg",
    },
  };

  const variantsBar3 = {
    closed: {
      rotate: "45deg",
      translate: '4pxgit '
    },
    open: {
      rotate: "0deg",
    },
  };

  return (
    <IconButton onClick={toggleOpenNav}>
      <div className="flex flex-col h-full justify-evenly items-center py-1">
        <motion.div
          variants={variantsBar1}
          animate={open ? "open" : "closed"}
          className="bg-bgDark1 w-3 h-[2px] rounded-2xl self-start origin-left"
        ></motion.div>

        <motion.div
          variants={variantsBar2}
          animate={open ? "open" : "closed"}
          className="bg-bgDark1 w-5 h-[2px] rounded-2xl"
        ></motion.div>

        <motion.div
          variants={variantsBar3}
          animate={open ? "open" : "closed"}
          className="bg-bgDark1 w-4 h-[2px] rounded-2xl self-start origin-right"
        ></motion.div>
      </div>
    </IconButton>
  );
}
