import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const links = [
  { href: "/", label: "home" },
  { href: "/todos", label: "Todos" },
  { href: "/docs", label: "Docs" },
  { href: "/add-todos", label: "Add todo" },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex row mb-6 bg-white text-black p-4">
            {links.map((link) => (
              <li className="mx-6" key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
