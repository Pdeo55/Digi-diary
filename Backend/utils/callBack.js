const callBack = (err, response) => {
  if (!err) {
    res.status(200).json({ status: "success", data: response });
  } else {
    res.status(200).json({ status: "failed", message: err?.message });
  }
}; 


module.exports = callBack;