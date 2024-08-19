import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
 

  // document.title = "MyNewsMonkey - "+props.category.toUpperCase().charAt(0)+props.category.substring(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // const [pageSize, setpageSize] = useState(





    const  updateNews = async () => { 
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    props.setProgress(30);
   let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      // setPageSize(parsedData.pageSize);
     
    
    props.setProgress(85);
    
    
      props.setProgress(100);
    
    
  }

  const fetchMoreData = async () => {
    this.setState({
      page:this.state.page+1
    })
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    // this.setState({
    //   loading:true
    // })
   let data = await fetch(url);
   let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    


  };

  
   const handleNextClick = async () => { 
    console.log("Next")

    
    
    
     setPage(page + 1);
     this.updateNews();

     
     
    }
  const handlePrevClick = async() => {
    console.log("Prev")

    
    setPage(page - 1);
    this.updateNews();


  }

    

 

  useEffect(() => {
    
      
      updateNews();
    
  }, []);
   
 
    let { mode } = props;
    return (
      <div className={`bg-${mode}`} >

        {/* <h1 className={`text-center  my-4 text-${mode ==='dark'?'light':'dark'} bg-${mode}`} >MyNewsMonkey - Top   { props.category.toUpperCase().charAt(0)+props.category.substring(1)} Headlines</h1> */}
        <h1 className={`text-center  my-4 text-${mode=='dark'?'light':'dark'}`}>MyNewsMonkey - Top {props.category.toUpperCase().charAt(0)+props.category.slice(1) } Headlines</h1>


        {/* {this.state.loading && <Spinner/>} */}
        
       

       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <=this.state.totalResults}
          loader={<Spinner />}
          style={{ overflow: 'hidden' }}
        >
          

            
        
          <div className="container ">
            
        <div className="row  ">
          { this.state.articles.map((element,index) => {
            
            return <div className="col-md-4 " key={index}>
              <NewsItem title={element.title ? element.title : ""} mode={ props.mode} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={ element.author} source={element.source.name} />
              
          </div>
            
          })}
                
          </div>
          </div>
                
                
        
          
          </InfiniteScroll>
          
        
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={ this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous </button>
          <button type="button"disabled={this.state.page+1>   Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark"  onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
           */}
            
            
            
           
      </div>
    )
  
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'general'
}
export default News
