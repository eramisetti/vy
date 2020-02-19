import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./yogaclasses.component.css']
})
export class PaymeComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product = {
    price: 0,
    description: 'Yoga classes'
  };

  paidFor = false;


  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
        
          return actions.order.create({
              style: {
                shape: 'pill',
                color: 'gold',
                layout: 'horizontal',
                label: 'paypal',
              },
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
