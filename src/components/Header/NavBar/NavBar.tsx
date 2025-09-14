'use client';

import { useState } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ButtonCollection from "./ButtonCollection";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(!toggle);
  }

  const navBarButtonsInformation = [
    { title: 'Home', link: '/' },
    { title: 'Interest', link: '/interest' },
    { title: 'Projects', link: '/projects' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ];

  // TODO: Fix the buttons so that the arrow part is more round and the buttons overlap correctly.
  return (
    <div className="navbar" style={{ alignItems: 'flex-start', flexDirection: 'row', display: 'flex' }}>
      {!toggle || <ButtonCollection menuItems={navBarButtonsInformation} />}

      <div
        className="menu-icon"
        style={{
          backgroundColor: '#06710D',
          borderRadius: 10,
          borderColor: 'black',
          justifyItems: 'self-end',
          borderWidth: 2,
        }}>
        {
          toggle ?
            <MdKeyboardDoubleArrowRight size={53} color="black" onClick={openMenu} />
            : <MdKeyboardDoubleArrowLeft size={53} color="black" onClick={openMenu} />
        }
      </div>
    </div>
  );
}
