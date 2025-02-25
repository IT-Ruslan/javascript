function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let number = prompt("Մուտքագրեք թիվը, որի ֆակտորիալը ցանկանում եք գտնել:");
number = parseInt(number);

if (!isNaN(number) && number >= 0) {
    document.write(`${number} թվի ֆակտորիալը է: ${factorial(number)}`);
} else {
    document.write("Խնդրում ենք մուտքագրել դրական ամբողջ թիվ:");
}
