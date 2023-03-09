
export const useCors = (req, res, next) => {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Headers", "origin, X-Request");
}