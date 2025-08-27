class DebitCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de ${amount}`);
  }
}

class PaymentMethodFactory {
  static types = {
    "debit card": DebitCard,
    "credit card": CreditCard,
  };

  static createPaymentMethod(type) {
    const PaymentClass = this.types[type];
    if (!PaymentClass) {
      throw new Error("Método de pagamento não suportado");
    }
    return new PaymentClass();
  }
}

function main() {
  const type = "credit card"; 
  try {
    const paymentMethod = PaymentMethodFactory.createPaymentMethod(type);
    paymentMethod.pay(type, "R$ 500,00");
  } catch (err) {
    console.error("Erro:", err.message);
  }
}

main();
