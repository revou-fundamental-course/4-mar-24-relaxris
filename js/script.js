function hitung(){
    let berat = document.getElementById("beratbadan").value;
    let tinggi = document.getElementById("tinggibadan").value;

    let BMI = ( parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi)) );

    console.log(BMI)
}