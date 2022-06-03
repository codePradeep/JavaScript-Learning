let counter = 0;

const getData = () => {
    console.log("fatching Data ..", counter++);
}
const debounce = function (fn, delay) {
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, delay);
    }
}

const betterfunction = debounce(getData, 300)

betterfunction()


