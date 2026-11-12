// Lista de invitados de la boda de Óscar & Sandra.
//   titulo: opcional, "Sr." o "Sra."; se muestra antes del nombre, pero el mensaje de WhatsApp usa solo el nombre.
//   nombre: como aparece en la tarjeta (se busca sin tildes ni mayúsculas).
//   cupos:  número de personas para las que es la invitación (incluye a quien la recibe).
//   con:    opcional, quiénes lo acompañan; se muestra entre paréntesis en el mensaje.
// Para agregar o corregir a alguien basta con editar esta lista; no hay que tocar index.html.
window.INVITADOS = [
  // Lista de WhatsApp (con cupos indicados por los novios)
  { nombre: "Orlando Bonilla Orjuela", cupos: 3, con: "su señora e hijo" },
  { nombre: "José Hernán Bonilla Campos", cupos: 2, con: "su señora" },
  { nombre: "Ever Bonilla López", cupos: 1 },
  { nombre: "Hernán Bonilla López", cupos: 2, con: "su señora" },
  { nombre: "Edilberto Orjuela", cupos: 2, con: "su señora" },
  { nombre: "Jairo Bonilla", cupos: 2, con: "su señora" },
  { nombre: "Juan Manuel Orjuela", cupos: 2, con: "su señora" },
  { nombre: "Alexander Arevalo", cupos: 2, con: "su señora" },
  { nombre: "Angélica García Varón", cupos: 1 },
  { nombre: "Sandra Magnolia Rivera", cupos: 1 },
  { nombre: "Rubén Dario Vergara", cupos: 1 },
  { nombre: "Orlando Bonilla Campos", cupos: 2, con: "su señora" },
  { nombre: "Norma Gineth Bonilla Orjuela", cupos: 2, con: "su hija" },
  { nombre: "Edwin Alberto Guzmán", cupos: 1 },
  { nombre: "Mileidy Bonilla Orjuela", cupos: 2 },
  { nombre: "Alberto Jiménez", cupos: 1 },
  { nombre: "Diego Fernando Ducuara", cupos: 1 },
  { nombre: "Daniel Mauricio Ducuara", cupos: 1 },

  // Lista manuscrita. PENDIENTE: no traía cantidades; se asumió cupos: 1 para todos. Confirmar con los novios.
  { nombre: "Anatol Díaz", cupos: 1 },
  { nombre: "Gloria Pamplona", cupos: 1 },
  { nombre: "Alexander Díaz", cupos: 1 },
  { nombre: "Juan Esteban Quintero", cupos: 1 },
  { nombre: "Carolina Peña", cupos: 1 },
  { nombre: "Ramón Giraldo", cupos: 1 },
  { nombre: "Elizabet Hincapié", cupos: 1 },
  { nombre: "Carolina Cruz", cupos: 1 },
  { nombre: "Santiago Cardona", cupos: 1 },
  { nombre: "Isabel Cristina Grisales", cupos: 1 },
  { nombre: "Margot Ramírez", cupos: 1 },
  { nombre: "Claver Londoño", cupos: 1 },
  { nombre: "Gloria Aguirre", cupos: 1 },
  { nombre: "Maritza Díaz", cupos: 1 },
  { nombre: "Andrés Tapias", cupos: 1 },
  { nombre: "Cristian Tapias", cupos: 1 },
  { nombre: "Miguel Ángel Tapias", cupos: 1 },
  { nombre: "Diana Rincón", cupos: 1 },

  // Agregados después por los novios
  { nombre: "Carolina Díaz", cupos: 2, con: "su hijo" },
  { nombre: "Fabiana Andrea Cárdenas", cupos: 1 },
  { nombre: "Abelardo Campos", cupos: 2, con: "su señora" },
  { nombre: "Herley Campos", cupos: 4, con: "su señora e hijos" },

  // Tercera tanda de WhatsApp (con título; solo nombre = 1 cupo)
  { titulo: "Sra.", nombre: "Aura Rosa Carvajal", cupos: 1 },
  { titulo: "Sra.", nombre: "Mileidy Monroy", cupos: 1 },
  { titulo: "Sr.", nombre: "Edilberto Rayo", cupos: 2, con: "su señora" },
  { titulo: "Sra.", nombre: "Bertha Cecilia Rada", cupos: 1 },
  { titulo: "Sra.", nombre: "Jennifer Orjuela Reina", cupos: 2 },
  { titulo: "Sr.", nombre: "Wilmer Muñoz Rojas", cupos: 1 },
  { titulo: "Sra.", nombre: "Marvi Alexandra Gutiérrez", cupos: 1 },
  { titulo: "Sra.", nombre: "Yeny Astrid Leiva Ramírez", cupos: 1 },
  { titulo: "Sr.", nombre: "Yeferson Aldana", cupos: 1 },
  { titulo: "Sr.", nombre: "Álvaro Moreno", cupos: 1 },

  // Cuarta tanda de WhatsApp
  { titulo: "Sra.", nombre: "Jimena Cardona", cupos: 2 },
  { titulo: "Sra.", nombre: "Mónica Quintero", cupos: 2, con: "su esposo" },
  { titulo: "Sra.", nombre: "Paula Andrea Granada", cupos: 1 },
  { titulo: "Sr.", nombre: "Sergio Badel", cupos: 1 },
  { titulo: "Sra.", nombre: "Maira Muñoz", cupos: 1 },
  { titulo: "Sr.", nombre: "Carlos Gaviria", cupos: 2, con: "su señora" },
  { titulo: "Sra.", nombre: "Karen Morales", cupos: 2 },
  { titulo: "Sr.", nombre: "Nelson Ramírez", cupos: 2, con: "su señora" },
  { titulo: "Sra.", nombre: "Elizabeth Orjuela López", cupos: 1 },
  { titulo: "Sr.", nombre: "Juan Carlos Gaviria Orjuela", cupos: 1 },
  { titulo: "Sr.", nombre: "Jorge Gaviria Orjuela", cupos: 1 },
  { titulo: "Sra.", nombre: "Lorena Villa Orjuela", cupos: 2 },
  { titulo: "Sr.", nombre: "Fernando Labrador", cupos: 2, con: "su señora" },
  { titulo: "Sr.", nombre: "Manuel Orjuela", cupos: 2, con: "su señora" },
  { titulo: "Sra.", nombre: "Argelia Orjuela", cupos: 1 },
  { titulo: "Sr.", nombre: "Nicolás Rojas", cupos: 1 },
  { titulo: "Sr.", nombre: "Luis Alfonso Vivas Rico", cupos: 1 }
];
