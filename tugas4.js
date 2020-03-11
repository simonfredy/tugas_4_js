function tinggiBadan() {
    var tinggi1 = 170;
    var tinggi2 = 165;
    var tinggi3 = 173;

    var tinggiArray = [170, 165, 173];

    if (tinggi1 < tinggi2){
        if (tinggi2 > tinggi3){
            console.log("Tinggi 2 Lebih tinggi dari Tinggi 3")
        }else{
            console.log("Tinggi 1 paling tinggi");
        }
    } else {
        console.log("Tinggi 3 Paling Tinggi");
    }

    console.log(tinggiArray.sort());
}

tinggiBadan();