// components/HighlightCategory.js
import React from 'react';
import UserCard from '../UserCardComponent/UserCardComponent';
import './HighlightCategoryComponent.css';

function HighlightCategory({ title, users }) {
    return (
        <div className="highlight-category">
            <h3>{title}</h3>
            {users?.map((user, index) => (
                <UserCard key={index} name={user.name} handle={user.handle} />
            ))}
        </div>
    );
}

export default HighlightCategory;
