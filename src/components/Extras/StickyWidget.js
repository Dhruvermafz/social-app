import React from "react";
import "../../css/widgetlinks.css";
const StickyWidget = () => {
  return (
    <div class="widget pitnik-links stick-widget">
      <ul>
        <li>
          <a href="/about" title="">
            about
          </a>
        </li>

        <li>
          <a href="#" title="">
            advertise
          </a>
        </li>

        <li>
          <a href="#" title="">
            Help
          </a>
        </li>

        <li>
          <a href="#" title="">
            contetn policy
          </a>
        </li>
        <li>
          <a href="#" title="">
            User Policy
          </a>
        </li>
      </ul>
      <p>© ItsABlog 2023. All Rights Reserved.</p>
    </div>
  );
};

export default StickyWidget;
