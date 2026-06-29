import { useEffect, useState, type FC } from "react";

interface Props {
  placeholder: string;

  onHandleSearch: (query: string) => void;
}

export const SearchBar: FC<Props> = ({ placeholder, onHandleSearch }) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onHandleSearch(query);
    }, 700);

    return () => {
      clearTimeout(timeoutID);
    };
  });

  const onSearch = () => {
    onHandleSearch(query);
  };

  return (
    <>
      <div className="flex flex-row m-5">
        <input
          className="rounded-md   p-3 mb-2 mr-2 w-full border border-gray-500"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") onSearch();
          }}
        />
        <div className="">
          <button
            className="bg-black border border-white rounded-md p-3 w-full mx-3 text-white cursor-pointer hover:bg-gray-800   "
            onClick={onSearch}
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};
