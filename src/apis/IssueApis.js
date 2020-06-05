import axiosClient from './Base';

const getIssueList = (owner, repo) => {
    
}

const getIssueDetail = async(owner, repo, issue_number) => {
    let data = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}`)
    console.log("Show data: ", data.data)
    return data.data
}

const createNewIssue = (owner, repo, title, body) => {
}

const IssueApis = {
    getIssueList,
    getIssueDetail,
    createNewIssue
}

export default IssueApis;