/*eslint-disable*/

import axios from "axios";
import { useEffect, useState } from "react";
import NewsContent from "./News/NewsPage/NewsContent.js";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import CloudHeader from "components/Headers/CloudHeader.js";

import "../../assets/css/style.css";


const Tables = () => {

  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();


  const newsApi = async () => {
    try {


      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=1269ddcc25814aec9cb99df554126760&category=technology&pageSize=10`
      );
      // console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults]);


  return (
    <>
      <CloudHeader />
      {/* Page content */}
      <Container className="mt--7" fluid id="New_box" >
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">최신 기술 뉴스</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>

                <div className="App" id="#home">
                  {newsResults && (
                    <NewsContent
                      newsArray={newsArray}
                      newsResults={newsResults}
                    />
                  )}
                </div>

              </Table>

            </Card>
          </div>
        </Row>
        {/* Dark table */}

      </Container>
    </>
  );
};

export default Tables;
