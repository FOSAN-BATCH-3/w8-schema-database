class VoteCountView{

    static show(data){
        console.log(data)
    }

    static showStatus(data){
        for (let i = 0; i < data.length; i++){
        console.log(`[${i+1}] ${data[i].name} mendapatkan ${data[i].count} suara `)
            }
    }
}

module.exports = VoteCountView;