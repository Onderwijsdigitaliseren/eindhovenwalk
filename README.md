# Eindhovenwalk – De Gloeidraad

Puzzelwandeling door de binnenstad van Eindhoven, van Enigma Mystery. Statische site voor GitHub Pages, geen build-stap.

```
/index.html        de hele wandeling: plekken (STOPS), weetjes (WEETJES), varianten (ROUTES), kaart, schermen
/shared/tiles.js   kaartgegevens uit OpenStreetMap-vectortegels (OpenFreeMap); kopie uit de test-repo (wandel/shared/tiles.js)
/img/              artwork, zie img/ARTWORK.md en img/BRONNEN.md; alles optioneel
/en/index.html     Engelse versie (The Filament); NIET met de hand aanpassen, wordt gemaakt door _tools/build_en.py
/_tools/en.js      Engelse teksten: plekken, routes, weetjes, kaartnamen
/_tools/build_en.py  maakt en/index.html uit index.html + en.js + de lijst schermteksten in het script
```

- Varianten: proefronde (3 plekken), kort ± 1 uur (9), middel ± 1,5 uur (13), lang ± 2 uur (18). Start en finish: de Bijenkorf, 18 Septemberplein.
- De punten staan vast (coördinaten in `STOPS`). De kaart haalt straten, water en groen op rond 51.4410, 5.4790 (R 750 m). Lukt dat niet, dan tekent de pagina een eenvoudige plattegrond.
- Testhulp alleen met `?test` achter het adres (blijft aan in dat tabblad) of lokaal: knop "Test ⏭" bij opdrachten en finale, en "speld verplaatsen" op de kaart (lijst in het menu). `?live` zet hem weer uit. Spelers zien de testhulp dus niet.
- Aankomst: binnen 40 m van de plek (gps-nauwkeurigheid onder 80 m) opent het verhaal vanzelf, met een trilling. Binnen 80 m verdwijnt de knop "Open in Maps". De knop "Ik ben er" blijft als reserve.
- Voortgang in `localStorage` onder `gloeidraad.v1`, verplaatste spelden onder `gloeidraad.pins`.
- Engels: na elke wijziging van `index.html` `python3 _tools/build_en.py` draaien. Het script stopt als een Nederlandse schermtekst is veranderd; pas dan de lijst `UI` in het script aan. Nieuwe of gewijzigde plekteksten ook in `_tools/en.js` zetten. In het Engels wijken drie opdrachten af: het geheimschrift geeft FREEDOM, de morse geeft LIGHT, DAF vraagt om 'trailer'; de proefronde eindigt op LIT. Eigen voortgang onder `gloeidraad.en.v1`.
- Nog niet: toegangscode/ticket, koppeling met de catalogus van Enigma Mystery. De pagina staat op `noindex`.
