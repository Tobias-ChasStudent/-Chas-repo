# JavaScript - JSON Todo-list

Arbeta 2 och 2.

Syftet med övningen är att bekanta sig med dataformatet JSON (JavaScript Object Notation) som används som utbyte av data, oftast vid anrop av ett externt API, samt hur man använder metoden fetch() ([se här](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)) för att skicka en förfrågan om datan och hantera svaret. 

Målet med övningen är att skapa en egen lokal JSON-fil (i mappen) med korrekt formatering innehållande några att-göra-punkter och information om respektive är "completed" eller inte. Ni hämtar datan från den lokala JSON-filen med fetch() och renderar svaret i valda DOM-element.


## Instruktioner

1. Skapa en JSON-fil lokalt i mappen. Den ska innehålla minst fem stycken att-göra-punkter enligt JSON-formatets regler. Varje att-göra ska även innehålla en "completed" som är satt till true eller false.

2. Kontrollera att JSON-filen har korrekt format m.h.a detta verktyg https://jsonlint.com/

3. Använd metoden fetch() för att förfråga och ta emot svaret. 

4. Skriv ut varje att-göra i en ul-lista. Applicera styling för varje att-göra-punkten, så att det framgår vilken/vilka är "completed" eller inte. 


