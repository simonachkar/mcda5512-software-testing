const csvdb = require("csv-database");

/**
 * Data Description:
 * 
 * first_name – User's First Name
 * last_name – User's Last Name
 * email – User's Email
 * password – User's Password (Encrypted)
 * g1a – MCDA5550 Quiz 1
 * g1b – MCDA5550 Quiz 2
 * g1c – MCDA5550 Quiz 3 
 * g1d – MCDA5550 Final Project 
 * g2a – MCDA5560 Assignments
 * g2b – MCDA5560 Project 1
 * g2c – MCDA5560 Project 2
 * g3a – MCDA5570 Project 1
 * g3b – MCDA5570 Project 2
 * g4a – MCDA5580 Project 1
 * g4b – MCDA5580 Project 2
 * 
 */
async function initdb() {
    return await csvdb("users.csv", ["first_name", "last_name", "email", "password", "g1a", "g1b", "g1c", "g1d", "g2a", "g2b", "g2c", "g3a", "g3b", "g4a", "g4b"]);
}

module.exports = initdb;