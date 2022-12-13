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
      "AgeClasses",
      [
          {
              age_minimum: 16,
              createdAt: new Date(),
              updatedAt: new Date(),
              MovieId: 1,
          },
          {
              age_minimum: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
              MovieId: 2,
          },
          {
              age_minimum: 18,
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
