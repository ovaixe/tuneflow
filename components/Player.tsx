"use client";

import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

import PlayerContent from "./PlayerContent";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
      flex
      items-center
      justify-center
    "
    >
      <div
        className="
        fixed
        bottom-[50px]
        md:bottom-0
        rounded-xl
        md:rounded-none
        bg-neutral-800
        md:bg-black
        w-[95%]
        md:w-full
        h-[80px]
        px-2
      "
      >
        <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
      </div>
    </div>
  );
};

export default Player;
