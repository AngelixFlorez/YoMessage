export function isImageKitUrl(url) {
  return typeof url === "string" && url.includes("ik.imagekit.io");
}

export function withTransform(url, transform) {
  if (!url || !transform) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tr=${transform}`;
}
