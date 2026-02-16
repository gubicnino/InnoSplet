import { Code2, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">
                Inno<span className="text-primary">Splet</span>
              </span>
            </Link>
            <p className="text-zinc-400 max-w-xs leading-relaxed">
              Gradimo sodobne digitalne izkušnje, ki spodbujajo rast
              ambicioznih podjetij po vsem svetu.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Hitre povezave</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  to="/references"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Kontaktirajte nas
                </Link>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">
                  Kariera (kmalu odpiramo)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@innosplet.com"
                  className="hover:text-white transition-colors"
                >
                  hello@innosplet.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Agencija na daljavo
                  <br />
                  Služimo strankam po vsem svetu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {currentYear} InnoSplet Agencija. Vse pravice pridržane.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Politika zasebnosti
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pogoji uporabe
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
