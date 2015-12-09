export default function() {
  this.namespace = 'api';

  this.get('/lists');
  this.get('/lists/:id');
  this.put('/lists/:id');

  this.get('/items/:id');
  this.put('/items/:id');
}
