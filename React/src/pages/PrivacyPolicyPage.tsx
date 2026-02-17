import { PageHeading } from '../components/ui/PageHeading'

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHeading title="Politika zasebnosti" />
      <div className="pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="prose prose-invert prose-zinc max-w-none">
          <div className="space-y-12 text-zinc-300">
            {/* Uvod */}
            <section>
              <p className="text-lg leading-relaxed">
                InnoSplet, s. p. (v nadaljevanju "InnoSplet", "mi", "naš" ali "nam") spoštuje vašo zasebnost in se zavezuje k zaščiti vaših osebnih podatkov. Ta politika zasebnosti pojasnjuje, kako zbiramo, uporabljamo, razkrivamo in varujemo vaše osebne podatke v skladu z Uredbo (EU) 2016/679 Evropskega parlamenta in Sveta (Splošna uredba o varstvu podatkov - GDPR) in Zakonom o varstvu osebnih podatkov (ZVOP-2).
              </p>
              <p className="text-sm text-zinc-400 mt-4">
                Zadnja posodobitev: {new Date().toLocaleDateString('sl-SI')}
              </p>
            </section>

            {/* 1. Upravljavec podatkov */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Upravljavec osebnih podatkov</h2>
              <div className="bg-surface/50 border border-white/5 rounded-lg p-6">
                  <p className="mb-2"><strong className="text-white">1.1. Ponudnik storitev:</strong></p>
                  <p className="mb-1">Računalniško programiranje, Štefka Gubič s.p.</p>
                  <p className="mb-1">Naslov: Trdkova 84, 9263 Kuzma</p>
                  <p className="mb-1">Matična številka: 9705368000</p>
                  <p className="mb-1">Davčna številka: 67913237</p>
                  <p className="mb-1">E-pošta: info@innosplet.com</p>
                  <p>Telefon: +386 31 686 628</p>
                </div>
            </section>

            {/* 2. Kategorije osebnih podatkov */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Kategorije osebnih podatkov, ki jih zbiramo</h2>
              <p className="mb-4">Zbiramo naslednje kategorije osebnih podatkov:</p>
              <div className="space-y-4">
                <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                  <h3 className="text-lg font-semibold text-white mb-2">2.1. Podatki iz kontaktne forme</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ime in priimek</li>
                    <li>E-poštni naslov</li>
                    <li>Vsebina sporočila</li>
                    <li>Datum in čas pošiljanja</li>
                  </ul>
                </div>
                <div className="bg-surface/30 border-l-4 border-primary p-4 rounded">
                  <h3 className="text-lg font-semibold text-white mb-2">2.2. Tehnični podatki</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP naslov</li>
                    <li>Vrsta brskalnika in operacijskega sistema</li>
                    <li>Čas dostopa do spletne strani</li>
                    <li>Referenčni URL (stran, s katere ste prišli)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Pravna podlaga */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Pravna podlaga za obdelavo</h2>
              <p className="mb-4">Vaše osebne podatke obdelujemo na podlagi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Vaše privolitve</strong> (člen 6(1)(a) GDPR) - ko nam pošljete sporočilo preko kontaktne forme</li>
                <li><strong className="text-white">Zakonitih interesov</strong> (člen 6(1)(f) GDPR) - za zagotavljanje varnosti spletne strani in preprečevanje zlorab</li>
                <li><strong className="text-white">Izpolnjevanja pogodbe</strong> (člen 6(1)(b) GDPR) - za izvajanje storitev, ki ste jih naročili</li>
              </ul>
            </section>

            {/* 4. Namen obdelave */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Namen obdelave osebnih podatkov</h2>
              <p className="mb-4">Vaše osebne podatke obdelujemo za naslednje namene:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Odgovarjanje na vaša vprašanja in zahteve</li>
                <li>Vzpostavljanje poslovnega odnosa in komuniciranje glede projektov</li>
                <li>Zagotavljanje varnosti in preprečevanje zlorab</li>
                <li>Izboljševanje naših storitev in spletne strani</li>
                <li>Izpolnjevanje zakonskih obveznosti (računovodstvo, davki)</li>
              </ul>
            </section>

            {/* 5. Prejemniki podatkov */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Prejemniki osebnih podatkov</h2>
              <p className="mb-4">Vaše osebne podatke lahko posredujemo:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Ponudnikom gostovanja</strong> - za delovanje spletne strani</li>
                <li><strong className="text-white">Ponudnikom e-poštnih storitev</strong> - za pošiljanje in prejemanje e-pošte</li>
                <li><strong className="text-white">Državnim organom</strong> - kadar je to potrebno po zakonu (davčni organi, sodišča)</li>
              </ul>
              <p className="mt-4 text-sm bg-surface/50 border border-white/5 rounded-lg p-4">
                <strong className="text-white">Opomba:</strong> Vaših podatkov ne prodajamo tretjim osebam za namene trženja brez vaše izrecne privolitve.
              </p>
            </section>

            {/* 6. Prenos v tretje države */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Prenos podatkov v tretje države</h2>
              <p>
                Vaše osebne podatke shranjujemo in obdelujemo na strežnikih znotraj Evropske unije. Če bi prišlo do prenosa podatkov v tretje države, bomo zagotovili ustrezne zaščitne ukrepe v skladu s členom 44 in naslednjimi členi GDPR.
              </p>
            </section>

            {/* 7. Rok hrambe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Rok hrambe osebnih podatkov</h2>
              <div className="space-y-3">
                <p><strong className="text-white">Kontaktne oblike:</strong> Podatki se hranijo 2 leti po zadnjem stiku ali do preklica privolitve</p>
                <p><strong className="text-white">Poslovna korespondenca:</strong> 10 let (v skladu z zakonodajo o računovodstvu)</p>
                <p><strong className="text-white">Tehnični dnevniki:</strong> Do 6 mesecev</p>
              </div>
            </section>

            {/* 8. Vaše pravice */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Vaše pravice</h2>
              <p className="mb-4">V skladu z GDPR in ZVOP-2 imate naslednje pravice:</p>
              <div className="space-y-4">
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.1. Pravica do dostopa</h3>
                  <p className="text-sm">Pravico imate pridobiti podatke o tem, ali obdelujemo vaše osebne podatke, in dostop do teh podatkov.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.2. Pravica do popravka</h3>
                  <p className="text-sm">Pravico imate zahtevati popravek netočnih osebnih podatkov.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.3. Pravica do izbrisa ("pravica do pozabe")</h3>
                  <p className="text-sm">Pravico imate zahtevati izbris vaših osebnih podatkov v primerih, določenih v členu 17 GDPR.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.4. Pravica do omejitve obdelave</h3>
                  <p className="text-sm">Pravico imate zahtevati omejitev obdelave vaših osebnih podatkov.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.5. Pravica do prenosljivosti podatkov</h3>
                  <p className="text-sm">Pravico imate prejeti osebne podatke v strukturirani, splošno uporabljani in strojno berljivi obliki.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.6. Pravica do ugovora</h3>
                  <p className="text-sm">Pravico imate kadarkoli ugovarjati obdelavi vaših osebnih podatkov.</p>
                </div>
                <div className="bg-surface/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">8.7. Pravica do preklica privolitve</h3>
                  <p className="text-sm">Kjer obdelava temelji na privolitvi, lahko privolitev kadarkoli prekličete.</p>
                </div>
              </div>
              <p className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4">
                Za uveljavljanje teh pravic nas kontaktirajte na: <a href="mailto:info@innosplet.com" className="text-primary underline">info@innosplet.com</a>
              </p>
            </section>

            {/* 9. Varnost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Varnostni ukrepi</h2>
              <p className="mb-4">Za zaščito vaših osebnih podatkov izvajamo ustrezne tehnične in organizacijske ukrepe:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS šifriranje za prenos podatkov</li>
                <li>Varna shramba podatkov na zaščitenih strežnikih</li>
                <li>Redne varnostne posodobitve sistemov</li>
                <li>Omejitev dostopa do osebnih podatkov samo pooblaščenim osebam</li>
                <li>Redne varnostne kopije</li>
              </ul>
            </section>

            {/* 10. Piškotki */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Piškotki</h2>
              <p className="mb-4">
                Naša spletna stran trenutno ne uporablja piškotkov za sledenje uporabnikov. Uporabljamo samo nujno potrebne tehnične funkcionalnosti za delovanje spletne strani. Če se bo uporaba piškotkov spremenila, boste o tem obveščeni.
              </p>
            </section>

            {/* 11. Pritožba */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Pravica do pritožbe</h2>
              <p className="mb-4">
                Če menite, da obdelava vaših osebnih podatkov krši veljavno zakonodajo, imate pravico vložiti pritožbo pri nadzornem organu:
              </p>
              <div className="bg-surface/50 border border-white/5 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">Informacijski pooblaščenec Republike Slovenije</strong></p>
                <p className="mb-1">Naslov: Dunajska cesta 22, 1000 Ljubljana</p>
                <p className="mb-1">Telefon: 01 230 97 30</p>
                <p className="mb-1">E-pošta: gp.ip@ip-rs.si</p>
                <p>Spletna stran: <a href="https://www.ip-rs.si" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.ip-rs.si</a></p>
              </div>
            </section>

            {/* 12. Spremembe */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Spremembe politike zasebnosti</h2>
              <p>
                Pridržujemo si pravico do sprememb te politike zasebnosti. O večjih spremembah vas bomo obvestili na spletni strani. Priporočamo, da redno preverjate to stran za morebitne posodobitve.
              </p>
            </section>

            {/* 13. Kontakt */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Kontaktne informacije</h2>
              <p className="mb-4">Za vsa vprašanja v zvezi z varstvom osebnih podatkov nas lahko kontaktirate:</p>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6">
                <p className="mb-2"><strong className="text-white">E-pošta:</strong> <a href="mailto:info@innosplet.com" className="text-primary underline">info@innosplet.com</a></p>
                <p className="mb-2"><strong className="text-white">Telefon:</strong> +386 31 686 628</p>
                <p><strong className="text-white">Odgovorno osebo:</strong> Vas bomo obvestili v 30 dneh od prejema vaše zahteve.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
