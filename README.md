# Eindhovenwalk – De Gloeidraad

Puzzelwandeling door de binnenstad van Eindhoven, van Enigma Mystery. Statische site voor GitHub Pages, geen build-stap.

```
/index.html        de hele wandeling: plekken (STOPS), weetjes (WEETJES), varianten (ROUTES), kaart, schermen
/shared/tiles.js   kaartgegevens uit OpenStreetMap-vectortegels (OpenFreeMap); kopie uit de test-repo (wandel/shared/tiles.js)
/img/              artwork, zie img/ARTWORK.md; alles optioneel
```

- Varianten: proefronde (3 plekken), kort ± 1 uur (9), middel ± 1,5 uur (13), lang ± 2 uur (18). Start en finish: de Bijenkorf, 18 Septemberplein.
- De punten staan vast (coördinaten in `STOPS`). De kaart haalt straten, water en groen op rond 51.4410, 5.4790 (R 750 m). Lukt dat niet, dan tekent de pagina een eenvoudige plattegrond.
- Testhulp op `*.github.io` en lokaal: knop "Test ⏭" bij opdrachten en finale, en "speld verplaatsen" op de kaart (lijst in het menu). Met `?live` achter het adres staat de testhulp uit.
- Voortgang in `localStorage` onder `gloeidraad.v1`, verplaatste spelden onder `gloeidraad.pins`.
- Nog niet: toegangscode/ticket, Engelse versie, koppeling met de catalogus van Enigma Mystery. De pagina staat op `noindex`.
