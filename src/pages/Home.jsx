import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async (page) => {
    // Make an API call to fetch data for the specified page
    const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
    const jsonData = await response.json();
    setData(jsonData.data.posts);
    console.log(jsonData.data);

  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= 10; i++) {
      pagination.push(
        <button
          style={{ cursor: "pointer",
           padding: "5px 10px",
            backgroundColor: `${currentPage? "red" : "gray"}`,
            color:"white",
            border:"none",
            borderRadius:"2px",
            margin: "5px",
             }}
          key={i}
          onClick={() => handlePageClick(i-1)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
    <Container>
        {data.map((item) => (
          <Card
            key={item.postId}
            thumbnail={item.submission.thumbnail}
            title={item.submission.title}
            views={item.views}
            channel={item.creator.name}
            channelPic={item.creator.pic}
          />
        ))}

      {/* Pagination */}
      <div className="pagination">
        {renderPagination()}
      </div>


    </Container>
  );
};

export default Home;
