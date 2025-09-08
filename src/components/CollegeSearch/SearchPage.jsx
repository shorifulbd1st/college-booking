// SearchPage.jsx
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import College from "../college/college";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useEffect } from "react";

const SearchPage = () => {
  const [params] = useSearchParams();
  const query = params.get("query") || "";
  console.log(query);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length === 0) {
      navigate("/");
    }
  }, [query.length, navigate]);
  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges", query],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/colleges-search?search=${query}`
      );
      return res.json();
    },
    enabled: !!query,
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">
        {/* Search Results for: <span className="font-bold">{query}</span> */}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.length > 0 ? (
          colleges?.map((college) => (
            <College key={college._id} college={college}></College>
          ))
        ) : (
          <p className="my-20 text-2xl text-red-800 italic font-bold text-center">
            No colleges found
            {/* {colleges.length === 0 && navitage("/")} */}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
