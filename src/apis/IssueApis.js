import axiosClient from './Base'

const getIssueList = async (owner, repo) => {
    let data = await axiosClient.get(`/repos/${owner}/${repo}/issues`)
    console.log("this is the data from IssueeApis", data.data)
    return data.data;
}

const getIssueDetail = async(owner, repo, issue_number) => {
    let data = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}`)
    console.log("Show data: ", data.data)
    return data.data
}

const postNewIssue = async (owner, repo, title, body) => {
    let data = await axiosClient.post(`/repos/${owner}/${repo}/issues`, {
        "title": title,
        "body": body,
        
      })
}

const IssueApis = {
    getIssueList,
    getIssuesDetail,
    postNewIssue
}

export default IssueApis;

