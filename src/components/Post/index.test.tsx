import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from './index';
import { Post } from '../../store/slices/postSlice';

const post: Post = {
    id: 1,
    userId: 1,
    title: "post title 1",
    body: "post body 1",
    comments: [
        {
            "postId": 1,
            id: 1,
            name: "post 1 comment name 1",
            email: "comment@mail.com",
            body: "post 1 comment body 1"
        },
        {
            "postId": 1,
            id: 2,
            name: "post 1 comment name 2",
            email: "comment@mail.com",
            body: "post 1 comment body 2"
        }
    ]
};

const handleShowComments = jest.fn();

test('renders PostCard component with post data', () => {
    render(<PostCard post={post} handleClick={handleShowComments} />);
    expect(screen.getByText(/post title 1/i)).toBeInTheDocument();
    expect(screen.getByText(/post body 1/i)).toBeInTheDocument();
});
