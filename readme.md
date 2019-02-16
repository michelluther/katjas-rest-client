# Installation

Klonen, im Verzeichnis dann: `npm install`

Um Webpack zu starten, aka die Frontend-Anwendung zu bauen, bzw. auch die Frontend-Anwendung zu entwickeln: `npm run develop`

Um den Webserver zu starten `npm start`

Falls http-server nicht installiert ist: `npm install -g http-server`

# Wie es funktioniert

Es gibt letztlich zwei Programme: 
1. den Server, der eine API anbietet und eine BLASTN-Suche anschmeißt und das Ergebnis zurück gibt. 
2. die Client-Anwendung, die die API aufruft und das Ergebnis anzeigt.

Der Server liefert auch die Client-Anwendung aus.

## Der Server

Implementiert in `server.js`, verwendet vor allem die js-sourcen unter api.

`Sequence.js` startet eine BlastN-Suche, und gibt die Treffer unter 

## Der Client

Es gibt eine Frontend-Anwendung, die einen AJAX Request an den Server absetzt (`var apiRequest = new XMLHttpRequest();`) und das Ergebnis an das div `output_table` übergibt. Darstellung des Ergebnisses ist in einem [Handlebars-template](https://handlebarsjs.com/) definiert.
