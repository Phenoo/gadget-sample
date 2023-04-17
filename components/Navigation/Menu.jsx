import React from "react";
import Link from 'next/link';
import { navLinks } from "@/data/data";

export function Menu({toggle}) {

    return (
      <nav className="menu" aria-label="menu">
        <ul onClick={toggle}>
          {
            navLinks.map((link) => (
              <li key={link.name}>
                 <Link href={link.url} aria-label={`${link.name} Link`}>
                    {link.name}
                 </Link>
              </li>
            ))
            }
          </ul>
          <div className="absolute bottom-4 right-4 w-[100px]">
          </div>
      </nav>
    );
  }