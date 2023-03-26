export default function Tags({ tags, activeTag, onTagClick }) {
  const activeClass = "bg-black text-white px-4 py-2 rounded-lg";
  return (
    <div className="flex gap-x-4 my-4 overflow-x-scroll scrollbar-hide whitespace-pre border-b-[1px] border-black pb-4">
      <button
        onClick={(e) => {
          onTagClick(undefined);
          e.target.scrollIntoView();
        }}
        className={activeTag === undefined ? activeClass : "whitespace-pre"}
      >
        All
      </button>
      {tags.map((t) => {
        return (
          <button
            key={t}
            onClick={(e) => {
              onTagClick(t);
              const container = e.target.parentElement;
              const item = e.target;
              const distance =
                item.offsetLeft -
                container.offsetWidth / 2 +
                item.offsetWidth / 2;

              // Animate the scroll position to the calculated distance
              container.scrollTo({
                left: distance,
                behavior: "smooth",
              });
            }}
            className={activeTag === t ? activeClass : "whitespace-pre"}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
