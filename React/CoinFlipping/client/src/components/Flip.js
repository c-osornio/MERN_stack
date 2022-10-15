function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxFailures = 25;

        while (headsCount < 5 && attempts <= maxFailures) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (attempts <= maxFailures) {
            resolve(`It took ${attempts} tries to flip five "heads"`)
        } else {
            reject(`Over ${maxFailures} failed attempts to flip "heads" 5 times in a row!`)
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
