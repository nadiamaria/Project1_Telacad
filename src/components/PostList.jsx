import React from 'react';
import PostItem from './PostItem';

function PostList(props) {
    const { posts } = props;

    return (
        <div>
            <div className='pl-5'>
                <h2>Post List</h2>
            </div>
            { posts.map((post, index) => {
                return <PostItem    
                    id={ post.id }
                    title={ post.title }
                    body={ post.body }
                    key={ index }
                />
            })}
        </div>
    );
}

export default PostList;