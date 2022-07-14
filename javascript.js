console.log("Hello!")

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pdggcpu3a4hl",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "8o_8-gueoYKvenSSjNrXJYd4SiLkJO8yhHEik9734uw"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("7fZqq2gqWPDyQI0OEcgNgT")
  .then(entry => console.log(entry))
  .then(entry => console.log(entry.getEntry.))
  .catch(err => console.log(err));

  var container = document.getElementById('content')

contentfulClient.getEntries({
    content_type: project
  })
  .then(function(entries) {
    container.innerHTML = renderSingleProduct(entries.items)
  })


  function renderSingleProduct(product) {
    var fields = product.fields
    console.log(fields)
    return '<div class="product-in-list">' +
      '<div class="product-image">' +
      renderImage(fields.image[0], fields.slug) +
      '</div>' +
      '<div class="product-details">' +
      renderProductDetails(fields) +
      '</div>' +
      '</div>'
  }