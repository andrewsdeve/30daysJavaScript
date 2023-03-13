function sendEmail(email, subject, body) {
    // De entrada empezamos retornando una promesa
    // La cual nos provee de resolve y reject dependiendo si hay éxito en esta
    return new Promise((resolve, reject) => {
      // Primero validamos que todos los aspectos del email estén disponibles
      if (email && subject && body) {
        // De ser así, creamos un timeout para "enviar" el email
        // Recuerden hacer uso de window para que las pruebas pasen
        window.setTimeout(() => {
          // Dentro del timeout definimos un objeto con
          // todos los datos recibidos
          const emailInfo = {
            email,
            subject,
            body,
          };
  
          // Y lo pasamos a la resolución exitosa de la promesa
          // Para que esto sea "enviado" después de 2 segundos
          resolve(emailInfo);
        }, 2000);
      } else {
        // En caso de faltar algún dato, lanzamos un error indicándolo
        reject(new Error("Hacen falta datos para poder enviar el correo"));
      }
    });
  }
