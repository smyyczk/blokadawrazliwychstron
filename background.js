async function fetchBlockedDomains() {
    const response1 = await fetch('https://hole.cert.pl/domains/v2/domains.txt');
    const text1 = await response1.text();
    const domains1 = text1.split('\n').map(domain => domain.trim());

    const response2 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/Badd-Boyz-Hosts/hosts');
    const text2 = await response2.text();
    const domains2 = text2
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0') || line.startsWith('127.0.0.1')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response3 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/KADhosts/hosts');
    const text3 = await response3.text();
    const domains3 = text3
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response4 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/StevenBlack/hosts');
    const text4 = await response4.text();
    const domains4 = text4
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response5 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/URLHaus/hosts');
    const text5 = await response5.text();
    const domains5 = text5
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response6 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/UncheckyAds/hosts');
    const text6 = await response6.text();
    const domains6 = text6
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response7 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/adaway.org/hosts');
    const text7 = await response7.text();
    const domains7 = text7
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response8 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/add.2o7Net/hosts');
    const text8 = await response8.text();
    const domains8 = text8
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response9 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/add.Dead/hosts');
    const text9 = await response9.text();
    const domains9 = text9
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response10 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/add.Risk/hosts');
    const text10 = await response10.text();
    const domains10 = text10
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response11 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/add.Spam/hosts');
    const text11 = await response11.text();
    const domains11 = text11
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response12 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/hostsVN/hosts');
    const text12 = await response12.text();
    const domains12 = text12
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response13 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/minecraft-hosts/hosts');
    const text13 = await response13.text();
    const domains13 = text13
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response14 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/mvps.org/hosts');
    const text14 = await response14.text();
    const domains14 = text14
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response15 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/someonewhocares.org/hosts');
    const text15 = await response15.text();
    const domains15 = text15
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response16 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/tiuxo/hosts');
    const text16 = await response16.text();
    const domains16 = text16
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    const response17 = await fetch('https://raw.githubusercontent.com/StevenBlack/hosts/refs/heads/master/data/yoyo.org/hosts');
    const text17 = await response17.text();
    const domains17 = text17
        .split('\n')
        .filter(line => line.startsWith('0.0.0.0')) // Filtruj tylko linie z adresami
        .map(line => line.split(' ')[1].trim()); // Wyciągnij tylko domeny

    return [...new Set([
        ...domains1, ...domains2, ...domains3, ...domains4,
        ...domains5, ...domains6, ...domains7, ...domains8,
        ...domains9, ...domains10, ...domains11, ...domains12,
        ...domains13, ...domains14, ...domains15, ...domains16,
        ...domains17
    ])]; // Połącz i usuń duplikaty
}

let blockedDomains = [];

// Pobierz zablokowane domeny przy starcie wtyczki
fetchBlockedDomains().then(domains => {
    blockedDomains = domains;
});

// Monitoruj aktualizacje kart
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading') {
        const url = new URL(tab.url);
        if (blockedDomains.some(domain => url.hostname.endsWith(domain))) {
            // Otwórz stronę informacyjną w nowej karcie
            chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
            // Zakończ ładowanie zablokowanej strony
            chrome.tabs.update(tabId, { url: "about:blank" }); // Zakończ ładowanie
        }
    }
});