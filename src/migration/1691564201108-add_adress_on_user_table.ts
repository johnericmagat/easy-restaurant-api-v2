import { MigrationInterface, QueryRunner } from "typeorm"

export class AddAdressOnUserTable1691564201108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dbo.[user] ADD [address] nvarchar(255)`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
