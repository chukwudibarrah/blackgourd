import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import { trackLinkClick } from "../utils/Analytics";

export default function FetchWebDev() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredImageUrl, setHoveredImageUrl] = useState(null);

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  // Track GA4 link clicks

  const handleLinkClick = () => {
    trackLinkClick("WebDev links");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (projects.length === 0) {
          const response = await client.getEntries({
            content_type: "webDevelopment",
          });

          setProjects(response.items);
        }
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching, regardless of success or failure
      }
    };

    fetchProjects();
  }, [client, projects]);

  const handleMouseEnter = (imageUrl) => {
    setHoveredImageUrl(imageUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImageUrl(null);
  };

  return (
    <div className="grid xl:grid-cols-2 mx-4 md:px-8">
      <div>
        {projects.map((project) => (
          <NavLink
            reloadDocument
            onClick={handleLinkClick}
            key={project.sys.id}
            to={`/webdevelopment/${project.fields.slug}`}
            onMouseEnter={() =>
              handleMouseEnter(project.fields.featuredImage.fields.file.url)
            }
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-sourcecode font-bold py-8 md:py-12 group text-gunmetal">
                {project.fields.projectName}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
      <div
        style={{
          backgroundImage: hoveredImageUrl ? `url(${hoveredImageUrl})` : "none",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
}
