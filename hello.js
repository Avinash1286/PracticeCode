

function Iterate(values) {

    let nextIndex = 0;

    return {
        next: function () {
            console.log("executed")
            if (nextIndex < values.length) {
                console.log(nextIndex);
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                 console.log("true")
                return {
                    done: true
                }
            }
        }
    }

}
const fruits = ["Apple", "Mango", "Banana", "Painapel", "Naspati"]
const fr = Iterate(fruits);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

console.log(fr.next().value);

