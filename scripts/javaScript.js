let glicose = document.getElementById("iglicose");
let pressao = document.getElementById("ipressao");
let peso = document.getElementById("ipeso");
function saveDate() {
    glicose1 = glicose.value;
    pressao1 = pressao.value;
    peso1 = peso.value;
    if ((glicose1 != "") && (pressao1 != "") && (peso1 != "")) {
        let dates = `
        <table style="margin-top: 0%; width: 100%">
            <tr>
                <td style="max-width: 20px;">${pressao1}</td>
                <td style="max-width: 20px;">${glicose1}</td>
                <td style="max-width: 20px;">${peso1}</td>
            </tr>
        </table>
    `
        document.getElementById("idiv_tree").innerHTML += dates;
        glicose.value = "";
        pressao.value = "";
        peso.value = "";
    }
}