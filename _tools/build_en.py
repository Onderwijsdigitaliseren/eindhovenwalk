#!/usr/bin/env python3
"""Maakt en/index.html uit index.html.
   - zet de Engelse teksten uit _tools/en.js erin (plekken, routes, weetjes, kaartnamen)
   - vertaalt de schermteksten met de lijst UI hieronder
   - past de paden aan (../shared, ../img) en gebruikt een eigen opslagsleutel
   Draai na elke wijziging van index.html:  python3 _tools/build_en.py
   Het script stopt met een melding als een Nederlandse tekst uit de lijst niet meer in index.html staat."""
import re, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
s = (root/'index.html').read_text(encoding='utf-8')
en = (root/'_tools'/'en.js').read_text(encoding='utf-8')
data, mapp = en.split('//@@MAP')

def rep(a, b, n=None):
    global s
    c = s.count(a)
    if c == 0 or (n is not None and c != n):
        sys.exit('build_en: tekst %d keer gevonden (verwacht %s): %r' % (c, n or '>=1', a[:90]))
    s = s.replace(a, b)

# 1) Engelse inhoud invoegen
rep("/* ---------- hulpjes ---------- */", data.strip() + "\n\n/* ---------- hulpjes ---------- */", 1)
rep("function groep(id){", mapp.strip() + "\nfunction groep(id){", 1)

# 2) paden, taal, opslag
rep('<html lang="nl">', '<html lang="en">', 1)
rep('src="shared/tiles.js', 'src="../shared/tiles.js', 1)
rep('src="img/', 'src="../img/')
rep('content="img/og.jpg"', 'content="../img/og.jpg"', 1)
rep("const KEY='gloeidraad.v1'", "const KEY='gloeidraad.en.v1'", 1)
rep("""'<p class="small" style="text-align:center"><a href="en/">English version</a></p>'""", """'<p class="small" style="text-align:center"><a href="../">Nederlandse versie</a></p>'""", 1)

# 3) schermteksten
UI = [
 ('<title>De Gloeidraad – stadswandeling Eindhoven</title>', '<title>The Filament – Eindhoven city walk</title>'),
 ('content="De Gloeidraad: een puzzelwandeling van 1, 1,5 of 2 uur door de binnenstad van Eindhoven, langs Philips, PSV, de Blob, de Effenaar en meer."', 'content="The Filament: a puzzle walk of 1, 1.5 or 2 hours through Eindhoven city centre, past Philips, PSV, the Blob, the Effenaar and more."'),
 ('content="De Gloeidraad – stadswandeling Eindhoven"', 'content="The Filament – Eindhoven city walk"'),
 ('📓 Schrift', '📓 Notes'), ('🗺 Kaart', '🗺 Map'),
 ('Je bent er (bijna).', 'You’re (almost) there.'),
 ("'Nog ongeveer <b>'+(Math.round(d/10)*10)+' meter</b> hemelsbreed.'", "'About <b>'+(Math.round(d/10)*10)+' metres</b> to go, as the crow flies.'"),
 ('Plattegrond van de binnenstad van Eindhoven met de plekken van de wandeling', 'Map of Eindhoven city centre with the stops of the walk'),
 ('aria-label="Inzoomen"', 'aria-label="Zoom in"'), ('aria-label="Uitzoomen"', 'aria-label="Zoom out"'),
 ('aria-label="Hele route"', 'aria-label="Whole route"'), ('aria-label="Naar mijn plek"', 'aria-label="My location"'),
 ('Kaart laden…', 'Loading map…'), ('Getekende plattegrond (kaart niet geladen)', 'Sketch map (map data not loaded)'),
 ('Deze browser geeft geen locatie door. De wandeling werkt ook zonder.', 'This browser doesn’t share a location. The walk works without it too.'),
 ('Locatie zoeken…', 'Finding your location…'),
 ('Locatie is geblokkeerd voor deze site. Sta locatie toe in je browser en tik daarna op ◎ op de kaart.', 'Location is blocked for this site. Allow location in your browser, then tap ◎ on the map.'),
 ('Geen locatie gevonden. Tik op ◎ op de kaart om het opnieuw te proberen.', 'No location found. Tap ◎ on the map to try again.'),
 ('Je locatie is nu niet te bepalen. Tik op ◎ op de kaart om het opnieuw te proberen.', 'Your location can’t be determined right now. Tap ◎ on the map to try again.'),
 ("'Je bent ongeveer '+Math.round(dist(pos,{lat:51.4410,lng:5.4790})/1000)+' km van de binnenstad van Eindhoven. Je stip valt buiten de kaart; de wandeling werkt ook zonder.'", "'You are about '+Math.round(dist(pos,{lat:51.4410,lng:5.4790})/1000)+' km from Eindhoven city centre. Your dot is off the map; the walk works without it too.'"),
 ('</span> in elke wandeling', '</span> in every walk'), ('</span> erbij vanaf 1,5 uur', '</span> added from 1.5 hours'),
 ('</span> alleen in 2 uur', '</span> 2-hour walk only'), ('ⓘ</span> weetje</p>', 'ⓘ</span> fun fact</p>'),
 ('Sleep om te schuiven, knijp of gebruik + en − om te zoomen. Tik op een punt voor meer.', 'Drag to move, pinch or use + and − to zoom. Tap a point for more.'),
 ('">Weetje</p>', '">Fun fact</p>'),
 ('Geen opdracht hier. Loop er gerust langs als het op je route ligt.', 'No puzzle here. Have a look if it’s on your way.'),
 ("'Lamp aan · '", "'Lamp lit · '"), ("'Plek '+(", "'Stop '+("), ("+' van jouw wandeling'", "+' of your walk'"),
 ("'Niet in deze wandeling'", "'Not in this walk'"), ("'Plek van de wandeling'", "'Stop on the walk'"),
 ('UIT HET SCHRIFT VAN TONNIE', 'FROM TONNIE’S NOTEBOOK'),
 ('Het hele verhaal en de opdracht krijg je als je er bent.', 'You get the full story and the puzzle when you’re there.'),
 ('Test: speld verplaatsen', 'Test: move pin'),
 ("'Tik op de kaart waar “'+s.short+'” moet staan.'", "'Tap the map where “'+s.short+'” should be.'"),
 (">Foto: '+[c.maker,c.lic,'verkleind'", ">Photo: '+[c.maker,c.lic,'resized'"), ("rel=\"noopener\">bron</a>'].filter", "rel=\"noopener\">source</a>'].filter"), ("'publiek domein'", "'public domain'"), ("'Casimir (Nederlandstalige Wikipedia)'", "'Casimir (Dutch Wikipedia)'"),
 ('Beeldverantwoording', 'Photo credits'),
 ('Illustraties en overige foto’s: Enigma Mystery. Kaartgegevens: © OpenStreetMap-bijdragers, © OpenMapTiles.', 'Illustrations and other photos: Enigma Mystery. Map data: © OpenStreetMap contributors, © OpenMapTiles.'),
 ("' verplaatst. De lijst staat in het menu.'", "' moved. The list is in the menu.'"),
 ("+' van '+ids.length+' lampen aan\">'", "+' of '+ids.length+' lamps lit\">'"),
 (">Draad '+(S.i+1)+' van '+", ">Thread '+(S.i+1)+' of '+"),
 ('>Stadswandeling Eindhoven</p>', '>Eindhoven city walk</p>'), ('>De Gloeidraad</h1>', '>The Filament</h1>'),
 ('Een puzzelwandeling door de Lichtstad. Start en finish: de Bijenkorf op het 18 Septemberplein.', 'A puzzle walk through the City of Light. Start and finish: De Bijenkorf on 18 Septemberplein.'),
 ('In de Lichttoren brandden vroeger dag en nacht lampen, om te meten hoe lang ze het volhielden. Tonnie was een van de mensen die daarbij zat en noteerde wanneer er een uitging.', 'In the Lichttoren, the Light Tower, lamps used to burn day and night to measure how long they lasted. Tonnie was one of the people who sat with them and noted when one went out.'),
 ('Hij liet een schrift na. Daarin staat een route door de stad, met op elke plek een <b>draad</b>: een raadsel dat je alleen daar oplost. Elke draad doet een lamp branden. Met alle lampen aan gaat op het plein zijn lampenkist open.', 'He left a notebook. It holds a route through the city, with a <b>thread</b> at every stop: a riddle you can only solve there. Each thread lights a lamp. With all the lamps lit, his lamp chest on the square will open.'),
 ('Tonnie en zijn schrift zijn verzonnen. Alles wat je onderweg over de stad leest, is echt gebeurd.', 'Tonnie and his notebook are made up. Everything you read about the city along the way really happened.'),
 (">Verder waar je was ('+ROUTES[S.route].label.toLowerCase()+', draad '+", ">Continue where you left off ('+ROUTES[S.route].label.toLowerCase()+', thread '+"),
 ('>Kies je wandeling</h3>', '>Choose your walk</h3>'),
 ("+' plekken · ongeveer '+routeKm(k).toFixed(1).replace('.',',')+' km · '", "+' stops · about '+routeKm(k).toFixed(1)+' km · '"),
 ('>Eerst proberen</h3>', '>Try it first</h3>'),
 ('<b>Proefronde vanaf de bank · ± 10 minuten</b><span>Dezelfde drie plekken zonder te lopen: alleen de verhalen, de opdrachten en de finale.</span>', '<b>Trial round from the sofa · ± 10 minutes</b><span>The same three stops without walking: just the stories, the puzzles and the finale.</span>'),
 ('<li><b>Bankversie.</b> Je loopt niet. Je leest de verhalen en lost de opdrachten op waar je nu zit. De kaart laat zien waar de plekken liggen.</li>', '<li><b>Sofa version.</b> No walking. You read the stories and solve the puzzles right where you are. The map shows where the stops are.</li>'),
 ("zijn weetjes: tik erop '+(S.bank?'op de kaart':'als je erlangs komt')+'.</li>", "are fun facts: tap them '+(S.bank?'on the map':'as you pass')+'.</li>"),
 ("(S.bank?'Begin':'Begin bij de Bijenkorf')", "(S.bank?'Start':'Start at the Bijenkorf')"),
 ("(last?'Naar de lampenkist':'Volgende plek')", "(last?'To the lamp chest':'Next stop')"),
 ('>Plattegrond: alle plekken</h3>', '>Map: all stops</h3>'), ('>Plattegrond groot bekijken</button>', '>Open the large map</button>'),
 ('Voor volwassenen en oudere studenten. Alleen of met een groepje op één telefoon. De tijden zijn een richtlijn: wie overal blijft kijken, doet er langer over. Neem een opgeladen telefoon mee.', 'For adults and older students. On your own or with a small group on one phone. The times are a guide: if you stop to look everywhere, it takes longer. Bring a charged phone.'),
 ('<h2>Zo werkt het</h2>', '<h2>How it works</h2>'),
 ('<li>Je loopt van plek naar plek. Op de kaart zie je waar je heen moet en waar je zelf bent; de knop <b>Open in Maps</b> wijst de weg als je twijfelt.</li>', '<li>You walk from stop to stop. The map shows where to go and where you are; the <b>Open in Maps</b> button gives directions if you’re unsure.</li>'),
 ("<li>De blauwe rondjes met een <b>i</b> ", "<li>The blue circles with an <b>i</b> "),
 ('<li>Dit is de proefronde. Je hoeft er niet echt te staan: tik gewoon op <b>Ik ben er</b>.</li>', '<li>This is the trial round. You don’t actually have to be there: just tap <b>I’m here</b>.</li>'),
 ('<li>Op elke plek lees je eerst wat daar gebeurd is. Daarna volgt één opdracht. Soms moet je rekenen, soms kijken, soms een code kraken.</li>', '<li>At each stop you first read what happened there. Then comes one puzzle. Sometimes you calculate, sometimes you look, sometimes you crack a code.</li>'),
 ('<li>Zit je vast, dan zijn er twee hints. Daarna mag je de oplossing laten zien. Je loopt nooit vast.</li>', '<li>If you’re stuck there are two hints. After that you can reveal the answer. You never get stranded.</li>'),
 ('<li>Elke opgeloste draad geeft een lamp met een <b>jaartal</b>. Die komen in je schrift (onderaan). Onthoud ze een beetje: aan het eind heb je ze nodig.</li>', '<li>Every solved thread gives you a lamp with a <b>year</b>. They go into your notebook (at the bottom). Keep them in mind: you’ll need them at the end.</li>'),
 ('>Andere wandeling kiezen</button>', '>Choose a different walk</button>'),
 ("'Start: ':'Naar: '", "'Start: ':'Next: '"),
 ('id="go">Ik ben er</button>', 'id="go">I’m here</button>'), ('>Hele plattegrond</button>', '>Full map</button>'),
 ('>Naar de opdracht</button>', '>To the puzzle</button>'),
 ('placeholder="Getal"', 'placeholder="Number"'), ('Jouw antwoord', 'Your answer'),
 ("'<p class=\"kicker\">Opdracht · '", "'<p class=\"kicker\">Puzzle · '"),
 ('>Controleer</button>', '>Check</button>'), ('>Lees het verhaal nog eens</button>', '>Read the story again</button>'),
 ('Test ⏭ overslaan', 'Test ⏭ skip'),
 ("(x?' aan':' uit')", "(x?' on':' off')"),
 ("'Nog niet. Kijk nog eens goed.','Dat is het niet. Er is een hint als je wilt.','Bijna, of juist niet. Probeer het opnieuw.'", "'Not yet. Take another look.','That’s not it. There’s a hint if you want one.','Close, or perhaps not. Try again.'"),
 ("'Los de werkbank op'", "'Solve the workbench'"), ("'Toon de oplossing'", "'Show the answer'"),
 ('Boven: de echte letter. Onder: Tonnies codeletter.', 'Top: the real letter. Bottom: Tonnie’s code letter.'),
 ("'Alle lampen aan'", "'All lamps on'"), ("'Opgelost met hulp':'Draad gevonden'", "'Solved with help':'Thread found'"),
 ("+' · staat in je schrift<", "+' · saved in your notebook<"), ("'Terug naar het plein':'Loop verder'", "'Back to the square':'Walk on'"),
 ('>Alle lampen branden</p>', '>All lamps are lit</p>'), ('<h2>Terug naar het 18 Septemberplein</h2>', '<h2>Back to 18 Septemberplein</h2>'),
 ('Loop terug naar het plein voor de Bijenkorf, waar je begon. Daar ligt Tonnies lampenkist.', 'Walk back to the square in front of the Bijenkorf, where you started. Tonnie’s lamp chest is waiting there.'),
 ('>Ik sta op het plein</button>', '>I’m on the square</button>'),
 ('>De lampenkist</p><h2>Zet de lampen in de tijd</h2>', '>The lamp chest</p><h2>Put the lamps in order of time</h2>'),
 ('Op het deksel zit een rij fittingen. Tonnie schreef erbij: <i>“De oudste eerst.”</i> Tik de plekken aan in de volgorde van hun jaartal, van vroeg naar laat. Elke goede lamp geeft een letter.', 'On the lid is a row of lamp sockets. Tonnie wrote next to them: <i>“Oldest first.”</i> Tap the stops in the order of their years, from early to late. Every correct lamp gives you a letter.'),
 ('Jaartal kwijt? Kijk in je schrift, onderaan.', 'Forgotten a year? Check your notebook, at the bottom.'),
 ('Test ⏭ kist openen', 'Test ⏭ open chest'),
 ('Die is jonger. Er is er nog een die eerder kwam.', 'That one is younger. Another came first.'),
 ('<p>De <b>Lichtjesroute</b> bestaat echt. Elk jaar vanaf 18 september hangt de stad vol lichtornamenten, 22 kilometer lang. Het begon in 1945, toen Eindhovenaren bij de eerste herdenking van de bevrijding kaarsen en lampjes achter hun ramen zetten.</p>', '<p>The <b>Lichtjesroute</b>, the “route of little lights”, is real. Every year from 18 September the city is hung with light ornaments, 22 kilometres of them. It began in 1945, when the people of Eindhoven put candles and lamps in their windows at the first commemoration of the liberation.</p>'),
 ('>Proefronde klaar</p>', '>Trial round done</p>'), ('color:var(--amber)">AAN</h1>', 'color:var(--amber)">LIT</h1>'),
 ('De eerste lamp is aan. Zo werkt de hele wandeling: lopen, lezen, één opdracht per plek, en aan het eind de lampen in de tijd zetten.', 'The first lamp is lit. That is how the whole walk works: walk, read, one puzzle per stop, and at the end put the lamps in order of time.'),
 ('In de echte wandeling gaat Tonnies lampenkist open en staat er een ander woord op het deksel. Daarvoor moet je de stad in.', 'In the real walk Tonnie’s lamp chest opens and a different word appears on the lid. For that you have to head into town.'),
 ('>Kies een wandeling</button>', '>Choose a walk</button>'),
 ('>De kist is open</p>', '>The chest is open</p>'),
 ('In de kist ligt geen goud. Er ligt één oude kooldraadlamp in, en een doosje lucifers. Onder in het doosje zit een briefje van Tonnie:', 'There is no gold in the chest. There is one old carbon-filament lamp, and a box of matches. At the bottom of the box is a note from Tonnie:'),
 ('“Iedereen denkt dat wij de Lichtstad zijn door de lamp. Maar vóór meneer Gerard maakten ze hier al lucifers. Het licht was er eerder dan Philips. Wij hebben het alleen langer laten branden.”', '“Everyone thinks we’re the City of Light because of the lamp. But before Mr Gerard they were already making matches here. The light was here before Philips. We just kept it burning longer.”'),
 ('Dat laatste klopt. Eindhoven had al een grote lucifersindustrie voordat Philips in 1891 begon. De bijnaam Lichtstad komt van allebei.', 'That last part is true. Eindhoven already had a large match industry before Philips started in 1891. The nickname Lichtstad, City of Light, comes from both.'),
 ('<h3>Jullie wandeling</h3>', '<h3>Your walk</h3>'),
 ("+' draden · ongeveer '+min+' minuten · '+S.hints+' hints · '+S.helped+' keer de oplossing gevraagd · '+S.miss+' lampen verkeerd in de kist<", "+' threads · about '+min+' minutes · '+S.hints+' hints · '+S.helped+' answers revealed · '+S.miss+' lamps placed wrongly in the chest<"),
 ('>Bekijk het hele schrift</button>', '>Open the notebook</button>'), ('>Nog een wandeling kiezen</button>', '>Choose another walk</button>'),
 ('id="dicht">Sluiten</button>', 'id="dicht">Close</button>'),
 ('<h2>Het schrift</h2>', '<h2>The notebook</h2>'), ('Nog leeg. Los je eerste draad op.', 'Still empty. Solve your first thread.'),
 ('In de volgorde waarin je ze vond, niet in de volgorde van de tijd.', 'In the order you found them, not in order of time.'),
 ('<h2>Plattegrond</h2>', '<h2>Map</h2>'), ('>Jouw volgorde</h3>', '>Your order</h3>'),
 ('Je voortgang wordt op deze telefoon bewaard.', 'Your progress is saved on this phone.'),
 ('>Naar het beginscherm</button>', '>Back to the start screen</button>'), ('>Deze wandeling opnieuw beginnen</button>', '>Restart this walk</button>'),
 ('Verantwoording: Tonnie en zijn schrift zijn verzonnen. De feiten bij de plekken komen uit openbare bronnen, onder meer het Philips Museum, het DAF Museum, de TU/e, Omroep Brabant en gemeentelijke publicaties.', 'About the facts: Tonnie and his notebook are made up. The facts at the stops come from public sources, including the Philips Museum, the DAF Museum, TU/e, Omroep Brabant and city council publications.'),
 ('>Testhulp</h3>', '>Test tools</h3>'),
 ('Alleen zichtbaar op de testsite. Opdrachten kun je overslaan met “Test ⏭”. Staat een speld verkeerd: tik hem aan op de kaart, kies “speld verplaatsen” en tik de goede plek aan. Stuur daarna deze lijst door.', 'Only visible on the test site. Skip puzzles with “Test ⏭”. If a pin is wrong: tap it on the map, choose “move pin” and tap the right spot. Then send this list on.'),
 ('Nog geen spelden verplaatst.', 'No pins moved yet.'),
 ('🗑 Alles wissen', '🗑 Clear everything'), ('🗑 Wissen en opnieuw beginnen', '🗑 Clear and start over'),
 ('Zeker weten? Tik nog een keer om alles te wissen', 'Are you sure? Tap again to clear everything'), ("toast('Alles gewist.')", "toast('Everything cleared.')"), ('>Spelden terugzetten</button>', '>Reset pins</button>'),
]
for a, b in UI:
    rep(a, b)

(root/'en').mkdir(exist_ok=True)
(root/'en'/'index.html').write_text(s, encoding='utf-8')
print('en/index.html geschreven,', len(s), 'tekens,', len(UI), 'schermteksten vertaald')
