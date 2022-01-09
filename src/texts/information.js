import React from 'react';
import sebastian from '../static/img/party/sebastian.jpg';
import antonio from '../static/img/party/antonio.jpg';
import johannaL from '../static/img/party/johanna_lundsgard.jpg';
import johannaE from '../static/img/party/johanna_erensjo.jpg';
import helloImg from '../static/img/timeline/1.jpg';
import timeline1 from '../static/img/timeline/2.jpg';
import timeline2 from '../static/img/timeline/3.jpg';
import timeline3 from '../static/img/timeline/4.jpg';
import timeline4 from '../static/img/timeline/5.jpg';
import timeline5 from '../static/img/timeline/6.jpeg';
import timeline6 from '../static/img/timeline/7.jpg';
import timeline7 from '../static/img/timeline/8.jpg';
import timeline8 from '../static/img/timeline/9.jpg';
import timeline9 from '../static/img/timeline/10.jpg';

const data = [
	{
		"homepage": {
			"helloHeader": "Vi ska gifta oss!",
			"helloText": "Hej och hjärtligt välkomna till vår bröllopshemsida. Eftersom du har hittat hit så har du förmodligen fått ett inbjudningskort hem i brevlådan. Här hittar du den mesta information du behöver för att vara del av vår stora dag i maj.",
			"helloText2": "Vi hoppas att du har möjlighet att vara med och fira tillsammans med oss, det skulle göra oss väldigt glada.",
			"helloSignature": "Kramar Johan och Klara",
			"helloImg": helloImg
		},
		"weekend": {
			"weekendHeader": "Var/När?",
			"weekendMobileText": "(Karta finns längre ner på sidan)",
			"ceremonyHeader": "Vigsel",
			"ceremonyText": "Vigseln äger rum den 21:a maj, kl. 14:00 i Jonstorps kyrka, Pg Ahnfeldts väg 3, 263 92 Jonstorp.",
			"dinnerAndPartyHeader": "Middag och fest",
			"dinnerAndPartyText": "Efter vigseln håller vi bröllopsfest på Bläsinge gård. Adressen är Gamla Södåkravägen 127, Jonstorp. Det finns gott om parkering vid lokalen. Vi samlas för tårta och brudskål innan vi sätter oss till bords för middagen.",
			"dresscodeHeader": "Klädkod",
			"dresscodeSubHeader": "Kavaj",
			"dresscodeSubPreabmle": "Det betyder följande:",
			"dresscodeHimHeader": "Han:",
			"dresscodeHimText": "Hel kostym med ljus eller festligare skjorta. Även en ljusare kostym fungerar utmärkt.",
			"dresscodeHerHeader": "Hon:",
			"dresscodeHerText": "Festlig klänning, kjol eller byxdress. Galaklänning behövs verkligen inte.",
			"childrenHeader": "Barn",
			"childrenInfo": "Barn är välkomna till vigseln, men därefter fortsätter kvällen i vuxnas sällskap. Ammade barn är självklart undantagna.",
			"parentsEveningHeader": "Föräldrarnas afton (Bride & BBQ)",
			"parentsEveningText": "Den som väntar på något gott… För att väntan inte skall bli allt för lång har brudparets föräldrar kommit till gästernas undsättning och bjuder in till grillkväll fredagen innan bröllopet.",
			"parentsEveningText2": "Under lite mer avslappnande former bjuds det på mat och dryck ute i trädgården på Bläsinge gård, samma plats som bröllopsfesten kommer att hållas. Ett tillfälle att lära känna de andra gästerna och komma i god stämning inför bröllopshelgen! Vill du fråga brudens far om bästa grillkolen för en klotgrill, eller utmana brudgummens far på en match boule. Då ska du se till att vara på plats redan på fredagen.",
			"parentsEveningText3": " Grillarna tänds runt kl. 18:00, men då flera gäster kommer långväga är det drop-in som gäller. Vid otur med väder och vind kan upplägget ändras.",
			"parentsEveningDresscode": "Ingen specifik klädkod denna dag, utan kom som du behagar.",
		},
		"practical": {
			"practicalHeader": "Praktisk information",
			"osaHeader": "OSA.",
			"osaText": "Sker via mail till",
			"osaEmail": "johan@johansvensson.eu",
			"osaText2": "Kom ihåg att meddela eventuella matpreferenser, samt om ni önskar delta även på fredagen.",
			"speechHeader": "Anmälan tal och spex",
			"speechText": "Brudparet tar varmt emot alla typer av tal, spex och andra skojigheter under middagen. Ta kontakt med vårt toastmasterpar Sara och Fredrik så skall de se till att ni får en stund i rampljuset. Meddela era förfrågningar senast 24 april, men gärna tidigare än så.",
			"speechText2": "Du når dem enklast via",
			"speechEmail": "johanklara.toastmasters@gmail.com",
			"livingHeader": "Boende-möjligheter",
			"livingText": "På området finns ett vandrarhem för 50 personer. Priset per natt är 500 kr/person inkl. frukost, sängkläder och handduk. Först till kvarn gäller och gäster som önskar stanna två nätter (fredag - söndag) prioriteras. Det finns även en camping för gäster som önskar bo i egen husvagn eller husbil. Boende på vandrarhem bokas via brudparet, camping bokas via ",
			"livingTextLink": "www.jonstorp.com/camping",
			"livingText2": "Utöver detta finns det runt om på Kullahalvön flera andra boenden att välja emellan.",
			"weddingGiftsHeader": "Bröllopspresenter",
			"weddingGiftsText": "TBA"
		},
		"couple": {
			"coupleHeader": "Om brudparet",
			"timelineHeader": "Tidslinje",
			"timeline": [
				{
					"id": 1,
					"date": "28 februari 2015",
					"text": "Datumet då brudparet träffades för första gången på en 25-årsfest. Klara “Fancy Farmer” Wahlberg klädd i bondeoverall fick upp ögonen för Johan Svensson och kunde inte släppa blicken från honom. Det var kärlek vid första ögonkastet, utan tvekan 100 %",
					"image": timeline1
				},
				{
					"id": 2,
					"date": "12 mars 2015",
					"text": "Första dejten hemma hos Johan i korridoren på Delphi. Johan överraskar med en chokladask då Klara fyllde 23 år dagen innan. Det bakas pizza och tittades på Disneyfilmer."
				},
				{
					"id": 3,
					"date": "18 mars 2015",
					"text": "Andra dejten Johan bjuder på middag på Spisen. Johan informerar att han blivit erbjuden sommarkurs i Kina. Lugnt tänker Klara eftersom de fortfarande bara “dejtar” och sommaren är tre månader bort."
				},
				{
					"id": 4,
					"date": "16 maj 2015",
					"text": "Brudparet blir under en ny 25-årsfest utfrågade på varsitt håll om de kära i varandra. Diskussion om är ihop eller inte uppstår. Klara är inte nöjd med att en utfrågning ska vara avgörandet. Hon planerar i förväg att 7 juni ska bli brudparets årsdag eftersom examensfest ska hållas och Johan kan då presenteras som hennes pojkvän inför släkt och vänner. (Finns också ett symboliskt värde i att 100 dagar passerat sen att brudparet sågs första gången vilket Klara nyttjar)"
				},
				{
					"id": 5,
					"date": "16 juni- 22 juni 2015",
					"text": "Klaras första vistelse i Upplands Väsby. Får träffa samtliga meddelar i familjen Svensson och besöker Timrarö en regnig midsommarafton.",
					"image": timeline2
				},
				{
					"id": 6,
					"date": "20 juni 2015",
					"text": "Under midsommarnatten säger brudparet “jag älskar dig”. Känslorna är skyhöga och kärlekstårar rinner längs med bådas kinder. Om två dagar ska brudparet skiljas åt under åtta veckor då Johan reser iväg för sommarkurs i Kina. Mycket har hänt sedan erbjudandet i mars."
				},
				{
					"id": 7,
					"date": "22 juni 2015",
					"text": "Brudparet är mer kära än någonsin och tvingas motvilligt ingå ett distansförhållande i två månader plus 8h tidsskillnad."
				},
				{
					"id": 8,
					"date": "23 juni 2015 - 19 augusti 2015",
					"text": "Johan börjar sin resa mot Peking via Transsibiriska järnvägen. Begränsad kontakt med Klara hemma i Sverige. Brudparet återförenas i Lund. Klara överlämnar den röda kärleksdagboken som hon skrivit i hemligt till Johan sedan de varit åtskilda.",
					"image": timeline3
				},
				{
					"id": 9,
					"date": "10 okt 2015",
					"text": "Klara (tillsammas med katter) flyttar in i sin första lägenhet Möllebäcksgatan 8 i Hbg på Johans 23 årsdag."
				},
				{
					"id": 10,
					"date": "18-21 mars 2016",
					"text": "Första utlandsresan till Warsawa, Polen. Startskottet för Johans förkärlek till weekendresor i europeiska storstäder.",
					"image": timeline4
				},
				{
					"id": 11,
					"date": "23 juli 2017",
					"text": "Johan flyttar in till Klara i Helsingborg, samtidigt får de två katterna Lilly och Kinna flytta ut. De lämnar lägenhetslivet för att flytta in på Vallgården i Åkarp utanför Malmö.",
					"image": timeline5
				},
				{
					"id": 12,
					"date": "2 april 2019",
					"text": "Lägenheten i Helsingborg är såld och brudparet flyttar ner till Malmö. De hyr i andrahand på Nobelvägen i väntan på att deras nyproduktion ska stå klar i dec-2020."
				},
				{
					"id": 13,
					"date": "September 2020",
					"text": "Bygget av lägenheten är försenat i tre månader och brudparet står utan boende. En långresa till Sydamerika stoppades av Covid-19 och en resa genom Sverige tar form. Bohaget förvaras i en container och det nödvändigaste packas in i brudparets nya hem Saab som kör mot Norrland.",
					"image": timeline6
				},
				{
					"id": 14,
					"date": "15 september 2020",
					"text": "På fjällvandring i Abisko mot Sveriges högst belägna fjällstuga väljer Johan att gå ner på ett knä och fråga Klara om hon vill gifta sig med honom. Vad svaret på den frågan var känner ni nog alla väl till.",
					"image": timeline7,
					"image2": timeline8
				},
				{
					"id": 15,
					"date": "3 december 2020",
					"text": "Brudparet flyttar in på Spårvägen i Malmö, i parets första gemensamma lägenhet. Efter nästan två års väntan är bygget äntligen klart och paret kan flytta in. Trots att lägenheten är helt nybyggd tar det inte många minuter innan pappa Stefan är framme med provburkarna och ny färg är på väg upp på väggarna.",
					"image": timeline9
				}
			]
		},
		"bridalparty": {
			"bridalPartyHeader": "Brudföljet",
			"bridalPartyMembers": [
				{
					"id": 1,
					"name": "Sebastian Johansson",
					"role": "Marsalk",
					"background": "Barndomsvän till Johan från Upplands Väsby, nu bosatt i Sundbyberg. Utomordentligt snäll kille som har följt med Johan på det mesta i livet. Delade under ett par guldår i Lund lägenhet med Johan på en av stadens nationer. Bilburen cykelaktivist som älskar freesbeegolf och kollektivtrafik.",
					"image": sebastian
				},
				{
					"id": 2,
					"name": "Johanna Lundsgård",
					"role": "Tärna",
					"background": "Barndomsvän som är uppvuxen på samma grusväg som Klara. Flintevångsvägen, utanför Staffanstorp (eller STP som det kallas här nere). Trogen följeslagare genom Klaras kärleksliv, från första kyssen tills där hon är idag. Bor på Kungsholmen men blir inte starstuck av kändisar på stan, då hon till vardags intervjuar dem i sitt jobb som journalist på Dagens Industri.",
					"image": johannaL
				},
				{
					"id": 3,
					"name": "Antonio Saaranen",
					"role": "Marsalk",
					"background": "Barndomsvän till Johan från Upplands Väsby, men håller nu till på Södermalm. Smartaste killen i gänget med ett grymt driv. Sitter inne med en party-sinne och kontaktnät som har skänkt resten av gänget mycket glädje undet studenttiden.",
					"image": antonio
				},
				{
					"id": 4,
					"name": "Johanna Erensjö",
					"role": "Tärna",
					"background": "Vän sedan sjuksköterskeprogrammet i Lund. Växjötjej som nu gått och blivit Göteborgsfru. Klaras största bollplank kring bröllop, då Johanna själv gifte sig sep-2021. En stjärna när det gäller struktur och planering. Gillar att pyssla och kan förmodligen förse hela festen med hemmastickade mössor om det blir kallt in på småtimmarna.",
					"image": johannaE
				},
				{
					"id": 5,
					"name": "Fredrik Broberg",
					"role": "Toastmaster",
					"background": "Förmodligen på pappret Skånes bästa toastmaster, då han har varit i Dubai och studerat det (Hospitality management). Då Fredrik är en riktig livsnjutare får hans Volvo slita hårt när det kryssas mellan mysiga fik och skånska sevärdheter. Malmöit i blodet som efter en utsväng hela vägen till Lund, nu hittat tillbaka till sitt Malmö tillsammans med Sara."
				},
				{
					"id": 6,
					"name": "Sara Erixon",
					"role": "Toastmadame",
					"background": "Vän sedan sjuksköterskeprogrammet i Lund. Lämnat trygga Lund för ett liv i Malmö. En av Vivinos aktivaste användare som inte låter ett vin gå obemärkt förbi. Fikagourmand utom dess like och vet hur en utmärkt kopp kaffe ska smaka. En kvinna som håller lugnet i stressade situationer, vilket känns som helt rätt egenskap i detta sammanhang."
				}
			]
		}
	}
]

export default data;