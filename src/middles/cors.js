// import cors from 'cors';
// app.use(cors)

export const setCors = () => {
  
  const getCors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Orgin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Request, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next()
  }
  
  const postCors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

  };


  return {
    getCors,
    postCors
  }
}