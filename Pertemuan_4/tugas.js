const biodata = {
    nama : "Syafni Aulyya", //tipe data string
    umur : 23,//tipe data number
    prodi : "Sastra Indonesia", //tipe data string
    alamat : {
        jalan : "Kapalo Koto",
        kota : "Padang",
        provinsi : "Sumatera Barat",
    },
    orangtua : {
        ayah : {
            ibu : {
                anak : {
                    cucu : {
                        nama : "Hasna",
                    }
                }
            },
            amak : {

            }
        }
    }
}

console.log(biodata.orangtua.ayah.anak.cucu.nama);
