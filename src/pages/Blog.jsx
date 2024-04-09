import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import SEO from "../utils/SEO";
import { trackLinkClick } from "../utils/Analytics";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  // Track GA4 link clicks

  const handleLinkClick = () => {
    trackLinkClick("Blog links");
  };

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (posts.length === 0) {
          const response = await client.getEntries({
            content_type: "blog",
          });

          setPosts(response.items);
        }
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      }
    };

    fetchPosts();
  }, [client, posts]);

  return (
    <div className="min-h-screen w-screen overscroll-none bg-charcoal">
      <SEO
        title="Blog | Black Gourd"
        description="We're a digital agency with more than a decade of experience in building and creating innovative websites and immersive copywriting that helps you stand out from all the digital noise."
        name="@blackgourd"
        type="website"
        imageUrl="https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/blackgourdblog.webp"
        url="https://blackgourd.com/blog"
      />
      <div className="grid lg:grid-cols-3 gap-10 py-44 justify-items-center cursor-pointer md:mx-28 mx-4">
        {posts.map((post) => (
          <NavLink
            reloadDocument
            key={post.sys.id}
            to={`/blog/${post.fields.slug}`}
            onClick={handleLinkClick}
          >
            {post.fields.featuredImage && (
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt="Thumbnail"
                className="hover:scale-95 transition-all duration-700"
              />
            )}
            <h3 className="text-gunmetal text-2xl md:text-4xl tracking-wide font-vollkorn my-5 text-pretty">
              {post.fields.title}
            </h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
