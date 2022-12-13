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
         *
         *
         */

        await queryInterface.bulkInsert(
            "Movies",
            [
                {
                    title: "Le reveil de Mamie Joe",
                    duration: 122,
                    resume: "Lorem ipsum tralala",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "La marche des pingouins",
                    duration: 200,
                    resume: "Lorem ipsum tralala",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Le reveil de Mamie Joe : La revanche du fils",
                    duration: 135,
                    resume: "Lorem ipsum tralala",
                    createdAt: new Date(),
                    updatedAt: new Date(),
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
