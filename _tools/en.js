/* Engelse teksten voor De Gloeidraad (The Filament). Wordt door _tools/build_en.py in en/index.html gezet.
   Coördinaten, jaartallen en routes komen uit de Nederlandse bron; hier staat alleen tekst. Gebruik ’ in plaats van ' in tekst. */
const EN = {
bk:{ name:'De Bijenkorf', short:'Bijenkorf', yearWhy:'the Bijenkorf opens',
  walk:'You’re already there: 18 Septemberplein, with the green façade of department store De Bijenkorf.',
  tonnie:'Start where it’s green. An Italian looked out of an aeroplane window at our meadows and turned them into a department store.',
  info:[
   'The square is named after <b>18 September 1944</b>, the day Eindhoven was liberated. Most of the Netherlands had to wait until May 1945.',
   'De Bijenkorf (“the beehive”) opened on <b>18 March 1969</b>, the chain’s first store outside the big western cities. The designer was <b>Gio Ponti</b> from Milan, who also designed cutlery, furniture and even a car body for Alfa Romeo.',
   'In 1964 Ponti flew to Eindhoven. The Dutch polder landscape below him, green fields framed by ditches, became his façade: green glazed ceramic tiles.'],
  puzzle:{type:'num', q:'Ponti was born in 1891. That is exactly the year a small light bulb factory started up a few streets away. How old was that company in the year the Bijenkorf opened?', answer:78,
   hints:['The Bijenkorf opened in 1969.','1969 − 1891.']},
  afterBank:'Remember 1891: you’ll meet that little factory in the real walk. You can already see a hint of it in the photo: the tiles on the façade are not the same green everywhere.',
  after:'Remember 1891, you’ll meet that little factory later. Before you move on, walk close to the façade: the tiles are in relief and no two patches are exactly the same green.' },

blob:{ name:'The Blob', short:'Blob', yearWhy:'the Blob is finished',
  walk:'Cross the square to the glass bulge on the Emmasingel side.',
  tonnie:'In my day, glass was something you put a filament in. Now there are shops living in it.',
  info:[
   'Officially this is the entrance building of the Admirant shopping area. Everybody says <b>the Blob</b>. It was designed by the Italian architect <b>Massimiliano Fuksas</b> and is made of steel and glass.',
   'Fuksas also designed the square itself, the glass canopy next to the Bijenkorf and the bicycle park under your feet.',
   'The name comes from “blob architecture”: flowing shapes that could only be drawn once computers arrived. Since 2013 it has had a little sister across the square, the Bubble, by a different architect.'],
  puzzle:{type:'num', q:'In computing, a BLOB is a Binary Large OBject. So, in binary: the Blob is 11001 metres tall. How many metres is that in ordinary numbers?', answer:25,
   hints:['From right to left the places are worth 1, 2, 4, 8 and 16.','16 + 8 + 0 + 0 + 1.']},
  after:'25 metres tall, with a skin of about 1,500 panes. Look closely: every one of them is a triangle.' },

lt:{ name:'The Lichttoren', short:'Lichttoren', yearWhy:'the Lichttoren comes into use',
  walk:'Across the Emmasingel stands a white tower. Walk over to it.',
  tonnie:'This is where I worked. My job was to wait until a lamp died and then write down what time it was.',
  info:[
   'This complex was built in stages between <b>1909 and 1921</b> as a Philips light bulb factory. The tower was added in 1921 and was the city’s first high-rise: 48 metres.',
   'Philips used the tower for <b>endurance tests</b>. Lamps burned there day and night to measure how long they lasted. So at night the tower shone out over the city, and that is how it got its name: the Light Tower.',
   'It is now a listed monument with, among other things, a hotel. During the GLOW light festival, every November, the white façade becomes a projection screen.'],
  puzzle:{type:'num', q:'Look up, or walk a little way around the tower. How many corners does it have?', answer:7,
   hints:['It isn’t six and it isn’t eight.','The tower is a heptagon.'],
   bank:{q:'From the sofa you can’t walk around the tower. So try this: the Lichttoren is a heptagon. How many corners does it have?', hints:['Hepta is Greek for a number.','A hexagon has six. This is one more.']}},
  after:'Seven corners: a heptagon. You hardly ever see that in a building.' },

ger:{ name:'Gerard Philips in the Victoriapark', short:'Gerard', yearWhy:'the statue of Gerard is unveiled',
  walk:'Walk around the Lichttoren to the park behind it, the Victoriapark. Look for the biggest head in Eindhoven.',
  tonnie:'Mr Gerard was the inventor, his brother Anton the salesman. The salesman got a statue first. That’s how it goes.',
  info:[
   '<b>Gerard Philips</b> (1858–1942), born in Zaltbommel, started the company in 1891 together with his father Frederik. His brother Anton and nephew Frits had had statues for years; Gerard had none.',
   'This sculpture is called <b>Gateway to the Future</b> and was made by Andreas Hetfeld. It was a gift from Philips to the city for the company’s 130th anniversary. It consists of 4,659 separate parts, weighs 23,000 kilos, and you can walk through it.',
   'It was unveiled in May 2023 at Strijp-T and has stood here since 2025. In the same park the little stream the Gender, hidden underground for years, has been brought back to the surface for 220 metres.'],
  puzzle:{type:'num', q:'The sculpture is 7 metres tall and stacked from 500 layers of steel. How thick is one layer on average, in millimetres?', answer:14,
   hints:['7 metres is 7,000 millimetres.','7,000 ÷ 500.']},
  after:'Fourteen millimetres per layer. Do walk through it: the opening is eight metres wide.' },

psv:{ name:'Philips Stadium', short:'PSV', yearWhy:'PSV is founded',
  walk:'Follow the Mathildelaan to the west. You can’t miss the stadium.',
  tonnie:'On Sundays our whole department stood here. Whoever lost got the worst lamps on Monday.',
  info:[
   'PSV stands for <b>Philips Sport Vereniging</b>, the Philips Sports Club, founded on <b>31 August 1913</b> as a club by and for the staff. The occasion was a celebration of a hundred years of Dutch independence.',
   'The club has played on this spot from the start. The kick-off of the first match was taken by a boy of eight: <b>Frits Philips</b>.',
   'Frits kept coming all his life and saw all eighteen national titles up to 2005. Outside the stadium stand statues of club heroes Willy van der Kuijlen and Coen Dillen. The club’s nicknames: the Farmers and the Light Bulbs.'],
  puzzle:{type:'num', q:'Frits took the kick-off in 1913 and still saw PSV become champions in 2005. How many years lay between that kick-off and that last title?', answer:92,
   hints:['You only need the two years.','2005 − 1913.']},
  after:'Ninety-two years with the same club, on the same spot. Now walk back towards the Lichttoren.' },

wd:{ name:'The Witte Dame', short:'Witte Dame', yearWhy:'the Witte Dame is completed',
  walk:'Walk back to the Emmasingel. The long white factory building next to the Lichttoren is the Witte Dame.',
  walkFrom:{lt:'Walk down the Emmasingel. The long white factory building next to the Lichttoren is the Witte Dame.'},
  tonnie:'Floors full of girls at long tables. We called it the valve factory.',
  info:[
   'Architect <b>Dirk Roosenburg</b> built this for Philips between 1928 and 1931. Among other things, radio valves were made here. Witte Dame means White Lady.',
   'On <b>6 December 1942</b> the British air force bombed the Philips factories, because the occupier had parts for military radios made there. This “St Nicholas bombing” also hit the city around them; more than a hundred civilians were killed.',
   'When Philips left, demolition threatened. In 1998 the building reopened. The Design Academy Eindhoven is now based here.'],
  puzzle:{type:'text', q:'She is white and is called the Lady. Across the street stands her partner: the former Philips head office, in dark brick. Locals call him the Brown … what? (The Dutch word is fine too.)', accept:['bruineheer','debruineheer','heer','deheer','gentleman','browngentleman','thebrowngentleman','gent','lord','browngent','mister','mr','debruineheerthebrowngentleman'], show:'De Bruine Heer – the Brown Gentleman',
   hints:['Look at the colour of the building opposite.','She is a lady, he is a …']},
  after:'The White Lady and the Brown Gentleman have been facing each other for almost a century.' },

fab:{ name:'The first little factory', short:'First factory', yearWhy:'Philips begins',
  walk:'Carry on down the Emmasingel to number 31: the Philips Museum.',
  tonnie:'This is where it started, in an old factory. No tower, no stadium. A workbench and a pump to suck the air out of glass.',
  info:[
   'On <b>15 May 1891</b> Gerard Philips started a light bulb factory here with his father’s money. Eindhoven had about 4,500 inhabitants then. Land and labour were cheap.',
   'The first lamps had a <b>carbon filament</b>. Things only took off when Gerard’s younger brother Anton came to handle sales in 1895.',
   'The little building has survived and is now the Philips Museum.'],
  puzzle:{type:'lights', q:'Tonnie’s workbench. Get all nine lamps on. Careful: every switch also flips the lamps next to it.',
   hints:['It can always be done. Work row by row: use the second row to fix the first.','If you can’t crack it, you may let the workbench solve itself below.']},
  after:'Nine lamps. In 1891, a single lamp that kept burning for an evening was already good news.' },

frits:{ name:'Mr Frits on the Markt', short:'Mr Frits', yearWhy:'Frits Philips is born',
  walk:'Walk east into the shopping streets until you reach the Markt, the market square. Look for a bronze gentleman.',
  tonnie:'Mr Frits knew your name. That was awkward when you’d done something wrong and nice on all the other days.',
  info:[
   '<b>Frits Philips</b> was Anton’s son and later ran the company himself. In town he was “meneer Frits”, Mr Frits, because he talked to workers as easily as to directors.',
   'During the war he was the only member of the board who stayed in the Netherlands. He managed to save <b>382 Jewish employees</b> by declaring them indispensable for production. Yad Vashem honoured him for it in 1996.',
   'The statue is by Kees Verkade and was paid for by residents, institutions and companies from the region. For his last birthday Eindhoven was even briefly renamed Frits Philips City.'],
  puzzle:{type:'num', q:'Find the name plate by the statue. There are two years on it. How old did Mr Frits live to be?', answer:100,
   hints:['Subtract the first year from the second.','He lived from 1905 to 2005.']},
  after:'A hundred years. He saw the light bulb, the radio, the television, the cassette and the CD all from close by.' },

kerk:{ name:'St Catherine’s Church', short:'St Catherine’s', yearWhy:'St Catherine’s Church is completed',
  walk:'From the Markt take the Rechtestraat south. At the end you’ll see two church towers.',
  tonnie:'Take a good look at those two towers. My mother used to say: even twins are never the same.',
  info:[
   'This neo-Gothic church, the Catharinakerk, was built between <b>1859 and 1867</b>. So it was already standing when Philips had yet to begin and Eindhoven was a town of a few thousand people.',
   'The architect looked to French cathedrals such as Chartres and Reims. The two towers are deliberately <b>not identical</b>. Spot the differences.',
   'It was one of his early major works. Afterwards he became the best-known architect in the Netherlands.'],
  puzzle:{type:'choice', q:'The architect is Pierre Cuypers. Which two buildings in Amsterdam, which almost every tourist passes, did he later design too?',
   options:['The Royal Palace on Dam Square and the Westerkerk','The Rijksmuseum and Central Station','The Concertgebouw and the Stedelijk Museum','The Stock Exchange and the Tuschinski cinema'], correct:1,
   hints:['One of them is full of Rembrandts.','At the other you get off the train.']},
  after:'The Rijksmuseum and Amsterdam Central Station. Eindhoven had its Cuypers first.' },

monu:{ name:'The Liberation Monument', short:'Liberation Monument', yearWhy:'Eindhoven is liberated',
  walk:'From the church walk west to the Stadhuisplein, the town hall square. The bronze monument stands on the square.',
  tonnie:'That evening we put everything that gave light in the window. After four years of blackout.',
  info:[
   'On <b>18 September 1944</b> the American 101st Airborne Division liberated the city, as part of Operation Market Garden. The monument by Paul Grégoire was unveiled exactly ten years later.',
   'Every year on 18 September the <b>liberation flame</b> arrives here, fetched by cyclists from Bayeux in Normandy. The mayor lights the torch with it. That is also the starting signal for the <b>Lichtjesroute</b>: 22 kilometres of light ornaments through the city.',
   'Around the monument are the names of Eindhoven’s war victims. In 2023 it turned out that SS men and Dutch Nazi party members were among them. Those 22 names were removed and 155 missing victims were added.'],
  puzzle:{type:'text', cipher:18, q:'Tonnie wrote one word here in code. He shifted every letter 18 places along the alphabet, after the day of the liberation. Shift it back.', code:'XJWWVGE', accept:['freedom'], show:'FREEDOM',
   hints:['The X used to be an F.','Use the table below: find the code letter in the bottom row and read the letter above it.']},
  after:'Freedom. The tradition of the lights began in 1945, when residents put candles and lamps in their windows at the first commemoration.' },

dyn:{ name:'Dynamo', short:'Dynamo', yearWhy:'first Dynamo Open Air',
  walk:'Dynamo is on the Catharinaplein, right next to the church (number 21).',
  walkFrom:{frits:'From the Markt take the Rechtestraat south to the church with the two towers (by Pierre Cuypers, 1867). Dynamo is next to it, on the Catharinaplein.'},
  tonnie:'My grandson came home from here with ringing ears. I said: lad, I had that in the factory too, but I got paid for it.',
  info:[
   'Dynamo is Eindhoven’s youth centre. The rock club started in <b>1981</b>. The present building dates from 2005.',
   'For its fifth anniversary the club organised a festival in the car park in <b>1986</b>. 5,000 people came. That was the first <b>Dynamo Open Air</b>.',
   'In <b>1995</b> the festival was held at Welschap air base and drew 118,000 visitors. It is still the largest multi-day open-air festival the Netherlands has ever had. The roads around the city were gridlocked.'],
  puzzle:{type:'choice', q:'From car park in 1986 to air base in 1995. How many times bigger had the crowd become?',
   options:['About 6 times','About 12 times','Almost 24 times','Almost 48 times'], correct:2,
   hints:['118,000 divided by 5,000.','5,000 × 20 is 100,000. You’re just above that.']},
  after:'Almost 24 times. After that the festival had to shrink. Its successor is Dynamo Metalfest, held every year at the ice rink.' },

strat:{ name:'Stratumseind', short:'Stratumseind', yearWhy:'Stratumseind becomes a Living Lab',
  walk:'Stratumseind starts at the church. Walk the whole street, down to the water of the Dommel.',
  tonnie:'In the old days only the neighbours watched you stagger home. Now the lamp post watches too.',
  info:[
   'This is the longest pub street in the Netherlands: about 300 metres with some 50 bars. On a weekend night around 15,000 people come here.',
   'Since <b>2014</b> the street has also been a laboratory, the <b>Living Lab</b>. Sensors count visitors and measure sound.',
   'The best-known experiment is about light. Researchers from TU/e and Philips test here whether the colour and brightness of the street lighting can steer the mood when things threaten to get out of hand. Not everyone is happy with so much measuring; there is a lot of debate about privacy.'],
  puzzle:{type:'num', q:'Some 50 bars in 300 metres. On average, how many metres is it from one bar to the next?', answer:6,
   hints:['Divide the length by the number.','300 ÷ 50.']},
  after:'A bar every six metres. The street is named after the former village of Stratum, which became part of Eindhoven in 1920.' },

daf:{ name:'DAF Museum', short:'DAF', yearWhy:'Hub van Doorne opens his workshop',
  walk:'This is the longest stretch, a good ten minutes. Walk back towards the church and then head east, via the Ten Hagestraat and the Kanaalstraat to Tongelresestraat 27. Or follow the “Open in Maps” button.',
  tonnie:'Hub came to weld for us when we couldn’t do it ourselves. A blacksmith from Limburg. Later half the country drove his little cars.',
  info:[
   'On <b>1 April 1928</b> Hub van Doorne started a workshop here with four men, in a corner of a beer brewery.',
   'It was all down to a broken car. The brewer owned an American Stearns-Knight that nobody could get going, except Hub. The brewer then lent him 10,000 guilders and the space to start out on his own.',
   'At first he did welding and forging, for Philips too. The museum is in the old brewery, and the first workshop has been preserved.'],
  puzzle:{type:'text', q:'Today DAF stands for Van Doorne’s Automobiel Fabriek. But until 1949 the A stood for the Dutch word for something you tow behind a car. What is that thing called in English?', accept:['trailer','trailers','atrailer','aanhangwagen','aanhangwagens','aanhanger','semitrailer','traileraanhangwagen'], show:'Trailer (aanhangwagen)',
   hints:['Lorries come in two parts: the tractor unit and the …','It rhymes with “sailor”.']},
  after:'Van Doorne’s Aanhangwagen Fabriek, trailer factory, from 1932. In 1949 the first lorry arrived and the letters could stay. The passenger car with its clever automatic gearbox came later; that branch went to Volvo in 1975.' },

eff:{ name:'The Effenaar', short:'Effenaar', yearWhy:'the Effenaar begins',
  walk:'Walk back north along the Vestdijk and turn right into the Dommelstraat. The Effenaar is at the end.',
  walkFrom:{daf:'Walk back west along the Tongelresestraat, go north on the Vestdijk and turn right into the Dommelstraat. The Effenaar is at the end.'},
  tonnie:'First they wove linen here. Then for a while there was nothing. Then came boys with long hair and a key nobody had given them.',
  info:[
   'On this spot stood the linen factory <b>Van den Briel &amp; Verster</b>. When it fell empty, the city council bought the complex.',
   'In 1970 young people squatted the building and started an open youth centre. In <b>1971</b> it carried on as the <b>Effenaar</b>. The early years were all about social criticism; later it became one of the country’s major pop venues.',
   'In the old hall, which smelled of beer and cigarettes, the Red Hot Chili Peppers and Bauhaus played, among others. In 2005 the new building by architects MVRDV opened on the same spot: stacked boxes, with one hall for 1,300 and one for 400 visitors.'],
  puzzle:{type:'text', q:'A British punk band that made only one studio album also once stood in that old hall. Tonnie wrote the name down backwards.', code:'SLOTSIP XES', accept:['sexpistols','thesexpistols'], show:'Sex Pistols',
   hints:['Read from right to left.','The first three letters are S, E, X.']},
  after:'The Sex Pistols in a squatted linen factory in Eindhoven.' },

muur:{ name:'The factory wall and the Inkijkmuseum', short:'Factory wall', yearWhy:'the linen factory is founded',
  walk:'Right next to the Effenaar, at Dommelstraat 2A, a piece of old factory wall with an information board still stands, along with a small building.',
  tonnie:'Before the lamp, Eindhoven was all linen, cigars and matches. This wall still remembers.',
  info:[
   'The Van den Briel &amp; Verster linen factory was founded in <b>1849</b>, more than forty years before Philips. This is all that is left of the complex.',
   'The small building was the factory’s <b>wash house</b>. Later it served as a bicycle shed for the police, among other things, and belonged to the Effenaar.',
   'Since 2004 it has been the <b>Inkijkmuseum</b>, the “look-in museum”. You don’t go inside: you look through the windows from the street at changing exhibitions.'],
  puzzle:{type:'num', q:'Find the year the wall was built on the information board. How many years had the factory existed by then?', answer:39,
   hints:['The factory dates from 1849.','The wall dates from 1888.']},
  after:'Thirty-nine years. Have a look through the wash house windows too.' },

silly:{ name:'The Silly Walks tunnel', short:'Silly Walks', yearWhy:'tunnel opened by John Cleese',
  walk:'Follow the path north along the Dommel. It dips under the railway: the Dommel tunnel.',
  tonnie:'I’ve walked properly all my life. Here you don’t have to.',
  info:[
   'This tunnel for cyclists and pedestrians links the city centre with the TU/e campus. It is 130 metres long.',
   'In <b>April 2016</b> Niels van Swaemen and Kasper van Leek of Studio Giftig painted the wall full of the walks from Monty Python’s sketch <i>The Ministry of Silly Walks</i>.',
   '<b>John Cleese</b> came to open the tunnel himself. Hundreds of people turned up. He asked them whether they really had nothing better to do that day.'],
  puzzle:{type:'num', q:'Walk through the tunnel, and do at least ten steps as a silly walk. A sum for the way: the tunnel is 130 metres. How many solemn paces of 65 centimetres do you need to reach the other end?', answer:200,
   hints:['130 metres is 13,000 centimetres.','13,000 ÷ 65.']},
  after:'Two hundred paces. The city council calls places like this “blijmakers”: things that make you happy.' },

ath:{ name:'The TU/e nuclear reactor', short:'Reactor', yearWhy:'reactor closed for good',
  walk:'After the tunnel you walk onto the campus. Look for the building called <b>Athene</b>, on the south side of the campus near the Helix and Matrix buildings. It is on the campus signs.',
  tonnie:'They said it was safe. I took the long way round all the same.',
  info:[
   'Eindhoven’s technical college, now the university TU/e, had its <b>own nuclear reactor</b>: ATHENE. From 1960 rector Posthumus wanted one for teaching and research. The design came from the Dutch reactor centre in Petten.',
   'Construction started in 1966 and by early 1969 the reactor was running. Just a year and a half later the national advisory council on nuclear energy recommended closing it: it contributed too little to science. After <b>May 1973</b> it was over.',
   'Its power was very low and it had run only briefly, so hardly any contaminated material was left. The one and a half kilos of highly enriched uranium went to Mol in Belgium. The building is still called Athene.'],
  puzzle:{type:'num', q:'A sum from the reactor classroom. A source emits 1,600 units. Every 4 years that halves. After how many years are 100 left?', answer:16,
   hints:['1,600 → 800 → 400 → …','You have to halve four times. Four times 4 years.']},
  after:'Sixteen years. Nuclear research hasn’t left the campus: at the DIFFER institute they now work on nuclear fusion.' },

sta:{ name:'The station and Anton Philips', short:'Station', yearWhy:'the station opens',
  walk:'Walk via the Dommelstraat and the Stationsweg to the Stationsplein. Stand in front of the station, by the statue.',
  walkFrom:{ath:'Walk back through the tunnel and then via the Dommelstraat and the Stationsweg to the Stationsplein. Stand in front of the station, by the statue.',
            silly:'Walk back and go via the Dommelstraat and the Stationsweg to the Stationsplein. Stand in front of the station, by the statue.'},
  tonnie:'See it? The clock is the tuning dial, the tower the loudspeaker. Everyone here swears the station is a radio.',
  info:[
   'The station dates from <b>1956</b> and was designed by Koen van der Gaast. Take a few steps back and it really does look like an old Philips radio.',
   'Only: it isn’t true. The radio model the station resembles only came on the market years after the design. It is a stubborn and much-loved <b>urban myth</b>.',
   'The statue is of <b>Anton Philips</b> (1874–1951), a gift from the city for his 75th birthday. He stands with his back to the station. Under Anton, Philips started making radios in 1927; five years later it was the largest radio manufacturer in the world.'],
  puzzle:{type:'text', morse:true, q:'Radio began with Morse. This is the last thread in Tonnie’s notebook. Which word does it spell?', code:'·−··  ··  −−·  ····  −', accept:['light'], show:'LIGHT',
   hints:['Five letters. The last one is a single dash: the T.','Use the Morse table below.']},
  after:'Light. Now walk back to 18 Septemberplein. That is where the lamp chest opens.' }
};
Object.keys(EN).forEach(id=>Object.assign(STOPS[id], EN[id]));
Object.assign(ROUTES.p,{label:'Trial round', tijd:'± 15 minutes', word:'LIT', toon:'LIT', sub:'Three stops around the square: the Bijenkorf, the Blob and the Lichttoren.'});
Object.assign(ROUTES.k,{label:'Short', tijd:'± 1 hour', sub:'The core: Philips, the Markt, Stratumseind, the Effenaar and the station.'});
Object.assign(ROUTES.m,{label:'Medium', tijd:'± 1.5 hours', sub:'Adds the PSV stadium, Gerard Philips, the Witte Dame and St Catherine’s Church.'});
Object.assign(ROUTES.l,{label:'Long', tijd:'± 2 hours', sub:'Everything: also the DAF Museum, the old factory wall, the Silly Walks tunnel and the nuclear reactor at TU/e.'});
//@@MAP
const ENW = {
 'w-pins':{name:'Flying Pins', t:'Ten yellow pins and a bowling ball, as if someone has just thrown a strike. It is an artwork by Claes Oldenburg and Coosje van Bruggen from 2000. They saw a bowling lane in the long, straight Kennedylaan.'},
 'w-abbe':{name:'Van Abbemuseum', t:'Museum of modern art, opened in 1936. It was a gift to the city from cigar manufacturer Henri van Abbe. Before the lamp, Eindhoven was a cigar town.'},
 'w-vest':{name:'Vesteda Tower', t:'Residential tower by architect Jo Coenen from 2006, 90 metres tall. Seen from above it is diamond-shaped, so it looks different from every side.'},
 'w-adm':{name:'De Admirant', t:'The residential tower behind the Blob is over 100 metres tall and was the tallest building in the city when it was completed in 2006.'},
 'w-pater':{name:'Paterskerk', t:'On top of the spire stands a statue of Christ, five metres tall. Locals call him Jezus Waaghals: Jesus the Daredevil. The old monastery around it is now called DomusDela.'},
 'w-fiets':{name:'Under the square', t:'Under 18 Septemberplein lies a bicycle park for about 1,700 bikes. The sloping glass entrances on the square are, like the Blob, by architect Fuksas.'},
 'w-muziek':{name:'Muziekgebouw Frits Philips', t:'Eindhoven’s concert hall, since 1992, named after Mr Frits. The restaurant is called that too: Meneer Frits.'},
 'w-dommel':{name:'The Dommel', t:'This little river rises in Belgium, flows right through Eindhoven and ends up near Den Bosch. The old town lay exactly where the Dommel and the Gender met.'},
 'w-tue':{name:'TU/e', t:'Founded in 1956 as Eindhoven’s technical college, the second in the Netherlands. The campus lies right behind the station.'},
 'w-kanaal':{name:'Eindhoven Canal', t:'This is where the Eindhoven Canal begins, dug in 1846 to the Zuid-Willemsvaart canal. For Eindhoven it was the first good connection to the rest of the country, even before the railway.'}
};
WEETJES.forEach(w=>Object.assign(w, ENW[w.id]));
Object.assign(NAAM,{bk:'Bijenkorf (start)',blob:'Blob',lt:'Lichttoren',ger:'Gerard Philips',psv:'Philips Stadium',wd:'Witte Dame',fab:'First factory',frits:'Mr Frits',
 kerk:'St Catherine’s Church',monu:'Liberation Monument',dyn:'Dynamo',strat:'Stratumseind',daf:'DAF Museum',eff:'Effenaar',muur:'Factory wall',silly:'Silly Walks tunnel',ath:'TU/e reactor',sta:'Station'});
