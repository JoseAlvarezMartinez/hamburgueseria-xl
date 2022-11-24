export function formatearDinero(moneda) {
    return moneda.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
