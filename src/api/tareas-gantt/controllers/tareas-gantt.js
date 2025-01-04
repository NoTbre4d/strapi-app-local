'use strict';

/**
 * tareas-gantt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tareas-gantt.tareas-gantt', ({ strapi }) => ({
  async create(ctx) {
    // Llama al método predeterminado 'create'
    const response = await super.create(ctx);

    // Obtiene la tarea recién creada con las relaciones completas
    const taskWithRelations = await strapi.entityService.findOne(
      'api::tareas-gantt.tareas-gantt',
      response.data.id,
      { populate: ['parent'] } // Asegúrate de que 'parent' sea el nombre correcto de la relación
    );

    // Devuelve la tarea con relaciones completas
    return { data: taskWithRelations };
  },
}));
