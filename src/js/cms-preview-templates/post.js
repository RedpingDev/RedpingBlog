import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  componentDidMount() {
    // Giscus 스크립트를 동적으로 생성하여 추가합니다.
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "RedpingDev/RedpingBlog");
    script.setAttribute("data-repo-id", "R_kgDONH1-tg");
    script.setAttribute("data-category", "Show and tell");
    script.setAttribute("data-category-id", "DIC_kwDONH1-ts4Cj0RP");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "ko");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.getElementById("giscus-comments").appendChild(script);
  }

  render() {
    const { entry, widgetFor, getAsset } = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div className="mw6 center ph3 pv4">
        <h1 className="f2 lh-title b mb3">{entry.getIn(["data", "title"])}</h1>
        <div className="flex justify-between grey-3">
          <p>{format(entry.getIn(["data", "date"]), "iii, MMM d, yyyy")}</p>
          <p>Read in x minutes</p>
        </div>
        <div className="cms mw6">
          <p>{entry.getIn(["data", "description"])}</p>
          {image && <img src={image} alt={entry.getIn(["data", "title"])} />}
          {widgetFor("body")}
        </div>

        <div id="giscus-comments"></div>
      </div>
    );
  }
}
