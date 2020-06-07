import axiosClient from './Base';

const getCommentList = async (owner, repo, issue_number) => {
    const comment = await axiosClient().get(`/repos/${owner}/${repo}/issues/${issue_number}/comments`);
    console.log("Get comment list", comment);
    return comment.data;
}

const createNewComment = async(owner, repo, issue_number, content) => {
    let data = await axiosClient().post(`/repos/${owner}/${repo}/issues/${issue_number}/comments`, {
        body: content
    })
    return data
}

const CommentApis = {
    getCommentList,
    createNewComment,
}

export default CommentApis;