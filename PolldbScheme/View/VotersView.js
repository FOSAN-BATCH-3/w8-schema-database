class VotersView{

    static show(data){
        console.log(data)
    }

    static showhelp(){
        console.log(` #help # menampilkan semua command,

#allVoters # Menampilkan daftar semua Voters,

#allPoli # Menampilkan daftar semua Kandidat,

#allVC # Menampilkan semua data polling,

#registerV <namadepan>,<namabelakang>,<gender>,<umur> # mendaftarkan Voters baru,

#registerP <nama>,<partai>,<lokasi>,<grade> # mendaftarkan kandidat baru,

#Vote <noKandidat>,<noidVoters> # melakukan voting,

#editP <idKandidat>,<nama>,<partai>,<lokasi>,<grade> # mengubah data kandidat,

#editV <idVoters>,<namadepan>,<namabelakang>,<gender>,<umur> # mengubah data voters,

#help # menampilkan semua command,

#delVoters <idVoters> menghapus data Voters,

#delPoli <idKandidat> menghapus data Kandidat,

#delRecord # mereset ulang voting,

#pollStatus # menampilkan status voting,

    `)
}
}

module.exports = VotersView;