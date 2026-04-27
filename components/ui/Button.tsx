import Link from "next/link";

export default function Button({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="py-2.25 px-4.5 rounded-lg text-sm bg-accent text-white transform hover:shadow-lg hover:bg-accent/90 hover:-translate-y-1 duration-300 ease-linear"
    >
      {title}
    </Link>
  );
}
