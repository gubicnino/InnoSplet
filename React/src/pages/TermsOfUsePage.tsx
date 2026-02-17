import { PageHeading } from '../components/ui/PageHeading'

export function TermsOfUsePage() {
  return (
    <>
      <PageHeading title="Pogoji uporabe" />
      <div className="pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="prose prose-invert prose-zinc max-w-none">
          <div className="space-y-12 text-zinc-300">
            {/* Uvod */}
            <section>
              <p className="text-lg leading-relaxed">
                Ti splošni pogoji uporabe urejajo uporabo spletne strani www.innosplet.com in storitev, ki jih nudi InnoSplet, s. p. (v nadaljevanju "InnoSplet", "ponudnik", "mi" ali "naš"). Z dostopom in uporabo te spletne strani se strinjate s temi pogoji. Prosimo, da jih pozorno preberete.
              </p>
              <p className="text-sm text-zinc-400 mt-4">
                Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI')}
              </p>
            </section>

            {/* 1. Splošne določbe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Splošne določbe</h2>
              <div className="space-y-4">
                <div className="bg-surface/50 border border-white/5 rounded-lg p-6">
                  <p className="mb-2"><strong className="text-white">1.1. Ponudnik storitev:</strong></p>
                  <p className="mb-1">Računalniško programiranje, Štefka Gubič s.p.</p>
                  <p className="mb-1">Naslov: Trdkova 84, 9263 Kuzma</p>
                  <p className="mb-1">Matična številka: 9705368000</p>
                  <p className="mb-1">Davčna številka: 67913237</p>
                  <p className="mb-1">E-pošta: info@innosplet.com</p>
                  <p>Telefon: +386 31 686 628</p>
                </div>
                <p><strong className="text-white">1.2.</strong> Ti pogoji so napisani v skladu s slovensko zakonodajo, predvsem z Obligacijskim zakonikom (OZ), Zakonom o varstvu potrošnikov (ZVPot) in Zakonom o elektronskem poslovanju na trgu (ZEPT).</p>
                <p><strong className="text-white">1.3.</strong> Ponudnik si pridržuje pravico do spremembe teh pogojev. Uporabniki bodo o spremembah obveščeni preko spletne strani.</p>
              </div>
            </section>

            {/* 2. Storitve */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Storitve</h2>
              <div className="space-y-4">
                <p><strong className="text-white">2.1. Obseg storitev</strong></p>
                <p className="mb-4">InnoSplet ponuja naslednje storitve:</p>
                <div className="space-y-3">
                  <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                    <h3 className="text-lg font-semibold text-white mb-2">Razvoj spletnih strani</h3>
                    <p className="text-sm">Zasnova in razvoj sodobnih, odzivnih spletnih strani prilagojenih vašim potrebam</p>
                  </div>
                  <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                    <h3 className="text-lg font-semibold text-white mb-2">Spletne aplikacije</h3>
                    <p className="text-sm">Razvoj naprednih spletnih aplikacij z uporabo sodobnih tehnologij</p>
                  </div>
                  <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                    <h3 className="text-lg font-semibold text-white mb-2">Vzdrževanje in podpora</h3>
                    <p className="text-sm">Tehnična podpora in vzdrževanje obstoječih spletnih rešitev</p>
                  </div>
                  <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                    <h3 className="text-lg font-semibold text-white mb-2">Svetovanje</h3>
                    <p className="text-sm">Svetovanje pri izbiri tehnologij in strategije digitalne prisotnosti</p>
                  </div>
                </div>
                <p className="mt-4"><strong className="text-white">2.2. Specifikacija storitev</strong></p>
                <p>Natančen obseg, specifikacija in cena storitev so določeni v posamezni ponudbi ali pogodbi, sklenjeni med InnoSplet in naročnikom.</p>
              </div>
            </section>

            {/* 3. Sklenitev pogodbe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Sklenitev pogodbe</h2>
              <div className="space-y-3">
                <p><strong className="text-white">3.1.</strong> Kontakt preko spletne strani ne predstavlja zavezujoče ponudbe, ampak povpraševanje po storitvah.</p>
                <p><strong className="text-white">3.2.</strong> Pogodba med InnoSplet in naročnikom je sklenjena z:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pisnim potrditvijo ponudbe s strani naročnika</li>
                  <li>Podpisom pogodbe o izdelavi/vzdrževanju</li>
                  <li>Plačilom predračuna/akontacije (če je dogovorjeno)</li>
                </ul>
                <p><strong className="text-white">3.3.</strong> Pogodba je sklenjena v slovenskem jeziku.</p>
                <p><strong className="text-white">3.4.</strong> InnoSplet si pridržuje pravico odkloniti naročilo brez navedbe razloga.</p>
              </div>
            </section>

            {/* 4. Cene in plačilni pogoji */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cene in plačilni pogoji</h2>
              <div className="space-y-3">
                <p><strong className="text-white">4.1. Cene</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cene so določene individualno za vsak projekt</li>
                  <li>Vse cene so izražene v EUR in vključujejo DDV (če ni drugače navedeno)</li>
                  <li>Ponudba velja 30 dni od izdaje, če ni drugače navedeno</li>
                </ul>
                <p><strong className="text-white">4.2. Plačilni pogoji</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Plačilni rok je navadno 8 dni po izdaji računa</li>
                  <li>Možna je akontacija (predplačilo) v višini 30-50% skupne vrednosti</li>
                  <li>Pri večjih projektih je možna delitev plačila na več obrokov</li>
                  <li>Plačilo je možno preko bančnega nakazila</li>
                </ul>
                <p><strong className="text-white">4.3. Zamuda pri plačilu</strong></p>
                <p>V primeru zamude pri plačilu si InnoSplet pridržuje pravico:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Zaračunati zakonske zamudne obresti</li>
                  <li>Ustaviti delo na projektu do poravnave obveznosti</li>
                  <li>Odstopiti od pogodbe</li>
                </ul>
              </div>
            </section>

            {/* 5. Dobavni roki */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Dobavni roki in izvedba</h2>
              <div className="space-y-3">
                <p><strong className="text-white">5.1.</strong> Dobavni roki so okvirni in odvisni od obsega projekta ter sodelovanja naročnika.</p>
                <p><strong className="text-white">5.2.</strong> Zamuda pri dobavi materialov (vsebine, slike, podatki) s strani naročnika podaljša dobavni rok za ustrezno obdobje.</p>
                <p><strong className="text-white">5.3.</strong> InnoSplet ne odgovarja za zamude, ki nastanejo zaradi višje sile ali razlogov na strani tretjih oseb (gostovanje, domenski registrarji).</p>
                <p><strong className="text-white">5.4.</strong> Naročnik je dolžan sodelovati pri izvedbi projekta in pravočasno posredovati vse potrebne informacije in materiale.</p>
              </div>
            </section>

            {/* 6. Avtorske pravice */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Avtorske pravice in intelektualna lastnina</h2>
              <div className="space-y-3">
                <p><strong className="text-white">6.1. Prenos pravic</strong></p>
                <p>Po plačilu celotne dogovorjene cene se avtorske pravice za izdelano spletno stran/aplikacijo prenesejo na naročnika, razen če je pisno dogovorjeno drugače.</p>
                <p><strong className="text-white">6.2. Izjeme</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Koda ogrodij, knjižnic in odprtokodnih rešitev tretjih oseb ostaja v lasti avtorjev</li>
                  <li>InnoSplet si pridržuje pravico uporabiti splošne module in funkcije v drugih projektih</li>
                  <li>InnoSplet si pridržuje pravico prikazati projekt v portfelju, razen če je drugače dogovorjeno</li>
                </ul>
                <p><strong className="text-white">6.3. Materiali naročnika</strong></p>
                <p>Naročnik jamči, da ima vse potrebne pravice za materiale (besedila, slike, logotipi), ki jih posreduje za uporabo v projektu.</p>
              </div>
            </section>

            {/* 7. Garancija in odgovornost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Garancija in odgovornost</h2>
              <div className="space-y-3">
                <p><strong className="text-white">7.1. Garancija</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>InnoSplet jamči, da so storitve opravljene strokovno in v skladu z dogovorom</li>
                  <li>Garancijska doba za odpravo napak je 6 mesecev po predaji projekta</li>
                  <li>Garancija ne velja za napake, ki nastanejo zaradi posegov naročnika ali tretjih oseb</li>
                </ul>
                <p><strong className="text-white">7.2. Omejitev odgovornosti</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>InnoSplet ne odgovarja za posredno škodo (izpad dobička, izguba podatkov)</li>
                  <li>InnoSplet ne odgovarja za vsebino, ki jo objavi naročnik</li>
                  <li>InnoSplet ne odgovarja za delovanje storitev tretjih oseb (gostovanje, plačilni pristopi)</li>
                  <li>Maksimalna odškodninska odgovornost je omejena na znesek plačila za konkretno storitev</li>
                </ul>
                <p><strong className="text-white">7.3. Reklamacije</strong></p>
                <p>Naročnik mora napake prijaviti pisno na: <a href="mailto:info@innosplet.com" className="text-primary underline">info@innosplet.com</a> v roku 8 dni od odkritja napake.</p>
              </div>
            </section>

            {/* 8. Prekinitev pogodbe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Prekinitev pogodbe</h2>
              <div className="space-y-3">
                <p><strong className="text-white">8.1. Odstop naročnika</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Naročnik lahko odstopi od pogodbe brez navedbe razloga v roku 14 dni (ZVPot), če še ni bil opravljen noben razvoj</li>
                  <li>Če je bilo delo že začeto, ima InnoSplet pravico zahtevati plačilo za že opravljeno delo</li>
                  <li>Akontacija se ne vrača, če je naročnik odstopil po začetku izvajanja del</li>
                </ul>
                <p><strong className="text-white">8.2. Odstop InnoSplet</strong></p>
                <p>InnoSplet lahko odstopi od pogodbe v primeru:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Neporavnanih obveznosti naročnika</li>
                  <li>Nesodelovanju naročnika pri izvedbi projekta</li>
                  <li>Kršitev pogodbenih obveznosti</li>
                  <li>Odkritja, da naročnik uporablja storitve za nezakonite namene</li>
                </ul>
              </div>
            </section>

            {/* 9. Varstvo osebnih podatkov */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Varstvo osebnih podatkov</h2>
              <p>
                Za podrobnosti o obdelavi osebnih podatkov glejte našo <a href="/#/privacy-policy" className="text-primary underline">Politiko zasebnosti</a>. 
                Z uporabo naših storitev se strinjate z obdelavo vaših osebnih podatkov v skladu s to politiko.
              </p>
            </section>

            {/* 10. Reševanje sporov */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Reševanje sporov</h2>
              <div className="space-y-3">
                <p><strong className="text-white">10.1. Mirno reševanje</strong></p>
                <p>Stranki se zavezujeta, da bosta v primeru spora najprej poskusili doseči sporazumno rešitev.</p>
                <p><strong className="text-white">10.2. Sodna pristojnost</strong></p>
                <p>Če sporazumna rešitev ni mogoča, je pristojno sodišče v Ljubljani (ali stvarno pristojno sodišče po sedežu InnoSplet).</p>
                <p><strong className="text-white">10.3. Uporaba prava</strong></p>
                <p>Za pogodbo in morebitne spore se uporablja pravo Republike Slovenije.</p>
                <p><strong className="text-white">10.4. Zunajsodno reševanje</strong></p>
                <p>Potrošniki se lahko obrnejo na:</p>
                <div className="bg-surface/50 border border-white/5 rounded-lg p-6 mt-3">
                  <p className="mb-2"><strong className="text-white">Mirovna komisija pri Trgovinski zbornici Slovenije</strong></p>
                  <p className="mb-1">Naslov: Dimičeva ulica 13, 1000 Ljubljana</p>
                  <p className="mb-1">Telefon: 01 5898 000</p>
                  <p>Spletna stran: <a href="https://www.skupnost-vss.si" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.skupnost-vss.si</a></p>
                </div>
              </div>
            </section>

            {/* 11. Uporaba spletne strani */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Uporaba spletne strani</h2>
              <div className="space-y-3">
                <p><strong className="text-white">11.1. Dovoljeno</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ogled vsebine za osebne, nekomercialne namene</li>
                  <li>Kontaktiranje preko kontaktne forme</li>
                  <li>Deljenje povezav do naše spletne strani</li>
                </ul>
                <p><strong className="text-white">11.2. Prepovedano</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kopiranje, razmnoževanje ali distribucija vsebine brez dovoljenja</li>
                  <li>Poskusi vdora, hekiranja ali onemogočanja delovanja strani</li>
                  <li>Pošiljanje zahtev, ki ovirajo delovanje strežnika (DDoS napadi)</li>
                  <li>Zbiranje podatkov z avtomatskimi orodji (scraping)</li>
                  <li>Uporaba spletne strani za nezakonite namene</li>
                </ul>
              </div>
            </section>

            {/* 12. Končne določbe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Končne določbe</h2>
              <div className="space-y-3">
                <p><strong className="text-white">12.1. Neveljavnost posameznih določb</strong></p>
                <p>Če je katera od določb teh pogojev neveljavna, to ne vpliva na veljavnost ostalih določb.</p>
                <p><strong className="text-white">12.2. Kontaktne informacije</strong></p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
                  <p className="mb-2"><strong className="text-white">Za vsa vprašanja nas kontaktirajte:</strong></p>
                  <p className="mb-2">E-pošta: <a href="mailto:info@innosplet.com" className="text-primary underline">info@innosplet.com</a></p>
                  <p>Telefon: +386 31 686 628</p>
                </div>
                <p className="mt-6"><strong className="text-white">12.3. Veljavnost</strong></p>
                <p>Ti splošni pogoji so v veljavi od {new Date().toLocaleDateString('sl-SI')}.</p>
              </div>
            </section>

            {/* Opomba */}
            <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <p className="text-sm">
                <strong className="text-yellow-400">Pomembno:</strong> Ti splošni pogoji predstavljajo osnovno pravno podlago. Za specifične projekte se lahko sklenejo dodatne pogodbene določbe, ki dopolnjujejo ali spreminjajo te pogoje. V primeru neskladja med temi splošnimi pogoji in posebno pogodbo, veljajo določbe posebne pogodbe.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
