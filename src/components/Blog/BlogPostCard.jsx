import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">{post.snippet}</p>
      <button
        className="inline-block mt-4 text-white hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More →
      </button>
    </div>
  );
};

export default BlogPostCard;
