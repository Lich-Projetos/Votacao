/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Db1791606484435 {
    name = 'Db1791606484435'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Lula\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_eleitor\` varchar(70) NOT NULL, \`date_born\` datetime NOT NULL, \`nacionality\` varchar(255) NOT NULL, \`deleteAt\` datetime NULL, \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Bolsonaro\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_eleitor\` varchar(70) NOT NULL, \`date_born\` datetime NOT NULL, \`nacionality\` varchar(255) NOT NULL, \`deleteAt\` datetime NULL, \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Brancos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_eleitor\` varchar(70) NOT NULL, \`date_born\` datetime NOT NULL, \`nacionality\` varchar(255) NOT NULL, \`deleteAt\` datetime NULL, \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Nuloa\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name_eleitor\` varchar(70) NOT NULL, \`date_born\` datetime NOT NULL, \`nacionality\` varchar(255) NOT NULL, \`deleteAt\` datetime NULL, \`createAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`Nuloa\``);
        await queryRunner.query(`DROP TABLE \`Brancos\``);
        await queryRunner.query(`DROP TABLE \`Bolsonaro\``);
        await queryRunner.query(`DROP TABLE \`Lula\``);
    }
}
