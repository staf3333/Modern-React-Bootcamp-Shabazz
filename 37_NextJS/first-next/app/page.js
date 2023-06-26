import Link from 'next/link';

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    return res.json();
}

const Page = async () => {
    const posts = await getData();
    return (
        <div>
            <h1>Our Index Page!!!</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href="/post">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;