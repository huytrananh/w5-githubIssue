import axiosClient from './Base';

const getCommentList = async (owner, repo, issue_number) => {
    const comment = await axiosClient.get(`/repos/${owner}/${repo}/issues/${issue_number}/comments`);
    console.log("Get comment list", comment);
}

const CommentApis = {
    getCommentList,
}

export default CommentApis;