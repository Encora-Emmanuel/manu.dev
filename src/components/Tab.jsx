/** @jsx jsx */
import { jsx } from "@emotion/core";
import { getPageByFilename } from "../pages";
import { Icon } from "./Icon";

export const Tab = ({ title }) => {
  const page = getPageByFilename(title);
  const { invertIcon, iconEmoji } = page;
  let { iconSrc } = page;
  if (!iconSrc && !iconEmoji) {
    iconSrc = "/icons/markdown.svg";
  }

  return (
    <div
      css={{
        background: "#1E1E1E",
        color: "#FFF",
        padding: ".5rem 2rem .5rem 1rem",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Icon src={iconSrc} inverted={invertIcon} emoji={iconEmoji} />
      <span>{title}</span>
    </div>
  );
};
