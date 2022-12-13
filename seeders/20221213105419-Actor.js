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
            "Actors",
            [
                {
                    name: "Francky Malakoff",
                    age: 20,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 1,
                },
                {
                    name: "Grace Turner",
                    age: 33,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 1,
                },
                {
                    name: "Pingu",
                    age: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 2,
                },
                {
                    name: "Francky Malakoff",
                    age: 22,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 3,
                },
                {
                    name: "Grace Turner",
                    age: 35,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 3,
                },
                {
                    name: "Alex Turner",
                    age: 54,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    MovieId: 3,
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
