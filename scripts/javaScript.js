let glicose = document.getElementById("iglicose");
let pressao = document.getElementById("ipressao");
let peso = document.getElementById("ipeso");
let calendar = document.getElementById("calendar");
let data = new Date();
console.log(data);
let ano = data.getFullYear();
let mes = data.getMonth() + 1;
let dia = data.getDate();
let dia_semana = data.getDay();
let dia_semanaToDataBase = "";
function correction(x) {
    if (x < 10) {
        return x = "0" + x;
    } else {
        return x;
    }
}
switch (dia_semana) {
    case 0:
        dia_semanaToDataBase = "Domingo"
        break;
    case 1:
        dia_semanaToDataBase = "Segunda-Feira";
        break;
    case 2:
        dia_semanaToDataBase = "Terca-Feira";
        break;
    case 3:
        dia_semanaToDataBase = "Quarta-Feira";
        break;
    case 4:
        dia_semanaToDataBase = "Quinta-Feira";
        break;
    case 5:
        dia_semanaToDataBase = "Sexta-Feira";
        break;
    case 6:
        dia_semanaToDataBase = "Sábado";
        break;
}
let official_date = (ano + "/" + correction(mes) + "/" + correction(dia) + `</br>` + `${dia_semanaToDataBase}`);
calendar.innerHTML = official_date;
console.log(official_date);
function saveDate() {
    glicose1 = glicose.value;
    pressao1 = pressao.value;
    peso1 = peso.value;
    if ((glicose1 != "") && (pressao1 != "") && (peso1 != "")) {
        let dates = `
        <table style="margin-top: 0%; width: 100%">
            <tr>
                <td style="max-width: 20px;">${official_date}</td>
                <td style="max-width: 20px;">${pressao1} MMhg</td>
                <td style="max-width: 20px;">${glicose1} mg/dL</td>
                <td style="max-width: 20px;">${peso1} Kg</td>
            </tr>
        </table>
    `
        document.getElementById("idiv_tree").innerHTML += dates;
        glicose.value = "";
        pressao.value = "";
        peso.value = "";
    }
}
function menu() {
    let form = document.getElementById("iform");
    if (form.style.display == `block`) {
        form.style.display = `none`;
    } else {
        form.style.display = `block`;
    }
}