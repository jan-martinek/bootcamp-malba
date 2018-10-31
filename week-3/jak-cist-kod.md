### Jak číst kód?

Kód byste neměli číst od začátku do konce — už kvůli tomu, že většinou se od začátku do konce neprovádí.

Definice funkcí procházet nemusíte: jejich účel by měl být srozumitelný i bez toho, že si přečtete jejich kód. Nejprve si tedy projděte kód, který není uvnitř funkcí. Tak poznáte základní kostru programu.

Například níže v úloze 5 se můžeme setkat s kódem, který generuje vločku (mrkněte na něj a spusťte si ho). Tento kód má následující části:

1. definice proměnných, které se používají v celém skriptu
2. definice funkce `snowflakePart()`, která kreslí kousek vločky
3. definice funkce `drawPart()`, který kreslí jedno z ramen vločky, které je složené ze dvou zrcadlově obrácených kousků
4. definice funkce `drawSnowflake()`, která kreslí vločku opakovaným voláním funkce `drawPart()`
4. definice funkce `setup()`, která 
  - nastavuje vlastnosti plátna
  - vytváří želvu
  - sestavuje vykreslení vločky, mimo jiné pomocí volání `drawPart()`
5. funkce funkce `draw()`, která obstarává animaci
6. pomocná funkce `repeat()`

Když si všimnete této struktury, můžete se na kód podívat jinak. Nyní můžete následovat běh kódu — nikoli dle definic, ale dle volání funkcí — začneme voláním funkce `setup()`, kterou to všechno začíná — to už víte díky předchozím úkolům, které používaly želvu a knihovnu p5.js.

2. Tato funkce nejprve vytvoří želvu a následně si hned zavolá `drawSnowflake()`.
3. Tak se mrknete, jak postupuje `drawSnowflake()` — ta šestkrát provede `drawPart()` pomocí volání pomocné funkce `repeat()`.
4. A teď vidíte, že uvnitř `drawPart()` se dějí tři hlavní věci:
  - první volání `snowflakePart(-1)` — se záporným parametrem 
  - druhé volání `snowflakePart(1)`
  - a natočení želvy `turtle.right(360/6)`
5. Teď víte, že se něco uvnitř funkce `snowflakePart()` volá dvanáctkrát — a už zbývá jen prozkoumat, co se to tam děje a jak to ovlivňuje parametr `mirror`, který — jak jste viděli předtím — má hodnotu `–1` a `1`. Díky jeho názvu tušíte, že se díky němu něco „zrcadlí“, ale abyste to plně pochopili, musíte si přečíst detaily ve funkci `snowflakePart()`.

Oproti čtení od začátku do konce tedy mnohem lépe sledujete průběh programu: ale nemusíte číst funkci `snowflakePart()` dvanáctkrát :-)

Zároveň můžete zpětně docenit, že je na začátek skriptu vytažená důležitá funkce, pomocí níž nejvíce ovlivníte vzhled vločky.
