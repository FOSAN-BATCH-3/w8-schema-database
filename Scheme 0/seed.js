const db = require("./connection");

const seed = [
  {
    nama_depan: "Puka",
    nama_belakang: "Beban",
    JenisKelamin: "Pria",
    Email: "puka@beban.com",
    pNumber: "0123"
  },
  {
    nama_depan: "Adit",
    nama_belakang: "Beban",
    JenisKelamin: "Pria",
    Email: "adit@beban.com",
    pNumber: "01234"
  },
  {
    nama_depan: "SWK",
    nama_belakang: "Beban",
    JenisKelamin: "Pria",
    Email: "swk@beban.com",
    pNumber: "01235"
  },
  {
    nama_depan: "Goma",
    nama_belakang: "Beban",
    JenisKelamin: "Pria",
    Email: "goma@beban.com",
    pNumber: "01236"
  },
  {
    nama_depan: "Meng",
    nama_belakang: "Beban",
    JenisKelamin: "Pria",
    Email: "meng@beban.com",
    pNumber: "01237"
  },
];

const seed2 =[
  {
    dept_name : "ligaBeban",
    position : "Manager",
    NIK : "1"
  },
  {
    dept_name : "heavyWeight",
    position : "Manager",
    NIK : "4"
  }
];


function inject(){

let query = 'INSERT INTO karyawan (nama_depan,nama_belakang, JenisKelamin,Email, pNumber) VALUES ($1,$2,$3,$4,$5)'

let query2 = `INSERT INTO departemen (dept_name, position, NIK)
VALUES ( $1, $2, $3)`


for(let i = 0; i < seed.length; i++){
  db.query(query, [seed[i].nama_depan, seed[i].nama_belakang,  seed[i].JenisKelamin, seed[i].Email, seed[i].pNumber], (err, res) => {
    if(err){
      console.log(err.stack)
    } else {
      console.log(`data masuk`)
    }
  })
}

for(let j = 0 ; j <seed2.length; j++ ){
  db.query(query2,[seed2[j].dept_name, seed2[j].position, seed2[j].NIK], function(err2,ress){
    if (err2){
      console.log(err2)
    }else{
      console.log('beban masuk')
    }
  })
}


}


inject();