import bcrypt from 'bcrypt';

async function hashMyPassword() {
  const plainPassword = 'testpassword123'; 
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  console.log('Tu contraseña en texto plano es:', plainPassword);
  console.log('Tu contraseña hasheada es:',hashedPassword);
}

hashMyPassword();