function hitung(){
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;
    let umur = document.getElementById("usia").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );

    console.log(BMI)

        // Validasi input
        if (isNaN(berat) || berat === "") {
            alert("Harap masukkan nilai berat badan yang valid.");
            return;
        }

        if (isNaN(tinggi) || tinggi === "") {
            alert("Harap masukkan nilai tinggi badan yang valid.");
            return;
        }

        if (isNaN(umur) || umur === "") {
            alert("Harap masukkan nilai usia yang valid.");
            return;
        }
    }
function reset(){
    // Mengosongkan semua input
    document.getElementById("beratbadan").value = "";
    document.getElementById("tinggibadan").value = "";
    document.getElementById("usia").value = "";

    // Mengosongkan hasil
    console.log("Hasil dikosongkan.");
}