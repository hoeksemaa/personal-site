import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} John. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
