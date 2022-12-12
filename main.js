// define generator function
const colorGen = function* () {
    // define index
    let i = 0;

    // keep the loop going
    while (true) {
        // return index
        yield i;
        // increment index
        i++;
    }
}

const gen = colorGen();

const coloredReindeerBuilder = function () {
    // define arrays
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    const coloredReindeer = [];

    // Write a for loop that looks at each reindeer
    for (const deer of reindeer) {
        // Invoke factory function to create reindeer object
        const deerObj = {
            name: deer,
            color: colors[gen.next().value]
        }
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(deerObj);
    }

    // Return coloredReindeer array
    return coloredReindeer;
}

console.log(coloredReindeerBuilder());