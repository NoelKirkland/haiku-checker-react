# Haiku Checker

#### By Noel R. Kirkland - 10/14/2020

## Description

_This application is built to see if an imputed string is in fact a proper haiku. A haiku is a Japanese poem of seventeen syllables, in three lines of five, seven, and five. The application will either congratulate you on writing a perfect haiku or it will tell you how many syllables off your poem is._

## Technical Specifications

1. The application should correctly count how many syllables are in a word with only one vowel but with no diphthongs or silent e's

    | Input | Output  |
    | :---: | :-----: |
    | "him" or "her" or "dug" | 1 |

2. The application should correctly count how many syllables are in a word with multiple vowels but with no diphthongs or silent e's

    | Input | Output  |
    | :---: | :-----: |
    | "hello" or "coding" | 2 |

3. The application should correctly count how many syllables are in a word with only one vowel as well as a silent e but no dipthongs

    | Input | Output  |
    | :---: | :-----: |
    | "code" or "hope" | 1 |

4. The application should correctly count how many syllables are in a word with multiple vowels as well as a silent e but no dipthongs

    | Input | Output  |
    | :---: | :-----: |
    | "preface" or "complete" | 2 |

5. The application should correctly count how many syllables are in a word with a diphthong, no other vowels, and no silent e's

    | Input | Output  |
    | :---: | :-----: |
    | "boil" or "deer" or "stairs" | 1 |

6. The application should correctly count how many syllables are in a word with multiple dipthongs, no other vowels, and no silent e's

    | Input | Output  |
    | :---: | :-----: |
    | "sourdough" | 2 |

7. The application should correctly count how many syllables are in a word with a dipthong, one other vowel, but no silent e

    | Input | Output  |
    | :---: | :-----: |
    | "although" or "Haiku" or "goodnight" or "today" | 2 |

8. The application should correctly count how many syllables are in a word with a dipthong, multiple other vowels, but no silent e

    | Input | Output  |
    | :---: | :-----: |
    | "audubon" or "brouhaha" | 3 |

9. The application should correctly count how many syllables are in a word with a dipthong, one other vowel, and a silent e

    | Input | Output  |
    | :---: | :-----: |
    | "goodbye" or "crackhouse" or "Europe" | 2 |

10. The application should correctly count how many syllables are in a word with a dipthong, multiple other vowels, and a silent e

    | Input | Output  |
    | :---: | :-----: |
    | ***can't think of any*** | ? |

11. The application should correctly evaluate how many syllables are in a multi-word string

    | Input | Output  |
    | :---: | :-----: |
    | "first five syllables second seven syllables third five syllables" | 17 |


## Setup/Installation Requirements

* Download from GitHub
  1. _Open the following web address in your browser:
`https://github.com/NoelKirkland`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `haiku-checker-react` repository and click the green button labeled_ Clone or download.

* Download by Cloning
  1. _Open the following web address in your browser:
`https://github.com/NoelKirkland`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `haiku-checker-react` and click the green button labeled_ Clone or download.

* Open and Run Application
  1. _Open the downloaded application in a text editor ([V.S. Code preferred](https://code.visualstudio.com/))_
  2. _Open a new terminal in your text editor (Ctrl+\` in V.S. Code) and run command `> npm install`_
  3. _Start the local server by running the command `> npm start`_
  4. _Visit the address http://localhost:3000/ in your preferred browser_
  5. _Have fun!_

## Known Bugs

_The recursive haiku checker function is about %95 accurate but there are some words in the english language that have an anomalous syllable count in which the function does not account for._

## Support and contact details

_If you run into any problems, or have any questions at all, feel free to reach out to me at noelkirkland@gmail.com_

## Technologies Used

_This webpage was constructed using HTML & CSS, JavaScript, and REACT_

### License

_`*` This project uses the following license: [MIT](https://opensource.org/licenses/MIT)_

_Intellectual property of Noel R. Kirkland - 2020_