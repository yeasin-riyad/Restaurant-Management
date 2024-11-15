import Heading from "../Heading";

const BlogHeader = () => {
  return (
    <div className="text-center">
      <Heading className={"text-gray-600 dark:text-white"} header={"LATEST FROM OUR BLOG"}/>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:text-xl">
        Discover the latest trends, recipes, and stories from our kitchen. Dive into our blog to explore the world of Saudi cuisine.
      </p>
    </div>
  );
};

export default BlogHeader;
