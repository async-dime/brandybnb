import cloudinary from 'cloudinary';
import { encode } from 'base64-arraybuffer';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

  // get image by cloudinary tag
export const getCloudinaryPic = async (tag) => {
  const { resources } = await cloudinary.v2.api.resources_by_tag(tag);

  const urls = await resources.map((resource) => {
    const smallUrl = getThumbnail(resource.public_id);
    return {
      largeUrl: resource.url,
      smallUrl
    };
  });

  const promises = urls.map((url) => fetchBase64(url.smallUrl));
  const resolvedPromises = await Promise.all(promises);

  const response = urls.map((url, idx) => ({
    large: url.largeUrl,
    small: resolvedPromises[idx]
  }));

  return response;
};

const fetchBase64 = async (url) => {
  const buffer = await (await fetch(url)).arrayBuffer();
  const base64 = await encode(buffer);
  return base64;
};

const getThumbnail = (publicId) => {
  const url = cloudinary.v2.url(publicId, {
    gravity: 'face',
    width: 200,
    crop: 'thumb'
  });

  return url;
};
