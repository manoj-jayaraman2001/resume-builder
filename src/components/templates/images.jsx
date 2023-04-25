

function Images() {
  const imagePaths = [];
  Object.values(
    import.meta.glob("../../assets/templateImages/*.png", { eager: true })
  ).forEach(({ default: path }) => {
    const url = new URL(path, import.meta.url);
    const data = {
      path: url.pathname,
    };
    imagePaths.push(data);
  });

  return imagePaths
}
export default Images
 