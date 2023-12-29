import React from 'react';

const CommunityList = ({ newPost, onInputChange, onAddPost }) => {
    return (
        <div>
            <h2>새 글 작성</h2>
            <form>
                <label>
                    제목:
                    <input type="text" name="title" value={newPost.title} onChange={onInputChange} />
                </label>
                <br />
                <label>
                    내용:
                    <textarea name="content" value={newPost.content} onChange={onInputChange} />
                </label>
                <br />
                <button type="button" onClick={onAddPost}>
                    글 작성
                </button>
            </form>
        </div>
    );
};

export default CommunityList;