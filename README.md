This library provides a number of functions and Vue components to reduce the amount of boilerplate code and reengineering needed when translating spreadsheets to software.

The library also exports all the functions of Formula.js2, which is direct translations of most of the formula functions available in Excel.

The functionality of the library is separated into four categories:

[Importing] Functions related to importing. Mainly concerns CSV files. 
[Exporting] Mainly concerns converting arrays into CSV files.
[Array] A bunch of varied functions related to transforming and using arrays. Includes the subcategories extensions, sort and transformations.
[Components] Vue components based on the translation process' patterns.
[Validation] Contains a bunch of predicates further described in \Cref{sec:library-validation} as well as a binder to limit what can be typed in input fields. This is split up into the subcategories general, numbers and transforms.

The spreadsheet translation template can be found at https://github.com/BLumbye/spreadsheets-vue-template.
