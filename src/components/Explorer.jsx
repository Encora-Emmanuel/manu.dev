/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { PAGES } from "../pages";
import { ExplorerDirectory } from "./ExplorerDirectory";
import { ExplorerFile } from "./ExplorerFile";

export const Explorer = () => {
  const [openDirs, setOpenDirs] = useSessionStorage("openDirs", []);

  return (
    <div
      css={{
        background: "#252526",
        color: "#D2D2D2",
        flex: "0 1 16rem",
        minWidth: "fit-content",
        padding: "1rem 0",
        fontSize: "14px",
      }}
    >
      <header
        css={{
          textTransform: "uppercase",
          paddingLeft: "1rem",
          marginBottom: ".5rem",
          color: "#BBB",
        }}
      >
        Explorer
      </header>
      <div
        css={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingLeft: "1rem",
          marginBottom: ".5rem",
          color: "#CCC",
        }}
      >
        manu.dev
      </div>
      <ul
        className="file-list"
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <ExplorerFile page={PAGES.README} />
        <ExplorerDirectory
          dirname="Blog Posts"
          isOpen={isDirOpen("Blog Posts")}
          onClick={(isOpen) => {
            if (isOpen) {
              setOpenDirs((openDirs) => openDirs.concat(["Blog Posts"]));
            } else {
              setOpenDirs((openDirs) =>
                openDirs.filter((dir) => dir !== "Blog Posts")
              );
            }
          }}
        >
          <ExplorerFile page={PAGES.WEB_PAGE_FOCUS} />
          <ExplorerFile page={PAGES.NO_ESTIMATES} />
        </ExplorerDirectory>
        <ExplorerDirectory
          dirname="Career"
          isOpen={isDirOpen("Career")}
          onClick={(isOpen) => {
            if (isOpen) {
              setOpenDirs((openDirs) => openDirs.concat(["Career"]));
            } else {
              setOpenDirs((openDirs) =>
                openDirs.filter((dir) => dir !== "Career")
              );
            }
          }}
        >
          <ExplorerFile page={PAGES.GATHER} />
          <ExplorerFile page={PAGES.WONDER} />
          <ExplorerFile page={PAGES.NM} />
          <ExplorerFile page={PAGES.AKITABOX} />
          <ExplorerFile page={PAGES.ANCILLA_PARTNERS} />
          <ExplorerFile page={PAGES.SCHOOL} />
          <ExplorerFile page={PAGES.SKILLS} />
        </ExplorerDirectory>

        <ExplorerFile page={PAGES.TEN_FACTOR} />
        <ExplorerFile page={PAGES.TOOLKIT} />
        <ExplorerFile page={PAGES.BOOKS} />
        <ExplorerFile page={PAGES.PORTFOLIO} />
      </ul>
    </div>
  );

  function isDirOpen(dirname) {
    return openDirs.includes(dirname);
  }
};
