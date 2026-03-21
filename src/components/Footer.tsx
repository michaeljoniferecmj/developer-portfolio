export default function Footer() {
  return (
    <footer className="border-t border-surface-800/50 bg-surface-950">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-surface-500">
          &copy; {new Date().getFullYear()} Michael. Built with Next.js &
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/michaeljoniferecmj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-surface-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-surface-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:michaeljoniferecmj@gmail.com"
            className="text-sm text-surface-400 hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="#contact"
            className="text-sm text-surface-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
