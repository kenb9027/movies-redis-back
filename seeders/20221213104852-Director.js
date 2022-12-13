"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
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
            "Directors",
            [
                {
                    name: "John Doe",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 1,
                },
                {
                    name: "Jane Doe",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 3,
                },
                {
                    name: "Alex Turner",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 2,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
