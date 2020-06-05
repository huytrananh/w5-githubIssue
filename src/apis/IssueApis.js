import axiosClient from './Base';

const getIssueList = async (owner, repo) => {
    const data = await axiosClient.get(`/repos/${owner}/${repo}/issues`);
    console.log("Get issue list", data);
}

const getIssueDetail = async (owner, repo, issue_number) => {
    const data = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
    console.log("Get issue detail", data);
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
    createNewIssue
}

export default IssueApis;