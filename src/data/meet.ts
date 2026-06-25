// ─── Meet Event Data ──────────────────────────────────────────────
// All text content, URLs, and structured data extracted from preview.html.
// Components read from this file — no hardcoded Polish strings in templates.

export interface FaqItem {
    question: string
    answer: string
}

export interface ProgramItem {
    time: string
    title: string
    description: string
}

export interface CompetitionInfo {
    title: string
    description: string
    rulesNote: string
}

export interface SectionId {
    id: string
    label: string
}

// ─── Event Constants ────────────────────────────────────────────

export const EVENT = {
    date: '25.07.2026',
    dateISO: '2026-07-25T11:00:00+02:00',
    venue: 'Dom Kultury Kadr',
    hours: '11:00 — 17:00',
    city: 'Warszawa',
    location: 'Warszawa, Mokotów',
    address: 'ul. Rzymowskiego 32',
    addressSub: 'Wjazd od ul. Rzymowskiego',

    accentColor: '#ED3937',

    // URLs
    registrationUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSd2968UPuHfbYiEdGpKMndIxNjF5kFr_E8OLsrs5ZBR6KYOuQ/viewform',
    regulaminUrl:
        'https://drive.google.com/file/d/115KcC0Arak7DDlc1L4JtB5jiWkjw0W5x/view',
    zgodaRodzicaUrl:
        'https://drive.google.com/file/d/1RmVEsZ90yjWfZVSmk64S_4W6CiFDfWQc/view',
    mapsUrl: 'https://maps.app.goo.gl/1nF6BK3JHzSE2Tcx6',
    discordUrl: '#',
    instagramUrl: '#',
    facebookUrl: '#',
    email: 'kontakt@jbwk.pl',
    zgodyMail: 'zgody@jbwk.pl',
    instagramHandle: '@jak_bedzie_w_klawiaturkach',
} as const

// ─── Page Metadata ──────────────────────────────────────────────

export const PAGE = {
    title: 'JBWK MEET 2026 — 25.07 · Warszawa',
    description:
        'Coroczne spotkanie polskiej społeczności klawiatur mechanicznych. Edycja 2026 — Warszawa, 25 lipca.',
    siteUrl: 'https://meet.jbwk.pl',
} as const

// ─── Navbar ─────────────────────────────────────────────────────

export const NAV_LINKS: { label: string; href: string }[] = [
    { label: 'Program', href: '#program' },
    { label: 'Konkursy', href: '#konkursy' },
    { label: 'Lokalizacja', href: '#lokalizacja' },
    { label: 'Klawiatura', href: '#klawiatura' },
    { label: 'Partnerzy', href: '#partnerzy' },
    { label: 'FAQ', href: '#faq' },
]

export const NAV_CTA = {
    label: 'Zarejestruj się',
    href: EVENT.registrationUrl,
} as const

// ─── Hero ───────────────────────────────────────────────────────

export const HERO = {
    registrationStatus: 'Rejestracja otwarta · Edycja 2026',
    headingLine1: 'JBWK',
    headingLine2: 'MEET',
    headingAccent: '2026',
    ctaRegistrationLabel: 'Zarejestruj się',
    ctaRegistrationHref: EVENT.registrationUrl,
    ctaProgramLabel: 'Zarejestruj się',
    ctaProgramHref: EVENT.registrationUrl,
} as const

// ─── What Is Section ────────────────────────────────────────────

export const WHAT_IS = {
    label: 'Czym jest JBWK Meet?',
    stats: [
        { value: '100+', label: 'oczekiwanych gości' },
        { value: '100+', label: 'wystawionych buildów' },
    ],
    paragraphs: [
        'JBWK Meet to największe w Polsce spotkanie entuzjastów klawiatur mechanicznych. To dzień, w którym możesz zobaczyć, dotknąć i posłuchać setek customowych buildów, porozmawiać z ludźmi, którzy je złożyli, i poczuć klimat społeczności na żywo.',
        'Po udanej edycji 2025 wracamy do Domu Kultury Kadr na warszawskim Mokotowie — tym razem z jeszcze większą przestrzenią i bogatszym programem.',
    ],
} as const

// ─── Program Section ────────────────────────────────────────────

export const PROGRAM = {
    label: 'Program',
    note: 'Plan jeszcze ewoluuje — finalne godziny niektórych konkursów uściślimy bliżej daty na Discordzie. Wszystkie atrakcje są opcjonalne, możesz przyjść po prostu pochodzić między buildami.',
    items: [
        {
            time: '11:00',
            title: 'Otwarcie drzwi',
            description:
                'Rejestracja gości, odbiór identyfikatora w recepcji. Kawa, pierwsze rozmowy, rozkładanie sprzętu na wystawie.',
        },
        {
            time: '12:00',
            title: 'Oficjalne powitanie',
            description:
                'Słowo od organizatorów, program dnia, info organizacyjne.',
        },
        {
            time: '12:30',
            title: 'WPM Champions',
            description:
                'Konkurs szybkiego pisania na losowych klawiaturach społeczności. Eliminacje i finał.',
        },
        {
            time: '13:30',
            title: 'Switch Guessing',
            description:
                "Zgadnij switch tylko po dźwięku i feel'u. Klasyk od pierwszej edycji.",
        },
        {
            time: '14:30',
            title: 'Best Build Showcase',
            description:
                'Wystawa community buildów. Każdy z uczestników może wystawić swój sprzęt.',
        },
        {
            time: '15:00',
            title: 'Strefa custom buildów',
            description:
                'Otwarty kącik druciarstwa — usiądź przy custom buildach, pomajstruj na luzie i pogadaj o pełnych customach z tymi, którzy je składają. Strefa czynna do końca meetu.',
        },
        {
            time: '15:00',
            title: 'Najlepsza klawiatura meetowa',
            description:
                'Rusza głosowanie — wrzucaj głos do urny przez całe popołudnie. Start o 15:00, żeby każdy zdążył wystawić swój build. Wynik ogłaszamy na koniec.',
        },
        {
            time: '15:45',
            title: 'Losowanie keycapów z worka',
            description:
                'Mamy random bag keycapów do rozdania — podejdź i wylosuj coś dla siebie. Do wyczerpania zapasów.',
        },
        {
            time: '16:30',
            title: 'Słowo końcowe + wyniki',
            description:
                'Podziękowania za udział, ogłoszenie wyników wszystkich konkursów — Cheapest Keyboard i Najlepsza klawiatura meetowa — wręczenie nagród.',
        },
        {
            time: '17:00',
            title: 'Zamknięcie',
            description: 'Koniec oficjalnej części. Do zobaczenia za rok.',
        },
    ] satisfies ProgramItem[],
} as const

// ─── Competitions Section ───────────────────────────────────────

export const COMPETITIONS = {
    label: 'KONKURSY',
    note: 'Każda atrakcja ma swój regulamin — pełne zasady ogłosimy bliżej daty meetu na Discordzie. Konkurs „Cheapest Keyboard" zaczyna się od dziś, przygotuj się.',
    items: [
        {
            title: 'Cheapest Keyboard',
            description:
                'Liczy się sama klawiatura — rama, switche, plate, PCB, stabilizatory i keycapy. Kabel oraz mata się nie liczą. Działająca = warunek konieczny. Pełne wymagania i szczegóły znajdziesz w zasadach konkursu.',
            rulesNote:
                'Pełne zasady i szczegóły znajdziesz w regulaminie konkursu.',
        },
        {
            title: 'WPM Champions',
            description:
                'Konkurs szybkiego pisania na losowych klawiaturach społeczności. Sprawdź się na nieznanym sprzęcie — eliminacje i finał.',
            rulesNote: 'Zasady ogłosimy na Discordzie przed meetem.',
        },
        {
            title: 'Switch Guessing',
            description:
                "Zgadnij switch tylko po dźwięku i feel'u — bez podglądania. Klasyk JBWK Meet od pierwszej edycji. Kto rozpozna najwięcej, wygrywa.",
            rulesNote: 'Zasady ogłosimy na Discordzie przed meetem.',
        },
        {
            title: 'Najlepsza klawiatura meetowa',
            description:
                'Głosowanie społeczności przez całe popołudnie — wrzucasz głos do urny, wygrywa najlepszy build meetu. Start o 15:00, wyniki na koniec.',
            rulesNote:
                'Każdy uczestnik może wystawić maksymalnie 2 buildy. Szczegóły w regulaminie.',
        },
        {
            title: 'Losowanie keycapów',
            description:
                'Random bag keycapów do rozdania — podejdź i wylosuj coś dla siebie. Do wyczerpania zapasów.',
            rulesNote: '',
        },
    ] satisfies CompetitionInfo[],
} as const

// ─── Venue Section ──────────────────────────────────────────────

export const VENUE = {
    label: 'LOKALIZACJA',
    name: 'Dom Kultury Kadr',
    address: EVENT.address,
    addressSub: EVENT.addressSub,
    location: 'Warszawa, Mokotów',
    description:
        'Charakterystyczny budynek z pikselową fasadą — jak klawiatura w skali makro. Przestronna sala z dużą sceną, profesjonalnym nagłośnieniem i zapleczem.',
    mapsLabel: 'Zobacz na mapie',
    mapsUrl: EVENT.mapsUrl,
    imageAlt: 'FASADA · DOM KULTURY KADR',
} as const

// ─── Bring Your Keyboard Section ────────────────────────────────

export const BRING_YOUR_KEYBOARD = {
    label: 'TWOJA KLAWIATURA',
    description:
        'Przynieś swoją klawiaturę i wystaw ją na stołach społeczności. To serce meetu — rzędy buildów, które można dotknąć, posłuchać i obgadać z właścicielem.',
    imageAlt: 'JBWK Meet — wystawa buildów',
} as const

// ─── Partners Section ───────────────────────────────────────────

export const PARTNERS = {
    label: 'PARTNERZY',
    heading: 'MEET 2026',
    description: 'Pełna sekcja partnerów wkrótce na stronie głównej.',
    linkLabel: 'Zobacz partnerów',
    linkUrl: '#',
} as const

// ─── Registration Section ───────────────────────────────────────

export const REGISTRATION = {
    label: 'REJESTRACJA',
    heading: 'ZAPISZ SIĘ',
    subheading: 'NA MEET 2026',
    description:
        'Wstęp jest bezpłatny, ale wymagana jest wcześniejsza rejestracja przez formularz Google. Ze względu na pojemność sali liczba miejsc jest ograniczona — rejestracja może zostać zamknięta przed terminem.',
    hoursNote: 'Drzwi otwarte 11:00–17:00. Możesz wpaść w dowolnej godzinie.',
    ctaLabel: 'Wypełnij formularz',
    ctaUrl: EVENT.registrationUrl,
    zgodaNote:
        'Jeśli nie masz 18 lat, pobierz i podpisz zgodę rodzica. Wyślij na zgody@jbwk.pl minimum 3 dni przed meetem.',
    zgodaLabel: 'Pobierz zgodę rodzica (PDF)',
    zgodaUrl: EVENT.zgodaRodzicaUrl,
} as const

// ─── FAQ Section ────────────────────────────────────────────────

export const FAQ = {
    label: 'FAQ',
    discordCta:
        'Nie znalazłeś odpowiedzi? Napisz do nas na Discordzie — odpowiadamy w ciągu dnia.',
    discordButtonLabel: 'Dołącz na nasz Discord i pytaj śmiało',
    discordUrl: EVENT.discordUrl,
    items: [
        {
            question: 'Czy wstęp jest płatny?',
            answer: 'Nie. Wstęp jest całkowicie bezpłatny. Wymagamy tylko rejestracji przez formularz.',
        },
        {
            question: 'Czy mogę uczestniczyć jeśli nie mam 18 lat?',
            answer: 'Tak, ale potrzebna jest podpisana zgoda rodzica lub opiekuna. Wzór do pobrania w sekcji rejestracji powyżej — wypełnij, podpisz i prześlij na zgody@jbwk.pl minimum 3 dni przed meetem.',
        },
        {
            question: 'Co po przyjściu na miejsce?',
            answer: 'Zaczekaj w recepcji — wydamy ci identyfikator, bez którego nie wpuścimy na salę. Potem wchodzisz i bawisz się.',
        },
        {
            question: 'W jakich godzinach mogę przyjść?',
            answer: 'Drzwi otwarte 11:00–17:00. Możesz wpaść w dowolnej godzinie — program nie wymaga obecności od początku.',
        },
        {
            question: 'Czy wymagana jest rejestracja?',
            answer: 'Tak. Rejestracja przez Google Form, otwarta do 23.07.2026 (23:59). Ze względu na pojemność sali musimy mieć kontrolę nad liczbą gości — rejestracja może zostać zamknięta wcześniej po wyczerpaniu miejsc.',
        },
        {
            question: 'Czy mogę przynieść swoje klawiatury do wystawienia?',
            answer: 'Tak, jak najbardziej — to właściwie esencja meetu. W formularzu rejestracyjnym jest osobne pole "planuję wystawić build" — zaznacz je, żebyśmy zaplanowali ci miejsce na stole.',
        },
        {
            question: 'Czy będzie jedzenie?',
            answer: 'Na miejscu zapewniamy tylko wodę. W okolicy Domu Kultury Kadr jest sporo opcji jeśli zgłodniejesz — food trucks i knajpki w pobliżu.',
        },
        {
            question: 'Co z konkursem Cheapest Keyboard — jak zgłosić build?',
            answer: 'Build budujesz u siebie w domu — nie musisz nic zgłaszać w formularzu rejestracyjnym. Przynosisz klawiaturę razem z paragonami lub screenshotami zakupów, zgłaszasz fakt udziału przy rejestracji na miejscu, a obsługa wskaże ci gdzie ją wystawić. Werdykt i wręczenie nagrody o 16:30.',
        },
    ] satisfies FaqItem[],
} as const

// ─── Regulations Section ────────────────────────────────────────

export const REGULATIONS = {
    label: 'REGULAMIN',
    description:
        'Pełny regulamin JBWK Meet 2026 wraz z zasadami konkursów. Akceptacja przy rejestracji.',
    ctaLabel: 'Pobierz regulamin (PDF)',
    ctaUrl: EVENT.regulaminUrl,
} as const

// ─── Footer ─────────────────────────────────────────────────────

export const FOOTER = {
    description:
        'Coroczne spotkanie polskiej społeczności klawiatur mechanicznych. Edycja 2026 — Warszawa, 25 lipca.',
    navLinksLabel: 'Nawigacja',
    metaLinksLabel: 'JBWK',
    socialLinksLabel: 'Social',
    metaLinks: [
        { label: 'Wróć na stronę główną', href: 'blank' },
        { label: 'Galeria 2025', href: 'blank' },
        { label: 'Wiki', href: 'blank' },
    ],
    socialLinks: [
        { label: 'Discord', href: EVENT.discordUrl },
        { label: 'Instagram', href: EVENT.instagramUrl },
        { label: 'Facebook', href: EVENT.facebookUrl },
    ],
    email: EVENT.email,
    copyright: 'Wszystkie prawa zastrzeżone',
} as const
