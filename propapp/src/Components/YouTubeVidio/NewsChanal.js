
import React, {useState,useEffect} from 'react';
import "../Css/Style.css";

const NewsChanal = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
   fetch(
			"https://newsapi.org/v2/everything?q=apple&from=last month&sortBy=recent first&apiKey=88c85367c2e5465e8131b052aceca09a&pageSize=6"
		)
			.then((response) => response.json())
			.then((data) => {
				// const fetchedNewsArticleData = data.articles;
				setNews(data.articles);
			});
  }, []);
  // console.log();
    return (
      <div>
        <div className="allnews-wrapper">
          <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-12">
                <div className="title-wrapper bold news-title-wrapper">
                  Latest News 
                  <br />
                </div>
              </div>
              {news.map((singleNews, i) => {
                let newsId = singleNews.source.name;
                let newsLink = singleNews.url;
                // console.log(singleNews)
                let NewsWrapper = (
									<div key={i} className="col-sm-12 col-md-4">
										<div className="singleNewsWrapper">
											<div className="newsTitle">
												<a href={newsLink} target="_blank">
													{singleNews.title}
											
												</a>
                      </div>
                      <div className="newsThumbnail">
                                            <a href={newsLink} target="_blank">
                          <img style ={{width:"400px" }}src={singleNews.urlToImage }alt={newsId}/>
                        </a>
                      </div>
                      
											<div className="newsInfoWrapper">
												<div className="newsDesc">{singleNews.description}</div>
												<div className="newsDesc">
													<a href={newsLink} target="_blank">
														Read more
													</a>
										
												</div>
											</div>
										</div>
									</div>
								);
                return NewsWrapper;
              })}

              {/* {videoWrapper} */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsChanal;
























