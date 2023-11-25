import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
//import { useUserWidth } from "../../hooks/useUserWidth";
import AccordionButton from "./AccordionButton";
import DropdownItem from "./DropdownItem";
import AccountDetails from "./AccountDetails";
import { useClickOutside } from "../../hooks/useClickOutside";

import { FaPlus } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlineMultilineChart } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { RiFolderInfoLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiHotDog } from "react-icons/gi";


interface MobileNavProps {
  open: boolean;
  onCloseNav: () => void;
}

export default function MobileNav({ open, onCloseNav }: MobileNavProps) {
  //const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  // const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????
  //const width = useUserWidth();
  const [openCard, setOpenCard] = useState("");
  const ref = useClickOutside({ onCloseNav });

  console.log(openCard);

  const variants = {
    open: {
      translateX: 0,
    },
    hidden: {
      translateX: 320,
    },
  };

  const variantsAccorion = {
    hidden: {
      // scaleY: 0,
      height: 0,
      // display: "none",
    },
    open: {
      // scaleY: 1,
      height: "fit-content",
      // display: "block",
    },
  };

  function setOpen(card: string) {
    if (card === openCard) {
      setOpenCard("");
    } else {
      setOpenCard(card);
    }
  }

  return (
    <div>
      {createPortal(
        <motion.div
          variants={variants}
          transition={{ ease: "easeInOut" }}
          ref={ref as React.RefObject<HTMLDivElement>}
          animate={open ? "open" : "hidden"}
          className="absolute flex justify-start items-center flex-col top-0 pt-16 right-0 z-40 h-full w-72 bg-white dark:bg-bgDark1 transition-colors duration-300 border-l-[1px] border-solid border-slate-100 dark:border-bgDark1Hover text-dark dark:text-white"
        >
          <AccountDetails/>
          <AccordionButton
            text="Buy Crypto"
            setOpen={setOpen}
            openCard={openCard}
          />
          <motion.div
            className="flex flex-col origin-top w-full px-6"
            variants={variantsAccorion}
            animate={openCard === "buycrypto" ? "open" : "hidden"}
            transition={{ ease: "easeInOut" }}
          >
            <DropdownItem
              icon={<FaPlus />}
              title="Quick buy"
              desc="Buy or sell your crypto"
              to="quickbuy"
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<FaPeopleArrows />}
              title="P2P"
              desc="Exchange with others"
              to="p2p"
              onCloseFunction={onCloseNav}
            />
          </motion.div>

          <AccordionButton text="Trade" setOpen={setOpen} openCard={openCard} />
          <motion.div
            className="flex flex-col origin-top w-full px-6"
            variants={variantsAccorion}
            animate={openCard === "trade" ? "open" : "hidden"}
            transition={{ ease: "easeInOut" }}
          >
            <DropdownItem
              icon={<MdOutlineMultilineChart />}
              title="Spot"
              desc="Trade assets with tools"
              to="spot"
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<FaChartLine />}
              title="Futures"
              desc="Invest with borrowed funds"
              to="futures"
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<FaArrowsRotate />}
              title="Convert"
              desc="Convert between crypto"
              to="convert"
              onCloseFunction={onCloseNav}
            />
          </motion.div>

          <AccordionButton text="Tools" setOpen={setOpen} openCard={openCard} />
          <motion.div
            className="flex flex-col origin-top w-full px-6"
            variants={variantsAccorion}
            animate={openCard === "tools" ? "open" : "hidden"}
            transition={{ ease: "easeInOut" }}
          >
            <DropdownItem
              icon={<GiHotDog />}
              title="Mati"
              desc="Zrób"
              to=""
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<GiHotDog />}
              title="Tutaj"
              desc="Coś"
              to=""
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<GiHotDog />}
              title="Fajnego"
              desc="Co mówiłeś"
              to=""
              onCloseFunction={onCloseNav}
            />
          </motion.div>

          <AccordionButton text="More" setOpen={setOpen} openCard={openCard} />
          <motion.div
            className="flex flex-col origin-top w-full px-6"
            variants={variantsAccorion}
            animate={openCard === "more" ? "open" : "hidden"}
            transition={{ ease: "easeInOut" }}
          >
            <DropdownItem
              icon={<RiStackLine />}
              title="Stacking"
              desc="Earn daily"
              to="stack"
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<HiOutlineClipboardDocumentList />}
              title="Leaderboard"
              desc="Let's see the best investors"
              to="leaderboard"
              onCloseFunction={onCloseNav}
            />
            <DropdownItem
              icon={<RiFolderInfoLine />}
              title="About Us"
              desc="Something about the project"
              to="about"
              onCloseFunction={onCloseNav}
            />
          </motion.div>

          <div className="bg-white dark:bg-bgDark1 h-full w-full"></div>
        </motion.div>,
        document.body
      )}
    </div>
  );
}
