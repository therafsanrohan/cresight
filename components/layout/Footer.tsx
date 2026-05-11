import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-cresight-black py-16 border-t border-cresight-graphite relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-12 md:mb-0 flex flex-col items-center md:items-start">
          <h3 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-6">
            Cresight
          </h3>
          <p className="text-cresight-gray font-light uppercase tracking-widest text-xs">
            Global Premium Creative Agency
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-semibold">
          <div className="flex flex-col space-y-4">
            <h4 className="text-cresight-gray mb-2">Navigation</h4>
            <Link href="/work" className="hover:text-cresight-gray transition-colors">Work</Link>
            <Link href="/services" className="hover:text-cresight-gray transition-colors">Services</Link>
            <Link href="/about" className="hover:text-cresight-gray transition-colors">About</Link>
            <Link href="/journal" className="hover:text-cresight-gray transition-colors">Journal</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-cresight-gray mb-2">Socials</h4>
            <a href="#" className="hover:text-cresight-gray transition-colors">Instagram</a>
            <a href="#" className="hover:text-cresight-gray transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cresight-gray transition-colors">Behance</a>
            <a href="#" className="hover:text-cresight-gray transition-colors">Twitter</a>
          </div>
          <div className="flex flex-col space-y-4 col-span-2 md:col-span-1 mt-8 md:mt-0 items-center md:items-start">
            <h4 className="text-cresight-gray mb-2">Contact</h4>
            <a href="mailto:hello@cresight.com" className="hover:text-cresight-gray transition-colors">hello@cresight.com</a>
            <p className="text-cresight-gray font-light mt-4 text-xs">
              &copy; {new Date().getFullYear()} Cresight. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
