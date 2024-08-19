import React from "react";

const NewsItem = (props) => {

 

  let { title, description, imageUrl, newsUrl, date, author, source, mode } = props;
  return (
    <div className="my-3 " >
      {/* <span className="badge text-bg-danger">Danger</span> */}
      <div className={`card mx-2 bg-${mode}`} style={{ border: `1 px solid ${mode === 'dark' ? '#343a40' : '#f8f9fa'}` }} >

        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="  badge rounded-pill bg-danger" >
            {source}
   
          </span>
        </div>
        <img
          src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className={`card-body ${mode}-mode`} >
          <h5 className={`card-title text-${mode === 'light' ? 'dark' : 'light'}`}>{title}</h5>
    
          <p className={`card-text text-${mode === 'light' ? 'dark' : 'light'}`}>{description}</p>
          <p className=" card-text  " > <small className="text-muted "> By {author ? author : 'unkown'} on {new Date(date).toGMTString()}</small> </p>
          <a rel="norefferrer" href={newsUrl} className={`btn btn-sm btn-${mode === 'dark' ? 'primary' : 'dark'}`}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );

  
}


export default NewsItem;
