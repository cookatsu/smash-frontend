Hi und willkommen zu meiner Umsetzung eine Website mit verschiedenen Funktionen zu entwickeln.
Diese habe ich dem beliebten Videospiel Super Smash Bros Ultimate gewidmet, welches ein Kampfspiel mit über 80 Charakteren ist. Ziel des Spiels ist es, die Gegner aus der Arena zu befördern, wobei jeder Kämpfer über individuelle Fähigkeiten und Spielmechaniken verfügt.
Die Webanwendung dient dazu genau diese Charektere bewerten zu können. Das verwendete Ranking-System mit den Stufen S, A, B, C, D, E stammt aus der sogenannten Tier-List-Kategorisierung, die vor allem im Bereich von kompetitiven Videospielen wie Kampfspielen verbreitet ist.
Dabei steht „S“ für „Superior“ (höchste Stufe), gefolgt von absteigend bewerteten Klassen – analog zu Schulnoten oder Leistungsstufen. Tier-Lists dienen dazu, spielbare Charaktere nach ihrer Stärke, Nützlichkeit oder Beliebtheit zu ordnen.
Es können Rankings vergeben, gelöscht und ausgelesen werden, und das für jeden einzelnen Charakter, wie bspw. Mario oder Pac-Man.


###FRONTEND###


-Kämpfer-
-alle 82 Charaktere sind im Grid angeordnet 
-individuelle Trailer zeigen Charakter im Detail über Klick
-Sortierfunktion, je nach Release

-Ranking-
-Charaktere sind aufgelistet mit Bewertungsmöglichkeit
    -> Eintrag in Datenbank (pgadmin) erfolgt
        -> Einträge können gelöscht aber nicht überschrieben werden 
-Bewertungen sind pro User-ID eindeutig 

Reststruktur Frontend:
-app.comp: ermöglicht die Navigation & Routing, Footer mit Info
-main.ts konfig. Startlogik
-LocalStorage zur User-Identifikation, bleibt über Sessions hinweg bestehen, solange Browser-Cache nicht gelöscht wird
-shared & services fürs Backend
-Responsive ✓, flex u. grid
-public als assets verwendet
-PostgreSQL-DB (DBeaver in dem Fall) verwendet

Umgang mit KI:
ChatGPT wurde im Projekt zur Unterstützung eingesetzt, vor allem zur Strukturierung, Codeoptimierung bei technischen Fragen und wurde angepasst für Clean Code.
Verwendung insbesondere:
-Eintrage wie fighters bei kämpfer.ts
-Einrichtung von Routing, Provider, AppConfig, main.ts
-HTML & CSS: Strukturierung und Styling vor allem, Animationen, Responsive Design
-ts.comps
-services & shared: API-Kommunikation (GET, POST, DELETE mit fetch)
-Readme (teils) für Formulierungen, Tabellenaufbau

Verwendungen von Angular, Node.js, PostgreSQL

Installation:
git clone https://github.com/dein-name/smash-frontend.git
cd smash-frontend
npm install
ng serve
Anwendung läuft anschließend unter:
➡️ http://localhost:4200



###BACKEND###




⠀⠀⠀⠀⠀⠀⠀⠀ 
    VIEL SPAß
𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧𖡼.𖤣𖥧
