import React from "react";
import { Typography, Card } from "antd";
import Navbar from "../components/Home/Navbar";
const { Title, Paragraph } = Typography;

const AboutPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <Card>
        <Title level={2}>ItsABlog - Multiuser Blogging Application</Title>
        <Paragraph>
          ItsABlog is a multiuser blogging application designed for individuals
          who have a lot to say but might not always have someone to listen.
          With ItsABlog, you can easily share your thoughts, stories, and
          opinions with the world. Whether you're a passionate writer or just
          want to express yourself, ItsABlog provides the platform you need.
        </Paragraph>

        <Title level={3}>Application Deployment</Title>
        <a href="https://itsablog.vercel.app/" target="_blank">
          ItsABlog - Deployed here
        </a>

        <Title level={3}>Features</Title>
        <Paragraph>
          1. Create, Read, Update, and Delete Posts: Easily create, edit, and
          delete your blogs. Share your experiences and ideas with the ItsABlog
          community.
        </Paragraph>
        <Paragraph>
          2. Like and Unlike Posts: Show your appreciation for other users'
          posts by liking them, and easily undo your like if you change your
          mind.
        </Paragraph>
        <Paragraph>
          3. Create, Reply to, Read, Update, and Delete Nested Comments: Engage
          in discussions with other users by leaving comments on posts. You can
          also reply to comments and manage your own comments effortlessly.
        </Paragraph>
        <Paragraph>
          4. Markdown Support: Format your posts and comments using Markdown to
          add headings, lists, links, and more, making your content more
          visually appealing and organized.
        </Paragraph>
        {/* Add other features in a similar fashion */}

        <Title level={3}>Getting Started</Title>
        <Paragraph>
          To start using ItsABlog, simply visit our{" "}
          <a href="https://itsablog.vercel.app/" target="_blank">
            deployed website
          </a>{" "}
          and sign up or log in to get started. You'll be able to create, share,
          and interact with posts and comments right away.
        </Paragraph>

        <Title level={3}>Contributing</Title>
        <Paragraph>
          We welcome contributions from the community to help improve and expand
          ItsABlog. If you'd like to contribute, please follow our{" "}
          <a href="CONTRIBUTING.md" target="_blank">
            contribution guidelines
          </a>
          .
        </Paragraph>

        <Title level={3}>Feedback and Support</Title>
        <Paragraph>
          If you have any feedback, questions, or need assistance, please don't
          hesitate to reach out to us at{" "}
          <a href="mailto:support@itsablog.com">support@itsablog.com</a>. We're
          here to help you make the most of your blogging experience.
        </Paragraph>

        <Title level={3}>Happy Blogging!</Title>
        <Paragraph>The ItsABlog Team</Paragraph>
      </Card>
    </div>
  );
};

export default AboutPage;
