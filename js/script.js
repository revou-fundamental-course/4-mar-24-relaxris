function hitung(){
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;
    let umur = document.getElementById("usia").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );

    console.log(BMI)

    if (berat == ''){
        alert ('Harap Isi Berat Badan Anda Terlebih Dahulu')
    }
    else {
        console.log('Sudah Terisi')
    }
    if (tinggi == ''){
        alert ('Harap Isi Tinggi Badan Anda Terlebih Dahulu')
    }
    else {
        console.log('Sudah Terisi')
    }
    if (umur == ''){
        alert ('Harap Isi Usia Anda Terlebih Dahulu')
    }
    else {
        console.log('Sudah Terisi')
    }
}