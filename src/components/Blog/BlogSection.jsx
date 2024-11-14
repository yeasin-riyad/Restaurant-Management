import React from 'react';
import BlogHeader from './BlogHeader';
import BlogPostCard from './BlogPostCard';
import blogData from './blogData';

const BlogSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-customColor dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <BlogHeader />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
