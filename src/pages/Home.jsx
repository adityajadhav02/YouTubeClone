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

  const [currentPage, setCurrentPage] = useState(0);
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
    // scroll to top with animation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= 10; i++) {
      pagination.push(
        <button
          style={{ cursor: "pointer",
           padding: "5px 10px",
            backgroundColor: `${currentPage==i-1? "red" : "lightgray"}`,
            color:`${currentPage==i-1? "white" : "gray"}`,
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
    <>
    <Container>
        {data.map((item) => (
          <Card
            key={item.postId}
            video={item}
            id={item.postId}
            
          />
        ))}
    </Container>

    <div className="pagination"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0px",
      }}
    >
        <button
            style={{ 
                cursor: "pointer",
                padding: "5px 10px",
                backgroundColor: "red",
                color:"white",
                border:"none",
                borderRadius:"2px",
                margin: "5px",
             }}
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            &lt; 
        </button>
        {renderPagination()}
        <span>... </span>
        <button
          style={{ 
                cursor: "pointer",
                padding: "5px 10px",
                backgroundColor: "red",
                color:"white",
                border:"none",
                borderRadius:"2px",
                margin: "5px",
          }}
          onClick={handleNextPage}
        >
           &gt;
        </button>
      </div>

    </>
  );
};

export default Home;
