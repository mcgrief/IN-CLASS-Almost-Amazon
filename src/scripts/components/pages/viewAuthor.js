import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';
// import { viewAuthorDetails } from '../../../api/mergedData';

const viewAuthor = (obj) => {
  clearDom();
  const domString = `
  <div class="text-white ms-5 details">
  <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
  Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
  <hr>
  <div id="authorsCollection"><div>`;
  const bookArray = Object.values(obj.bookObject);
  let bookString = '';
  bookArray.forEach((item) => {
    bookString += `<div class="text-white ms-5 details">
    <h5>${item.title} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
    Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
    <p>${item.description || ''}</p>
    <hr>
    <p>${item.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>
      $${item.price}` : `$${item.price}`}</p>
     </div>
   </div>
    `;
  });
  renderToDOM('#view', domString);
  renderToDOM('#authorsCollection', bookString);
};

export default viewAuthor;
