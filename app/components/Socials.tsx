import { LinkedinIcons, XIcon, GithubIcon } from "./icons";

function Socials() {
  return (
    <div className="selection:text-white flex items-center gap-3">
      <p>digital presence:</p>
      <a
        href="https://www.linkedin.com/in/kasuba97/"
        className="text-linkColor"
        target="_blank"
      >
        <LinkedinIcons />
      </a>
      <a
        href="https://x.com/kasuba97"
        className="text-linkColor"
        target="_blank"
      >
        <XIcon />
      </a>
      <a
        href="https://github.com/kasuba97"
        className="text-linkColor"
        target="_blank"
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default Socials;
