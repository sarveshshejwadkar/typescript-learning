function doSomething(x: string | null) {
    if (x)
        console.log("Hello, " + x.toUpperCase());
}
doSomething('something');