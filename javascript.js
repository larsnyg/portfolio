console.log("Hello!")

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pdggcpu3a4hl",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "pdggcpu3a4hl"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("7fZqq2gqWPDyQI0OEcgNgT")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));