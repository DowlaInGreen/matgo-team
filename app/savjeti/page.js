'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronDown, ChevronUp, Search, Phone, Mail, 
  Menu, X, ArrowRight, Home,
  Hammer, Zap, PaintBucket, Grid3X3, Bath, Paintbrush
} from 'lucide-react'

// WhatsApp ikona komponenta
const WhatsAppIcon = ({ size = 24, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Podaci za Q&A
const faqData = [
  {
    id: 'keramika',
    naslov: 'Keramičarski radovi',
    icon: Grid3X3,
    pitanja: [
      {
        p: 'Koliko dugo traje postavljanje keramike u kupaonici?',
        o: 'Postavljanje keramike u prosječnoj kupaonici (4-6 m²) traje 3-5 radnih dana. To uključuje pripremu podloge, hidroizolaciju, postavljanje pločica i fugiranje. Za veće kupaonice ili složenije uzorke može trajati do 7 dana.'
      },
      {
        p: 'Koja je razlika između glazirane i neglazirane keramike?',
        o: 'Glazirana keramika ima staklasti sloj koji je čini vodootpornom i lakšom za čišćenje - idealna je za zidove i podove u kupaonicama. Neglazirana keramika je poroznija, ima bolju protukliznost, ali zahtijeva impregnaciju. Preporučujemo glaziranu za unutarnje prostore.'
      },
      {
        p: 'Koliko ljepila i fuge trebam za 10 m² poda?',
        o: 'Za 10 m² poda trebate otprilike 25-30 kg ljepila za keramiku (ovisno o ravnosti podloge) i 2-3 kg mase za fugiranje. Preporučujemo uvijek uzeti 10% više materijala kao rezervu za rezanje i eventualne greške.'
      },
      {
        p: 'Mogu li postaviti nove pločice preko starih?',
        o: 'Da, moguće je ako su stare pločice čvrsto vezane, bez pukotina i na ravnoj podlozi. Potrebno je obrusiti stare pločice za bolju adheziju i koristiti fleksibilno ljepilo. Međutim, to podiže razinu poda za 1-2 cm što može biti problem kod vrata.'
      },
      {
        p: 'Što je rektificirana keramika i zašto je skuplja?',
        o: 'Rektificirana keramika ima strojno obrađene rubove pod kutom od 90°, što omogućuje postavljanje s minimalnim fugama (2-3 mm). Daje moderniji izgled i lakše se čisti. Skuplja je zbog dodatne obrade, ali rezultat je estetski superioran.'
      },
      {
        p: 'Koliko vremena mora proći prije fugiranja?',
        o: 'Nakon postavljanja pločica potrebno je pričekati minimalno 24 sata prije fugiranja. U vlažnijim uvjetima ili pri nižim temperaturama preporučamo 48 sati. Ljepilo mora biti potpuno suho kako fuga ne bi ispucala.'
      },
      {
        p: 'Koja je minimalna debljina ljepila za podne pločice?',
        o: 'Minimalna debljina ljepila je 3 mm, a optimalna 5-10 mm ovisno o formatu pločice i ravnosti podloge. Za velike formate (60x60 cm i veće) preporučamo kombiniranu metodu - ljepilo i na podlogu i na pločicu.'
      },
      {
        p: 'Kako izračunati koliko pločica trebam?',
        o: 'Izmjerite površinu u m², dodajte 10% za rezanje kod jednostavnih uzoraka ili 15% za dijagonalno postavljanje. Za kupaonicu izračunajte zidove i pod odvojeno. Primjer: pod 5 m² + 10% = 5.5 m² pločica za naručiti.'
      },
      {
        p: 'Zašto pločice pucaju nakon postavljanja?',
        o: 'Najčešći uzroci su: nedovoljno ljepila (šupljine ispod pločice), prebrzo sušenje ljepila, pomicanje podloge, ili neprimjereno ljepilo za podlogu. Kvalitetna priprema podloge i pravilna tehnika postavljanja sprječavaju pucanje.'
      },
      {
        p: 'Je li potrebna hidroizolacija ispod pločica u kupaonici?',
        o: 'Da, obavezno! Hidroizolacija je nužna u tuš zoni, oko kade i na podu kupaonice. Koristimo tekuću hidroizolaciju koja se nanosi u 2 sloja. Štiti od prodora vode u konstrukciju i sprječava pojavu plijesni.'
      },
      {
        p: 'Mogu li sam postaviti keramiku ili trebam majstora?',
        o: 'Jednostavnije radove (ravni pod, pravokutne pločice) možete pokušati sami uz dobru pripremu. Međutim, za kupaonice, dijagonalno postavljanje, velike formate ili rezanje oko instalacija preporučamo profesionalca - greške mogu biti skupe.'
      }
    ]
  },
  {
    id: 'elektrika',
    naslov: 'Elektroinstalacije',
    icon: Zap,
    pitanja: [
      {
        p: 'Kada je potrebna potpuna zamjena elektroinstalacija?',
        o: 'Potpuna zamjena preporučuje se za instalacije starije od 30-40 godina, ako imate aluminijske vodiče umjesto bakrenih, stare osigurače umjesto automatskih, ili ako često iskače osigurač. Stare instalacije nisu dimenzionirane za moderne potrošače.'
      },
      {
        p: 'Koja je razlika između jednofaznog i trofaznog priključka?',
        o: 'Jednofazni priključak (230V) dovoljan je za većinu stanova do 80 m². Trofazni priključak (400V) potreban je za veće kuće, električne štednjake, dizalice topline ili radionice. Trofazni omogućuje veću snagu i ravnomjerniju raspodjelu opterećenja.'
      },
      {
        p: 'Što je FID sklopka i zašto je važna?',
        o: 'FID (diferencijalna) sklopka štiti od strujnog udara - prekida struju u djeliću sekunde ako detektira "curenje" struje. Obavezna je u kupaonicama, kuhinjama i vanjskim instalacijama. Može vam spasiti život!'
      },
      {
        p: 'Koliko utičnica trebam u dnevnom boravku?',
        o: 'Preporučamo minimalno 1 dvostruku utičnicu na svakih 4 m zida, plus dodatne za TV zonu (4-6 utičnica), radni kutak i klima uređaj. Za prosječni dnevni boravak od 20 m² to je 10-12 utičnica. Bolje više nego manje!'
      },
      {
        p: 'Mogu li sam zamijeniti utičnicu ili prekidač?',
        o: 'Zamjena "lica" utičnice ili prekidača je jednostavna ako znate isključiti osigurač. Međutim, bilo kakvi radovi na žicama, dodavanje novih točaka ili rad na razvodnoj ploči zahtijevaju ovlaštenog električara - to je zakonska obveza i pitanje sigurnosti.'
      },
      {
        p: 'Što znači IP zaštita kod kupaonskih svjetiljki?',
        o: 'IP oznaka pokazuje zaštitu od vode i prašine. Za kupaonice: zona 0 (u kadi) treba IP67, zona 1 (iznad kade) IP65, zona 2 (60 cm od kade) IP44. Nikad ne stavljajte običnu svjetiljku u kupaonicu!'
      },
      {
        p: 'Koliko dugo traje kompletna zamjena instalacija u stanu?',
        o: 'Za stan od 50-70 m² potrebno je 5-7 radnih dana za električne radove, plus 2-3 dana za krpanje zidova. Uključuje štemanje, polaganje vodova, montažu razvodne ploče i svih priključaka. Stan mora biti prazan.'
      },
      {
        p: 'Trebam li uzemljenje u starom stanu?',
        o: 'Da, uzemljenje je obavezno po propisima i ključno za sigurnost. Štiti od strujnog udara kod kvara na uređajima. Ako vaš stan nema uzemljenje (stare instalacije s 2 žice), potrebna je potpuna rekonstrukcija instalacija.'
      },
      {
        p: 'Kako odabrati pravu snagu osigurača?',
        o: 'Snaga osigurača ovisi o presjeku vodiča i potrošačima. Tipično: rasvjeta 10A, utičnice 16A, štednjak 20-25A, bojler 16A. Prejak osigurač neće zaštititi vodič od pregrijavanja - to može uzrokovati požar!'
      },
      {
        p: 'Što je pametna instalacija i isplati li se?',
        o: 'Pametna instalacija omogućuje upravljanje rasvjetom, roletama, grijanjem putem aplikacije. Zahtijeva dodatno ožičenje ili bežične module. Isplati se kod novogradnje ili veće renovacije - povećava udobnost i može smanjiti račune za struju do 20%.'
      },
      {
        p: 'Kako prepoznati preopterećenu instalaciju?',
        o: 'Znakovi upozorenja: često ispadanje osigurača, topli prekidači ili utičnice, treperenje svjetla, miris paljevine, tamnjenje utičnica. Ako primijetite bilo što od navedenog, hitno pozovite električara - rizik od požara je realan!'
      }
    ]
  },
  {
    id: 'zbukanje',
    naslov: 'Žbukanje i gletanje',
    icon: PaintBucket,
    pitanja: [
      {
        p: 'Koja je razlika između žbukanja i gletanja?',
        o: 'Žbukanje je gruba obrada zida (sloj 1-3 cm) koja daje ravnost i čvrstoću. Gletanje je fina završna obrada (sloj 1-3 mm) koja daje glatku površinu spremnu za bojanje. Redoslijed je uvijek: žbuka → glet → boja.'
      },
      {
        p: 'Koliko slojeva gleta je potrebno?',
        o: 'Standardno su potrebna 2 sloja gleta s brušenjem između slojeva. Za savršeno glatke površine (npr. kod sjajnih boja) preporučamo 3 sloja. Svaki sloj mora biti potpuno suh prije nanošenja sljedećeg (12-24 sata).'
      },
      {
        p: 'Mogu li gletati preko stare boje?',
        o: 'Da, ako je stara boja čvrsto vezana i nije na bazi ulja. Potrebno je površinu oprati, premazati grundom i tek onda gletati. Ako se stara boja ljušti, mora se u potpunosti ukloniti do zdrave podloge.'
      },
      {
        p: 'Zašto se pojavljuju pukotine na zidovima?',
        o: 'Uzroci su: slijeganje objekta, temperaturne promjene, vlaga, prebrzo sušenje žbuke, ili loša priprema podloge. Male pukotine mogu se popraviti akrillnim kitom, a veće zahtijevaju armaturnu mrežicu i ponovnu obradu.'
      },
      {
        p: 'Što je strojno žbukanje i koje su prednosti?',
        o: 'Strojno žbukanje koristi specijalni stroj koji miješa i nanosi žbuku pod pritiskom. Prednosti: 3x brže od ručnog, ravnomjernija konzistencija, bolja adhezija, manje otpada. Isplati se za površine veće od 50 m².'
      },
      {
        p: 'Koliko se mora sušiti žbuka prije gletanja?',
        o: 'Cementna žbuka mora se sušiti minimalno 1 dan po milimetru debljine - dakle, sloj od 2 cm treba 20 dana! Gipsana žbuka suši brže, 7-14 dana. Prerana obrada uzrokuje pukotine i ljuštenje.'
      },
      {
        p: 'Trebam li grundirati zid prije gletanja?',
        o: 'Da, grundiranje je obavezno! Grund smanjuje upojnost podloge, poboljšava prianjanje i sprječava prebrzo sušenje gleta. Koristimo različite grundove ovisno o podlozi - beton, cigla ili stara žbuka.'
      },
      {
        p: 'Kako popraviti rupice i udubine na zidu?',
        o: 'Male rupice (do 5 mm) popravite gletom u 2 sloja. Veće udubine prvo popunite reparaturnom masom ili gipsanom žbukom, pustite da se osuši, pa zagletajte. Za rupice od tiplova: izvadite tipl, popunite, zagletajte.'
      },
      {
        p: 'Što je sanacijska žbuka i kada se koristi?',
        o: 'Sanacijska žbuka koristi se na vlažnim zidovima - upija vlagu iz zida i omogućuje isparavanje. Koristi se u podrumima, prizemlju starih kuća, oko prozora. Obična žbuka na vlažnom zidu bi se oljuštila.'
      },
      {
        p: 'Koliko košta žbukanje i gletanje po m²?',
        o: 'Cijene variraju ovisno o stanju zidova i regiji. Orijentacijski: žbukanje 8-15 €/m², gletanje 5-10 €/m², samo gletanje gotovih zidova 4-7 €/m². Za točnu cijenu potreban je pregled - kontaktirajte nas za besplatnu procjenu!'
      },
      {
        p: 'Mogu li sam gletati zidove?',
        o: 'Gletanje zahtijeva vještinu i iskustvo za postizanje ravne površine. Početnička greška: vidljivi tragovi gleterice, neravnine i valovitost. Za manje popravke možete probati, ali za cijele prostorije preporučamo profesionalca.'
      }
    ]
  },
  {
    id: 'podovi',
    naslov: 'Podovi (laminat, parket)',
    icon: Hammer,
    pitanja: [
      {
        p: 'Koja je razlika između laminata i parketa?',
        o: 'Parket je prirodno drvo (masivno ili troslojno) - može se brusiti i obnavljati, traje 50+ godina. Laminat je HDF ploča s fotografijom drva - ne može se brusiti, traje 15-25 godina. Parket je topliji i vrjedniji, laminat je jeftiniji i praktičniji.'
      },
      {
        p: 'Koliko debela mora biti podloga za laminat?',
        o: 'Podloga (filc/spužva) treba biti 2-3 mm za ravne podove, ili do 5 mm za manje neravnine. NE koristite podlogu deblju od 5 mm - laminat će "plivati" i spojevi će pucati. Podloga smanjuje buku i toplinski izolira.'
      },
      {
        p: 'Mogu li postaviti laminat u kupaonicu?',
        o: 'Obični laminat NE smije u kupaonicu - bubriti će od vlage. Postoje vodootporni laminati (SPC/LVT) koji su pogodni za kupaonice i kuhinju. Cijena im je viša, ali izgledaju kao drvo i 100% su vodootporni.'
      },
      {
        p: 'Što je klasa otpornosti laminata (AC)?',
        o: 'AC oznaka pokazuje otpornost na habanje: AC3 - spavaće sobe, AC4 - dnevni boravak, AC5 - poslovni prostori. Za dom preporučamo minimalno AC4. Viša klasa = duži vijek trajanja i bolja otpornost na ogrebotine.'
      },
      {
        p: 'Koliko vremena mora odstajati laminat prije postavljanja?',
        o: 'Laminat mora odstajati u prostoriji minimalno 48 sati (idealno 72) da se prilagodi temperaturi i vlazi prostora. Ostavite ga u originalnom pakiranju, horizontalno. Postavljanje bez aklimatizacije uzrokuje bubrenje ili skupljanje.'
      },
      {
        p: 'Zašto laminat škripi i kako to spriječiti?',
        o: 'Škripanje uzrokuje: neravna podloga, nedostatak dilatacijske fuge uz zidove, pogrešno zaključavanje spojeva, ili vlaga. Ostavite 8-10 mm razmaka od zidova, provjerite ravnost podloge (max 2 mm odstupanja na 2 m).'
      },
      {
        p: 'Mogu li postaviti novi pod preko starog parketa?',
        o: 'Da, ako je stari parket ravan, čvrst i suh. Pregledajte škripanje i labave daske - to treba popraviti prije. Novi laminat/parket može se položiti preko, ali to podiže razinu poda za 1-1.5 cm. Pazite na vrata!'
      },
      {
        p: 'Koliko često treba obnoviti parket?',
        o: 'Lakiranom parketu potrebno je obnavljanje svakih 8-12 godina (brušenje i lakiranje). Uljeni parket treba uljiti svake 1-2 godine, ali se ne mora brusiti. Obnova vraća parket u novo stanje i može se raditi 3-5 puta.'
      },
      {
        p: 'Koja je optimalna debljina parketa za podno grijanje?',
        o: 'Za podno grijanje biramo troslojni parket debljine 14-15 mm. Masivni parket se ne preporučuje - može se iskriviti. Drvo mora imati niski toplinski otpor. Hrast i jasen su najbolji izbor, bukvu izbjegavajte.'
      },
      {
        p: 'Kako održavati laminat i parket?',
        o: 'Laminat: brišite vlažnom (ne mokrom!) krpom, bez pranja vodom, koristite specijalna sredstva. Parket: redovito usisavajte, brišite neocjeđenom krpom, lakirani 2x godišnje sredstvom za parket, uljeni prema potrebi nauljite.'
      },
      {
        p: 'Mogu li sam postaviti laminat?',
        o: 'Da! Moderni click-laminati su dizajnirani za DIY postavljanje. Trebate: ravnu podlogu, aklimatiziran laminat, podlogu, distancere i pilu. Pratite upute proizvođača. Za parket ipak preporučamo profesionalca zbog brušenja i lakiranja.'
      }
    ]
  },
  {
    id: 'kupaonica',
    naslov: 'Kupaonica - adaptacija',
    icon: Bath,
    pitanja: [
      {
        p: 'Koliko traje kompletna adaptacija kupaonice?',
        o: 'Kompletna adaptacija prosječne kupaonice (5-6 m²) traje 10-14 radnih dana. Uključuje: demontažu, instalacije, hidroizolaciju, keramiku, montažu sanitarija i finishing. Za veće kupaonice ili složenije projekte do 3 tjedna.'
      },
      {
        p: 'Što sve uključuje cijena adaptacije kupaonice?',
        o: 'Kompletna adaptacija uključuje: rušenje starog, odvoz šute, vodoinstalacije, elektrika, hidroizolacija, estrih, keramika, fugiranje, montaža sanitarija, armatura, ogledalo, accessories. Materijal može biti uključen ili ne - ovisno o dogovoru.'
      },
      {
        p: 'Mogu li premjestiti WC školjku na drugu poziciju?',
        o: 'Da, ali s ograničenjima. WC mora imati pad cijevi minimalno 2%, a udaljenost od vertikale max 1-1.5 m. Veće premještanje zahtijeva podizanje poda ili korištenje sanitarne pumpe (maceratora). Premještanje poskupljuje radove.'
      },
      {
        p: 'Kada je potrebna hidroizolacija i kako se radi?',
        o: 'Hidroizolacija je OBAVEZNA u cijeloj kupaonici - pod komplet, zidovi minimalno 20 cm visine, tuš zona do stropa. Koristimo tekuću hidroizolaciju u 2 sloja s bandažiranjem uglova. Bez hidroizolacije - problemi s vlagom i plijesni!'
      },
      {
        p: 'Tuš kabina ili kada - što je praktičnije?',
        o: 'Tuš kabina: manje prostora, lakši pristup (starije osobe), manja potrošnja vode, moderniji izgled. Kada: opuštanje, kupanje djece, veća vrijednost nekretnine. Za mali prostor - tuš. Imamo li prostora - kombinacija ili walk-in tuš.'
      },
      {
        p: 'Što je walk-in tuš i koje su prednosti?',
        o: 'Walk-in tuš nema vrata ni kadu - samo staklenu stjenku ili otvoreni ulaz. Prednosti: lako čišćenje, moderan izgled, pristupačnost, prostornost. Potrebna je dobra hidroizolacija i nagib poda prema slivniku. Minimalna širina 90 cm.'
      },
      {
        p: 'Kako odabrati pravu wc školjku?',
        o: 'Tipovi: stojeća (klasična), viseća (modernija, lakše čišćenje). Odabir: rimless (bez ruba) je higijenski, duboko ispiranje bolje od plitkog, soft-close daska obavezna. Za manje kupaonice - viseća školjka vizualno povećava prostor.'
      },
      {
        p: 'Koje cijevi koristiti - plastika ili bakar?',
        o: 'Danas se koristi: PPR za toplu/hladnu vodu (jeftino, trajno, bez korozije), multislojne cijevi za vidljive instalacije (estetski), bakar za plin. Stare pocinčane cijevi obavezno zamijeniti - korodiraju iznutra i smanjuju protok.'
      },
      {
        p: 'Treba li kupaonici prozor ili je ventilator dovoljan?',
        o: 'Prozor je idealan za prirodnu ventilaciju i svjetlo. Ako nema prozora, kvalitetni ventilator je OBAVEZAN - minimalno 100 m³/h s tajmerom (radi 15 min nakon gašenja svjetla). Bez ventilacije - sigurna pojava plijesni!'
      },
      {
        p: 'Kako spriječiti pojavu plijesni u kupaonici?',
        o: 'Ključno: dobra ventilacija (prozor ili ventilator), kvalitetna hidroizolacija, brtvljenje spojeva silikonom, redovito čišćenje fuga. Nakon tuširanja ostavite vrata otvorena 15-20 min. Antifungalne boje za strop.'
      },
      {
        p: 'Mogu li sam renovirati kupaonicu?',
        o: 'Neke stvari možete: bojanje, zamjena armatura, montaža ormarića. Ali instalacije, hidroizolaciju i keramiku prepustite profesionalcima. Greška u hidroizolaciji = vlaga u konstrukciji = skupa sanacija. Nije vrijedno rizika!'
      }
    ]
  },
  {
    id: 'soboslikarstvo',
    naslov: 'Soboslikarski radovi',
    icon: Paintbrush,
    pitanja: [
      {
        p: 'Koliko slojeva boje je potrebno za dobar rezultat?',
        o: 'Minimalno 2 sloja boje na grundirani zid. Za prekrivanje tamne boje svijetlom potrebna su 3 sloja. Prvi sloj razrijedite 10% vodom, drugi nanosite nerazrijeđen. Kvalitetna boja s dobrom pokrivnošću štedi vrijeme i novac.'
      },
      {
        p: 'Koja je razlika između disperzivne i lateks boje?',
        o: 'Disperzivna boja: standardna zidna boja, propusna za paru, matirana, za sobe i hodnike. Lateks boja: veća otpornost na pranje, polumat ili sjaj, za kuhinje i hodnike. Prava "lateks" boja danas gotovo ne postoji - sve su disperzije s različitim vezivima.'
      },
      {
        p: 'Kako pripremiti zid za bojanje?',
        o: 'Priprema: popunite rupe i pukotine gletom, obrussite neravnine, očistite prašinu, grundirajte. Stare ljušteće boje skinuti do zdrave podloge. Masne mrlje oprati i grundirati izolacijskim grundom. Priprema je 70% posla!'
      },
      {
        p: 'Mogu li bojati preko tapeta?',
        o: 'Možete ako su tapete čvrsto zalijepljene i ravne. Obavezno testirajte na malom dijelu - neke tapete se odvajaju kad upiju vlagu iz boje. Papirnate tapete grundirajte prije bojanja. Najbolji rezultat ipak je skidanje tapeta.'
      },
      {
        p: 'Koliko se boja suši između slojeva?',
        o: 'Sušenje ovisi o temperaturi, vlazi i vrsti boje. Tipično: 2-4 sata između slojeva, puno opterećenje nakon 24 sata. Na +10°C i visokoj vlazi može trebati duplo duže. Ne ubrzavajte sušenje grijalicama - može uzrokovati pukotine.'
      },
      {
        p: 'Kako izračunati koliko boje trebam?',
        o: 'Potrošnja: 1 litra pokriva 7-10 m² u jednom sloju (ovisi o upojnosti). Izračun: (ukupna površina zidova u m²) x 2 (sloja) / 8 (prosječna pokrivnost) = potrebna količina. Za strop računajte odvojeno. Dodajte 10% rezerve.'
      },
      {
        p: 'Zašto boja ostavlja tragove valjka?',
        o: 'Uzroci: premalo boje na valjku, prebrzo sušenje, nekvalitetan valjak, bojanje po djelomično suhoj boji. Riješenje: koristite kvalitetan valjak, nanosite u obliku slova W pa izravnajte, radite "mokro na mokro", ne vraćajte se na suhe dijelove.'
      },
      {
        p: 'Koja boja je najbolja za kupaonicu?',
        o: 'Za kupaonice koristite boje otporne na vlagu s antibakterijskim svojstvima. Polumat ili saten finish lakše se čisti od mat boja. Biramo boje označene "za vlažne prostore" ili specijalne kupaonske boje. Izbjegavajte obične disperzije.'
      },
      {
        p: 'Kako postići ravnu liniju kod bojanja rubova?',
        o: 'Opcije: krep traka (pritisnite rubove da boja ne podlazi), kist za rubove s mirnom rukom, ili specijalni alat za rubove. Profesionalci često rade "na ruku" bez trake. Za početnike - kvalitetna krep traka je najbolji prijatelj!'
      },
      {
        p: 'Trebam li grundirati zidove prije bojanja?',
        o: 'Da, grundiranje je obavezno na: novoj žbuci, gipsu, glet masi, upojnim površinama, flekama i mrljama. Grund ujednačuje upojnost, poboljšava prianjanje i smanjuje potrošnju boje. Preskakanje grunda = neravnomjeran rezultat.'
      },
      {
        p: 'Mogu li sam bojati strop bez prskanja?',
        o: 'Savjeti za čist rad: koristite valjak s dužim vlaknima, ne preopterećujte ga bojom, bojajte u smjeru svjetla, koristite teleskopsku dršku umjesto ljestvi (stabilnija ruka), stavite foliju na pod. Kapljice se događaju - folija je ključna!'
      }
    ]
  }
]

// Accordion komponenta za pojedino pitanje
function FAQItem({ pitanje, odgovor, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-8">{pitanje}</span>
        {isOpen ? (
          <ChevronUp className="text-primary shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-gray-400 shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{odgovor}</p>
        </div>
      )}
    </div>
  )
}

// Kategorija komponenta
function FAQCategory({ kategorija, openItems, toggleItem }) {
  const Icon = kategorija.icon
  
  return (
    <div id={kategorija.id} className="mb-12 scroll-mt-32">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
          <Icon size={28} color="white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {kategorija.naslov}
        </h2>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {kategorija.pitanja.map((item, index) => (
          <FAQItem
            key={index}
            pitanje={item.p}
            odgovor={item.o}
            isOpen={openItems[`${kategorija.id}-${index}`]}
            onClick={() => toggleItem(`${kategorija.id}-${index}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default function QAPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  const phoneNumber = "+385 95 880 1755"
  const phoneNumberRaw = "385958801755"
  const whatsappMessage = "Molim Vas kontaktirajte me na ovaj broj, zainteresiran sam za Vašu ponudu."
  const whatsappLink = `https://wa.me/${phoneNumberRaw}?text=${encodeURIComponent(whatsappMessage)}`

  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Filtriraj pitanja prema pretrazi
  const filteredData = searchTerm.length > 2
    ? faqData.map(cat => ({
        ...cat,
        pitanja: cat.pitanja.filter(
          p => p.p.toLowerCase().includes(searchTerm.toLowerCase()) ||
               p.o.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.pitanja.length > 0)
    : faqData

  const navLinks = [
    { href: '/', label: 'Početna' },
    { href: '/#usluge', label: 'Usluge' },
    { href: '/#projekti', label: 'Projekti' },
    { href: '/#kontakt', label: 'Kontakt' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Kontaktirajte nas putem WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image 
              src="/images/logo.jpg" 
              alt="MAT GO team logo" 
              width={180} 
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="no-underline text-gray-600 font-medium text-[15px] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#kontakt" className="btn-primary py-3 px-6">
              Zatraži ponudu
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-transparent border-none cursor-pointer p-2"
          >
            {isMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl flex flex-col gap-4 lg:hidden">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="no-underline text-gray-600 font-medium text-base py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#kontakt" className="btn-primary text-center mt-2">
              Zatraži ponudu
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <Home size={16} />
            Povratak na početnu
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Savjeti i česta pitanja
          </h1>
          <p className="text-lg text-white/90 mb-10 max-w-[600px] mx-auto">
            Sve što trebate znati o građevinskim radovima - od keramike do elektrike. 
            Educirajte se prije renovacije!
          </p>

          {/* Search Bar */}
          <div className="relative max-w-[500px] mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Pretražite pitanja..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-lg text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[72px] z-40 bg-white shadow-md">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {faqData.map((cat) => {
              const Icon = cat.icon
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <Icon size={16} />
                  <span className="font-medium text-sm">{cat.naslov}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((kategorija) => (
              <FAQCategory
                key={kategorija.id}
                kategorija={kategorija}
                openItems={openItems}
                toggleItem={toggleItem}
              />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Nema rezultata za "{searchTerm}". Pokušajte s drugim pojmom.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Niste pronašli odgovor?
          </h2>
          <p className="text-gray-600 mb-8">
            Kontaktirajte nas direktno - rado ćemo odgovoriti na sva vaša pitanja i dati besplatnu procjenu za vaš projekt.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`tel:${phoneNumberRaw}`}
              className="btn-primary"
            >
              <Phone size={18} />
              {phoneNumber}
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E]"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image 
              src="/images/logo.jpg" 
              alt="MAT GO team logo" 
              width={120} 
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="text-white/40 text-sm">
              © 2026 MAT-GO TEAM d.o.o. Sva prava pridržana.
            </p>
            <div className="flex gap-3">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
