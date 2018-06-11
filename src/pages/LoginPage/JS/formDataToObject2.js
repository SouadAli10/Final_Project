export default formData => {
  var data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
};
