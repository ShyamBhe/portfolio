import * as data from "../data.js";

const fi = {
  nav: {
    "#header": "Etusivu",
    "#about": "Minusta",
    "#projects": "Projektit",
    "#publications": "Julkaisut",
    "#contact": "Yhteystiedot",
  },

  // Same order as data.skills. Technology names stay in English on purpose.
  skills: [
    { label: "Ohjelmointikielet" },
    {
      label: "Kehykset",
      text: "React, Redux, Node, FastAPI, Flask, Express, .Net, WebSockets, Pandas, Numpy, Scikit-learn, Matplotlib, Seaborn, PyPl, OpenCV, Pathlib ja monia muita",
    },
    {
      label: "Datatiede",
      text: "Data Analysis, AI, Machine Learning, Deep Learning, CNN, R-CNN, LLMs sekä monia muita kirjastoja ja työkaluja",
    },
    { label: "Ketterät menetelmät ja yhteistyötyökalut" },
    { label: "Tietokantasuunnittelu ja datan integrointityökalut" },
    {
      label: "Tutkimus ja analyysi",
      text: "Soveltava tekoälytutkimus: Google Scholar, PubMed, Zotero, LaTeX",
    },
    {
      label: "Tuntemus ja ymmärrys",
      text: "Internet of Things, tietoturva, tietoverkot, C#, Java, PHP, testaus, pilvipalvelut (Azure/GCP), DevOps, Linux, Power BI, dokumentointi",
    },
  ],

  // Same order as data.experience.
  experience: [
    {
      period: "02/2024 - nykyinen",
      text: "Johtava tekoäly- ja ohjelmistoinsinööri — Turun yliopisto (edistynyt konenäköjärjestelmä)",
    },
    {
      period: "05/2023 - 08/2023",
      text: "T&K-kesäprojektin kehittäjä — Vaisala",
    },
    {
      period: "01/2022 - 04/2023",
      text: "Freelance full-stack-kehittäjä — asiakaskonsultointi",
    },
    {
      period: "01/2023 - 04/2023",
      text: "T&K-kesäprojektin kehittäjä — Oulun ammattikorkeakoulu",
    },
    {
      period: "10/2020 - 01/2021",
      text: "Projektiharjoittelija — Technological University Dublin",
    },
    {
      period: "11/2019 - 04/2020",
      text: "Ohjelmistokehittäjäharjoittelija — PiiMega Oy",
    },
  ],

  // Same order as data.education. The thesis title is an official title and
  // stays in English.
  education: [
    {
      period: "Turun yliopisto (2023 - 2025)",
      text: 'Maisterin tutkinto, tietotekniikka (IT Engineering) — edistynyt ohjelmistotekniikka ja datatiede. Opinnäytetyö (arvosana 5/5): "Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools" — AIoT-pohjaisen automatisoidun alustan kehittäminen.',
    },
    {
      period: "Oulun ammattikorkeakoulu (2018 - 2022)",
      text: "Kandidaatin tutkinto, tietotekniikka (IT Engineering) — ohjelmistokehitysteknologiat sekä datatiede, tietoturva ja IoT",
    },
  ],

  // Keyed by project id. Only the fields that differ.
  projects: {
    "calorie-tracking": {
      title: "AIoT-pohjainen konenäköjärjestelmä kalorien seurantaan",
      text: "Tämä on uusin edistynyt AIoT-järjestelmäni, jota kehitetään parhaillaan Turun yliopistossa. Tutkin ja kehitin konenäköön perustuvan ruoantunnistusjärjestelmän, joka analysoi ruokaa ja korjaa tunnistustuloksia. Toteutettu tekoäly- ja koneoppimisalgoritmeilla, Reactilla, Pythonilla, edistyneillä kuvankäsittelykirjastoilla ja antureilla. Kolme uutta julkaisua, ja tuote on testattu sairaala- ja ravintolaympäristöissä. Ratkaisi keskeisiä haasteita ja paransi tarkkuutta.",
      action: { label: "Projektin linkki" },
    },
    "mental-health": {
      title: "Sovelletun tekoälyn mielenterveyshoitojärjestelmä",
      text: "Käynnissä oleva, monipuolinen tekoäly- ja koneoppimisavusteinen mielenterveyshoidon projekti: alusta, jolla potilaat voivat keskustella koulutettujen tekoälymallien ja tarvittaessa ihmisasiantuntijoiden kanssa oireidensa ja tarpeidensa pohjalta. Kokonainen älykäs järjestelmä vastuullisella tekoälyllä. Tuote on patentoitava, joten kaikkea tietoa ei voi jakaa. Toteutettu Reactilla, FastAPI:lla sekä deep learning- ja NLP-pohjaisilla algoritmeilla, ja mukana on integroituja antureita äänelle, sykkeelle ja muulle datalle.",
      action: {
        label: "Lisätietoa",
        alertText:
          "VALITETTAVASTI — tämä on meneillään oleva tutkimusprojektimme, emmekä voi paljastaa kaikkea tietoa. Järjestelmä ei välttämättä ole julkisessa käytössä, koska siitä on tulossa patentoitava tuote. Tutkimus jatkuu monipuolisten tekoälymallien, multimodaalisen datan integroinnin ja muiden lähestymistapojen parissa.",
      },
    },
    "country-finder": {
      title: "Country Finder — tekoälyavusteinen sovellus",
      text: "Tekoälyavusteinen sovellus, jonka chatbotilta käyttäjät saavat yksityiskohtaista tietoa maista tai tarkkoja vastauksia maihin liittyviin kysymyksiin. Sovellus tarjoaa sekä tiivistelmän että yksityiskohtaiset tiedot maasta, antaa keskustella tekoälyavusteisen botin kanssa ja näyttää tiedot interaktiivisella kartalla. Toteutettu Reactilla, OpenAI:lla, Geminillä, React Hooksilla ja CSS:llä. Maatiedot haetaan Country Finder API:n avulla.",
      action: { label: "Live-linkki" },
    },
    ecommerce: {
      title: "Verkkokauppa",
      text: "Yksi monista freelance-asiakastöistäni: esimerkkikäyttöliittymä hybridisovellukseen. Ylläpitäjät voivat lisätä ja päivittää tuotteita, ja asiakkaat voivat selata, suodattaa ja tilata tuotteita sekä saada ne toimitettuna. Osa full-stack-asiakasprojektia, joka on toteutettu Reactilla, Reduxilla, maksujen tunnistautumisella, edistyneellä käyttäjätunnistuksella, Nodella, MS Azurella, AWS:llä, C#:lla, Dockerilla ja Jenkinsillä. Työskentelin tuotantoprojekteissa asiakkaan tarpeiden mukaan.",
      action: { label: "Live-linkki" },
    },
    "digital-repo": {
      title: "National Digital Repository (kansallinen digitaalinen arkisto)",
      text: "Osa laajempaa T&K-projektia, toteutettu Reactilla ja Reduxilla, Python/FastAPI-taustajärjestelmällä ja tunnistautumisella. Todellinen tuote, joka kehitettiin yliopiston projektiin. Käyttöliittymä tehtiin opetuskäyttöön opiskelijoiden opinnäytetietojen hakua ja lataamista varten. Tässä esitetään vain esimerkkikäyttöliittymä.",
      action: { label: "Live-linkki" },
    },
    "library-system": {
      title: "Kirjastonhallintajärjestelmä",
      text: "Työpöytäsovellus, joka on toteutettu MS Access -tietokannalla, C#:lla ja SQL:llä. Kirjastonhoitajat ja käyttäjät voivat kirjautua, hakea sekä lisätä ja päivittää kirjaston toimintoja, ja järjestelmä digitalisoi kirjaston työnkulun. Päivitettiin myöhemmin asiakkaalle Reactilla ja ASP .NET -verkkosovelluksena käyttäen MS Azurea tietokantana.",
      action: { label: "Live-linkki" },
    },
  },

  // Keyed by publication id. Titles are official and stay in English.
  publications: {
    "energy-composition": {
      type: "Konferenssijulkaisu · marraskuu 2025",
      text: "Osoittaa, miten tekoälyennusteet ja heterogeeninen data voidaan yhdistää automaattisesti todellisiin käyttötilanteisiin. Validoitu ja testattu oikeissa ravintolaympäristöissä, ja se parantaa tekoälypohjaisen ruoantunnistuksen tarkkuutta lähes 100 %:n tarkkuudella painon arvioinnissa.",
    },
    "food-name-mapping": {
      type: "Konferenssijulkaisu · tammikuu 2026",
      text: "Ratkaisee ongelman, jossa ruokien nimet ovat monikielisiä ja epäyhtenäisiä tekoälyn tuottamissa tuloksissa. Yhdistää OpenAI Vision -tuloksen, manuaalisen sanakirjan ja sumean vastaavuuden (fuzzy matching) logiikan, mikä parantaa nimien tunnistustarkkuutta ja sitä kautta kalorien arviointia.",
    },
    "hospital-feasibility": {
      type: "Konferenssijulkaisu · tammikuu 2026",
      text: "Yhteisjulkaisu, jossa raportoidaan FlavoriaFlexin toteutettavuustutkimus oikealla sairaalaosastolla. Tutkimuksessa arvioitiin, voiko tekoälypohjainen ruoantunnistus korvata potilaiden ravintoaineiden saannin manuaalisen ja subjektiivisen seurannan.",
    },
  },
};

// ---------------------------------------------------------------------------

function mergeByIndex(items, overrides) {
  return items.map((item, i) => ({ ...item, ...(overrides?.[i] ?? {}) }));
}

function mergeById(items, overrides) {
  return items.map((item) => {
    const o = overrides?.[item.id];
    if (!o) return item;
    return {
      ...item,
      ...o,
      action: o.action ? { ...item.action, ...o.action } : item.action,
    };
  });
}

const cache = {};

export function getContent(lang) {
  if (cache[lang]) return cache[lang];

  const base = {
    nav: data.nav,
    skills: data.skills,
    experience: data.experience,
    education: data.education,
    projects: data.projects,
    publications: data.publications,
    researchGateProfile: data.researchGateProfile,
    contact: data.contact,
  };

  if (lang !== "fi") {
    cache[lang] = base;
    return base;
  }

  cache[lang] = {
    ...base,
    nav: data.nav.map((n) => ({ ...n, label: fi.nav[n.href] ?? n.label })),
    skills: mergeByIndex(data.skills, fi.skills),
    experience: mergeByIndex(data.experience, fi.experience),
    education: mergeByIndex(data.education, fi.education),
    projects: mergeById(data.projects, fi.projects),
    publications: mergeById(data.publications, fi.publications),
  };
  return cache[lang];
}
