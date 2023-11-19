import Avatar from "~/components/Avatar/Avatar";
import Heading from "~/components/heading/Heading";
import SocialLink from "~/components/SocialLink/SocialLink";
import Subheading from "~/components/Subheading/Subheading";
import img from "../assets/img/avatar.webp";

export default function Index() {
  return (
    <div className="w-full flex flex-col items-center">
      <nav></nav>
      <Avatar src={img} alt="Tom Pennetta" />
      <Heading>Tom Pennetta</Heading>
      <Subheading>Software Engineer</Subheading>
      <SocialLink
        platform="github"
        href="https://www.github.com/tpennetta"
        label="github.com/tpennetta"
      />
      <SocialLink
        platform="linkedin"
        href="https://linkedin.com/in/TomPennetta"
        label="linkedin.com/in/TomPennetta"
      />
      <SocialLink
        platform="twitter"
        href="https://twitter.com/tpennetta"
        label="twitter.com/tpennetta"
      />
      {/* <div>Blog</div>
      <div>Simply the most complex personal website</div>
      <ul>
        <li>Infrastructure as Code (IaC)</li>
        <li>@remix_run powered serverless application (running on AWS)</li>
        <li>Mobile first styling with Tailwind</li>
        <li>
          CI/CD with isolated hosting environments and Github workflow
          automation
        </li>
        <li>
          Enterprise-grade best practices for security, fault tolerance, and
          webpage quality checks
        </li>
        <li>Markdown powered posts/articles via static content store</li>
      </ul> */}
    </div>
  );
}
