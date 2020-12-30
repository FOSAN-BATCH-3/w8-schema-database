class DepartemenView{

    static showData(data){
        console.log(data)
    }

    static showCreate(data){
        if (data == 0){
            console.log('Nama departemen sudah digunakan silahkan gunakan nama lain')
        }else if (data == 1){
        console.log('Departemen berhasil dibuat silahkan tunjuk Manager Baru menggunakan command #PointM')
        }
    }
}

module.exports = DepartemenView;