'use client'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

"/comments?postId=1"

const getDataById = async id => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const { data } = res;
    return data;
}

const Post = async () => {
    const postParams = useSearchParams();
    const id = postParams.get('id');
    const comments = await getDataById(id);
    console.log(comments);
    return (
        <>
            <h1>YOU ARE LOOKING AT POST #{id}</h1>
        </>
    )
}

export default Post;