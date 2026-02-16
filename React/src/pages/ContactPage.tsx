import { Clock, Mail, Phone } from 'lucide-react'
import { ContactForm } from '../components/contact/ContactForm'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ContactPage() {
  return (
    <div className="pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Info */}
        <div>
          <SectionHeading
            title="Kontaktirajte nas"
            subtitle="Imate projekt v mislih? Radi bi izvedeli več o njem. Izpolnite obrazec in odgovorili vam bomo v 24 urah."
            align="left"
            className="mb-12"
          />

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Pošljite nam e-pošto</h3>
                <p className="text-zinc-400 mb-1">
                  Za splošna vprašanja in projektne predloge:
                </p>
                <a
                  href="mailto:hello@innosplet.com"
                  className="text-primary hover:text-blue-400 transition-colors font-medium"
                >
                  hello@innosplet.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Telefon</h3>
                <a
                  href="tel:+38631686628"
                  className="text-primary hover:text-blue-400 transition-colors font-medium"
                >
                  +386 31 686 628
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface border border-white/5 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Delovni čas
                </h3>
                <p className="text-zinc-400">
                  Ponedeljek - Petek
                  <br />
                  9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
