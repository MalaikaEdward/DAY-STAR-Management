function submitForm() {
    const itemName = document.getElementById('itemName').value;
    const quantity = document.getElementById('quantity').value;
    const unit = document.getElementById('unit').value;
    const itemImage = document.getElementById('itemImage').files[0];

    // Here you can perform further processing such as sending the form data to a server
    
    // For now, let's just log the form data
    console.log('Item Name:', itemName);
    console.log('Quantity:', quantity, unit);
    console.log('Item Image:', itemImage);
  }