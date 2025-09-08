import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const CollegeSearch = () => {
  // const [search, setSearch] = useState("");
  // const [debouncedSearch, setDebouncedSearch] = useState("");

  // // Debounce Effect
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     setDebouncedSearch(search);
  //   }, 500); // 500ms delay

  //   return () => clearTimeout(handler);
  // }, [search]);

  // const { data: colleges = [], isLoading } = useQuery({
  //   queryKey: ["colleges", debouncedSearch],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/colleges-search?search=${debouncedSearch}`
  //     );
  //     return res.json();
  //   },
  //   enabled: !!debouncedSearch,
  // });
  // if (isLoading) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }
  // console.log(colleges);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ✅ Debounce Effect (500ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler); // আগের টাইমার clear করবে
  }, [search]);

  // ✅ যখন debouncedSearch আপডেট হবে তখন navigate হবে
  useEffect(() => {
    if (debouncedSearch.trim().length > 0) {
      navigate(`/search?query=${debouncedSearch}`);
    } else {
      navigate(`/search`);
    }
  }, [debouncedSearch, navigate]);

  return (
    <section className="relative mt-4 lg:mt-0 lg:ml-6 text-white">
      {/* 🔍 Search Field */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search college name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
        />
        <span className="absolute inset-y-0 right-2 flex items-center pl-3">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 
                      17C6.13401 17 3 13.866 3 10C3 6.13401 
                      6.13401 3 10 3C13.866 3 17 6.13401 
                      17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CollegeSearch;
