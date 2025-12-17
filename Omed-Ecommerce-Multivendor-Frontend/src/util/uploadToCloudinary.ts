export const uploadToCloudinary = async (pics: any) => {
  const cloud_name = "dvywp4xea";
  const upload_preset = "omed_ecom_multivendor";

  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("omed_ecom_multivendor", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcpesbd81/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileData = await res.json();
    return fileData.url;
  } else {
    console.log("Error: Pics not found");
  }
};
