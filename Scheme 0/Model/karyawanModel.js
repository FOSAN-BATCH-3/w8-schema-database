const koneksi = require(`../connection.js`);

class KaryawanModel {

    static addKaryawan(nama_depan,nama_belakang,jenisK, email, Hphone, cb){
        let query = `INSERT INTO karyawan(nama_depan,nama_belakang, jenisKelamin, email, phone_number )
        VALUES ($1, $2, $3, $4, $5);`;
        
        let value = [nama_depan,nama_belakang,jenisK, email, Hphone]

        koneksi.query(query, value, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static list(cb){
        let query = `SELECT * from karyawan;`;
        
        koneksi.query(query, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static edit(nik, namabaru, cb){
        let query = `UPDATE karyawan SET nama_depan=$1 WHERE nik=$2;`;
        let value= [namabaru, nik]
        koneksi.query(query, value, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static hapus(nik, cb){
        let query = `DELETE FROM karyawan WHERE nik= $1;`;
        let value= [nik]
        koneksi.query(query,value, function(err, res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }
}

module.exports = KaryawanModel;