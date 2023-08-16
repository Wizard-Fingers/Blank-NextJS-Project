import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => (
  <header>
    <nav className="logo">
      <ul className="header-items">
        {links.map(({ href, label }) => (
          <Link className="header-item" href={href} key={`${href}${label}`}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  </header>
);

export default Nav;
