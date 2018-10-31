V této lekci si profrčíme znovu základy Javascriptu, ale trochu obšírněji. V tomto kurzu se snažíme jeho syntaxi především „odkoukat“ z ukázek kódu, ale zpětně je dobré se podívat, čím jsme si prošli a získané znalosti si potvrdit.

### Opáčko syntaxe javascriptu

**Kód se skládá z příkazů, které jsou vždy odděleny středníkem.** Běžně příkazy píšeme pro přehlednost na samostatné řádky, ale není to nutné.

    var result = findSomething();
    console.log(result);

#### Podstatné kousky kódu jsou:

- složené závorky `{` `}` vymezují bloky kódu (sady příkazů)

- operátor přiřazení `=` vkládá obsah do proměnné

- matematické operátory `+` (sčítání) `-` (odčítání) `*` (násobení) `/` (dělení) `%` (modulo — zbytek po dělení)

- relační (porovnávací) operátory `==` `!=` `>` `>=` `<` `<=` `===` `!==` (operátory složené ze tří znaků vyžadují stejný datový typ, ostatní si hodnoty zkusí převést, tedy `"1" == 1` tedy vrací `true`, ale `"1" === 1` je `false`)

- logické operátory `&&` (logické A) `||` (logické NEBO) pro skládání podmínek

- klíčová slova jako např. `var` `function` `true` `false` `while` `for` `if` `else` či `new`

- a parametry funkcí, které uzavíráme při definici i při volání do závorek `var f = function(parametr)` `f(10)`

Krom toho jsou podstatné **přímé zápisy hodnot (literály)**: čísla píšeme přímo (`6`, `3.14`), řetězce uzavíráme do jednoduchých (`'řetězec'`) nebo klasických uvozovek (`"řetězec"`). Regulární výrazy, o nichž se dozvíme více v další lekci, jsou ohraničeny speciálním znakem, nejčastěji se používá lomítko: `/^regex$/`.

**Názvy proměnných** mohou obsahovat písmena, číslice a podtržítko, ale nesmí začínat číslicí a nesmí být klíčovým slovem. Názvy proměnných tedy mohou být `color`, `turtleSize` nebo `_snowFlakePart6`. Každou proměnou musíme nejprve vytvořit — při tom používáme klíčové slovo `var`:

    var color = 'red';

Při práci s objekty (uloženými v proměnných) přistupujeme k jejich vlastnostem a metodám pomocí tečky (tedy např. `turtle.forward(50)` nebo `turtle.penDown`). Můžeme využít hranato-závorkového zápisu `turtle["penDown"]` — to se hodí tehdy, když máme název vlastnosti v proměnné: 

    var prop = 'penDown'; 
    var value = turtle[prop];

Pro ujištění v detailech si můžete dohledat referenci Javascriptu — jako obvykle se dá najít poměrně hezký [cheatsheet](https://www.cheatography.com/kelt/cheat-sheets/learning-javascript/) anebo můžete využít nějaký český zdroj, např. tento již poměrně zastaralý, ale [velmi stručný přehled](http://www.fi.muni.cz/~xhejtman/P005/jssyntax.html) (sekce *Příkazy*, *Řízení chodu programu* a *Funkce*).


### Moudro otce Fourata

Jako obvykle, když se vám nedaří, [zkuste to vygooglit](https://www.google.com/search?q=get+better+at+googling). Pokud se v konzoli objeví chyba javascriptu, ve většině případů najdete na internetu velmi dobrou a podrobnou odpověď. Spolehlivým serverem je [Stack Overflow](http://stackoverflow.com), jehož výskytem ve výsledcích hledání si můžete být téměř jistí. Je důležité učit se správně hledat — jaká slova přinesou rychlé řešení, jak naznačit vyhledávači, že hledáte postup anebo popis konkrétního [API](https://cs.wikipedia.org/wiki/API).

Pokud byste se u něčeho zasekli, vyzkoušejte si klidně nějaký javascriptový [tutoriál](http://google.com/search?q=javascript+syntax+tutorial) — během půlhodiny vás posune dopředu. V úkolech se však postupně potkáte se všemi potřebnými syntaktickými konstrukcemi, které jsme postupně prošli i na semináři, takže by vás nemělo čekat mnoho překvapení.

**Když všechno selže, pořád máte kamarády na Slacku!** (A minimálně jeden z nich má zapnuté notifikace! :))

Stejně jako v minulé lekci: experimentujte, zkoušejte to, spouštějte nedodělané skripty a sledujte, co želva dělá. Ono se to poddá.
