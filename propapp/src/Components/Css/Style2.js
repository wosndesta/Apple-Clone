import React, { useState, useEffect } from "react";
import "../Css/Style2";

const AppleNews = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(
			"https://newsapi.org/v2/everything?q=Apple&from=last month&sortBy=recent first&apiKey=7046548a83bb4da4b1270b3fff255844&pageSize=6"
		)
			.then((response) => response.json())
			.then((data) => {
				const fetchedNewsArticles = data.articles;
				setNews(fetchedNewsArticles);
			});
	}, []);
	console.log(news);
	return (
		<div>
			<div className="allnews-wrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12">
							<div className="title-wrapper bold News-title-wrapper">
								&ldquo; Latest News &rdquo;
								<br />
							</div>
						</div>
						{news.map((singleNews, i) => {
							let newsId = singleNews.source.name;
							let newsLink = singleNews.url;
							let NewsWrapper = (
								<div key={i} className="col-sm-12 col-md-4">
									<div className="singleNewsWrapper">
										<div className="NewsTitle">
											<a href={newsLink} target="_blank">
												{singleNews.title}
											</a>
										</div>
										<div className="NewsThumbnail">
											<a href={newsLink} target="_blank">
												<img src={singleNews.urlToImage} alt={newsId} />
											</a>
										</div>
										<div className="NewsInfoWrapper">
											<div className="NewsDesc">{singleNews.description}</div>
											<div className="NewsDesc">
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

						{/* {NewsWrapper} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppleNews;
