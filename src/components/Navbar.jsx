"use client";

import { Navbar } from "flowbite-react";
import Logo from "./Logo";

export default function TheNavbar() {
  return (
    <Navbar fluid={true}  className="p-6 shadow-sm bg-[#F2F5FD]">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-md" href="#">
          About us
        </Navbar.Link>
        <Navbar.Link className="text-md" href="#">
          Academics
        </Navbar.Link>
        <Navbar.Link className="text-md" href="#">
          School life
        </Navbar.Link>
        <Navbar.Link className="text-md" href="#">
          More information
        </Navbar.Link>
        <Navbar.Link className="font-bold text-md" active>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
