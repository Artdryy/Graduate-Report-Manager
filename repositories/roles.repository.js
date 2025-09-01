import { executeCall } from '../config/database.js'; 

class RolesRepository {
  async createRole({ role_name, role_description }) {
    try {
      const query = `
        CALL residencias.create_role(:role_name, :role_description);`;
      const rows = await executeCall(query, {
        roleName: role_name,       
        roleDescription: role_description 
      });
      return rows[0]?.role_id;  
    } catch (error) {
      console.error('Error creating role:', error);
      throw error;  
    }
  }
}

export default new RolesRepository();


// import { executeCall } from '../config/database.js';  

// class RolesRepository {
//   async createRole(role_name, role_description) {
//     try {
//       const sql = 'CALL residencias.create_role(:role_name, :role_description);';
//       const res = await executeCall(sql, { role_name, role_description });

//       const rows = Array.isArray(res) && Array.isArray(res[0]) ? res[0] : res;
//       const id = Array.isArray(rows) ? rows[0]?.id : rows?.id;

//       return { id };  
//     } catch (error) {
//       console.error('Error creating role:', error);
//       throw error;
//     }
//   }

// }

// export default new RolesRepository();

// // repositories/roles.repository.js
// import { executeCall } from '../config/database.js';  

// class RolesRepository {
//   mapRowsToId(rows) {
//     if (Array.isArray(rows) && Array.isArray(rows[0])) {
//       return rows[0][0]?.id || null; 
//     }
//     return rows?.id || null;
//   }

//   async createRole(role_name, role_description) {
//     try {
//       const sql = 'CALL residencias.create_role(:role_name, :role_description);';
//             const res = await executeCall(sql, { role_name, role_description });
//             const id = this.mapRowsToId(res);
//             return { id };  
//     } catch (error) {
//       console.error('Error creating role:', error);
//       throw error; 
//     }
//   }
// }

// export default new RolesRepository();
