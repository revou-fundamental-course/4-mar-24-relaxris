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

    let result;

    if ( (BMIfix) < 18.50 ) {
        result = "Kekurangan Berat Badan";
    }
    else if ( (BMIfix) > 18.50 && (BMIfix) < 24.99 ) {
        result = "Berat Badan Ideal";
    }
    else if ( (BMIfix) > 25.00 && (BMIfix) < 29.99 ) {
        result = "Kelebihan Berat Badan";
    }
    else if ((BMIfix) >= 30.00) {
        result = "Kegemukan (Obesitas)";
    }
    document.getElementById('category-bmi').innerHTML = result;
    console.log('category-bmi');

    let statement ;

    if ( result = 'Kekurangan Berat Badan' ) {
        statement = 'Anda Underweight';
    }
    else if ( result = 'Berat Badan Ideal' ) {
        statement = "Anda Memiliki Berat Badan Ideal";
    }
    else if ( result = 'Kelebihan Berat Badan' ) {
        statement = 'Anda Memiliki Berat Badan Berlebih';
    }
    else if ( result = 'Kegemukan (Obesitas)' ) {
        statement = "Anda Overweight";
    }
    document.getElementById('bmi-statement').innerHTML = statement;
    console.log('bmi-statement');

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