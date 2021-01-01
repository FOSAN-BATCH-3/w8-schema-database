const request = process.argv[2];
const param = process.argv.slice(3);

const VotersController = require(`./Controller/VotersController.js`);
const PoliticianController = require (`./Controller/PoliticianController.js`);
const VotecountController = require(`./Controller/VoteCountController.js`);


switch (request){
    case 'allVoters':
        VotersController.allV()
    break;
    case 'allPoli':
        PoliticianController.allP()
    break;
    case 'allVC' :
        VotecountController.allVC()
    break;
    case 'registerV':
        VotersController.register(param[0], param[1], param[2], param[3])
    break;
    case 'registerP':
        PoliticianController.register(param[0],param[1],param[2],param[3])
    break;
    case 'Vote' :
        VotecountController.Vote(param[0],param[1])
    break;
    case 'editP':
        PoliticianController.edit(param[0],param[1],param[2],param[3],param[4])
    break;
    case 'editV':
        VotersController.edit(param[0],param[1],param[2],param[3],param[4])
    break;
    case 'help':
        VotersController.help()
    break;
    case 'delVoters':
        VotersController.delete(param[0])
    break;
    case 'delPoli':
        PoliticianController.delete(param[0])
    break;
    case 'delRecord':
        VotecountController.deleteAll()
    break;
    case 'pollStatus':
        VotecountController.status()
    break;
    default:
        console.log('command salah')
    break;
}