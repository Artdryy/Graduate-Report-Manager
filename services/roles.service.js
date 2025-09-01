import RolesRepository from '../repositories/roles.repository.js';

class RolesService {
  async createRole({ role_name, role_description }) {
    const { id } = await RolesRepository.createRole(role_name, role_description);
    if (id) {
      return { statusCode: 201, status: true, message: 'Role created successfully', data: { id } };
    }
    return { statusCode: 400, status: false, message: 'Error creating role', data: [] };
  }
}

export default new RolesService();