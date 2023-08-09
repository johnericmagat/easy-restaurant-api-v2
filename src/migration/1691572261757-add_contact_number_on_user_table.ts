import { MigrationInterface, QueryRunner } from "typeorm"

export class AddContactNumberOnUserTable1691572261757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE dbo.[user] ADD [contact_number] nvarchar(100) null`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
