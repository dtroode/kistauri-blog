import CMS from "netlify-cms-app";

import "../styles/fonts-styles/mono.scss";
import "../styles/pages-styles/post.scss";
import "../styles/media.scss";
import "../styles/code.scss";
import Post from "../templates/blog-post";

CMS.registerPreviewTemplate("blog", Post);
