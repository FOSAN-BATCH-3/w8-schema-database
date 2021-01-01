const db = require('../connection.js')

class VotersModel{

    static all(cb){
        let query = ` SELECT * FROM Voters`

        db.query(query,function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static register(nd,nb,g,age,cb){
        let query = `INSERT INTO Voters (nama_depan,nama_belakang, gender, age)
        VALUES ( $1,$2,$3,$4);`;

        let value = [nd,nb,g,age]

        db.query(query,value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static delete(VoterId,cb){
        let query = ` DELETE FROM Voters
        WHERE votersId = $1;`;

        let value = [VoterId]

        db.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else(
                cb(res.rowCount)
            )
        })
    }

    static edit(id,nd,nb,g,a,cb){
        let query = `UPDATE Voters
        SET 
        nama_depan = $2,
        nama_belakang = $3,
        gender = $4,
        age = $5
        WHERE VotersId = $1 ;`;

        let value = [id,nd,nb,g,a]

        db.query(query,value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    


}

module.exports= VotersModel;