class Greeter {
    lang: string;

    constructor(lang: string) {
        this.lang = lang
    }

    greet(name: string) {
        if (this.lang == "NP") {
            return "Namaste " + name 
        }

        return "Hello " + name
    }
}

let greet = new Greeter("NP")
const res = greet.greet("Madhab")

console.log(res)