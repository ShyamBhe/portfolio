// Finnish versions of the portfolio data. Ids, images, URLs and contact
// details are shared with data.js; only the visible text is translated here.
export const fi = {
  nav: {
    "#header": "Etusivu",
    "#about": "Minusta",
    "#projects": "Projektit",
    "#publications": "Julkaisut",
    "#contact": "Yhteystiedot",
  },
  skills: [
    { label: "Ohjelmointikielet", text: "JavaScript, Python, TypeScript" },
    { label: "Kehykset ja kirjastot", text: "React, Redux, Node, FastAPI, Flask, Express, .Net, WebSockets, Pandas, Numpy, scikit-learn, Matplotlib, Seaborn, PyPI, OpenCV, Pathlib ja monet muut" },
    { label: "Data-analytiikka", text: "Data-analyysi, tekoäly, koneoppiminen, syväoppiminen, CNN, R-CNN, LLM-mallit sekä monet muut kirjastot ja työkalut" },
    { label: "Ketterät menetelmät ja yhteistyötyökalut", text: "Git, Scrum, Jira, GitLab, SVN" },
    { label: "Tietokantasuunnittelu ja datan integrointi", text: "SQL, PostgreSQL, APIs, MySQL, MongoDB, RestAPIs, GraphQL API" },
    { label: "Tutkimus ja analyysi", text: "Edistynyt soveltava tekoäly: Google Scholar, PubMed, Zotero, LaTeX" },
    { label: "Tuntemus ja osaaminen", text: "Esineiden internet (IoT), tietoturva, verkot, C#, Java, PHP, testaus, pilvi (Azure/GCP), DevOps, Linux, Power BI, dokumentointi" },
  ],
  experience: [
    { period: "02/2024 - nykyhetki", text: "Johtava tekoäly- ja ohjelmistoinsinööri — Turun yliopisto (edistynyt konenäköjärjestelmä)" },
    { period: "05/2023 - 08/2023", text: "T&K-kesäprojektikehittäjä — Vaisala" },
    { period: "01/2022 - 04/2023", text: "Freelance full-stack-kehittäjä — asiakaspohjainen konsultointi" },
    { period: "01/2023 - 04/2023", text: "T&K-kesäprojektikehittäjä — Oulun ammattikorkeakoulu" },
    { period: "10/2020 - 01/2021", text: "Projektiharjoittelija — Technological University Dublin" },
    { period: "11/2019 - 04/2020", text: "Ohjelmistokehittäjäharjoittelija — PiiMega Oy" },
  ],
  education: [
    {
      period: "Turun yliopisto (2023 - 2025)",
      text: "Ylempi korkeakoulututkinto, IT-tekniikka — edistynyt ohjelmistotekniikka ja data-analytiikka. Opinnäytetyö (arvosana 5/5): \"Comparing the Accuracy and Efficiency of Existing AI Based Food Detection Tools\" — tekoälypohjaisen automaattisen AIoT-alustan kehittäminen.",
    },
    {
      period: "Oulun ammattikorkeakoulu (2018 - 2022)",
      text: "Alempi korkeakoulututkinto, IT-tekniikka — ohjelmistokehitys, data-analytiikka, tietoturva ja IoT",
    },
  ],
  projects: {
    "calorie-tracking": {
      title: "AIoT-pohjainen konenäköjärjestelmä kalorien seurantaan",
      actionLabel: "Projektin linkki",
      text: "Uusin edistynyt AIoT-järjestelmäni, joka on edelleen työn alla Turun yliopistossa. Tutkin ja kehitin konenäköön perustuvan ruoantunnistusjärjestelmän, jolla tunnistus analysoidaan ja tarvittaessa korjataan. Toteutettu tekoäly- ja koneoppimisalgoritmeilla, Reactilla, Pythonilla, edistyneillä kuvankäsittelykirjastoilla ja antureilla. Työstä on syntynyt 3 uutta julkaisua, ja tuotetta on testattu sairaala- ja ravintolaympäristöissä. Ratkaisin keskeisiä haasteita ja paransin tarkkuutta.",
    },
    "mental-health": {
      title: "Tekoälyllä tuettu mielenterveyden hoitojärjestelmä",
      actionLabel: "Lisätietoja",
      text: "Käynnissä oleva monipuolinen tekoäly- ja koneoppimistuettu mielenterveyshanke: alusta, jolla potilaat voivat oireiden ja tarpeiden mukaan keskustella koulutettujen tekoälymallien ja tarvittaessa lopuksi ihmisasiantuntijoiden kanssa. Kokonaisvaltainen älykäs järjestelmä ja vastuullista tekoälyä. Tuote on patentoitavana, joten kaikkea tietoa ei voi jakaa. Toteutettu Reactilla, FastAPI:lla, syväoppimisella ja NLP-pohjaisilla algoritmeilla sekä integroiduilla äänen, sykkeen ja muun datan antureilla.",
      alertText: "ANTEEKSI – tämä on meneillään oleva tutkimushankkeemme, emmekä voi paljastaa kaikkea tietoa. Järjestelmä ei välttämättä ole julkisessa käytössä, koska siitä on tulossa yksi patentoitavista tuotteista. Tutkimusta jatketaan tekoälypohjaisilla monipuolisilla malleilla, multimodaalisen datan integroinnilla ja muilla lähestymistavoilla.",
    },
    "country-finder": {
      title: "Country Finder – tekoälyavusteinen sovellus",
      actionLabel: "Live-linkki",
      text: "Tekoälyavusteinen sovellus, jossa käyttäjä saa chatbotilta tietoa maista: yksityiskohtaiset maatiedot tai vastaukset maita koskeviin kysymyksiin. Sovellus antaa sekä tiivistelmän että yksityiskohtaisen tiedon maasta, ja käyttäjä voi keskustella tekoälyavusteisen botin kanssa ja nähdä tiedot interaktiivisella kartalla. Toteutettu Reactilla, OpenAI:lla, Geminillä, React Hooksilla ja CSS:llä. Maatiedot haetaan Country Finder -rajapinnasta.",
    },
    ecommerce: {
      title: "Verkkokauppa",
      actionLabel: "Live-linkki",
      text: "Yksi monista freelance-asiakasprojekteistani: esimerkkikäyttöliittymä hybridisovellukselle. Ylläpitäjät voivat lisätä ja päivittää tuotteita, ja asiakkaat voivat selata, suodattaa ja tilata tuotteita toimitettaviksi. Osa laajempaa full-stack-asiakasprojektia, jossa käytettiin Reactia, Reduxia, maksujen todennusta, edistynyttä käyttäjätunnistusta, Nodea, MS Azurea, AWS:ää, C#:a, Dockeria ja Jenkinsiä. Työskentelin tuotantoprojekteissa asiakkaan tarpeiden mukaan.",
    },
    "digital-repo": {
      title: "Kansallinen digitaalinen arkisto",
      actionLabel: "Live-linkki",
      text: "Osa laajempaa T&K-hanketta, toteutettu Reactilla ja Reduxilla sekä Python/FastAPI-taustajärjestelmällä ja käyttäjätunnistuksella. Todellinen tuote, joka kehitettiin yliopiston hankkeeseen. Käyttöliittymä on tehty koulutushankkeeseen, jossa opiskelijoiden opinnäytetietoja haetaan ja ladataan. Tässä on mukana vain esimerkkikäyttöliittymä.",
    },
    "library-system": {
      title: "Kirjastonhallintajärjestelmä",
      actionLabel: "Live-linkki",
      text: "Työpöytäsovellus, joka on toteutettu MS Access -tietokannalla, C#:lla ja SQL:llä. Kirjastonhoitajat ja käyttäjät voivat kirjautua, hakea sekä lisätä ja päivittää kirjaston toimintoja, mikä digitalisoi kirjaston työnkulun. Myöhemmin päivitetty asiakkaalle Reactilla ja ASP.NET-verkkosovelluksena, tietokantana MS Azure.",
    },
  },
  publications: {
    "energy-composition": {
      type: "Konferenssijulkaisu · marraskuu 2025",
      text: "Näyttää, miten tekoälyennusteet ja heterogeeninen data voidaan yhdistää automaattisesti oikeisiin käyttötilanteisiin, validoida ja testata oikeissa ravintolaympäristöissä sekä parantaa tekoälypohjaisen ruoantunnistuksen tarkkuutta: painon arvioinnissa päästiin lähes 100 %:n tarkkuuteen.",
    },
    "food-name-mapping": {
      type: "Konferenssijulkaisu · tammikuu 2026",
      text: "Ratkaisee ongelman, jossa ruokien nimet vaihtelevat monikielisissä ja epäyhtenäisissä tekoälyn tuottamissa tuloksissa. Yhdistää OpenAI Visionin tuloksen, manuaalisen sanakirjan ja sumean vertailun logiikan, mikä parantaa nimien yhteensovituksen tarkkuutta ja kalorien arviointia.",
    },
    "hospital-feasibility": {
      type: "Konferenssijulkaisu · tammikuu 2026",
      text: "Yhdessä kirjoitettu julkaisu, jossa raportoidaan toteutettavuustutkimus FlavoriaFlexin testauksesta oikealla sairaalaosastolla: voiko tekoälypohjainen ruoantunnistus korvata potilaiden ravintoaineiden saannin manuaalisen ja subjektiivisen seurannan.",
    },
  },
};
