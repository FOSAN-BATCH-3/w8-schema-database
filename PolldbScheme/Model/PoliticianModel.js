const { ClientBase } = require('pg');
const db = require('../connection.js')

class PoliticianModel{

    static all(cb){
        let query = ` SELECT * FROM politician`

        db.query(query,function(err,res){
            if (err){
                cb(err)
            }else{
                cb(res.rows)
            }
        })
    }

    static register(n,p,l,cg,cb){
        let query = `INSERT INTO Politician (name,partai,location,grade_current)
        VALUES ( $1,$2,$3,$4);`;

        let value = [n,p,l,cg]

        db.query(query,value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static edit(id,n,p,l,cg,cb){
        let query = `UPDATE Politician 
        SET 
        name = $2,
        partai = $3,
        location = $4,
        grade_current = $5
        WHERE PoliId = $1 ;`;

        let value = [id,n,p,l,cg]

        db.query(query,value, function(err,res){
            if(err){
                cb(err)
            }else{
                cb(res.rowCount)
            }
        })
    }

    static delete(PoliId,cb){
        let query = ` DELETE FROM Politician
        WHERE votersId = $1;`;

        let value = [PoliId]

        db.query(query,value,function(err,res){
            if (err){
                cb(err)
            }else(
                cb(res.rowCount)
            )
        })
    }


}

module.exports= PoliticianModel;