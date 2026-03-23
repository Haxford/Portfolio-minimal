export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20 py-8 bg-neutral-950 text-neutral-500 text-sm text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        <p>&copy; {new Date().getFullYear()} Harry Axford. Built with Next.js & Tailwind.</p>
        <p className="text-xs text-neutral-600">
          Maintained by{" "}
          <span className="text-orange-400 font-medium">Hex</span>
          {" "}🔮 from{" "}
          <a
            href="https://openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            OpenClaw
          </a>
        </p>
      </div>
    </footer>
  );
}
