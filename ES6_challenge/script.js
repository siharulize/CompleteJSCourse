/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Park {
    constructor (name, year, numTrees, area){
        this.name = name;
        this.year = year;
        this.numTrees = numTrees;
        this.area = area;
    }
    density(){
        return this.numTrees/this.area;
    }
    age(){
        return 2020 - this.year;
    }

}

class Street extends Park{
    constructor(name, year, size='normal') {
        super(name, year);
        this.size = size;
    }
}

const parks = [
    new Park('English Garden', 1950, 1500, 3.7),
    new Park('Mad Cool', 2001, 500, 2),
    new Park('My garden', 2015, 80, 0.2)
]

const streets = [
    new Street('Quiddestrasse', 1920, 'big'),
    new Street('Straubingerstr', 2000, 'small'),
    new Street('Klenzestrasse', 2010),
    new Street('Menterschwaige', 1980, 'tiny'),
]

parks.forEach((el) => {
    console.log(`${el.name} has a tree density of ${el.density()} trees per square km.`);
    if (el.numTrees > 1000) {
        console.log(`${el.name} has more than 1000 trees.`);
    }
});

function avgAge(){
    let sum =0;
    parks.forEach((el) =>{
        sum = sum + el.age();
    });
    return sum/parks.length;
};

console.log(`Our ${parks.length} parks have an average of ${avgAge()} years.`)

streets.forEach((el) =>{
    console.log(`${el.name}, built in ${el.year}, is a ${el.size} street.`);
});


