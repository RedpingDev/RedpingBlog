import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
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
          
          {/* Giscus 댓글 시스템 */}
          <div id="giscus-comments">
            <script src="https://giscus.app/client.js"
              data-repo="RedpingDev/RedpingBlog"
              data-repo-id="R_kgDONH1-tg"
              data-category="Show and tell"
              data-category-id="DIC_kwDONH1-ts4Cj0RP"
              data-mapping="pathname"
              data-strict="0"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-input-position="bottom"
              data-theme="preferred_color_scheme"
              data-lang="ko"
              crossorigin="anonymous"
              async>
            </script>
          </div>
        </div>
      </div>
    );
  }
}
