let abc = ["xyz","abc","def","ghi"];

for (let i of abc) {
    console.log(i);
    if (i == "def")
        break;
}
