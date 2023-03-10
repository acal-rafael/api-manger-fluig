
const homecontroller = () => {

  const getHome = (req, res) => {
    console.log("Access route Home")
    
    return res.status(200).json({ status: 'success', result: 'Hello, welcome at this page HOme' });
  }

  return {
    getHome
  }
}

export default homecontroller;