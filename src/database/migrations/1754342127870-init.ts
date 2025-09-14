import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1754342127870 implements MigrationInterface {
    name = 'Init1754342127870'

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_0dce9bc93c2d2c399982d04bef1\``,
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\` ON \`product\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`slug\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`slug\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD UNIQUE INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\` (\`slug\`)`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`price\` \`price\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`image\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`image\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_cb73208f151aa71cdd78f662d7\` ON \`category\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`slug\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`slug\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD UNIQUE INDEX \`IDX_cb73208f151aa71cdd78f662d7\` (\`slug\`)`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_0dce9bc93c2d2c399982d04bef1\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_0dce9bc93c2d2c399982d04bef1\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP INDEX \`IDX_cb73208f151aa71cdd78f662d7\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`slug\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`slug\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_cb73208f151aa71cdd78f662d7\` ON \`category\` (\`slug\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`image\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`image\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`price\` \`price\` decimal NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`slug\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`slug\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_8cfaf4a1e80806d58e3dbe6922\` ON \`product\` (\`slug\`)`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_0dce9bc93c2d2c399982d04bef1\` FOREIGN KEY (\`category_id\`) REFERENCES \`isostock\`.\`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
