document.addEventListener("DOMContentLoaded", function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('.customer-text');
  
    const btn = document.querySelectorAll('.btn');
    let index = 0;
    let customers = [];
  
    function Customer(img, name, text) {
      this.img = img;
      this.name = name;
      this.text = text;
    }
  
    function createCustomer(img, name, text) {
      let Img = `./img${img}.jpg`;
      let customer = new Customer(Img, name, text);
      customers.push(customer);
    }
  
    createCustomer(1, 'Doggo Singh', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptate eos iure error quisquam illum perspiciatis dicta quis. Expedita dolore velit deserunt officia in fugiat magnam iure, a illum repellendus.');
  
    createCustomer(2, 'Hamster Hiralal', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptate eos iure error quisquam illum perspiciatis dicta quis. Expedita dolore velit deserunt officia in fugiat magnam iure, a illum repellendus.a illum repellendus.a illum repellendus.');
  
    createCustomer(3, 'Billa Bigdel', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptate eos iure error quisquam illum perspiciatis dicta quis. Expedita dolore velit deserunt officia in fugiat magnam iure, a illum repellendus.a illum repellendus.');
  
    btn.forEach(function (button) {
        button.addEventListener('click', function(e) {
          if (e.target.parentElement.classList.contains('prevBtn')) {
            if (index === 0) {
              index = customers.length;
            }
            index--;
            customerImage.src = customers[index].img;
            customerName.textContent = customers[index].name;
            customerText.textContent = customers[index].text;
          }
          if (e.target.parentElement.classList.contains('nextBtn')) {
            index++;
            if (index === customers.length) {
              index = 0;
            }
            customerImage.src = customers[index].img;
            customerName.textContent = customers[index].name;
            customerText.textContent = customers[index].text;
          }
        })
      });
    });
  