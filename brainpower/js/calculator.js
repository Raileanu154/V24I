function calculate(){

    let sedinte =
        document.getElementById("sedinte").value;

    let pret =
        document.getElementById("pret").value;

    let total = sedinte * pret;

    document.getElementById("total")
        .innerHTML = "Cost total: " + total + " €";

}