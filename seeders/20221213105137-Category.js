'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Categories",
      [
          {
              name: "Comédie",
              createdAt: new Date(),
              updatedAt: new Date(),
              MovieId: 1,
          },
          {
              name: "Documentaire",
              createdAt: new Date(),
              updatedAt: new Date(),
              MovieId: 2,
          },
          {
              name: "Comédie",
              createdAt: new Date(),
              updatedAt: new Date(),
              MovieId: 3,
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
