const UploadFile = async (file) => {
  console.log(file)
  const formData = new FormData();

  formData.append("file", file);

  const fileUrl = fetch("https://lis.4dev.kz/upload", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
  return fileUrl;
};

export default UploadFile;
