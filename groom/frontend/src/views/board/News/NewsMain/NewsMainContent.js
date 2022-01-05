import { Container } from "@material-ui/core";
import React from "react";
import NewsMainCard from "./NewMainCard.js";
import "./NewMainCard.css";

const NewsMainContent = ({ newsMainArray }) => {
    return (
        <Container maxWidth="md">
            <div className="content">



                {newsMainArray.map((newsItem) => (
                    <NewsMainCard newsItem={newsItem} key={newsItem.title} />
                ))}


            </div>
        </Container>
    );
};

export default NewsMainContent;
