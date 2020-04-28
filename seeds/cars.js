exports.seed = async function (knex) {
    await knex("cars").truncate();
  
    await knex("cars").insert([
      { VIN: 1234, make: "Toyota", model: "Hybrid", mileage: "34455" },
      { VIN: 4675, make: "BMW", model: "X5", mileage: "987" },
      { VIN: 2398, make: "Audi", model: "Avante", mileage: "10400" },
      { VIN: 90325, make: "Honda", model: "Civic", mileage: "8472" },
    ]);
  };