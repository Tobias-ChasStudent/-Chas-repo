# Instruktioner: Enkel dashboard med väderdata (OpenWeatherMap API) 

I denna övning ska du använda dig av fetch() och async/await för att hämta väderdata för en aktuell väderposition (stad). Du använder dig av det öppna API:et OpenWeatherMap https://home.openweathermap.org/.

API-et är öppet men kräver en s.k API-key för att kunna förfråga data. Denna nyckel specifierar du i den s.k. endpoint (en url) som används när du gör förfrågan med fetch(). För att få nyckeln registrerar du dig som användare på OpenWeather API.

Hur du använder dig av API:et letar du dig fram till dokumentation - ett förförande som man alltid behöver göras vid anvädandet av ett nytt API.

Du kan välja att göra en förfrågan på latitud- och longitudkoordinater eller på stadens namn. Om du vill kan du lägga till en sökruta där användaren definerar staden och detta läses dynamisk in i API-förfrågan.

Välj ut lämplig väderdata som visas som en card (article), styla enligt preferenser. Samt dynamisk visning av ikon efter vädertyp. 
Innan du hanterar datat med fetch i din js-fil, testa gärna din endpoint i programmet [Insomnia](https://insomnia.rest/) - ett testvektyg mot API:er.

## Exempelbild

![Weather data](https://github.com/chasacademy-sandra-larsson/js--fetch-from-weather-api/blob/main/weatherdata.png)
