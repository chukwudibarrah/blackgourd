import { useEffect, useState, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as contentful from "contentful";
import SEO from "../utils/SEO";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Blogpost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const client = useMemo(
    () =>
      contentful.createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
        previewAccessToken: import.meta.env
          .VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      }),
    []
  );

  useEffect(() => {
    const fetchPost = async () => {
      // Reset states for new loading
      setIsFetching(true);
      setError(null);

      try {
        const response = await client.getEntries({
          content_type: "blog",
          "fields.slug": slug,
        });

        if (response.items.length > 0) {
          setPost(response.items[0]);
          setError(null);
        } else {
          setError("Post not found");
          setPost(null); // Ensure post is reset if not found
        }
      } catch (error) {
        console.error("Error fetching Contentful entry:", error);
        setError("Error fetching Contentful entry");
        setPost(null); // Ensure post is reset on error
      } finally {
        setIsFetching(false);
      }
    };

    fetchPost();
  }, [slug, client]);

  // useEffect(() => {
  //   if (post && post.fields && post.fields.content) {
  //     console.log("Related:", post.fields.related);
  //   }
  // }, [post]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-UK",
      options
    );
    return formattedDate;
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => (
        <img
          key={node.data.target.sys.id}
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.description}
        />
      ),
      "heading-4": (node) => (
        <h4 className="text-2xl md:text-4xl font-vollkorn">
          {node.content.map((item, index) => (
            <span key={index}>{documentToReactComponents(item, options)}</span>
          ))}
        </h4>
      ),
      paragraph: (node) => (
        <p className="leading-normal text-base md:text-xl font-sourcecode my-7">
          {node.content.map((item, index) => (
            <span key={index}>{documentToReactComponents(item, options)}</span>
          ))}
        </p>
      ),
      hyperlink: (node) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          id="animate"
          // className="underline text-blue-500 hover:text-blue-700"
        >
          {node.content[0].value}
        </a>
      ),
    },
  };

  return (
    <article>
      <SEO
        title={`${post.fields.title} | Black Gourd`}
        description={post.fields.description}
        name="@YourTwitterHandle"
        type="article"
        imageUrl={post.fields.featuredImage.fields.file.url}
        url={`https://blackgourd.com/blog/${slug}`}
      />

      {/* Post title and featured image */}

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="md:mx-28 mx-4 flex items-center lg:pt-20 lg:pb-0 pt-36 pb-20">
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-pretty">
            {post.fields.title}
          </h1>
          <p className="my-4 font-outfit hidden">
            Published on {formatDate(post.fields.published)}
          </p>
        </div>
        <div>
          <img
            src={post.fields.featuredImage.fields.file.url}
            alt="Post Thumbnail"
          />
        </div>
      </div>

      {/* Page content */}

      <div className="md:mx-28 mx-4 my-16">
        <div className="my-16">
          {documentToReactComponents(post.fields.content, options)}
        </div>
        <hr />

        {/* Related Articles Section */}
        <div>
          <h3 className="text-4xl font-montserrat font-semibold mt-20 mb-12">Related articles</h3>
        </div>
        <div className="related-articles grid grid-cols-1 lg:grid-cols-2 gap-10">
          {post.fields.related &&
            post.fields.related.map((relatedPost) => (
              <NavLink
                reloadDocument
                key={relatedPost.sys.id}
                to={`/blog/${relatedPost.fields.slug}`}
                className="related-article-card"
              >
                <img
                  src={relatedPost.fields.featuredImage.fields.file.url}
                  alt={relatedPost.fields.title}
                  className="max-w-full h-auto hover:scale-95 transition-all duration-700 ease-in-out overflow-hidden"
                />
                <h4 className="text-3xl font-vollkorn mt-2 text-pretty">
                  {relatedPost.fields.title}
                </h4>
                <p className="mt-1 font-sourcecode md:text-xl font-light text-pretty">
                  {relatedPost.fields.description}
                </p>
              </NavLink>
            ))}
        </div>
      </div>
    </article>
  );
}
