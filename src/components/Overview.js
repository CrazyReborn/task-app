import React from "react";

function Overview(props) {
    const posts = props.posts;
    const list = posts.map(post => 
    <li key={post.toString()}>{post}</li>)
    return (
        <ul>{list}</ul>
    )
}

export default Overview