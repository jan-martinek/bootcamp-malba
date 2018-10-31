### Podmínkové výrazy

Možná jste již někdy potkali s podmínkovou konstrukcí `if … else`, která umožňuje měnit chování skriptu na základě nějak stanovené podmínky.

	  if (podmínka) {
        // udělej tohle
      } else {
        // udělej támhleto
      }

Můžete tak například rozhodnout, zda kód prozradí tajnou zprávu, na základě toho, jak se jmenuje ten, kdo jej spouští (uvedený příklad nicméně není příliš bezpečný):

    var name = window.prompt('Jak se jmenuješ?');

    if (name == 'Honza') {
      window.alert('Tajný kód je „42”.');
    } else {
      window.alert('Neřeknu nic!');
    }

U `if` vždy následuje závorka s *podmínkovým výrazem*. 

- Pokud je výraz pravdivý (podmínka se vyhodnotí jako `true`), blok příkazů se provede, 
- pokud je výraz nepravdivý (`false`), podmínka nasměruje běh skriptu na větev `else` (pokud existuje) anebo přeskočí podmíněný kód.

Podmínkové výrazy si můžete vyzkoušet v konzoli: stačí do ní napsat například `5 == 10` a vyskočí `false`. Když napíšete `5 < 10`, vyskočí `true`.

Můžete si hrát i s proměnnými — nejprve vložíte číslo do proměnné `var n = 5;` a následně vytvoříte srovnání `n < 10`: vyskočí `true`.

Nejčastěji budete v podmínkových výrazech srovnávat čísla (to se hodí zejména v cyklech) a řetězce (viz příklad výše). Pravdivost můžete ale vyhodnotit i pomocí funkcí a metod — například testováním regulárního výrazu:

    var name = window.prompt('Jak se jmenuješ?');

    if (/^H/.test(name)) {
      window.alert('Tvoje jméno začíná na H!');
    } else {
      window.alert('Tvoje jméno nezačíná na H :-(');
    }

### Logické operátory: spojování podmínek    

Pomocí logických operátorů `&&` (logické „a zároveň“) a `||` (logické „nebo“) můžete skládat více podmínek za sebou. Následující podmínka se splní pouze pokud jste dítě ve věku 1—10 let a je Štědrý den (měsíce jsou číslované od nuly, proto je prosinec pod číslem `11`):

    var age = window.prompt('Kolik máš let?');
    var d = new Date();

    var isKidAge = age >= 0 && age <= 10;
    var isChristmasEve = d.getDate() == 24 && d.getMonth() == 11;

    if (isKidAge && isChristmasEve) {
      doSomethingMagical();
    }

V příkladu si můžete všimnout, že logické hodnoty si můžete ukládat do vhodně pojmenovaných proměnných.
