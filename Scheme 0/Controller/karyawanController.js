const KaryawanModel = require (`../Model/karyawanModel`);
const KaryawanView = require (`../View/karyawanView`);

class KaryawanController {

    static register(nd,nb,jk,em,hp){
        KaryawanModel.addKaryawan(nd,nb,jk,em,hp,function(hasil){
            KaryawanView.showData(hasil)
        })
    }

    static list(){
        KaryawanModel.list(function(data){
            KaryawanView.showData(data)
        })
    }

    static edit(nik,nd){
        KaryawanModel.edit(nik,nd,function(data){
            KaryawanView.showData(data)
        })
    }

    static delete (nik){
        KaryawanModel.hapus(nik, function(data){
            KaryawanView.showData(data)
        })
    }

    static help(){
        KaryawanView.showhelp()
    }
}


module.exports = KaryawanController ;
