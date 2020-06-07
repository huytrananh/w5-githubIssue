import axiosClient from './Base'

const getIssueList = async (owner, repo) => {
    let data = await axiosClient.get(`/repos/${owner}/${repo}/issues`)
    return data.data;
}

const getIssueDetail = async(owner, repo, issue_number) => {
    let data = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}`)
    console.log("Issue Data Detail: ", data.data)
    return data.data
}


const postNewIssue = async (owner, repo, title, body) => {
    let data = await axiosClient.post(`/repos/${owner}/${repo}/issues`, {
        "title": title,
        "body": body,
        
      })
}
const createNewComment = async(owner, repo, issue_number) => {
    let data = await axiosClient.post(`/repos/${owner}/${repo}/issues/${issue_number}/comments`)
    return data
}



const IssueApis = {
    getIssueList,
    getIssueDetail,
    postNewIssue,
    createNewComment,
    // getCommentList,
}

export default IssueApis;

