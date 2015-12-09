export default function() {
  this.namespace = 'api';

  this.get('/lists');
  this.get('/items/:id');
}
