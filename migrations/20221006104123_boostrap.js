
const {
    masterStudents,
    masterTeachers,
    transactionMappings
 } = require('../src/configs/general.config')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
        .createTable(masterTeachers, function(table) {
            table.increments('id').primary();
            table.string('email', 255).notNullable().unique();
            table.timestamp('created_at').defaultTo(knex.fn.now())
        })
        .createTable(masterStudents, function(table) {
            table.increments('id').primary();
            table.string('email', 320).notNullable().unique();
            table.boolean('suspend').notNullable().defaultTo(false);
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable(transactionMappings, function(table) {
            table.increments('id').primary();
            table.integer('teacher_id').unsigned().nullable();
            table.integer('student_id').unsigned().nullable();
            // add foreign keys:
            table.foreign('teacher_id').references('Mst_Teacher.id')
            table.foreign('student_id').references('Mst_Student.id')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .table(transactionMappings, function(table) {
            table.dropForeign('teacher_id')
        })
        .table(transactionMappings, function(table) {
            table.dropForeign('student_id')
        })
        .dropTable(masterTeachers)
        .dropTable(masterStudents)
        .dropTable(transactionMappings)
};