function saveDate() {
    let glicose = document.getElementById("iglicose").value;
    let pressao = document.getElementById("ipressao").value;
    let peso = document.getElementById("ipeso").value;
    if ((glicose != "") && (pressao != "") && (peso != "")) {
        let dates = `
        <table style="margin-top: 0%; width: 100%">
            <tr>
                <td style="max-width: 20px;">${pressao}</td>
                <td style="max-width: 20px;">${glicose}</td>
                <td style="max-width: 20px;">${peso}</td>
            </tr>
        </table>
    `
        document.getElementById("idiv_tree").innerHTML += dates;
        glicose = ""
    glicose.focus()
    }
}