'use client'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

"/comments?postId=1"

const getDataById = async id => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const { data } = res;
    return data;
}

const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
)

const Post = async () => {
    const postParams = useSearchParams();
    const id = postParams.get('id');
    const comments = await getDataById(id);
    console.log(comments);
    return (
        <div>
            <h1>Comments for Post #{id}</h1>
            {comments.map(comment => (
                <Comment {...comment} key={comment.id} />
            ))}
        </div>
    )
}

export default Post;