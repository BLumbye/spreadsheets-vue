interface sortOption {
  numbersFirst?: boolean;
  descending?: boolean;
}

/**
 * Returns a sorted list.
 * Can be sorted numerically or alphabetically.
 */
function SortedList(list: (string | number)[], option?: sortOption): (string | number)[] {
  let clonedList = [...list];
  const numbers = clonedList.filter((val) => !Number.isNaN(Number(val)));
  const nonNumbers = clonedList.filter((val) => Number.isNaN(Number(val)));

  numbers.sort((a, b) => Number(a) - Number(b));
  nonNumbers.sort();

  if (option?.descending) {
    numbers.reverse();
    nonNumbers.reverse();
  }

  clonedList =
    option?.numbersFirst === undefined || option.numbersFirst
      ? [...numbers, ...nonNumbers]
      : [...nonNumbers, ...numbers];

  return clonedList;
}

/* Example */

var stringArray: string[] = ['2', '3', '4', '1', '5', '8', '11', '-3', '9.2'];
var stringArray2: string[] = [
  'john',
  '3',
  '4',
  'afro',
  '22',
  '-3',
  'student',
  '2no',
  '2 yes',
  '9.2',
  '9,3',
  'e',
  '01010',
  'Infinity',
  '-Infinity',
];

// console.log('Original:', stringArray);
// console.log('Built-in:', [...stringArray].sort());
// console.log('Numerically:', SortedList(stringArray, sortOption.Numerically));
// console.log('Alphabetically:', SortedList(stringArray, sortOption.Alphabetically));

// console.log('Original:', stringArray2);
// console.log('Built-in:', [...stringArray2].sort());
// console.log('Numerically:', SortedList(stringArray2, sortOption.Numerically));
// console.log('Alphabetically:', SortedList(stringArray2, sortOption.Alphabetically));
