import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "studieplaner",
    title: "Studieplaner",
    category: "UX Design · Utvikling",
    year: "2025",
    description:
      "Et system der én endring i én emnebeskrivelse automatisk oppdaterer alle programmer som inneholder emnet. Fra grundig brukerforskningsarbeid og pikselperfekte skisser, til faktisk kode, bygget med Claude.",
    featured: true,
    client: "Oslo Nye Høyskole",
    role: "UX Designer og utvikler",
    tools: ["Figma", "Claude", "Qybele"],
    color: "#D4EADF",
    heroImage: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.43.37.png",
    caseStudy: {
      labels: {
        challenge: "Problemet",
        process: "Grunnarbeidet",
        decisions: "Å bygge det selv",
        results: "Nå",
        reflection: "Perspektivskiftet",
      },
      challenge:
        "Oslo Nye Høyskole vokser. Porteføljen av emner og programmer utvides kontinuerlig, og med den vokser kostnadene ved å holde alt oppdatert. Tidligere ble alle studieplaner laget manuelt i Word og PDF. Én endring i en emnebeskrivelse som finnes i ti programmer betydde ti manuelle oppdateringer. Ganger man det med alle endringene som skjer gjennom et studieår, har man en administrativ belastning som bare blir tyngre. Problemet var ikke at folk jobbet sakte, det var at systemet krevde det av dem.",
      challengeImages: {
        items: [
          {
            src: "/images/sp/versjonskart.png",
            alt: "Strukturkart som viser to versjoner av Bachelor i anvendt psykologi med tilhørende emner og endringer mellom periodene",
            caption: "To versjoner av samme program. Én endring i ett emne skyller gjennom alt.",
          },
        ],
      },
      process:
        "Jeg startet med brukerne. Intervjuer med administrasjonen kartla hverdagen i detalj: hva som fungerte, hva som gnisset, og hva de faktisk trengte. Innsikten ble strukturert og brukt til å bygge informasjonsarkitekturen fra bunnen. Jeg tegnet service blueprints for de viktigste flyene, definerte happy paths og bygde et lite designsystem for å holde alt konsistent. Skissene ble pikselperfekte, godt dokumenterte og grundig testet mot arbeidsflyten til administrasjonen. Jeg leverte dem fra meg. Og så ble de liggende.",
      processImages: {
        display: "carousel",
        items: [
          {
            src: "/images/sp/intervju.png",
            alt: "Intervjunotater fra brukerundersøkelse med administrasjonen om studie- og emneplaner i dag og i fremtiden",
            caption: "Intervjurunde med administrasjonen: hva de gjør i dag, og hva de faktisk trenger.",
          },
          {
            src: "/images/sp/kategori.png",
            alt: "Affinitetsdiagram med kategorisert brukerinnsikt fra intervjuer om studieplansystemet",
            caption: "Innsikten kategorisert: låste felt, endringslogg, oversetting, inngang og forside.",
          },
          {
            src: "/images/sp/happypath.png",
            alt: "Happy path for å revidere innhold i PSY1200: fra innlogging til oppdatering på tvers av alle programmer",
            caption: "Happy path for PSY1200: én handling, alle programmer oppdatert.",
          },
          {
            src: "/images/sp/flyt.png",
            alt: "Service blueprint for hele studieplansystemet med brukerflyt, godkjenningsprosess og systemhendelser",
            caption: "Hele systemet kartlagt: fra oppretting til publisering, revisjon og versjonering.",
          },
          {
            src: "/images/sp/designsystem.png",
            alt: "Lite designsystem for studieplaner med knapper, tabellstruktur, tags, varsler, filtermeny og endringslogg",
            caption: "Designsystemet bygget for konsistens på tvers av alle flater i løsningen.",
          },
          {
            src: "/images/sp/skisse-kladd.png",
            alt: "Ferdig Figma-design av studieplansystemet med kladd-tilstand, innholdsfortegnelse, endringslogg og pensumliste-fane",
            caption: "De ferdige skissene: kladd-tilstand, seksjonsoversikt, endringslogg og pensumliste.",
          },
          {
            src: "/images/sp/skisse-forside.png",
            alt: "Forsiden av studieplansystemet med program- og periodevalg, kladd-oppretting og PDF-nedlasting",
            caption: "Forsiden: velg program og periode, opprett kladd, last ned studieplan og pensumliste.",
          },
          {
            src: "/images/sp/skisse-rediger.png",
            alt: "Figma-skisser av redigeringsvisningen, inkludert forsidevisning med PDF-eksport og emneredigering",
            caption: "Skissene av redigeringsflaten, med PDF-eksport og emneredigering koblet mot programmene.",
          },
          {
            src: "/images/sp/prototype.png",
            alt: "Koblet Figma-prototype med alle brukerflyter fra forside til emnerediger, testet med administrasjonen",
            caption: "Den koblede prototypen: alle flyter fra forside til emneredigering, testet mot den faktiske arbeidsdagen.",
          },
        ],
      },
      decisions:
        "Da teamet begynte å eksperimentere med AI-assistert koding, fikk jeg i oppgave å åpne prosjektet igjen. Ikke levere skisser til andre. Bygge det selv. Det som overrasket meg mest var ikke at det gikk an, det var hastigheten. Iterasjonene kom så fort at jeg kunne teste, justere og gå videre i et tempo jeg aldri har opplevd i Figma alene. Underveis ble det klart at MVP-en ikke holdt lenger. Ledelsen ville heller vente enn å lansere uten nøkkelfunksjoner. Læringsutbyttematriser kom på agendaen. Biblioteket trengte integrerte pensumlister. En av de mer krevende funksjonene var oversetting: studieplaner skal kunne leveres på engelsk, men bare de feltene som faktisk er endret siden sist skal gå til oversetting. Jeg kartla hele flyten, fra godkjent norsk versjon til AI-assistert oversettelse og endelig publisering, og bygde det inn i systemet.",
      decisionsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/sp/oversetting.png",
            alt: "Service blueprint for oversettingsflyten: fra godkjent norsk studieplan til AI-assistert oversettelse og publisering",
            caption: "Oversettingsflyten kartlagt: bare reviderte seksjoner sendes til oversetting, AI assisterer, bruker godkjenner.",
          },
          {
            src: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.46.25.png",
            alt: "Ferdig oversettingsgrensesnitt i Qybele: viser kun reviderte felter med original norsk tekst og AI-oversettelse",
            caption: "Slik ser det ut live: bare det som er endret vises, med original norsk og AI-oversettelse side om side.",
          },
        ],
      },
      results:
        "Systemet er bygget og kjører. En studentassistent er ansatt for å flytte eksisterende studieplaner inn manuelt, slik at alt er klart fra dag én. Det som tidligere tok timer per endring tar nå sekunder.",
      resultsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.43.37.png",
            alt: "Oversikten over alle studieplaner i Qybele, med filtrering på emne og status og kolonner for sist revidert og godkjenningsstatus",
            caption: "Oversikten: filtrer på emne eller status, se hvilke planer som er godkjent, under revisjon eller trenger gjennomgang.",
          },
          {
            src: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.44.12.png",
            alt: "Inne i en studieplan for Bachelor i digital markedsføring og ledelse, med strukturert innholdsfortegnelse og seksjonsstatus",
            caption: "Inne i en studieplan: strukturert innholdsfortegnelse med seksjonsstatus og direkte navigasjon til redigering.",
          },
          {
            src: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.45.51.png",
            alt: "Rik teksteditor for programinnhold med live endringslogg og kommentarfelt til høyre",
            caption: "Redigeringsflaten: rik teksteditor med automatisk endringslogg og valgfritt kommentarfelt.",
          },
          {
            src: "/images/sp/ferdig%20produkt%202026-06-07%20kl.%2016.45.36.png",
            alt: "Læringsutbyttematrisen med kunnskap, ferdigheter og kompetanse koblet til emner, med endringslogg til høyre",
            caption: "Læringsutbyttematrisen: hvert mål koblet til emnene som dekker det, med automatisk endringslogg.",
          },
        ],
      },
      reflection:
        "Jeg er designer. Men etter dette prosjektet er jeg også noe annet. Å gå fra skisser til faktisk å bygge det du har tegnet gir deg et perspektiv på produktutvikling du ikke kan lese deg til. Du forstår avveiningene på en annen måte, skjønner hva som faktisk er komplisert og slutter å anta. Det har gjort meg til en bedre designer, og til en designer som ikke lenger er redd for koden.",
    },
  },
  {
    slug: "adgangskort",
    title: "Student- og ansattkort",
    category: "Systemdesign · Visuell design",
    year: "2024",
    description:
      "Startet som et oppdrag om å lage nye ansattkort. Endte opp som et internt system for kortproduksjon, køhåndtering og adgangskontroll, med ny UI til studentbevis-appen på toppen.",
    featured: true,
    client: "Oslo Nye Høyskole",
    role: "Designer",
    tools: ["Figma", "Illustrator"],
    color: "#E2D9F3",
    heroImage: "/images/adgangskort/hero-final.png",
    caseStudy: {
      labels: {
        challenge: "Oppdraget",
        process: "Kortdesignet",
        decisions: "Printsystemet",
        results: "Køsystemet",
        reflection: "Lærdom",
      },
      challenge:
        "Oppgaven var klar: design nye student- og ansattkort til alle ved Oslo Nye Høyskole. Et lite grafisk prosjekt. Men jo mer vi gravde i hva som faktisk krevdes for å få kortene i hånden til folk (hvem tar bildene? hvem printer? hvordan styrer vi adgang til bygget?), jo mer vokste det. Det som begynte som en designjobb ble til et prosjekt som involverte marked, ledelse, IT og studentadministrasjonen. Vi bygde til slutt to interne systemer vi ikke hadde planlagt.",
      process:
        "Det visuelle uttrykket på kortene ble til i tett og iterativ dialog med marked og skolens ledelse. Mange runder, mange meninger. Typisk for representasjonsdesign der alle har en formening om hva som passer til profilen. Det gode med den prosessen var at vi endte opp med noe alle eide. Figma-filene vokste seg store mens alternativene hopet seg opp.",
      processImages: {
        display: "carousel",
        items: [
          {
            src: "/images/adgangskort/prosess.png",
            alt: "Iterasjon på kortdesign, visuelle varianter av student- og ansattkort",
            caption: "Iterasjon på kortdesign. Uttrykk og profil ble til i nær dialog med marked og ledelsen.",
          },
          {
            src: "/images/adgangskort/prosess1.png",
            alt: "Oversikt over designarbeidet for student- og ansattkort",
            caption: "Fra visuell profil til ferdig kortdesign.",
          },
        ],
      },
      decisions:
        "Kortene måtte jo printes. For at det faktisk skulle fungere i praksis, ikke bare i Figma, måtte vi bygge et internt system for administrasjonen som printer kortene. Jeg jobbet tett med tech-lead for å designe det fra bunnen og koble det mot adgangskontrollsystemet. Det er fremdeles i drift i dag.",
      decisionsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/adgangskort/prosess2.png",
            alt: "Intern løsning for å printe og administrere student- og ansattkort",
            caption: "Tidlig versjon av administrasjonsgrensesnittet for kortsystemet.",
          },
          {
            src: "/images/adgangskort/system-print.png",
            alt: "Oversikt over det interne systemet for å håndtere og skrive ut student- og ansattkort",
            caption: "Det interne printsystemet, bygget i samarbeid med administrasjonen.",
          },
          {
            src: "/images/adgangskort/dagens-print.png",
            alt: "Slik fungerer kortprintingen i dag, koblet mot ARX adgangskontrollsystem",
            caption: "Koblet mot adgangskontrollsystemet, fremdeles i daglig drift.",
          },
        ],
      },
      results:
        "Så kom spørsmålet om bilder. Alle studenter måtte ta bilde til kortet sitt, og vi bygde et køsystem i LMS-et slik at de kunne melde seg inn fra mobilen, se estimert ventetid og møte opp til riktig tid. Assistenten som tok bildene hadde et eget adminpanel med full oversikt. Systemet fungerte utmerket, men vi oppdaget etter første runde at det var mer effektivt å la studentene sende inn bilder selv. Køsystemet ble avviklet. Det var det riktige valget, men det tok tid å bygge.",
      resultsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/adgangskort/ko-student.png",
            alt: "Studentvendt køgrensesnitt i LMS, mobil og desktop, viser antall i kø og estimert ventetid",
            caption: "Det studentvendte køsystemet, responsivt og tilgjengelig på semesterstart.",
          },
          {
            src: "/images/adgangskort/ko-bakside.png",
            alt: "Administrasjonsgrensesnitt for adgangskort med åpningstider og studentliste med studieprogram og kortnummer",
            caption: "Adminpanelet for fotoassistenten, full oversikt over kø og registrerte studenter.",
          },
          {
            src: "/images/adgangskort/ko-system-oversikt.png",
            alt: "Figma-oversikt over alle tilstander i køsystemet: påmelding, i kø, gå til kortrom, mistet køplass, stengt og fullt",
            caption: "Alle tilstander designet for køsystemet, fra påmelding til stengt og fullt.",
          },
        ],
      },
      reflection:
        "Dette prosjektet lærte meg at omfang sjelden er stabilt, og at det egentlig er greit så lenge man er ærlig om det tidlig nok. Jeg skulle gjerne kartlagt hele løkken fra start: kort, bilde, system, adgang. Da hadde vi kanskje snudd oss raskere på køsystemet. Men vi visste hva vi gjorde og hvorfor, og vi pivoterte da dataene viste at selvbetjening fungerte bedre. Det er en annen ting enn å ikke ha tenkt seg om.",
    },
  },
  {
    slug: "dev",
    title: "Digital eksamensvakt",
    category: "UX Design · Systemdesign",
    year: "2025",
    description:
      "Det første systemet for digital eksamensvakt i norsk høyere utdanning. Designet for å bringe normalfordelingen tilbake, med personvern som rammebetingelse fra dag én.",
    featured: true,
    client: "Oslo Nye Høyskole",
    role: "UX Designer",
    tools: ["Figma", "Qyreli"],
    color: "#D6EAE7",
    heroImage: "/images/DEV/hero.png",
    caseStudy: {
      labels: {
        challenge: "Oppdraget",
        process: "Designutfordringen",
        decisions: "Løsningen",
        results: "Responsen",
        reflection: "Refleksjon",
      },
      challenge:
        "Oslo Nye Høyskole var først i Norge som innførte digital eksamensvakt, et system som tar klipp av eksamensgjennomføringen via skjerm, kamera og mikrofon under hjemmeeksamen. AI-gruppen ved skolen, bestående av både studenter og ansatte, startet oppdraget og utforsket seg frem til en potensiell løsning. Det ble mitt prosjekt. Vi valgte en plattform og bygde onboarding-flyten fra bunnen. Ikke fordi det var enkelt, men fordi ingen hadde gjort det slik i norsk høyere utdanning før.",
      challengeImages: {
        items: [
          {
            src: "/images/DEV/velkommen-live.png",
            alt: "Digital eksamensvakt i nettleseren, velkomstskjerm med personvernbeskjed og meldingspanel åpent",
            caption: "Det ferdige produktet, live i nettleseren. Personvernbeskjeden er første ting studenten møter.",
          },
        ],
      },
      process:
        "To designgrep definerte prosessen. Det første var testeksamen: vi bygde en fullstendig demo-eksamen som studenter kunne gjennomføre så mange ganger de ville før den reelle. Poenget var ikke bare å teste utstyr, det var å fjerne «jeg har aldri sett dette før»-faktoren fra eksamensdagen. Det andre var skjermdelingen, og der brukte vi mest tid. Nettlesere er designet for å beskytte mot ufrivillig skjermopptak, og det av gode grunner. For at eksamensvakten skulle fungere, måtte studentene aktivt dele hele skjermen, og det er langt fra selvforklarende. Macbook-brukere måtte inn i systeminnstillingene, noen måtte restarte nettleseren, noen måtte logge inn igjen. Vi kartla hver enkelt edge case og svarte på dem med et FAQ-panel som var synlig gjennom hele prosessen.",
      processImages: {
        display: "carousel",
        items: [
          {
            src: "/images/DEV/demoeksamen.png",
            alt: "Testeksamen-siden i LMS med boks for å starte og boks som viser gjennomført status",
            caption: "Testeksamen som designgrep: gjennomfør det en gang før det teller.",
          },
          {
            src: "/images/DEV/skjermdeling-osq.png",
            alt: "Skjermdelings-steget med ofte stilte spørsmål åpnet, Macbook og Chrome, flere skjermer, omstart av nettleser",
            caption: "Alle spørsmålene studentene ikke hadde stilt ennå, besvart på forhånd.",
          },
        ],
      },
      decisions:
        "Vi valgte å bare flagge, aldri blokkere. Systemet flagger tre ting: mobilbruk, flere ansikter i bildet, og andre stemmer i rommet. Alt annet ignoreres, og bare flaggede klipp gjennomgås av eksamensansvarlig etterpå. For at studentene faktisk skulle føle seg trygge på at de hadde gjort det riktig, la vi inn aktiv bekreftelse i hvert steg: live preview av skjermdelingen med bekreftelse på at riktig vindu deles, og live kamera- og mikrofontest der du ser og hører deg selv. Systemet sier ikke bare «trykk neste», det bekrefter at ting fungerer. Vi designet også hva som skjer om en student vil avbryte eksamen underveis, inkludert en bekreftelsesdialog. Begge sider ble designet: studentopplevelsen og grensesnittet for eksamensansvarlig. GDPR var ikke noe vi la til til slutt, det var en rammebetingelse fra dag én. Personvernbeskjeden er det første studenten ser. Og bekreftelsen på at overvåkning er stoppet, er det siste.",
      decisionsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/DEV/skjermdeling-aktiv.png",
            alt: "Skjermdeling aktivert med live preview som viser at eksamen-vinduet deles, og bekreftelsescheckbox",
            caption: "Live preview bekrefter at riktig skjerm deles. Ingen gjetting.",
          },
          {
            src: "/images/DEV/kamera-aktiv.png",
            alt: "Kamera og mikrofon aktivert med live bilde av studenten og lydmåler som viser at utstyr fungerer",
            caption: "Du ser deg selv. Du hører deg selv. Systemet bekrefter, du bekrefter.",
          },
          {
            src: "/images/DEV/avslutt-dialog.png",
            alt: "Tre varianter av forsiden med avslutt eksamen-dialog og ulike tilstander",
            caption: "Hva skjer om du vil avbryte? Det designet vi for også.",
          },
          {
            src: "/images/DEV/eksamen-overvaking.png",
            alt: "Skisse av admin-grensesnittet for gjennomgang av flaggede klipp etter eksamen",
            caption: "Skisse av baksiden, hvordan eksamensansvarlig ser og vurderer flaggede klipp.",
          },
        ],
      },
      results:
        "Prosjektet ble omtalt i VG, NRK, Khrono, kode24 og Nettavisen. Det var selvsagt kritikk, det skal det være. Vi tok den på alvor og gikk videre. Resultatet etter eksamen sa det meste: normalfordelingen var tilbake. Det er det beste målet vi hadde. Tilbakemeldingene fra de som faktisk gjennomførte var positive. Det ble stille.",
      resultsImages: {
        items: [
          {
            src: "/images/DEV/levert.png",
            alt: "Levert-skjermen etter eksamen med bekreftelse på at all overvåkning er stoppet umiddelbart",
            caption: "Levert. All overvåkning stoppet umiddelbart. Data slettes automatisk.",
          },
        ],
      },
      reflection:
        "Det er noe spesielt med å designe noe folk ikke vil ha, men som de trenger. Motstand er ikke det samme som at noe er feil. Det vi designet var ikke kontroll for kontrollens skyld: det var en ramme som lot eksamen være en eksamen igjen. Personvern som rammebetingelse, ikke som ettertanke, det er vanskeligere å designe for. Det er også det eneste riktige.",
    },
  },
  {
    slug: "digitalt-klasserom",
    title: "Digitalt klasserom",
    category: "UX Research · Tjenestedesign",
    year: "2025",
    description:
      "To behov, én løsning: et bedre digitalt klasserom og en kommunikasjonsplattform som fungerer for alle studenter, enten de sitter i klasserommet eller studerer alene hjemme. Første fase gjennomført.",
    featured: false,
    client: "Oslo Nye Høyskole",
    role: "UX Designer",
    tools: ["Figma", "Miro", "FigJam"],
    color: "#EDF0F7",
    heroImage: "/images/dk/hero.png",
    caseStudy: {
      labels: {
        challenge: "Behovet",
        process: "Workshopen",
        decisions: "Funnene",
        results: "Neste steg",
        reflection: "Det jeg lærte",
      },
      challenge:
        "Over tid hadde det bygd seg opp to separate behov ved Oslo Nye Høyskole. Studentene trengte en bedre plattform for tilfredshet og kommunikasjon. Det digitale klasserommet i LMS-et manglet funksjonalitet. Teamet løftet blikket: kan vi slå disse to behovene sammen til én løsning? Svaret var ja, og det ble mitt prosjekt å finne ut hva den løsningen faktisk skulle inneholde.",
      process:
        "Workshopen ble designet fra bunnen som en fulldags arbeidsøkt med ulike sekvenser. Blant annet ice breaker, system mapping, styrker/svakheter og idéfase. Deltakerne var sammensatt: fagansatte, ledelse, tech-team, ped-tech og stedlige studenter. Å nå nettstudentene viste seg vanskeligere. Jeg sendte ut meldinger til studenter i Oslo-området. De fleste svarte ikke. Det var i seg selv et funn: nettstudenter er en brukergruppe som er vanskelig å nå, og jeg lærte et her må jeg møte dem der de er. Dette er ikke en gruppe jeg kan forvente skal komme til meg. Jeg fikk likevel med meg et par stykker på workshopen, som ga verdifull innsikt!",
      processImages: {
        display: "carousel",
        items: [
          {
            src: "/images/dk/workshop.png",
            alt: "Billedcollage fra workshopen med deltakere som jobber med system mapping, post-it-vegger, idégenerering og presentasjoner",
            caption: "En full dag. System mapping, gruppearbeid, idéfase og presentasjoner.",
          },
          {
            src: "/images/dk/Digitalt%20klasserom.png",
            alt: "Workshopens agenda i FigJam med syv sekvenser: Velkommen, Ice breaker, System mapping, Styrker og svakheter, Lunsj, Øvelse 4 og Undersøkelse",
            caption: "Workshopens fulle program: syv sekvenser designet for å gå fra problem til innsikt på én dag.",
          },
          {
            src: "/images/dk/img_7549.png",
            alt: "Post-it-veggen etter workshopen med fargekodet brainstorming organisert i grupper",
            caption: "Slutten av dagen: post-it-veggen fylt med ideer, behov og spørsmål fra alle grupper.",
          },
        ],
      },
      decisions:
        "Rådata fra workshopen ble analysert gjennom en ZIP-modell og destillert til fire tydelige brukertyper. Kari er emneansvarlig som trenger struktur og tydelig rolleavklaring. Trygve er den ensomme nettstudenten som trenger trygghet og lavterskel for å delta. Lina er den fleksible nettstudenten med jobb og familie som trenger effektiv informasjonsflyt. Marius er den stedlige studenten som ikke bruker det digitale klasserommet fordi det ikke gir ham noe. ZIP-analysen pekte på fire innovasjonsmuligheter: rollestyrt deltakelse, lavterskelhandlinger, kobling til undervisning og eksamen, og ett felles sted for oversikt og gjenfinning.",
      decisionsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/dk/zipspm.png",
            alt: "ZIP-analyse med tre soner: spørsmål om trygghet, aktivitet og info vs sosial, innovasjonsmuligheter og risikoområder",
            caption: "ZIP-analysen: rådata fra workshopen sortert i spørsmål, innovasjonsmuligheter og problemsoner.",
          },
          {
            src: "/images/dk/Persona%20Emneansvarlig.png",
            alt: "Persona Kari, 39 år, emneansvarlig ved Oslo Nye Høyskole med mål, behov, frustrasjoner og designimplikasjoner",
            caption: "Kari, emneansvarlig. Vil ha struktur og trygghet for at hun ikke overbelastes med moderering.",
          },
          {
            src: "/images/dk/Persona%20Ensom%20nettstudent.png",
            alt: "Persona Trygve, 21 år, ensom nettstudent med høy sosial sårbarhet og behov for trygghet",
            caption: "Trygve, ensom nettstudent. Trenger lavterskel og mulighet til å delta uten alltid å eksponere seg selv.",
          },
          {
            src: "/images/dk/Persona%20Fleksbiel%20nettstudent.png",
            alt: "Persona Lina, 32 år, fleksibel nettstudent med jobb og familie som studerer asynkront",
            caption: "Lina, fleksibel nettstudent. Hopper inn og ut og trenger struktur, filtrering og asynkron deltakelse.",
          },
          {
            src: "/images/dk/Persona%20Stedlig%20student.png",
            alt: "Persona Marius, 23 år, stedlig student på campus som ikke bruker det digitale klasserommet",
            caption: "Marius, stedlig student. Bruker sosiale medier og campus, ikke LMS. Må nås der han faktisk er.",
          },
        ],
      },
      results:
        "All innsikt er samlet i et konseptdokument som definerer formål, designprinsipper, tone, struktur og bruksscenarier. Vi har laget tidlige wireframes av grensesnittet og storyboards for de viktigste brukerreisene. Neste fase er digitale workshops der vi møter nettstudentene der de faktisk er, ikke der vi håper de skal dukke opp.",
      resultsImages: {
        display: "carousel",
        items: [
          {
            src: "/images/dk/research.png",
            alt: "Konsept- og syntesedokument for digitalt klasserom med oppstart, how might we, konseptstatement, designprinsipper, brukergrupper, tone, struktur, bruk, roller og posisjonering",
            caption: "Syntesedokumentet: fra workshopdata til designretning, prinsipper og konseptstatement.",
          },
          {
            src: "/images/dk/tidlig%20skisse.png",
            alt: "Tidlige wireframes av digitalt klasserom i Qybele med sidepanel for emner, kollokvier og sosialt, og dashboardvisning med innleveringsoversikt",
            caption: "Tidlige wireframes: behovene fra workshopen oversatt til navigasjon og grensesnitt.",
          },
          {
            src: "/images/dk/Skjermbilde%202026-06-07%20kl.%2017.05.29.png",
            alt: "Storyboards som viser brukerreiser for digitalt klasserom: åpner Qybele, inn i klasserom, oversikt, studieliving, klasserom og sosialt",
            caption: "Storyboards for de viktigste brukerreisene: fra innlogging til deltakelse, oversikt og sosialt.",
          },
        ],
      },
      reflection:
        "Jeg er vant til å jobbe med brukere som sitter vegg i vegg. Denne gangen lærte jeg at det ikke alltid er nok å sende en invitasjon. Å nå nettstudenter krever at du møter dem på deres premisser, i deres kanal, på deres tid. Det er litt av en realitetsorientering, og det har allerede endret hvordan jeg tenker om neste runde.",
    },
  },
  {
    slug: "undervisningsadministrasjonen",
    title: "Undervisningsadministrasjonen",
    category: "UX Design · Tjenestedesign",
    year: "2024",
    description:
      "Fagansatte ved Oslo Nye Høyskole navigerte mellom to like sider som ingen klarte å skille. Vi slo dem sammen til én, og gjennomførte brukertest for å bevise at det faktisk fungerte.",
    featured: false,
    client: "Oslo Nye Høyskole",
    role: "UX Designer (intern)",
    tools: ["Figma", "Miro"],
    color: "#C2E0DC",
    heroImage: "/images/ua/hero.png",
    caseStudy: {
      challenge:
        "Fagansatte og emneansvarlige ved Oslo Nye Høyskole administrerte undervisningen sin gjennom to separate sider: «Organiser studiestruktur» og «Organiser læremidler». Sidene var visuelt like, men hadde overlappende funksjonalitet, og i praksis valgte alle feil hver gang. Målet var å designe én samlet plattform som var enkel å bruke og som liknet mer på undervisningen slik den faktisk oppleves.",
      challengeImages: {
        items: [
          {
            src: "/images/ua/gammel-navigasjon.png",
            alt: "De to gamle navigasjonsknappene: Organiser studiestruktur og Organiser læremidler",
            caption: "To like innganger. Alle valgte feil.",
          },
          {
            src: "/images/ua/gammel-system.png",
            alt: "Skjermbilde av det gamle systemet med grønn header og liste over undervisningsmoduler",
            caption: "Det eksisterende systemet, funksjonelt, men ikke intuitivt.",
          },
        ],
      },
      process:
        "Vi startet med brukertest av det eksisterende systemet for å kartlegge konkrete smertepunkter. Deltakerne fikk oppgaver som å opprette et læremiddel, redigere en modul, navigere til studentvisning og legge til øvingsoppgaver, mens vi observerte og noterte på post-it-lapper med to fargekoder: én for positivt og negativt ladede reaksjoner, én for umiddelbare tanker uavhengig av lading. Funnene dannet grunnlaget for en ny informasjonsarkitektur. Vi bygde prototyper i Figma med fullstendige brukerflyter og testet dem på nytt.",
      processImages: {
        items: [
          {
            src: "/images/ua/brukertest-oppgaver.png",
            alt: "Post-it-board med brukertest-oppgaver organisert i kolonner",
            caption: "Brukertest-oppgavene vi designet, fra studentvisning til modulredigering.",
          },
          {
            src: "/images/ua/figma-flow.png",
            alt: "Figma-prototype med flytdiagram som viser skjermoverganger",
            caption: "Prototypflyten i Figma, to separate flows for de ulike brukerreisene.",
          },
        ],
      },
      decisions:
        "Den viktigste beslutningen var å slå de to sidene helt sammen til én. Det krevde at vi redesignet hele navigasjonslogikken fra grunnen av. Underveis bygde vi et lite internt designsystem med komponenter for moduler, læremidler, knapper, øvingsoppgaver, chips og dropdown-menyer, slik at grensesnittet ble konsistent på tvers av all funksjonalitet. Vi la også til tomme tilstander og tooltips for å hjelpe nye brukere i gang uten opplæring.",
      decisionsImages: {
        items: [
          {
            src: "/images/ua/ny-ui.png",
            alt: "Oversikt over det nye UI-et med designsystem-komponenter: moduler, læremidler, knapper og øvingsoppgaver",
            caption: "Det nye grensesnittet, ett designsystem på tvers av all funksjonalitet.",
          },
          {
            src: "/images/ua/figma-oversikt.png",
            alt: "Figma-oversikt over alle skjermer designet: Oversikt, Øvingsoppgaver, Ressurser og Moduler",
            caption: "Skjermene vi designet, fra oversikt til sletting.",
          },
        ],
      },
      results:
        "Plattformen er nå live og i aktiv bruk av fagansatte ved Oslo Nye Høyskole. Vi valgte å observere hvordan grunnsteinene fungerer i sin helhet, og gjøre justeringer der, før vi bygger videre. Flere utvidelser er allerede planlagt.",
      reflection:
        "Å jobbe to designere på et internt system ga oss mulighet til å teste raskt og iterere tett med reelle brukere fra dag én. Det jeg tar mest med meg er verdien av å faktisk sitte ved siden av folk mens de bruker systemet, ikke bare spørre dem etterpå. De fleste visste ikke at de valgte feil side før vi satt der og så det skje. Det er den typen innsikt man ikke får fra en spørreundersøkelse.",
    },
  },
];
