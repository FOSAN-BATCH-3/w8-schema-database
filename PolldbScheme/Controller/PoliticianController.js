const PoliticianModel = require(`../Model/PoliticianModel.js`);
const PoliticianView = require (`../View/PoliticianView.js`);


class PoliticianController{

    static allP(){
        PoliticianModel.all(function(data){
            PoliticianView.show(data)
        })
        }

        static register(n,p,l,gc){
        PoliticianModel.register(n,p,l,gc,function(data){
            PoliticianView.show(data)
        })
        }

        static delete(id){
            PoliticianModel.delete(id, function(data){
                PoliticianView.show(data)
            })
        }

        static edit(id,n,p,l,gc){
            PoliticianModel.edit(id,n,p,l,gc, function(data){
                PoliticianView.show(data)
            })
        }
    

}

module.exports = PoliticianController; 