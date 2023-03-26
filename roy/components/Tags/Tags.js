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
              const list = e.target.parentElement;
              const item = e.target;

              const containerCenter =
                list.getBoundingClientRect().left + list.offsetWidth / 2;
              const itemCenter =
                item.getBoundingClientRect().left + item.offsetWidth / 2;

              const distance = itemCenter - containerCenter;

              list.scrollLeft += distance;
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
