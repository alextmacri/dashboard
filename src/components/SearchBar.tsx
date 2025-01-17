import React from "react";

const SearchBar: React.FC = () => {
    const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const httpRegex = /https?:\/\/(www\.)?/;

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchQuery = (event.currentTarget.elements.namedItem("search") as HTMLInputElement).value;
        if (searchQuery.trim()) {
            // if the search query is not empty, either go to the web address or search it on Google
            if (searchQuery.match(urlRegex)) {
                window.location.href = searchQuery.match(httpRegex) ? searchQuery : `https://${searchQuery}`;
            } else {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            }
        }
    };

    return (
        <div className="w-3/5 flex justify-center items-center">
            <form onSubmit={handleSearch} className="w-full p-4 opacity-90 bg-black text-white rounded-xl flex">
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="flex-grow h-12 px-4 bg-transparent text-2xl focus:outline-none"
                />
            </form>
        </div>
    );
};

export default SearchBar;
