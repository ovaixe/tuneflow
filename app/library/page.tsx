import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import LibraryContent from "./components/LibraryContent";

const Library = () => {
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
    "
    >
      <Header className="from-bg-neutral-900">
        <div>
          <h1
            className="
            text-white
            text-3xl
            font-semibold
          "
          >
            Library
          </h1>
        </div>
      </Header>

      <LibraryContent />
    </div>
  );
};

export default Library;
