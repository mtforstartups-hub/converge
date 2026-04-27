import Link from "next/link";

export default function Button({
  href,
  title,
  type = "primary",
}: {
  href: string;
  title: string;
  type?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={`max-w-fit py-2.25 px-4.5 rounded-lg text-sm text-font ${type === "primary" ? "bg-accent transform hover:shadow-lg hover:bg-accent/90 hover:-translate-y-1 " : "border border-font/60 hover:border-font"} duration-300 ease-linear`}
    >
      {title}
    </Link>
  );
}
