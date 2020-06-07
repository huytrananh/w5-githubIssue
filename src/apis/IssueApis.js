import axiosClient from './Base';

const getIssueList = async (owner, repo) => {
    const data = await axiosClient.get(`/repos/${owner}/${repo}/issues`);
    // console.log("Get issue list", data);
}

const getIssueDetail = async (owner, repo, issue_number) => {
    const detail = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
    console.log("Get issue detail", detail);
    return detail.data;
}

const getIssueEventList = async (owner, repo, issue_number) => {
    const eventList = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}/events`);
    console.log("Get issue event list", eventList);
    return eventList.data;
}

const createNewIssue = (owner, repo, title, body) => {
    return axiosClient.post(`/repos/${owner}/${repo}/issues`, {
        "title": title,
        "body": body,
    })
}

const IssueApis = {
    getIssueList,
    getIssueDetail,
    createNewIssue,
    getIssueEventList
}

export default IssueApis;