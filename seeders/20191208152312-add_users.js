'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                login: 'admin',
                password: "jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=", //admin
                createdAt:"1999.10.31",
                updatedAt:"1999.10.31"
    },
            {
                login: 'root',
                password: "SBNJTRN+FjG7owHVrKtue7eqdM4RhdRWVl71HXN2d7I=", //root
                createdAt:"1999.10.31",
                updatedAt:"1999.10.31"
    }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
