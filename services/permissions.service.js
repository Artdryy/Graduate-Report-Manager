import PermissionsRepository from '../repositories/permissions.repository.js';
import { catchError } from '../helpers/catch.error.js';

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class PermissionsService {
  async createPermission(data) {
    const [result, error] = await catchError(PermissionsRepository.createPermission(data));
    if (error) throw error;
    return result;
  }

  async getPermissions() {
    const [result, error] = await catchError(PermissionsRepository.getPermissions());
    if (error) throw error;
    return result;
  }

  async updatePermission(data) {
    const [result, error] = await catchError(PermissionsRepository.updatePermission(data));
    if (error) throw error;
    return result;
  }

  async deletePermission(data) {
    const [result, error] = await catchError(PermissionsRepository.deletePermission(data));
    if (error) throw error;
    return result;
  }

  async assignPermissionsToRole(data) {
    const permissionsJson = JSON.stringify(data.permissions);
    const [result, error] = await catchError(
      PermissionsRepository.assignPermissionsToRole({
        role_id: data.role_id,
        permissionsJson,
      })
    );
    if (error) throw error;
    return result;
  }

  async getPermissionsForRole(data) {
    const [result, error] = await catchError(
      PermissionsRepository.getPermissionsForRole(data)
    );
    if (error) throw error;
    return result;
  }
}

export default new PermissionsService();