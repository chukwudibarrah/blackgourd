import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as contentful from "contentful";
import PropTypes from "prop-types";
import { ScrollerMotion } from "scroller-motion";

export default function Project({ contentType }) {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug || !isFetching) {
        return;
      }

      try {
        const response = await client.getEntries({
          content_type: contentType, // Use the dynamic content_type
          "fields.slug": slug,
        });

        if (response.items.length > 0) {
          setProject(response.items[0]);
          setError(null);
        } else {
          setError("Project not found");
        }
      } catch (error) {
        console.error("Error fetching Contentful entry:", error);
        setError("Error fetching Contentful entry");
      } finally {
        setIsFetching(false);
      }
    };

    fetchProject();
  }, [client, slug, isFetching, contentType]);

  useEffect(() => {
    if (project && project.fields && project.fields.content) {
      console.log("Content:", project.fields.content);
    }
  }, [project]);

  if (isFetching) {
    return (
      <div className="h-screen bg-cosmiclatte flex justify-center items-center">
        <h1 className="text-4xl font-vollkorn font-black">Black Gourd</h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>No project found.</div>;
  }

  return (
    <ScrollerMotion className="bg-cosmiclatte">
      <div className="min-h-screen w-screen bg-cosmiclatte">
        <div className="py-40 md:pt-80 px-4 md:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <img
              src={project.fields.featuredImage.fields.file.url}
              alt={project.fields.projectName}
            />
            <div className="flex items-center">
              <h1 className="text-4xl md:text-8xl font-vollkorn font-black py-10 xl:py-0 xl:px-14 text-gunmetal">
                {project.fields.projectName}
              </h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row font-sourcecode md:text-2xl md:leading-loose">
            <div className="lg:w-4/6 xl:pt-16 text-gunmetal">
              <p>{project.fields.description}</p>
            </div>
            <div className="lg:w-2/6 lg:pl-20 uppercase xl:pt-16 py-12 lg:pt-0 text-gunmetal group transition-all duration-300 ease-in-out">
              <p>Client: {project.fields.client}</p>
              <p>Date: {project.fields.date}</p>
              <NavLink
                className="main-decor"
                to={project.fields.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="border-b-2 bg-left-bottom bg-gradient-to-r from-crayola to-crayola bg-[length:100%_6px] bg-no-repeat group-hover:bg-[length:0%_6px] transition-all duration-700 ease-out outline-none bg-inherit">
                  See project
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </ScrollerMotion>
  );
}

Project.propTypes = {
  contentType: PropTypes.string.isRequired,
};
