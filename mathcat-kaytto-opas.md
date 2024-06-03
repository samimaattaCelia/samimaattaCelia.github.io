# MathCAT-käyttöopas

MathCAT-ohjelmistoa käytetään yhdessä ruudunlukijan kanssa. MathCAT-ohjelmisto tulkitsee MathML-koodia ja sen avulla matematiikkaa voi kuunnella ja lukea pistenäytöltä.

## Käytän NVDA-ruudunlukijaa

Asenna MathCAT NVDA:n lisäosakaupasta tai [NVDA:n Internet-lisäosakaupasta](https://nvda-addons.org/addon.php?id=272).

## Käytän JAWS-ruudunlukijaa

MathCAT tulee JAWS-ruudunlukijan mukana. Sinun ei tarvitse asentaa sitä erikseen.

## Aloita MathCATin käyttö NVDA:lla

Käytä ruudunlukijaasi tuttuun tapaan nettisivulla tai e-kirjassa. Kun kohtaat matemaattista sisältöä, joka on kirjoitettu MathML-koodilla, ruudunlukijasi lukee sen ääneen automaattisesti.

Jos haluat tutustua esimerkiksi matemaattisen kaavan yksityiskohtiin, niin voit käyttää navigointitilaa painamalla välilyönti-näppäintä tai näppäinkomentoa NVDA-näppäin+Alt+M. Jos haluat poistua navigointitilasta, paina Esc-näppäintä.

### Yleisimmät näppäinkomennot

*   Voit liikkua oikealle, vasemmalle, ylös ja alas -suunnissa käyttämällä nuolinäppäimiä.
*   Voit liikkua taulukon soluissa Ctrl+nuolinäppäimet.
*   Voit siirtyä matemaattisen sisällön alkuun Home-näppäimellä ja loppuun End-näppäimellä.
*   Voit kuulla nykyisen sijaintisi painamlla välilyönti-näppäintä.
*   Voit muuttaa navigointitilaa painamalla Vaihto+Nuoli ylös/Nuoli alas. Lue lisää kohdasta: [Navigaatio](#navigaatio).

Kun siirryt navigaatiotilaan, niin voit kopioida kyseisen osan matemaattisesta sisällöstä MathML-koodina painamalla Ctrl+c.

Navigointiin on monia eri näppäinkomentoja. Voit lukea kaikki: [Kaikki navigaatiokomennot](#kaikki-navigaatiokomennot).

### MathCATin asetukset

**TSEKKAA TÄMÄ KÄÄNNÖS JA TEE SE NVDA:HAN OIKEIN**

MathCATissä on erilaisia asetuksia, joita säätämällä saat sen itsellesi sopivaksi. Pääset asetuksiin näppäinkomennolla NVDA-näppäin+n, sitten Asetukset ja sitten MathCATin asetukset. Asetuksissa voi valita Puhe, Navigaatio ja Pistekirjoitus.

#### Puhe

Vot säätää seuraavat asetukset puheelle. Jokaisen asetuksen alla on sen kaikki vaihtoehdot lyhyellä kuvauksella. Oletusasetukset on kirjoitettu hakasulkeisiin.

*   Vamma:
    *   [Sokeus.] Puhe on yksikäsitteistä.
    *   Muu näkövamma. Puhetta on vähemmän.
    *   Oppimisvaikeus. Puhetta on vähemmän.
*   Kieli:
    *   Käytä puheäänen kieltä
    *   Englanti (en)
    *   Espanja (es)
    *   Suomi (fi)
    *   Indonesia (id)
    *   Italia (it)
    *   Ruotsi (sv)
    *   Vietnami (vi)
    *   Kiina, perinteinen (zh-tw)
*   Puhetyyli:
    *   [ClearSpeak.] Matemaattinen sisältö puhutaan, kuten opettaja puhuisi luokkahuoneessa.
    *   SimpleSpeak. Matemaattinen sisältö puhutaan lyhyemmin. Puhe ei ole aina yksikäsitteistä.
*   Puheen määrä:
    *   Harva. Tiettyjä sanoja on lyhennetty, kuten "logaritmi" on "log".
    *   [Keskitaso.] Harvan ja runsaan välillä.
    *   Runsas. Kaikki puhutaan ääneen. Luenta on yksikäsitteinen.
*   Suhteellisen puheen nopeus:
    *   [100]. Luku on prosenteissa ja nopeutta voi muuttaa välillä 1 ja 1000\. Nopeus muuttuu suhteessa ruudunlukijan asetettuun puhenopeuteen. 100 tarkoittaa samaa nopeutta, vähemmän tarkoittaa hitaampaa ja suurempi nopeampaa.
*   Taukokerroin:
    *   [1]. Arvot ovat välillä 0 ja 10\. Säätää, miten pitkiä taukoja matemaattisen sisällön eri osien välillä on.
*   Matematiikkaääni:
    *   [Ei ääntä.]
    *   Äänimerkki. Äänimerkki kuuluu ennen matemaattista sisältöä ja sen jälkeen.
*   Kemia:
    *   [Kirjain kirjaimelta.] Kemialliset kaavat luetaan kirjain kirjaimelta, esimerkiksi H<sub>2</sub>O luetaan H kaksi O.
    *   Pois käytöstä. H<sub>2</sub>O luetaan H ala 2 O.

#### Navigaatio

MathCATin avulla voit siirtyä yksityiskohtaisesti matemaattisen sisällön sisällä. Voit kuunnella sen kokonaan, osissa tai liikkua edestakaisin esimerkiksi kaavassa. Voit määrittää asetuksissa, kuinka tämä tehdään ja miten yksityiskohtaista tietoa haluat.

Jokaisen asetuksen alla on sen kaikki vaihtoehdot lyhyellä kuvauksella. Oletusasetukset on kirjoitettu hakasulkeisiin.

*   Navigaatiotyyli, kun siirryt matemaattiseen sisältöön:
    *   [Laajennettu.] Voit liikkua matemaattisesti merkittävien osien välillä. (Esimerkiksi osoittaja, nimittäjä, eksponentti, suluissa oleva lauseke.)
    *   Yksinkertainen. Voit liikkua sanojen välillä, mutta jos kohtaat lausekkeen (esimerkiksi neliöjuuren), se luetaan kokonaan ääneen.
    *   Merkki merkiltä. Voit liikkua sanojen tai lukujen välillä. Voit siirtyä yksityiskohtaisemmalle tasolle, jolla voit lukea kirjain kirjaimelta tai numero numerolta.

Voit muuttaa navigaatiotyylin laajemmaksi matemaattisen sisällön sisällä näppäinkomennolla Shift+Nuoli ylös, jolloin tyyli muuttuu Yksinkertaisesta Laajennetuksi (tai Merkki merkiltä Yksinkertaiseksi).

Voit muuttaa navigaatiotyylin yksityiskohtaisemmaksi näppäinkomennolla Shift+Nuoli alas, jolloin tyyli muuttuu Laajennetusta Yksinkertaiseksi (tai Yksinkertaisesesta Merkki merkille -tyyliin). "Ylös" tarkoittaa laajempaa kuvailua ja "alas" tarkoittaa tarkempaa kuvailua.

Voit painaa valintaruutua, jolla voit valita, mikä navigointityyli on oletuksena, kun palautat tyylin ennalleen. Oletuksena mitään tiettyä ei navigointityyliä ei ole valittu.

*   Puhetyyli liikkumisen jälkeen:
    *   [Lue kohta ääneen.] Lukee sen kohdan matemaattisesta sisällöstä ääneen, jossa tällä hetkellä olet.
    *   Kuvailu. Antaa laajemman kuvailun koko valitusta sisällöstä.

Voit painaa valintaruutua, jolla voit valita, palautuuko puhetyyli liikkumisen jälkeen oletusvalinnaksi (Lue kohta ääneen) vai ei. Oletuksena tämä on valittu.

*   Siirry uloimmalle tasolle automaattisesti, kun osa matemaattisesti sisällöstä (esimerkiksi osoittaja tai neliöjuuri) on luettu.
    *   [Päällä.] (Valintaruutu valittu.)
    *   Pois päältä. (Valintaruutu ei valittu.)
*   Puheen määrä navigaatiossa:
    *   Harva. Tiettyjä sanoja on lyhennetty, kuten "logaritmi" on "log".
    *   [Keskitaso.] Harvan ja runsaan välillä.
    *   Runsas. Kaikki puhutaan ääneen. Luenta on yksikäsitteinen.

#### Pistekirjoitus

Voit valita pistekirjoitusasetukset seuraavista vaihtoehdoista. Oletusasetus on hakasuluissa.

*   Matematiikan pistekirjoitus:
    *   CMU.
    *   Nemeth.
    *   Ruotsalainen.
    *   UEB.
    *   Vietnamilainen.
*   Pisteet 7 ja 8 merkitsevät navigaatiotilassa
    *   Pois päältä.
    *   Ensimmäinen merkki.
    *   Viimeinen merkki.
    *   Kaikki.

### Kaikki navigaatiokomennot

Taulukossa on esitetty kaikki komennoit, joita voit käyttää matemaattisessa sisällössä liikkumiseen. Ensimmäisessä sarakkeessa on näppäimen nimi. Toisessa sarakkeessa kerrotaan, mitä tapahtuu, jos painat vain kyseistä näppäintä. Kolmannessa sarakkeessa kerrotaan, mitä tapahtuu, jos painat näppäinkomentona Ctrl-näppäintä ja kyseistä näppäintä. Neljännessä sarakkeessa kerrotaan, mitä tapahtuu, jos painat näppäinkomentona Vaihto-näppäintä ja kyseistä näppäintä. Viidennessä sarakkeessa kerrotaan, mitä tapahtuu, jos painat näppäinkomentona Ctrl- ja Vaihto-näppäimiä ja kyseistä näppäintä.

Sarakematematiikalla tarkoitetaan matemaattista sisältöä, joka esitetään taulukkona, kuten matriisit, yhtälöparit tai -ryhmät. Niitä voi navigoida, kuten taulukoita.

<table>

<thead>

<tr>

<th>Näppäin</th>

<th>Pelkästään</th>

<th>+ Ctrl</th>

<th>+ Vaihto</th>

<th>+ Ctrl + Vaihto</th>

</tr>

</thead>

<tbody>

<tr>

<th scope="row">Nuoli vasen</th>

<td>Siirry edelliseen.</td>

<td>Taulukossa: siirry edelliseen soluun. Sarakematematiikassa: siirry edelliseen numeroon. Huomaa: Ctrl+Alt+Nuoli vasen toimii myös.</td>

<td>Lue edellinen.</td>

<td>Kuvaile edellinen.</td>

</tr>

<tr>

<th scope="row">Nuoli oikea</th>

<td>Siirry seuraavaan</td>

<td>Taulukossa: siirry seuraavaan soluun. Sarakematematiikassa: siirry seuraavaan numeroon. Huomaa: Ctrl+Alt+Nuoli oikea toimii myös.</td>

<td>Lue seuraava.</td>

<td>Kuvaile seuraava.</td>

</tr>

<tr>

<th scope="row">Nuoli ylös</th>

<td>Siirry yleisemmälle tasolle.</td>

<td>Taulukossa: siirry sarakkeessa yksi solu ylöspäin. Sarakematematiikassa: siirry sarakkeessa yksi numero ylöspäin. Huomaa: Ctrl+Alt+Nuoli ylös toimii myös.</td>

<td>**Tarkista tämä!** Muuta navigaatiotyyliä (Tarkka, Yksinkertainen, Kirjain kirjaimelta) yleisemmäksi.</td>

<td>Siirry uloimmalle tasolle (uloin taso).</td>

</tr>

<tr>

<th scope="row">Nuoli alas</th>

<td>Siirry yksityiskohtaisemmalle tasolle.</td>

<td>Taulukossa: siirry sarakkeessa yksi solu alaspäin. Sarakematematiikassa: siirry sarakkeessa numero alaspäin. Huomaa: Ctrl+Alt+Nuoli alas toimii myös.</td>

<td>**Tarkista tämä!** Muuta navigaatiotyyliä (Tarkka, Yksinkertainen, Kirjain kirjaimelta) tarkemmaksi.</td>

<td>Siirry yksityiskohtaisimmalle tasolle (sisin taso).</td>

</tr>

<tr>

<th scope="row">Enter</th>

<td>Missä olen.</td>

<td>Missä olen (globaali).</td>

<td></td>

<td></td>

</tr>

<tr>

<th scope="row">Numeronäppäimet 1-10 (0 on 10)</th>

<td>Siirry paikkamerkkiin.</td>

<td>Aseta paikkamerkki.</td>

<td>Lue paikkamerkki.</td>

<td>Kuvaile paikkamerkki.</td>

</tr>

<tr>

<th scope="row">Välilyönti</th>

<td>Lue nykyinen.</td>

<td>Lue nykyinen solu.</td>

<td>Vaihda "puhetyyliä" tyyliin lue tai kuvaile.</td>

<td>Kuvaile nykyinen.</td>

</tr>

<tr>

<th scope="row">Home</th>

<td>Siirry matemaattisen sisällön alkuun.</td>

<td>Siirry rivin alkuun.</td>

<td>Taulukossa: Siirry sarakkeen alkuun. Sarakematematiikassa: Siirry sarakkeen alkuun.</td>

<td></td>

</tr>

<tr>

<th scope="row">End</th>

<td>Siirry matemaattisen sisällön loppuun.</td>

<td>Siirry rivin loppuun.</td>

<td>Taulukossa: Siirry sarakkeen loppuun. Sarakematematiikassa: Siirry sarakkeen loppuun.</td>

<td></td>

</tr>

<tr>

<th scope="row">Askelpalautin (<span lang="en">backspace</span>)</th>

<td>Siirry takaisin edelliseen sijaintiin.</td>

<td></td>

<td></td>

<td></td>

</tr>

</tbody>

</table>

## Lähetä palautetta MathCATin toiminnasta

Yhteystiedot...