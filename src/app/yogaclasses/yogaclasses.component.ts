import { Component, OnInit } from '@angular/core';
import { IPayPalConfig } from 'ngx-paypal';
import {ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-yogaclasses',
  templateUrl: './yogaclasses.component.html',
  styleUrls: ['./yogaclasses.component.css']
})
export class YogaclassesComponent implements OnInit {

  selectedService:string = '';
  yes:boolean = false;
  public payPalConfig ? : IPayPalConfig;

  constructor() { }

  ngOnInit() {

   this.initConfig();
  }

  onChange(selectedService) {
    this.selectedService = selectedService;
    console.log(selectedService);

  }

  private initConfig(): void {
    this.payPalConfig = {
        clientId: 'sb',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);

        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
}

}
