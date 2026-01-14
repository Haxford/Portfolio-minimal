export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20 py-8 bg-neutral-950 text-neutral-500 text-sm text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Harry Axford. Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
