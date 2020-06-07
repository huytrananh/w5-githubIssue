import axiosClient from './Base'

const getIssueList = async (owner, repo, page) => {
    let data = await axiosClient().get(`/repos/${owner}/${repo}/issues?page=${page}`)
    return data.data;
}

const getIssueDetail = async(owner, repo, issue_number) => {
    let data = await axiosClient().get(`/repos/${owner}/${repo}/issues/${issue_number}`)
    console.log("Issue Data Detail: ", data.data)
    return data.data
}

const getIssueEventList = async (owner, repo, issue_number) => {
    const eventList = await axiosClient().get(`/repos/${owner}/${repo}/issues/${issue_number}/events`);
    console.log("Get issue event list", eventList);
    return eventList.data;
}

const createNewIssue = async (owner, repo, title, body) => {
    let data = await axiosClient().post(`/repos/${owner}/${repo}/issues`, {
        "title": title,
        "body": body,
    })
    console.log("createNewIssue", data);
    return data;
}

const IssueApis = {
    getIssueList,
    getIssueDetail,
    createNewIssue,
    getIssueEventList
}

export default IssueApis;