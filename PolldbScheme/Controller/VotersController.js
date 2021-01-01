const VotersModel = require(`../Model/VotersModel.js`);
const VotersView = require (`../View/VotersView.js`);


class VotersController{

    static allV(){
        VotersModel.all(function(data){
            VotersView.show(data)
        })
        }
    
        static register(nd,nb,g,a){
            VotersModel.register(nd,nb,g,a,function(data){
                VotersView.show(data)
            })
        }

        static help(){
            VotersView.showhelp()
        }

        static delete(id){
            VotersModel.delete(id, function(data){
                VotersView.show(data)
            })
        }

        static edit (id,nd,nb,g,a){
            VotersModel.edit(id,nd,nb,g,a,function(data){
                VotersView.show(data)
            })
        }

}

module.exports = VotersController; 