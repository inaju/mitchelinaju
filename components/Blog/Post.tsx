import { PostType } from '@/data/content/blog';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
    post: PostType;
}

export const Post: FC<Props> = ({ post }) => {
    return (
        <a
            className="relative flex flex-col m-5 my-5 mt-5 rounded-lg md:mb-0 md:mx-5 w-80 md:w-96 dark:bg-darkerBlue"
            href={`https://mitchel.hashnode.dev/${post.slug}`}
            key={post._id}
            rel="noreferrer"
            target="_blank"
        >
            {post.coverImage && (
                <Image
                    alt={post.title}
                    className="rounded-t-lg object-cover"
                    height={786}
                    src={post.coverImage}
                    width={1500}
                />
            )}

            <div className="flex flex-col p-4 pb-4 text-left">
                <h2 className="text-lg font-medium text-white">{post.title}</h2>
                <p className="mt-4 text-fun-gray text-base break-words text-text">
                    {post.brief.substring(0, 100)}...
                </p>
            </div>
        </a>
    );
};
