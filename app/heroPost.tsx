"use client";

import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Avatar from "./avatar";
import { BlogProps } from "@/lib/api";

export const HeroPost = ({ post }: { post: BlogProps }) => {
  const updatedPost = useContentfulLiveUpdates(post);
  return (
    <section>
        <div className="mb-8 md:mb-16">
        <CoverImage title={updatedPost.title} slug={updatedPost.slug} url={updatedPost.coverImage.url} />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">                
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                    {post.title}
                </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
                <Date dateString={updatedPost.date} />
            </div>
        </div>
        <div>
            <p className="text-lg leading-relaxed mb-4">
                {post.excerpt}
            </p>
            {updatedPost.author && <Avatar name={updatedPost.author.name} picture={updatedPost.author.picture} />}
        </div>
        </div>
    </section>
  );
};
