import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewCard.js";
import "./NewCard.css";

const NewsContent = ({ newsArray }) => {
    return (
        <Container maxWidth="md">
            <div className="content">



                {newsArray.map((newsItem) => (
                    <NewsCard newsItem={newsItem} key={newsItem.title} />
                ))}


            </div>
        </Container>
    );
};

export default NewsContent;
