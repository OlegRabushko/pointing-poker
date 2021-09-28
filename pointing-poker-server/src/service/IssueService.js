const IssueDB = require('../shemas/UserShema')

class IssueService {

    async createIssue(issueData){ 
        const newIssue = await IssueDB.create(issueData)
        return newIssue
    }

    async updateIssue(issueData){
        const updatedIsu = await IssueDB.updateOne({_id: issueData._id}, {
            $set: {
                title: issueData.title,
                link: issueData.link,
                priority: issueData.priority
            }
        })
        return updatedIsu
    }

    async getIssue(issueId){
        if(!issueId){
            throw new Error('no ID')
        }
        const issue = await IssueDB.findById(issueId)
        return issue
    }
    
    async getAllIssues(gameId){
        const issues = await IssueDB.find({game_id: gameId})
        return issues
    }

    async deleteIssue(issueId){
        if(!userId){
            throw new Error('no ID')
        }
        await IssueDB.findByIdAndDelete(issueId, (err) => {
            if(err){
                return {res: 'Not Found User'}
            }
            else {
                return {res: 'Issue deleted'}
            }}
        )
    };

    async deleteIssues(gameId){
        await IssueDB.deleteMany({game_id: gameId}, (err) => {
            if(err){
                return {res: 'Not Found User'}
            }
            else {
                return {res: 'Issues deleted'}
            }}
        )
    }
}

module.exports = new IssueService()