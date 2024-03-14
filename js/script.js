function hitung(){
    // Menghitung BMI dan menginput data
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;
    let usia = document.getElementById("usia").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );
    console.log(BMI)

    // BMI Result
    let BMIfix = BMI.toFixed(2);
    console.log('BMIfix');

    document.getElementById('result-bmi').innerHTML = BMIfix;
    console.log('Result BMI');

        // Validasi input
        if (isNaN(berat) || berat === "") {
            alert("Silahkan isi berat badan anda terlebih dahulu.");
            return;
        }

        if (isNaN(tinggi) || tinggi === "") {
            alert("Silahkan isi tinggi badan anda terlebih dahulu.");
            return;
        }

        if (isNaN(usia) || usia === "") {
            alert("Silahkan isi usia anda terlebih dahulu.");
            return;
        }
    }

// Mengosongkan semua input
function reset(){
    document.getElementById("beratbadan").value = "";
    document.getElementById("tinggibadan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById('result-bmi').value ="";

    // Mengosongkan hasil
    console.log("Hasil dikosongkan.");
}

function category(){
    if ( (BMIfix) < 18,5 ) {
        result = "Kekurangan Berat Badan";
    }
    else if ( (BMIfix) < 18,5 && (BMIfix) < 19 ) {
        result = "Berat Badan Ideal";
    }
    else if ( (BMIfix) < 25 && (BMIfix) < 29,9 ) {
        result = "Kelebihan Berat Badan";
    }
    else if ((BMIfix) >= 30) {
        result = "Kegemukan (Obesitas) ";
    }
    document.getElementById('category-bmi').innerHTML = result;
    }