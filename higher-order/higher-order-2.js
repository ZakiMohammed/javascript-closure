// returning function as parameter (currying)

const splitter = by => value => value.split(by);

const dashSplitter = splitter('-');
const commaSplitter = splitter(',');

const result1 = dashSplitter('thunder-bolt-attack');
const result2 = commaSplitter('thunder,bolt,attack');

console.log(result1);
console.log(result2);

/*
[ 'thunder', 'bolt', 'attack' ]
[ 'thunder', 'bolt', 'attack' ]
*/