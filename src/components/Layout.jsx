/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Explorer } from "./Explorer";
import { Nav } from "./Nav";
import { Editor } from "./Editor";
import { Fragment, useEffect, useState } from "react";
import { TitleBar } from "./TitleBar";
import { useMediaQuery } from "@react-hook/media-query";
import { Helmet } from "react-helmet";
import { getPageByPath } from "../pages";

export default function Layout({ children, location }) {
  const currentFilename =
    getPageByPath(location.pathname)?.filename || "404.md";

  const isClient = typeof window !== "undefined";

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [explorerVisible, setExplorerVisible] = useState(isClient && !isMobile);

  useEffect(() => {
    setExplorerVisible(!isMobile);
  }, [isMobile, setExplorerVisible]);

  return (
    <div
      css={{
        borderRadius: ".5rem",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxWidth: "1080px",
        margin: "0 auto",
        boxShadow:
          "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Helmet>
        <title>
          {currentFilename && currentFilename !== "README.md"
            ? `${currentFilename} | `
            : ""}
          Emmanuel Rosa Sarachini de Oliveira
        </title>
        <meta
          name="description"
          content="I'm a full stack software engineer that enjoys building dependable and lovable products. Come learn more about me!"
        />
      </Helmet>
      <TitleBar filename={currentFilename} />
      <div
        css={{
          display: "flex",
          background: "#252526",
          flex: "1 0",
          minHeight: "0",
        }}
      >
        {/* Because of rehydration issues, there's some components that don't really make sense to render statically. For example, we don't know what `openDirs` will be until the browser evaluates `window.history`, we don't know if the user is on a mobile device or not until the browser loads the page, etc.
        
            So... The strategy here is to render everything we can that we know won't change or cause flickering statically, and hide the rest until the browser/React takes over rendering*/}
        {isClient && (
          <Fragment>
            <Nav
              onNavItemClick={() => {
                setExplorerVisible((vis) => !vis);
              }}
              navItemActive={explorerVisible}
            />
            {explorerVisible && <Explorer />}
            <Editor tabTitle={currentFilename}>{children}</Editor>
          </Fragment>
        )}
      </div>
    </div>
  );
}
