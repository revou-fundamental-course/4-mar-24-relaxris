function hitung(){
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;
    let umur = document.getElementById("usia").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );

    console.log(BMI)

        // Validasi input
        if (isNaN(beratInput.value) || beratInput.value === '') {
            alert('Harap Isi Berat Badan Anda Terlebih Dahulu.');
            return;
        }

        if (isNaN(tinggiInput.value) || tinggiInput.value === '') {
            alert('Harap Isi Tinggi Badan Anda Terlebih Dahulu.');
            return;
        }

        if (isNaN(usiaInput.value) || umurInput.value === '') {
            alert('Harap Isi Usia Anda Terlebih Dahulu.');
            return;
        }
    }
  
function reset(){
    
}