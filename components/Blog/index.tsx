import { PostType } from '@/data/content/blog';
import { Post } from './Post';
import { FC } from 'react';
import SectionTitle from '../global/SectionTitle';

interface IBlogProps {
    Posts: [PostType];
}

export const Blog: FC<IBlogProps> = ({ Posts }) => {
    return (
        <div
            className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
            id="blog"
        >
            <SectionTitle title="Blog" />

            <div className="flex flex-wrap justify-between mt-10">
                {Posts.slice(0, 3).map(post => {
                    return <Post key={post._id} post={post} />;
                })}
            </div>
        </div>
    );
};
