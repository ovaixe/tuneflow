import ListItem from "@/components/ListItem";

const LibraryContent = () => {
  return (
    <div className="px-6">
      <div
        className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4
            "
      >
        <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
      </div>
    </div>
  );
};

export default LibraryContent;
