# Functions

### Zadanie 1: Display Name

Napisz funkcję displayName, która przyjmuje dwa argumenty, imię i nazwisko, i wyświetla je w powitaniu w stylu Jamesa Bonda. Spójrz na przypadki testowe, aby zrozumieć jego zasadę działania. Twoja funkcja musi działać tak samo! Oto kilka przypadków testowych:

displayName("James", "Bond")   // My name is Bond, James Bond

displayName("Ada", "Lovelace") // My name is Lovelace, Ada Lovelace

    💡 Wskazówka: kiedy mówimy o wyświetlaniu, musisz użyć polecenia console.log.

### Zadanie 2: Rock, Paper, Scissors: console.log

Zapewne znasz grę w „kamień, papier i nożyce” (jeśli nie, zapoznaj się z zasadami i rozegraj parę rudek z osobą obok!). Napisz funkcję, która wyświetla wynik gry.

Funkcja rockPaperScissors przyjmuje dwa argumenty:

    pierwszym jest ruch pierwszego gracza: „rock”, „paper” lub „scissors”’;
    drugim jest ruch drugiego gracza: „rock”, „paper” lub „scissors”’.

Twoja funkcja wyświetla First player wins, jeśli pierwszy gracz wygrał, Second player wins, jeśli drugi gracz wygrał, a Draw w przypadku remisu. Oto kilka przypadków testowych:

rockPaperScissors("rock", "rock")      // Draw
rockPaperScissors("rock", "paper")     // Second player wins
rockPaperScissors("rock", "scissors")  // First player wins
rockPaperScissors("paper", "scissors") // Second player wins

### Zadanie 3: Rock, Paper, Scissors: return

Zmodyfikuj funkcję „rockPaperScissors” tak, aby zwracała rezultat zamiast go wyświetlać.

Zmień także funkcję tak, aby obsługiwała błędy. Jeśli jeden z przekazanych funkcji argumentów nie ma wartości „"rock"”, „"paper"” lub „"scissors"”, funkcja zwraca komunikat „Argument error”. Oto kilka przypadków testowych:

rockPaperScissors("paper", "scissors") // 'Second player wins'
rockPaperScissors("rock", "potatoes")  // 'Argument error'
rockPaperScissors("glue", "scissors")  // 'Argument error'
rockPaperScissors("rock", "rock")      // 'Draw'

### Zadanie 4: Print Vowels

Napisz funkcję „printVowels”, która przyjmuje jako argument ciąg znaków i wyświetla jedynie zawarte w nim samogłoski. Samogłoski to "a", "e", "i", "o", "u". Oto kilka przypadków testowych:

printVowels("hello world")  // eoo
printVowels("kangaroo")     // aaoo
printVowels("cheeseburger") // eeeue
printVowels("rhythm")       // 

### Zadanie 5: Abbrev

Napisz funkcję „abbrev”, która przyjmuje jako argument ciąg znaków i zwraca jego skróconą wersję.

Skrót składa się z pierwszych 3 znaków ciągu, spacji i łącznej liczby znaków w ciągu.

Jeśli ciąg ma mniej niż 3 znaki, skrót zostaje wypełniony spacjami. (Przyjrzyj się przykładom!). Oto kilka z nich:

abbrev("Nice")                               // 'Nic 4'
abbrev("I am your father")                   // 'I a 16'
abbrev("Supercalifragilisticexpialidocious") // 'Sup 34'
abbrev("!")                                  // '!   1'
abbrev("Yo")                                 // 'Yo  2'

### Zadanie 6: Pyramid

Napisz funkcję „pyramid”, która przyjmuje jako argument nieparzystą liczbę - wielkość podstawy i rysuje piramidę składającą się ze znaków „#”.

Jeśli argument jest ujemny bądź parzysty - funkcja zwraca odpowiedni błąd.

Przypadek testowy:

pyramid(9)
//     #
//    ###
//   #####
//  #######
// #########

pyramid(1)
// #
 
pyramid(5)
//   #
//  ###
// #####

### Zadanie 7: Sub Digits

Napisz funkcję „subDigits”, która jako argument przyjmuje liczbę całkowitą i zwraca wynik, który jest wprowadzoną liczbą po odjęciu od niej wartości jej cyfr.

Na przykład: jeśli liczbą jest 12, funkcja zwraca 12 - 1 - 2 => 9.

Jeśli liczba jest ujemna, funkcja zwraca komunikat „Argument Error”.

Oto kilka przypadków testowych:

subDigits(12)      // 9
subDigits(4000000) // 3999996
subDigits(0)       // 0
subDigits(451)     // 441
subDigits(-12)     // 'Argument Error'


