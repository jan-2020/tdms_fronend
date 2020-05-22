import React, { Component } from "react";
import Editor from "./Documents/CreateDocuments";
import LeftMenu from "./layout/LeftMenu";

export default class Dashboard extends Component {
  render() {
    // console.log("In console");
    // console.log(window.location.href);
    // if (window.location.href == "http://localhost:3001/createDocument") {
    //   console.log("in if");
    //   return (
    //     <div class="col-9 section-content">
    //       <article class="main-article">
    //         <Editor />
    //       </article>
    //     </div>
    //   );
    // } else if (window.location.href == "http://localhost:3001/dashboard")
    return (
      <div class="col-9 section-content">
        <article class="main-article">
          {/* <article class="main-article-inner">Welcome Prateek Dubey</article> */}
        </article>
      </div>
    );
  }
}
