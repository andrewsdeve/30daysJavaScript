function findFamousCats(cats) {
    let maxFollowers = 0;
    let famousCats = [];
  
    cats.forEach(cat => {
  
      let followers = cat.followers.reduce((a, b) => a + b);
  
      if (maxFollowers < followers) {
        famousCats = [cat.name];
        maxFollowers = followers;
      }
      else if (maxFollowers === followers) {
        famousCats.push(cat.name);
      }
    });
  
    return famousCats;
  
  }

  function findFamousCats(cats) {
    // Tu código aquí 👈
    let gatosFamosos = [];
    let maximaCantidadSeguidores = 0;
  
    for (let cat of cats) {
      let seguidores = cat.followers.reduce(function (acumulador, seguidores) {
        return acumulador + seguidores;
      });
  
      if (seguidores > maximaCantidadSeguidores) {
        maximaCantidadSeguidores = seguidores;
        gatosFamosos = [];
        gatosFamosos.push(cat.name);
      } else if (seguidores === maximaCantidadSeguidores) {
        gatosFamosos.push(cat.name);
      }
    }
  
    return gatosFamosos;
  }