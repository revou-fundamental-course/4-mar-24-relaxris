function hitung(){
    // Menghitung BMI dan menginput data
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;
    let usia = document.getElementById("usia").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );

    console.log(BMI)

        // Validasi input
        if (isNaN(berat) || berat === "") {
            alert("Silahkan isi berat badan anda terlebih dahulu.");
            return;
        }

        if (isNaN(tinggi) || tinggi === "") {
            alert("Silahkan isi tinggi badan anda terlebih dahulu.");
            return;
        }

        if (isNaN(umur) || umur === "") {
            alert("Silahkan isi usia anda terlebih dahulu.");
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