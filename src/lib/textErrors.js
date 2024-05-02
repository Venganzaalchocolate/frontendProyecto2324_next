export const textErrors=(tipo)=>{
    switch(tipo) {
        case "name":
          return "El nombre no es correcto, no debe contener números ni carácteres especiales";
        case "email":
          return "El email no está bien escrito ej: email@gmail.com";
        case "password":
            return "La contraseña debe tener 8 carácteres, una minúscula, una mayúscula, un número y un carácter especial";
        default:
          return null;
      }
}

