'use strict';
const { faker } = require('@faker-js/faker/locale/vi')
// const faker = require('faker');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* {  strapi  }*/) {

  },
  // async bootstrap({ strapi }) {
  //   for (let i = 11; i < 301; i++) {
  //     await strapi.entityService.create('api::product.product', {
  //       data: {
  //         productName: faker.commerce.department() + ' ' + faker.random.word(10),
  //         description: faker.lorem.paragraphs(10),
  //         price: faker.commerce.price(20000, 599999),
  //         detail: faker.lorem.paragraphs(5),
  //       },
  //     });
  //   }
  // },

};


// for(k=12; k<=320;k++) {
//   var s = "INSERT INTO `products_brand_links`( `product_id`, `brand_id`) VALUES ('"+k+"','"+Math.floor(Math.random()*(10-1+1)+1)+"')";
//   console.log(s)
// }