// import React from 'react'
// import IssueApis from './../../apis/IssueApis';

// export default function ListComment(props) {
//     let [comment, setCommentList] = React.useState(null)

//     const getCommentList = async () => {
//         let data = await IssueApis.getCommentList(props.owner, props.repo, props.issue_number)
//          setCommentList(data.data)
//     }

//     React.useEffect(() => {
//         getCommentList()
//     }, [])
//     return (
//         <div>
            
//         </div>
//     )
// }
