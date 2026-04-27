import Link from "next/link";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";

const menuLinks = [
  { title: "Product", link: "/product" },
  { title: "Intelligence", link: "/intelligence" },
  { title: "Industries", link: "/industries" },
  { title: "Proof", link: "/proof" },
  { title: "Platform", link: "/platform" },
];

export default function Header() {
  return (
    <header className="bg-primary relative border-b-[0.5px] border-white/20">
      <div className="mx-auto max-w-7xl text-white flex justify-between items-center p-4">
        <Link href="/" className="text-xl">
          CONVERGE
        </Link>
        <nav className="text-sm hidden md:block">
          <ul className="flex gap-4">
            {menuLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="text-white/60 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button href="/live-deal" title="See it on a live deal" />
        </div>

        <MobileMenu links={menuLinks} />
      </div>
    </header>
  );
}
