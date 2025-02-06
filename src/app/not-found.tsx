import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] px-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
          404 - Page Non Trouvé
        </h2>
        <p className="text-foreground mb-8">La page recherchée n'existe pas</p>
        <Link
          href="/"
          className="px-6 py-3 rounded border border-secondary text-secondary hover:bg-secondary/10 transition-colors inline-block"
        >
          Page d'accueil
        </Link>
      </div>
    </div>
  );
}
