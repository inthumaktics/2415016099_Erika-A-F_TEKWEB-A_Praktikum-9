"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="p-4 bg-white shadow-md flex gap-4">
          <Link
            href="/"
            className={`font-bold ${
              isActive("/")
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Home
          </Link>

          <Link
            href="/blog"
            className={`font-bold ${
              isActive("/blog")
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/about"
            className={`font-bold ${
              isActive("/about")
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            About
          </Link>
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
