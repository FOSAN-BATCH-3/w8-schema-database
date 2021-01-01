const db = require("./connection");

const seed = [
  {
    nama_depan: "Puka",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "31",
  },
  {
    nama_depan: "Beban2",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "25",
  },
  {
    nama_depan: "beban3",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "34",
  },
  {
    nama_depan: "beban4",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "25",
  },
  {
    nama_depan: "beban4",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "37",
  },
  {
    nama_depan: "beban5",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "45",
  },
  {
    nama_depan: "beban6",
    nama_belakang: "Beban",
    gender: "Pria",
    Age: "22",
  }
];

const seed2 =[
  {
    name : "Pukachu",
    partai: "Partai Beban Abadi",
    location : "Semarang",
    grade_current : "0"
  },
  {
    name : "Adit",
    partai: "Partai beban sejahtera",
    location : "Semarang",
    grade_current : "0"
  }
  
];


function inject(){

let query = 'INSERT INTO Voters (nama_depan,nama_belakang, gender, age) VALUES ($1,$2,$3,$4)'

let query2 = `INSERT INTO politician (name, partai, location, grade_current)
VALUES ( $1, $2, $3, $4)`


for(let i = 0; i < seed.length; i++){
  db.query(query, [seed[i].nama_depan, seed[i].nama_belakang,  seed[i].gender, seed[i].Age], (err, res) => {
    if(err){
      console.log(err.stack)
    } else {
      console.log(`data masuk`)
    }
  })
}

for(let j = 0 ; j <seed2.length; j++ ){
  db.query(query2,[seed2[j].name, seed2[j].partai, seed2[j].location, seed2[j].grade_current], function(err2,ress){
    if (err2){
      console.log(err2)
    }else{
      console.log('beban masuk')
    }
  })
}


}


inject();