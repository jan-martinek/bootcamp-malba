### Jak psát kód?

Stejně jako není dobré kód sekvenčně číst, není dobré jej sekvenčně psát. Při tvorbě postupu (algoritmu) postupujte podle logických celků, jejichž splnění vede ke splnění úkolu.

Například můžete chtít, aby želva nakreslila sluníčko. Sluníčko můžete popsat jako kruh obklopený čarami, které vycházejí ze středu kruhu. Není to úplně přesný popis, ale máte představu, kterou můžete zrealizovat na základě základních funkcí, které želva umí: chodit tam a zpět a zatáčet vpravo a vlevo.

Pokud byste šli a začali rovnou psát první příkaz „turtle.forward()“, nejspíše byste nedošli daleko, než by želva začala dělat nesmysly a bylo by těžké zjistit proč. Proto je lepší algoritmus rozdělit postupně do snadno proveditelných částí.

### Nastavení výchozího stavu

Nejprve si nastavíte prostředí — v našem případě nastavíte plátno a umístíte želvu tam, kde ji chcete mít — uvnitř funkce setup. Položíte ji doprostřed a zapnete pero. Z velké části můžete jednoduše kód překopírovat z jiného úkolu:

    p.setup = function() {
      p.createCanvas(size.w, size.h);
      p.angleMode(p.DEGREES);

      turtle = new Turtle(p, size.w/2, size.h/2);
      run = turtle.getRun();
    };

Proměnné, které budete potřebovat, si mezitím vypíšete na začátek skriptu (též snadno kopírovatelné):

    var turtle, run, size = toy.measure();  

### Základní algoritmus

Na začátku si můžete sluníčko rozdělit na kolečko a paprsky.

    var drawSun = function() {
      drawSunCircle();
      drawSunbeams();
    };

Napíšete si takto názvy funkcí, které **by měly v budoucnu** něco konkrétního dělat. Funkce si můžete napsat k dodefinování:

    var drawSunCircle = function() {

    };

    var drawSunbeams = function() {

    };

Kód zatím nic nedělá, ale nehází chyby a stačí už jen doplnit obsah obou funkcí.

### Implementace funkcí

#### Kolečko

Následně můžete želvě vydefinovat metodu, která nakreslí kolečko. Třeba tím, že želva 36krát popojde a zabočí o 10 stupňů:

    var goAndTurn = function() {
      turtle.forward(10);
      turtle.right(10);
    };

    var drawSunCircle = function() {
      repeat(goAndTurn, 36);
    };

Funkci `repeat()` si opět zkopírujete odjinud, třeba z třetího úkolu v této lekci — není potřeba vynalézat kolo.


#### Paprsky

Při kreslení paprsků můžete vymyslet několik různých způsobů můžete odjet do středu kružnice a z něj vyjíždět ven a dělat paprsky (střed si můžete dopočítat nebo odhadnout dle výsledk můžete udělat stejný kruh jako naposledy, ale každých pár cyklů můžete vyjet ven a nakreslit paprsek. Napadne vás jiné řešení?

Už víte, že paprsků budete kreslit několik, tak si můžete vytvořit opakované volání funkce, která kreslí jednotlivé paprsky (a bude jich třeba třicet šest) — a tím zase oddělíte jeden kus práce od druhé

    var drawSunbeams = function() {
      repeat(drawSunbeam, 36);
    };

    var drawSunbeam = function() {

    };

Pořád nevíme, jak bude vypadat paprsek, ale už víme, že jich bude 30 a bude je kreslit funkce `drawSunbeam()` — zbývá ji dodefinovat.


#### Paprsek

Víme, že paprsků bude třicet, tak dělíme kruh na třicet částí a každý paprsek želvu otočí ven z kruhu, nakreslí paprsek a vrátí ji zpět na výchozí pozici.

    var drawSunbeam = function() {
      // kus stejného opakování jako minule
      goAndTurn();

      // pero je vypnuté
      turtle.penDown = false;
      turtle.left(90);
      turtle.forward(10);

      // kreslení
      turtle.penDown = true;
      turtle.forward(40);

      // a návrat
      turtle.penDown = false;
      turtle.back(10 + 40);
      turtle.right(90);
    };

### Shrnutí

Všimněte si, že nejsložitější je metoda, která tvoří paprsky — a provádíte ji třicetkrát. Kdybyste stejný postup chtěli projít bez funkcí, byl by kód mnohem složitější.

**Toto není jediné správné řešení — jde o jedno z mnoha možných** (na začátku jste mohli sluníčko rozdělit na zcela jiné celky, které by se vykreslily rychleji — ale rychlost nemusí být vždy jediná priorita).

Když máte želvu takto navrženou, můžete snadno najít místa, která chcete upravit: například doplnit do kódu příkazy, které mění barvy pera, aby bylo sluníčko barevné, nebo umožňují snadnou změnu počtu nebo délky paprsků přes proměnnou (předvyplněný kód některé úpravy již obsahuje).
