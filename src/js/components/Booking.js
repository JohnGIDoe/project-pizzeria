import { select, templates } from '../settings.js';
import {utils} from '../utils.js';
import { AmountWidget } from './AmountWidget.js';

export class Booking{
  constructor(bookingWrapper){
    const thisBooking = this;
    thisBooking.render(bookingWrapper);
    thisBooking.initWidgets();
  }

  render(wrapper){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = wrapper;

    thisBooking.dom.wrapper.appendChild(utils.createDOMFromHTML(generatedHTML));

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
  }
}
