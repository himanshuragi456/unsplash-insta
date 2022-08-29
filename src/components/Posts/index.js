import { useRef, useState } from "react";
import useLazyLoad from "../../hooks/useLazyLoad";
import Card from "../Card";
import { LoadingPosts } from "../LoadingPosts";
import { endpoints, request } from "../../services";
import { API_KEY } from "../../variables";
import styles from "./style.module.css";

const NUM_PER_PAGE = 6;

export const Posts = ({ keyword }) => {
  const triggerRef = useRef(null);
  const [TotalPages, setTotalPage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  const onGettingData = (currentPage) => {
    return new Promise((resolve) => {
      request({
        url: endpoints.ENDPOINTS.search,
        method: endpoints.APIMethods.GET,
        params: {
          page: currentPage,
          query: keyword,
          client_id: API_KEY,
          per_page: NUM_PER_PAGE,
        },
      }).then((response) => {
        setCurrentPage(currentPage);
        setTotalPage(response?.data?.total_pages);
        resolve(response.data.results);
      });
    });
  };

  const { data } = useLazyLoad({ triggerRef, onGettingData });

  return (
    <>
      <div className={styles.cardGridContainer}>
        {data?.map((image) => {
          return (
            <Card
              userImages={image?.urls}
              userData={image?.user}
              likes={image?.likes}
            />
          );
        })}
      </div>
      {CurrentPage !== TotalPages && (
        <div ref={triggerRef}>
          <LoadingPosts numberPerPage={NUM_PER_PAGE} />
        </div>
      )}
    </>
  );
};
