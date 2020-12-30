class KaryawanView{

    static showData(data){
        console.log(data)
    }
    
    static showhelp(){
        console.log(
        `#register <namadepan>, <namabelakang>, <jeniskelaminn>, <email>, <noHP> #untuk meregisterkaryawan baru#
         #allKaryawan #menampilkan semua daftar karyawan#
         #editKaryawan <nik>, <namadepan> # mengedit namadepankaryawan#
         #hapusKaryawan <nik> # menghapus data karyawan sesuai nik#
         #createDept <namadepartemen> # membuat departemen baru#
         #pointM <namadepartemen>, <nik> # menunjuk Manager untuk departemen baru#
         #DMember <namadepartemen>, <nik> # menambahkan member baru ke departemen yang sudah ada#
         #allDept # menampilkan daftar semua departemen yang ada#
         #createP <projectname>, <nik> # membuat Project baru dan karyawan untuk project tersebut#
         #pMember <projectname>, <nik> # menambahkan member sebuah project#
         #allProject # menampilkan semua project yang berjalan#
         #editP <projectname>, <nik> # mengeuarkan member project#
         #help # menampilkansemua daftar command#
        `)
}
}

module.exports = KaryawanView;